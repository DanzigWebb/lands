window.dataLayer = window.dataLayer || [];

var selectors = {
  shippingForm: '#shipping',
  firstName: 'input[name="firstName"]',
  lastName: 'input[name="lastName"]',
  phone: 'input[name="phone"]',
  email: 'input[name="email"]',
  address: 'input[name="address"]',
  country: '#id_country',
  state: '#id_state',
  city: 'input[name="city"]',
  zipCode: 'input[name="zipCode"]',
  loader: '.popup-loading-wrapper',
  checkoutForm: '#checkout',
  billingForm: '.billing-form',
  cardNumber: 'input[name="cardNumber"]',
  cardExpMonth: '#cardExpMonth',
  cardExpYear: '#cardExpYear',
  cvv: 'input[name="cvv"]',
  paymentAsShipping: '#payment_as_shipping',
  formError: "#formError"
}

var rules = {
  expMonth: {
    required: true,
  },
  expYear: {
    required: true,
    CCExp: true,
  },
  cardNumber: {
    required: true,
    creditcard: true,
  },
  cvv: {
    required: true,
    digits: true,
    minlength: 3,
    maxlength: 4,
  },
  country: "required",
  state: "required",
  firstName: "required",
  lastName: "required",
  address: "required",
  city: "required",
  zipCode: {
    zipCodeValidator: true
  },
  phone: {
    phoneValidator: true
  },
  email: {
    required: true,
    email: true,
  },
};

var someText = {
  en: {
    CA: "Select Province",
    GB: "Select County",
    IE: "Select County",
    NZ: "Select Region",
    Default: "Select State",
  },
  es: {
    US: "Seleccione estado",
    Default: "Seleccione estado / provincia",
  },
  fr: {
    CA:"Sélectionnez la région",
    Default: "Sélectionnez la région",
  },
  ru: {
    Default: "Область",
  },
  de: {
    US: "Staat wählen",
    Default: "Wählen Bundesland",
  }
};

var errorText = {
  en: "Transaction was declined, please try another credit card",
  fr: "La transaction a été refusée, veuillez essayer une autre carte de crédit",
  es: "La transacción fue rechazada, intente con otra tarjeta de crédito",
  ru: "Транзакция была отклонена, попробуйте другую кредитную карту",
  de: "Die Transaktion wurde abgelehnt. Bitte versuchen Sie es mit einer anderen Kreditkarte"
};

function urlParam(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return results[1] || 0;
  }
}

function getCurrentPath() {
  var arr = window.location.pathname.split("/");
  var page = arr.slice(0, -1);
  var name = page.join("/");

  return name;
}

function getCurrentPageName() {
  var arr = window.location.pathname.split("/");
  var page = arr[arr.length - 1];
  var name = page.split(".");

  return name[0];
}

function getPage(name) {
  var path = getCurrentPath();

  switch (name) {
    case 'confirmation':
      return path + "/confirmation.html";
    case 'order':
      return path + "/order.html";
    case 'declined':
      return path + "/declined.html";
  }
}

