$(document).ready(function () {
  window.offer.getState(function (data) {

    var iso_code = window.country || countryList.hasOwnProperty(window.offer.getCountryIsoCode()) ? window.offer.getCountryIsoCode() : Object.keys(countryList)[0];
    var user = data.profile.user;
    var shipping = data.profile.shipping;
    var selectors = window.offer.getSelectors();
    var someText = window.offer.getSomeText(window.lang, iso_code);

    function maskPhone() {
      if ($(selectors.phone).length > 0 && $(selectors.country).val() === 'US' || $(selectors.country).val() === 'CA') {
        $(selectors.phone)
        .mask('000-000-0000')
        .attr("minlength", "10")
        .attr("maxlength", "12");
      } else {
        $(selectors.phone)
        .mask("00000000000000000000")
        .attr("minlength", "8")
        .attr("maxlength", "20");
      }
    }

    function maskZipCode() {
      if ($(selectors.country).val() === 'US') {
        $(selectors.zipCode)
          .mask('00000')
          .attr("maxlength", "5")
          .attr("minlength", "5");
      } else {
        $(selectors.zipCode)
          .removeAttr("maxlength")
          .removeAttr("minlength")
          .unmask();
      }
    }

    addCountries($(selectors.country), iso_code);
    update_country_state(someText);
    maskPhone();
    maskZipCode();

    $(selectors.country).change(function () {
      update_country_state(someText);
      maskPhone();
      maskZipCode();
    });


    if (user) {
      $(selectors.shippingForm).find(selectors.firstName).val(user.firstName);
      $(selectors.shippingForm).find(selectors.lastName).val(user.lastName);
      $(selectors.shippingForm).find(selectors.phone).val(user.phone);
      $(selectors.shippingForm).find(selectors.email).val(user.email);
    }

    if (shipping) {
      $(selectors.shippingForm).find(selectors.address).val(shipping.address);
      if (shipping.country.length) {
        $(selectors.shippingForm).find(selectors.country).val(shipping.country);
        update_country_state(someText);
        maskPhone();
        maskZipCode();
      }
      $(selectors.shippingForm).find(selectors.state).val(shipping.state);
      $(selectors.shippingForm).find(selectors.city).val(shipping.city);
      $(selectors.shippingForm).find(selectors.zipCode).val(shipping.zipCode);
    }

    $.validator.addMethod(
      "zipCodeValidator",
      function (value) {
        if ($(selectors.country).val() == "US" && value.length === 5 || $(selectors.country).val() !== "US" && value.length > 0) {
          return true;
        } else {
          return false;
        }
      },
      "Invalid Zip Code/Postal Code!"
    );

    $.validator.addMethod(
      "phoneValidator",
      function (value) {
        if ($(selectors.country).val() == "US" && value.length >= 10) {
          return true;
        } else if ($(selectors.country).val() == "CA" && value.length >= 10) {
          return true;
        } else if ($(selectors.country).val() !== "CA" && $(selectors.country).val() !== "US" && value.length >= 8) {
          return true;
        } else {
          return false;
        }
      },
      "Invalid Zip Code/Postal Code!"
    );

    $(selectors.shippingForm).validate({
      submitHandler: function () {
        $(selectors.loader).show();

        var firstName = $(selectors.shippingForm).find(selectors.firstName).val();
        var lastName = $(selectors.shippingForm).find(selectors.lastName).val();
        var phone = $(selectors.shippingForm).find(selectors.phone).val();
        var email = $(selectors.shippingForm).find(selectors.email).val();
        var address = $(selectors.shippingForm).find(selectors.address).val();
        var country = $(selectors.shippingForm).find(selectors.country).val();
        var state = $(selectors.shippingForm).find(selectors.state).val();
        var city = $(selectors.shippingForm).find(selectors.city).val();
        var zipCode = $(selectors.shippingForm).find(selectors.zipCode).val();

        var formData = {
          "user.firstName": firstName,
          "user.lastName": lastName,
          "user.email": email,
          "user.phone": phone.replace(/\D/g, ""),
          "shippingAddress.address": address,
          "shippingAddress.country": country,
          "shippingAddress.city": city,
          "shippingAddress.state": state,
          "shippingAddress.zipCode": zipCode,
          "billingAddress.firstName": firstName,
          "billingAddress.lastName": lastName,
          "billingAddress.address": address,
          "billingAddress.country": country,
          "billingAddress.city": city,
          "billingAddress.state": state,
          "billingAddress.zipCode": zipCode,
          sameBillingAddress: true,
          partial: true,
        };

        window.offer.sendOrder(formData, function (res) {
          if (res.success) {
            window.dataLayer.push({
              event: "SendingShippingForm",
              typeForm: "fullFormDesktop",
            });
            window.location.pathname = window.offer.getOrderPage();
          } else {
            $(selectors.loader).hide();
          }
        });

        return false;
      },
      errorPlacement: function (error, element) {
        if ($(element).hasClass("error")) {
          $(element)
            .closest('div[class^="form-holder"]')
            .addClass("has-error")
            .removeClass("accept");
          $(element).addClass("error");
        } else {
          $(element)
            .closest('div[class^="form-holder"]')
            .removeClass("has-error")
            .addClass("accept");
          $(element).removeClass("error");
        }
      },
      success: function () { },
      rules: {
        firstName: window.offer.getValidationRules("firstName"),
        lastName: window.offer.getValidationRules("lastName"),
        country: window.offer.getValidationRules("country"),
        state: window.offer.getValidationRules("state"),
        zipCode: window.offer.getValidationRules("zipCode"),
        phone: window.offer.getValidationRules("phone"),
        phoneIntl: window.offer.getValidationRules("phoneIntl"),
        email: window.offer.getValidationRules("email"),
      },
    });
  });
});