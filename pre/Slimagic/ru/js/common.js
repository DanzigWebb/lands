

$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


$(document).ready(function () {
  $(".reviews").owlCarousel({
    margin: 14,
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    navText: ['<img src="img/arl.png"></img>', '<img src="img/arr.png"></img>'],
    autoHeight: true,
    responsive : {
      // breakpoint from 0 up
      // breakpoint from 768 up
      640 : {
        items: 2,
      },
      768 : {
        items: 3,
      }
  }
  });
});

const comments = document.querySelectorAll('.comments__block .comment')

const commentsToDialog = [6, 7, 8, 9, 10, 16, 17, 20, 21, 22]
comments.forEach((comment, index) => {
  const isRight = commentsToDialog.some(item => item === index + 1)
  if (isRight) {
    comment.classList.add('comment--right')
  }
})
const commentClass = `
			.comment--right {
				padding-left: 60px
			}
		`
const styleSheet = document.createElement('style')
styleSheet.innerText = commentClass
document.head.appendChild(styleSheet)