window.offer = {
  data: null,
  isStateLoaded: false,
  isLoading: false,
  country: null,
  phones: null,
  usingBilling: false,
  rules: rules,
  someText: someText,
  errorText: errorText,
  pricesProduct: null,
  listeners: [],

  loadState: function () {
    var that = this;
    var url = "/ajax/state";
    var uid = urlParam("uid");

    if (uid) {
      url += "?uid=" + uid;
    }

    that.isLoading = true;

    $.ajaxSetup({ cache: false });
    $.get(url, function (res) {
      that.data = res.data;
      that.isStateLoaded = true;
      that.isLoading = false;
      that.country = window.country || res.data.geo.code || 'US';
      that.phones = res.data.templates.phone;
      that.pricesProduct = res.data.availableProducts;

      var segment = res.data.segment;
      var state = res.data.state;
      var shipping = res.data.profile.shipping;

      window.dataLayer.push({
        segmentAff: segment.aff,
        segmentNet: segment.net,
        segmentSub: segment.sub,
        segmentPage: segment.page,
      });

      var r = urlParam("r");
      var isDirect = r === "direct";
      var page = getCurrentPageName();

      if (isDirect && state === "partial" && shipping.address.length && page === 'index') {
        window.location.pathname = getPage('order');
      } else if (state === "purchase" && page !== 'confirmation') {
        window.location.pathname = getPage('confirmation');
      } else if (state === "declined" && page !== 'declined') {
        window.location.pathname = getPage('declined');
      } else {
        for (var i = 0; i < that.listeners.length; i++) {
          that.listeners[i].cb(res.data);
        }
      }
    });
  },

  getState: function (cb) {
    var that = this;

    if (that.isStateLoaded) {
      cb(that.data);
    } else if (that.isLoading) {
      that.listeners.push({ cb: cb });
    } else {
      that.listeners.push({ cb: cb });
      that.loadState();
    }
  },

  getOrderPage: function () { return getPage('order') },
  getConfirmPage: function () { return getPage('confirmation') },
  getDeclinedPage: function () { return getPage('declined') },
  getCurrentPath: getCurrentPath,
  getUrlParam: urlParam,

  sendOrder: function (formData, cb) {
    var url = "/ajax/order";
    var uid = urlParam("uid");

    if (uid) {
      url = "/ajax/order" + "?uid=" + uid;
    }

    $.post(url, formData, function (res) {
      cb(res);
    });
  },

  getValidationRules: function (name) {
    if (rules[name]) {
      return rules[name];
    }

    return null;
  },

  setUsingBilling: function (flag) {
    this.usingBilling = flag;
  },

  getUsingBilling: function () {
    return this.usingBilling;
  },

  setValidationRule: function (name, rule) {
    this.rules[name] = rule;
  },

  getSelectors: function () {
    return selectors;
  },

  getCountryIsoCode: function () {
    return this.country;
  },

  getSomeText: function (lang, isoCode) {
    return this.someText[lang || "en"][this.someText[lang || "en"].hasOwnProperty(isoCode) ? isoCode : "Default"];
  },

  changeGeo: function (phones) {
    $('.local-phone').html(phones);
  },

  getPrice: function () {
    var pricesProduct = this.pricesProduct,
        product = '.product';
    for (var i = 0;  i < pricesProduct.length; i++) {
      $(product + (i + 1)  + ' .price').html((window.currency || '$') + pricesProduct[i].price.toFixed(2))
      $(product + (i + 1)  + ' .save-price').html((window.currency || '$') + pricesProduct[i].templates.save)
      $(product + (i + 1)  + ' .retail-price').html((window.currency || '$') + pricesProduct[i].templates.retail);

      $(product + (i + 1) + ' .price-int').attr('data-currency', pricesProduct[i].price.toFixed(2));
      $(product + (i + 1) + ' .save-price-int').attr('data-currency', pricesProduct[i].templates.save)
      $(product + (i + 1) + ' .retail-price-int').attr('data-currency', pricesProduct[i].templates.retail)
    }
  },

  getPhone: function () {
    var geoPhone,
        currentPhone,
        phone,
        iso_code = this.country,
        phones = this.phones;

    if (phones.indexOf(iso_code + ': ') >= 0) {

      geoPhone = phones.split(iso_code + ': ');
      currentPhone = geoPhone[1].split(/[A-Z]*/ + ': ')
      currentPhone = currentPhone[0].split(', ');
      phone = currentPhone[0]

    } else if (phones.match(/[a-z]*[A-Z]+[a-z]*/)) {
      geoPhone = phones.split(': ');
      if(geoPhone.length === 1){
        currentPhone = geoPhone[0].split(',');
      } else {
        currentPhone = geoPhone[1].split(',');
      }
      phone = currentPhone[0];
    }
    this.changeGeo( phone || phones);
    $('.phone-line').html(phone || phones);

  },

  getErrorText: function (lang) {
    return this.errorText[lang || "en"];
  }
};