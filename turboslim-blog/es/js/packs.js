var element = $("#teaser-comment"),
  teaserLoad = $("#comment-load"),
  count = localStorage.getItem("count")
    ? localStorage.getItem("count")
    : 0;
$(window).scroll(function () {
  var a = $(window).scrollTop() + $(window).height(),
    b = element
      .offset()
      .top;
  a > b && 0 == count && (
    teaserLoad.addClass("visible"),
    count = 1,
    localStorage.setItem("count", count)
  )
});
/*
var textAlert = document.getElementById("textarea"),
  textName = document.getElementById("textareaname"),
  vk_text = document.getElementById("comment-text"),
  vk_name = document.getElementById("comment-name"),
  vk_block = document.getElementById("comment-answer"),
  vk_image = document.querySelector("#base64Img"),
  //bannerImage = document.getElementById("avatar"),
  bannerImg = document.getElementById("base64Img"),
  dataImage = localStorage.getItem("ImgBase64"),
  vk_userImage = document.querySelector("#userPic"),
  userFile = document.getElementById("foto"),
  user_foto = document.querySelector("#userPic"),
  dataUserImg = localStorage.getItem("userFotoImg");
localStorage.getItem("textAlert") && localStorage.getItem("textName") && (
  vk_text.innerHTML = localStorage.getItem("textAlert"),
  vk_name.innerHTML = localStorage.getItem("textName"),
  vk_block.style.display = "flex",
  bannerImg.src = localStorage.getItem("ImgBase64"),
  user_foto.src = localStorage.getItem("userFotoImg")
);
function changeText() {
  var a = document
    .getElementById("textarea")
    .value,
    b = document
      .getElementById("textareaname")
      .value,
    d = localStorage.getItem("ImgBase64");
  foto = localStorage.getItem("userFotoImg");
  localStorage.setItem("textAlert", a);
  localStorage.setItem("textName", b);
  vk_text.innerHTML = a;
  vk_name.innerHTML = b;
  vk_block.style.display = "flex";
  vk_image.src = d;
  vk_userImage.src = foto;
  bannerImage.value = "";
  textAlert.value = "";
  textName.value = "";
  vk_image.scrollIntoView()
}
/*bannerImage.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#base64Img", "ImgBase64")
});*/
/*
userFile.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#userPic", "userFotoImg")
});
function loadImageFileAsURL(a, b, d) {
  a = document
    .getElementById(a.target.id)
    .files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader;
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document
        .querySelector(b)
        .src = a
    };
    e.readAsDataURL(a)
  }
}*/
$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault(); a = Math.ceil(Number($("#minus_weight").val()) / .666666); Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 ? $(".formResult").html("<p><b>¡Si sigue las instrucciones a continuación, podrá perder " + $("#minus_weight").val() + " en solo " + a + " días sin dieta ni ejercicio!</b></p><p>¿Crees que es imposible? Lea el artículo a continuación hasta el final y cambiará de opinión. ¡Espero que esto cambie tu vida!</p>") : $(".formResult").html("<p><b>Datos Incorrectos.</b></p>");
    $(".formResult").css({ transition: "background 1s", backgroundColor: "#ff7426c4", border: '2px solid #ff7426c4' }); setTimeout(function () { $(".formResult").css({ backgroundColor: "#fff" }) }, 2E3)
  })
});

var videoWrap = $('.video-wrap');
var videoCover = $('.video-cover');
var videoFrame = $('.video-inner');

videoWrap.click(function () {
  $(this)
    .find($('.video-cover'))
    .css('display', 'none');
  $(this)
    .find($("video"))[0]
    .play();
});