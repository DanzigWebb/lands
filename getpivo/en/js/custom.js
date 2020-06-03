const customJSElementObj = {
  iconCartBadge: document.querySelector(".icon-cart_badge")
};

function addCartBadge(quantity) {
  var parseQuantity = quantity;
  if (typeof quantity != "number") {
    parseQuantity = parseInt(parseQuantity);
  }

  if (!isNaN(parseQuantity)) {
    cart_item_count = parseInt(cart_item_count) + parseQuantity + "";
    customJSElementObj.iconCartBadge.innerText = cart_item_count;
  }
}

//todo: optimize

document.addEventListener(
  "DOMContentLoaded",
  function() {
    document.querySelector(".preload_header").style.visibility = "hidden";
  },
  false
);

var srcToDataSrc = function(className) {
  if (className.getAttribute("srcset")) {
    className.setAttribute("data-srcset", className.getAttribute("srcset"));
    className.removeAttribute("srcset");
  } else if (className.getAttribute("src")) {
    className.setAttribute("data-src", className.getAttribute("src"));
    className.removeAttribute("src");
  }
};

var looplazyload = function(className, times) {
  var classNames = document.getElementsByClassName(className);
  if (classNames.length != 0) {
    for (var className of classNames) {
      if (className.getAttribute("data-src") == null) {
        srcToDataSrc(className);
      }

      className.classList.add("lazyload");
    }
  } else {
    if (0 < times) {
      setTimeout(function() {
        looplazyload(className, times - 1);
      }, 250);
    }
  }
};

var fixScreen = function() {
  $("body").css("overflow", "hidden");
  $(".site-header").css("z-index", "0");

  //need to be deleted
  if (templateName == "product" || templateName == "collection") {
    if ($(window).width() < 768) {
      $("html").css("font-size", "50%");
    }
  }
};

var releaseScreen = function() {
  $("body").css("overflow", "auto");
  $(".site-header").css("z-index", "");

  //need to be deleted
  if (templateName == "product" || templateName == "collection") {
    if ($(window).width() < 768) {
      $("html").css("font-size", "62.5%");
    }
  }
};

var addProduct = function(quantity, id, productId) {
  $.ajax({
    type: "POST",
    url: "/cart/add.js",
    dataType: "json",
    data: { id: id, quantity: quantity },
    success: function(response) {
      addCartBadge(quantity);
      // Shop_Redesign
      if (
        curLanLo != "en-default" &&
        curLanLo != "en-uk" &&
        curLanLo != "es-es" &&
        curLanLo != "es-spa" &&
        curLanLo != "es-mx" &&
        curLan != "it" &&
        curLan != "pt" &&
        curLan != "nl" &&
        curLan != "de" &&
        curLan != "zh" &&
        curLan != "ja" &&
        curLan != "ru" &&
        curLan != "fr" &&
        curLan != "br" &&
        curLan != "ko" &&
        !window.location.hostname.includes("shopify")
      ) {
        window.location.href = "/cart";
      } else if (productId == "4047658713170" || productId == "4483350659154" || productId == "4569078956114") {
        window.location.href = "/cart";
      }
    },
    error: function(response) {
      console.log(response.responseJSON.description);
    }
  });
};

$(".add-product").click(function(event) {
  var quantity = 1; //add quantity selector here
  var variantId = $(this).attr("id");
  var productId = $(this).attr("product-id");
  addProduct(quantity, variantId, productId);
});

$(".add-to-cart-btn--collection").click(function(event) {
  event.preventDefault();

  $this = $(this);
  $additionalProducts = $this
    .closest(".additional-products-trigger")
    .find(".additional-products");
  if ($additionalProducts.length == 0) return;

  $quantity_container = $additionalProducts.find(".added-quantity");

  if (templateName == "index") {
    if ($(window).width() < 768) {
      $additionalProducts.closest(".slick-list").addClass("disable-slick");
    }
  }

  fixScreen();
  $additionalProducts.css("display", "block");
  var quantity = $(".product-form__quantity-input").val();
  if ($this[0].className.includes("add-cart-tool-to-handle")) {
    addCartBadge(quantity);
  }
  if (quantity == undefined) {
    $quantity_container.text("1");
  } else {
    $quantity_container.text(quantity);
  }
});

$(".add-to-cart-btn").click(function(event) {
  $this = $(this);
  $additionalProducts = $this
    .closest(".additional-products-trigger")
    .find(".additional-products");
  if ($additionalProducts.length == 0) return;

  $quantity_container = $additionalProducts.find(".added-quantity");

  if (templateName == "index") {
    $additionalProducts.closest(".slick-list").addClass("disable-slick");
  }

  fixScreen();
  $additionalProducts.css("display", "block");

  var quantity = $(".product-form__quantity-input").val();
  if ($this[0].className.includes("add-cart-tool-to-handle")) {
    addCartBadge(quantity);
  }

  if (quantity == undefined) {
    $quantity_container.text("1");
  } else {
    $quantity_container.text(quantity);
  }
});

$(".additional-product-popup-close").click(function(event) {
  if (templateName == "index") {
    $this.closest(".slick-list").removeClass("disable-slick");
  }
  releaseScreen();
  $(this)
    .closest(".overlay")
    .css("display", "none");
});

$(".add-additional-product").click(function(event) {
  var quantity = 1; //add quantity selector here
  var variantId = $(this).attr("id");
  $.ajax({
    type: "POST",
    url: "/cart/add.js",
    dataType: "json",
    data: { id: variantId, quantity: quantity },
    success: function(response) {
      addCartBadge(quantity);
      window.location.href = "/cart";
    },
    error: function(response) {
      console.log(response.responseJSON.description);
    }
  });
});
