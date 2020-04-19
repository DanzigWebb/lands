

$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

const timer = new minTimer({
  hour: 't-hour',
  min: 't-min',
  sec: 't-sec',
  separation: true
}).start();

$(document).ready(function () {
  $(".reviews").owlCarousel({
    margin: 20,
    items: 1,
    dots: true,
    autoHeight: true
  });
});


const play = document.querySelector('.video__main img');
const video = document.querySelector('.video__main video');

play.addEventListener('click', () => {
  play.hidden = true;
  video.setAttribute('controls', '');
  video.play()
})