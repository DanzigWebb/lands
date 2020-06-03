//Mixpanel Record
var request = new XMLHttpRequest();
var address = "";
request.open("GET", "https://ipapi.co//json/", true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    //Success!
    address = JSON.parse(request.response).ip;
    mixpanelTrack("Load PIVO Page");
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};
function mixpanelTrack(title) {
  if (
    address == "221.146.210.227" ||
    address == "121.162.235.63" ||
    address == "121.162.235.44" ||
    address == "121.162.235.246"
  ) {
    mixpanel.track("TEST: " + title);
  } else {
    mixpanel.track(title);
  }
}

var BannerHeight = document.getElementsByClassName(
  "main-content-first-block"
)[0].offsetHeight;
var fSectionHeight =
  BannerHeight +
  document.getElementById("pivo-intro-container").closest(".shopify-section")
    .offsetHeight;

var scrollBanner = false;
var ScrollFSection = false;
var scroll20 = false;
var scroll40 = false;
var scroll60 = false;
var scroll80 = false;
var scroll100 = false;
function trackAmountScrolled() {
  var pageName = "PIVO home page";

  var winheight = $(window).height();
  var docheight = $(document).height();
  var scrollTop = $(window).scrollTop();
  var trackLength = docheight - winheight;
  var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 NaN if tracklength == 0)

  if (BannerHeight < scrollTop && !scrollBanner) {
    scrollBanner = true;
    fSectionHeight =
      BannerHeight +
      document
        .getElementById("pivo-intro-container")
        .closest(".shopify-section").offsetHeight;
    mixpanelTrack(pageName + " Banner scrolled");
  }

  if (fSectionHeight < scrollTop && !ScrollFSection) {
    ScrollFSection = true;
    mixpanelTrack(pageName + " First Section scrolled");
  }

  if (pctScrolled >= 20 && !scroll20) {
    scroll20 = true;
    mixpanelTrack(pageName + " 20% scrolled");
  }
  if (pctScrolled >= 40 && !scroll40) {
    scroll40 = true;
    mixpanelTrack(pageName + " 40% scrolled");
  }
  if (pctScrolled >= 60 && !scroll60) {
    scroll60 = true;
    mixpanelTrack(pageName + " 60% scrolled");
  }
  if (pctScrolled >= 80 && !scroll80) {
    scroll80 = true;
    mixpanelTrack(pageName + " 80% scrolled");
  }
  if (pctScrolled >= 100 && !scroll100) {
    scroll100 = true;
    mixpanelTrack(pageName + " 100% scrolled");
  }
}

$(window).on("scroll", function() {
  trackAmountScrolled();
});

var parentRemoveChild = function(child) {
  child.parentNode.removeChild(child);
};

//returning ads video (need to improve)
// var getVideoLink = function() {
//   if (curLan == "en") {
//     return "wistia_async_89qoflt1h4";
//   } else if (curLan == "de") {
//     return "wistia_async_wp3er1fkdx";
//   } else if (curLan == "es") {
//     return "wistia_async_jwbjopvymj";
//   } else if (curLan == "ja") {
//     return "wistia_async_ti7chy5wvz";
//   } else if (curLan == "ko") {
//     return "wistia_async_8ns3uctr9x";
//   } else if (curLan == "pt" || curLan == "br") {
//     return "wistia_async_bp75eh5ije";
//   } else if (curLan == "nl") {
//     return "wistia_async_ui2bcn5gdr";
//   } else if (curLan == "fr") {
//     return "wistia_async_kr6yx4yxtx";
//   } else if (curLan == "zh") {
//     return "wistia_async_2jfbs9zx1l";
//   } else if (curLan == "ar") {
//     return "wistia_async_1d6p8sboo5";
//   } else if (curLan == "ru") {
//     return "wistia_async_hgt0hr56pb";
//   } else if (curLan == "it") {
//     return "wistia_async_ddf48v6e1i";
//   } else {
//     return "wistia_async_89qoflt1h4";
//   }
// };

