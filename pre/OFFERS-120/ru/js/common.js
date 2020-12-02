window.onload = function () {
  initDateComments()
  autoImage()
  navbar()
  setAva()
  wheel()
}



function initDateComments() {
  const getDay = (num) => {
    let now = new Date();
    let newDate = new Date(now.setDate(now.getDate() - num));

    return `${('0' + newDate.getDate()).slice(-2)}.${('0' + (newDate.getMonth() + 1)).slice(-2)}.${newDate.getFullYear()}`
  }

  const commentsDate = document.querySelectorAll('.get-date');
  commentsDate.forEach(item => {
    item.innerHTML = getDay(item.getAttribute('data-day-delay'))
  })
}

function autoImage() {
  const images = document.querySelectorAll('.img img')
  images.forEach(img => {
    img.style.width = '100%'
    const width = img.naturalWidth || ' '
    img.parentNode.style.maxWidth = width + 'px'
  })
}

function navbar() {
  const btn = document.querySelector('.header__mob');
  const navbarRef = document.querySelector('.navbar');
  const overlay = document.querySelector('.overlay')

  btn.addEventListener('click', () => {


    (navbarRef.matches('.active'))
      ? hide()
      : show()
  })


  function show() {
    overlay.classList.add('active')
    navbarRef.classList.add('active')
    overlay.addEventListener('click', () => hide(), { once: true })
  }

  function hide() {
    overlay.classList.remove('active')
    navbarRef.classList.remove('active')
  }

}

function setAva() {
  const commentsAva = document.querySelectorAll('.comment__head img')
  commentsAva.forEach((ava, index) => {
    ava.setAttribute('src', `img/ava${index + 1}.png`)
  })
}


const timer = new minTimer({
  hour: 't-hour',
  min: 't-min',
  sec: 't-sec',
  separation: true
}).start();



$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$(document).ready(function () {
  var rev = $(".reviews").owlCarousel({
    margin: 20,
    items: 3,
    dots: true,
    nav: false,
    autoHeight: true,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

});
$(document).ready(function () {
  var rev = $(".reviews2").owlCarousel({
    margin: 20,
    items: 1,
    dots: true,
    nav: false,
    navText: ['<img src="img/arl.svg"></img>', '<img src="img/arr.svg"></img>'],
    autoHeight: true,

    responsive: {
      0: {
        items: 1 
      },
      1100: {
        items: 1,
        nav: true,
      }
    }
  });

});
function showAlert() {
  const [title, description, button] = document.querySelector('.sweet-text-hidden').children;

  swal({
    title: title.textContent,
    text: description.textContent,
    button: button.textContent,
    icon: "success",
  }).then(_ => window.open(currentLink, '_blank'));


  setTimeout(() => {
    form()
  }, 1000);
}

function wheel() {
  const btn = document.querySelector('.wheel-cursor');
  const img = document.querySelector('.wheel-img');
  btn.addEventListener('click', () => {
    img.classList.add('super-rotation');
    setTimeout(() => {
      showAlert()
    }, 7500);
  })
}

const wheelRef = $('.wheel');
const formRef = $('.wheel-wrapper .form');

formRef.hide()

function form() {

  wheelRef.slideUp();
  formRef.slideDown();
}



$("#form_email").on("submit", (e) => {
  e.preventDefault(); 
  $.ajax({
    url: 'https://testaff.site/mail/swiftm/public/form_action.php',
    method: 'post',
    dataType: 'html',
    
    success: showAlertEmail()
    
  });
});  

function showAlertEmail() {
  const title = document.querySelector('.sweetEmail-text-hidden');

  swal({
    title: title.textContent,
    icon: "success",
  });
}