var getVideoLink = function() {
  if (curLan == "en") {
    return "wistia_async_6tntd59jvy";
  } else if (curLan == "de") {
    return "wistia_async_9fb7z4lyx8";
  } else if (curLan == "es") {
    return "wistia_async_89y7c0y7fo";
  } else if (curLan == "ja") {
    return "wistia_async_qgs5gupbwy";
  } else if (curLan == "ko") {
    return "wistia_async_894b3zgj0s";
  } else if (curLan == "pt" || curLan == "br") {
    return "wistia_async_47h9ibz0af";
  } else if (curLan == "nl") {
    return "wistia_async_qbc1ko0zke";
  } else if (curLan == "fr") {
    return "wistia_async_w51ipmhqgz";
  } else if (curLan == "zh") {
    return "wistia_async_e3s8l4ihpb";
  } else if (curLan == "ar") {
    return "wistia_async_vc5g0tv7h7";
  } else if (curLan == "ru") {
    return "wistia_async_xks166ij4f";
  } else if (curLan == "it") {
    return "wistia_async_ub4mltapfm";
  } else {
    return "wistia_async_6tntd59jvy";
  }
};

var playWistiaVideo = function(videoId, video) {
  _wq.push({
    id: videoId,
    onReady: function(video) {
      video.play();
    }
  });
};

var pauseWistiaVideo = function(videoId, video) {
  _wq.push({
    id: videoId,
    onReady: function(video) {
      video.pause();
    }
  });
};

request.send();

// var isMobile = function(){
//   if(screen.width < 478){
//     return true;
//   }else{
//     return false;
//   }
// }

// var running = false;

// var loadWistiaVideos = function(videoName){
//     var videos = document.getElementsByClassName(videoName);
//     var videoId;
//     if(running == false){
//       running = true;
//     for(var i =0; i<videos.length;i++){
//       console.log(document.documentElement.scrollTop + 1500);
//       console.log(window.pageYOffset + videos[i].getBoundingClientRect().top)
//       if( document.documentElement.scrollTop + 1000 > videos[i].closest('.shopify-section').offsetTop){
//        if(isMobile()){
//         videoId = videos[i].dataset.mobileVideo;
//        }else{
//         videoId = videos[i].dataset.webVideo;
//        }
//        videos[i].classList.add(videoId);
//       }else{
//         running = false;
//         return;
//       }
//     }
//     running = false;
//   }

// }

// var Lastscroll = 0;

// window.addEventListener('scroll', function(e) {
//   var curScroll = document.documentElement.scrollTop;
//   if(curScroll - 100 > Lastscroll ){
//     loadWistiaVideos("wistia-video--auto-load");
//     Lastscroll = curScroll;
//   }else{

//   }
// });

var pivoFullVideo = document.getElementById("pivo-full-video");
if (pivoFullVideo) {
  pivoFullVideo.classList.add(getVideoLink());
}
// document.getElementById("pivo-full-video").classList.add(getVideoLink());
window._wq = window._wq || [];

if (curLanLo != "en-gs") {
  document.getElementById("header-link").href = "/collections/shop";

  // var bannerVideo = document.getElementById("hero-video");
  // var newBanner = $(".new-banner--video-container");

  // //Append banner video to  banner.
  // document
  //   .getElementById("pivo-header")
  //   .appendChild(document.getElementById("banner-video"));
  // document.querySelector(".new-banner--video").style.display = "block";

  // //Autoplay Banner video
  // bannerVideo.loop = false;
  // bannerVideo.addEventListener(
  //   "ended",
  //   function() {
  //     bannerVideo.currentTime = 0.1;
  //     bannerVideo.play();
  //   },
  //   false
  // );
  // bannerVideo.play();
  // //Hide video (Video position is 'fixed')
  // $(window).scroll(function() {
  //   if (newBanner.outerHeight() < $(this).scrollTop()) {
  //     newBanner.hide();
  //   } else {
  //     newBanner.show();
  //   }
  // });

  // if (curLan == "ko") {
  //   document.getElementById("travel-case").style.display = "none";
  // } else {
  //   document.getElementById("pivographer-tripod").style.display = "none";
  // }

  //Shop_Redesign
  if (
    curLanLo == "en-default" ||
    curLanLo == "en-uk" ||
    curLanLo == "es-es" ||
    curLanLo == "es-spa" ||
    curLanLo == "es-mx" ||
    curLan == "it" ||
    curLan == "pt" ||
    curLan == "nl" ||
    curLan == "de" ||
    curLan == "zh" ||
    curLan == "ja" ||
    curLan == "ru" ||
    curLan == "fr" ||
    curLan == "br" ||
    //{% comment %} arab_fullpack_pivo {% endcomment %}
    curLan == "ar" ||
    window.location.host.includes("shopify")
  ) {
    //Remove old ACCESSORIES section
    // $(".current-version")
    //   .parent()
    //   .remove("");
    var children = document.getElementsByClassName("current-version-product");
    for (var i = children.length - 1; 0 <= i; i--) {
      parentRemoveChild(children[i]);
    }

    var children = document.getElementsByClassName("current-version-acc");
    for (var i = children.length - 1; 0 <= i; i--) {
      parentRemoveChild(children[i]);
    }
  } else {
    var $productContainer = $(".product-container--home");
    var $productCardSlider = $(".product-card-slider");

    if (curLan == "ko") {
      var children = document.getElementsByClassName("current-version-acc");
      for (var i = children.length - 1; 0 <= i; i--) {
        parentRemoveChild(children[i]);
      }
    } else {
      var children = document.getElementsByClassName("new-release-acc");
      for (var i = children.length - 1; 0 <= i; i--) {
        parentRemoveChild(children[i]);
      }

      $productContainer.find("div").css("margin-right", "16px");
    }

    var children = document.getElementsByClassName("new-release-product");
    for (var i = children.length - 1; 0 <= i; i--) {
      parentRemoveChild(children[i]);
    }

    // var productContainer = getElementsByClassName('product-container--home');
    // var productCardSlider = getElementsByClassName('product-card-slider');

    //Set old design for SHOP section
    $productContainer
      .removeClass("medium-up--one-quarter")
      .addClass("medium-up--one-half");
    $productContainer.css("margin-left", "0%");
    $productContainer.css("margin-right", "0%");
    // $productContainer.find("div").css("margin-right", "16px");
    $productCardSlider.css("max-width", "1300px");
    $productCardSlider.css("margin", "auto");
    $productContainer.find(".pivo-btn").addClass("btn--medium");
  }
} else {
  var $productContainer = $(".product-container--home");
  var $productCardSlider = $(".product-card-slider");
  $productContainer
    .removeClass("medium-up--one-quarter")
    .addClass("medium-up--one-half");

  $productContainer.css("margin-left", "0%");
  $productContainer.css("margin-right", "0%");
  $productContainer.find("div").css("margin-right", "16px");
  $productCardSlider.css("max-width", "1300px");
  $productCardSlider.css("margin", "auto");

  $productContainer.find(".pivo-btn").addClass("btn--medium");
  document
    .querySelector(".main-content-first-block")
    .classList.add("gs-promotion");

  $("#banner-video").remove();
  document.getElementById("header-link").href = "/collections/promotion";

  $("#ph-ch-2").append(
    '<div class="custom__item-inner custom__item-inner--html"><div class="mobile banner--img" style="display:none;"><img src="https://cdn.shopify.com/s/files/1/2065/8833/files/pivo-galaxy-popup.png?43257" class="" alt="Model in Pivo"></div><img src="https://cdn.shopify.com/s/files/1/2065/8833/files/GalaxyStore_English.png?43187" class="banner-market-icon desktop"></div>'
  );
  $(".banner--img img").attr(
    "src",
    "https://cdn.shopify.com/s/files/1/2065/8833/files/pivo-galaxy-popup.png?43257"
  );
  $(".banner--img")
    .parent()
    .prepend($(".banner--img"));
  $(".galaxy").show();

  $(".new-release")
    .parent()
    .remove("");
}

// //Check index.liquid

document
  .querySelector("#insta-container .page-width")
  .appendChild(document.querySelector(".insta-feed"));

//add lazyload class
document.addEventListener(
  "DOMContentLoaded",
  looplazyload("eapps-instagram-feed-posts-item-image", 25),
  false
);

$(".autoplay_wistia").viewportChecker({
  classToAdd: "", // Class to add to the elements when they are visible,
  classToAddForFullView: "", // Class to add when an item is completely visible in the viewport
  classToRemove: "", // Class to remove before adding 'classToAdd' to the elements
  removeClassAfterAnimation: false, // Remove added classes after animation has finished
  offset: 50, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
  invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
  repeat: false, // Add the possibility to remove the class if the elements are not visible
  callbackFunction: function(elem, action) {
    var video = elem;
    _wq.push({
      id: video.attr("data-id"),
      onReady: function(video) {
        video.play();
      }
    });
  }, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
  scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
});

//slider init
$(".carousel").slick({
  variableWidth: true,
  arrows: true,
  prevArrow: '<div class="sprite-left-arrow slick-prev"></div>',
  nextArrow: ' <div class="sprite-right-arrow slick-next"></div>',
  dots: false,
  centerMode: true,
  slidesToShow: 1,
  initialSlide: 0,
  infinite: false,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        variableWidth: false,
        arrows: true,
        centerMode: true,
        centerPadding: "15%",
        slidesToShow: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        variableWidth: false,
        speed: 300,
        arrows: true,
        centerMode: true,
        centerPadding: "5%",
        slidesToShow: 1
      }
    }
  ]
});

$("#product-slider .main-contents").slick({
  prevArrow: '<div class="sprite-left-arrow slick-prev"></div>',
  nextArrow: '<div class="sprite-right-arrow slick-next"></div>',
  dots: false,
  centerMode: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  infinite: false,
  speed: 1000,
  centerPadding: "24px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px"
      }
    }
  ]
});

var prevBtn = document.getElementsByClassName("slick-prev");
for (var i = 0; i < prevBtn.length; i++) {
  prevBtn[i].style.display = "none";
}

var carousel_PrevSlide = 0;

$(".carousel").on("afterChange", function(event, slick, currentSlide) {
  var previous_video;
  var previous_video_id;
  var current_video;
  var current_video_id;
  var videos;
  var validateCurVideo;
  var vadliatePrevVideo;

  //videos = this.getElementsByClassName('.slick-slide');
  videos = $(this).find(".slick-slide");

  if ($(window).width() > 749) {
    //current_video = videos[currentSlide].querySelector('.desktop.load_wistia');
    //previous_video = videos[carousel_PrevSlide].querySelector('".desktop.load_wistia');
    current_video = videos.eq(currentSlide).find(".desktop.load_wistia ");
    previous_video = videos.eq(carousel_PrevSlide).find(".desktop.load_wistia");
  } else {
    //current_video = videos[currentSlide].querySelector('.desktop.load_wistia');
    //previous_video = videos[carousel_PrevSlide].querySelector('".desktop.load_wistia');
    current_video = videos.eq(currentSlide).find(".mobile.load_wistia ");
    previous_video = videos.eq(carousel_PrevSlide).find(".mobile.load_wistia");
  }

  validatePrevVideo = /[^/]*$/
    .exec(previous_video.attr("class"))[0]
    .split(" ")[2];
  validateCurVideo = /[^/]*$/
    .exec(current_video.attr("class"))[0]
    .split(" ")[2];

  if (validatePrevVideo != undefined) {
    previous_video_id = /[^/]*$/.exec(previous_video.attr("class"))[0];
    previous_video_id = previous_video_id.match(/wistia_async_(\w+)/)[1];
    pauseWistiaVideo(previous_video_id.split("?")[0], previous_video);
  }
  if (validateCurVideo != undefined) {
    current_video_id = /[^/]*$/.exec(current_video.attr("class"))[0];
    current_video_id = current_video_id.match(/wistia_async_(\w+)/)[1];
    playWistiaVideo(current_video_id.split("?")[0], current_video);
  }
});

//Show & Hide slider btn
$(".carousel,#product-slider .main-contents").on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  carousel_PrevSlide = currentSlide;
  var videosLen = this.getElementsByClassName("slick-slide").length;
  var prevBtn = this.querySelector(".slick-prev");
  var nextBtn = this.querySelector(".slick-next");
  var FirstSlide = slick.options.slidesToShow - 1;

  nextSlide = nextSlide + FirstSlide;

  if (nextSlide == FirstSlide) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "block";
  } else if (nextSlide != 0 && nextSlide != videosLen - 1) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  } else if (nextSlide == videosLen - 1) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "none";
  }
});
