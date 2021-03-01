// === DISCLAMER ===
// данный скрипт написан человеком, почти не имеющим отношения к фронтенду, так что просьба закрыть глаза, досчитать до 10, выдохнуть и положить нож на место.

/* ФУНКЦИОНАЛ:
  1. Блокирование контекстного меню, сохранения страницы, копирования и тд. - в <head> страницы пишем <script>var mv_protect="on"</script>
  2. Динамическая дата минус 10 дней (обычно для статьи и тд.) - добавляем элементу класс mv_mdate
  3. Динамическая дата сегодняшнего числа - добавляем элементу класс mv_tdate
  4. Динамические даты для комментов - нужным элементам добавляем класс mv_rdate
  5. Динамический год (текущий) - нужным элементам добавляем класс mv_tyear
  6. Комменты а-ля фейстбук - лайки и работа формы (кто не понял - тот поймет)
  7. Плавный скролл - добавляем элементу-ссылке  класс .scrollto и href с айди элемента, к которому надо скроллить
  8. Таймер - добавляем элементу id="mv_timer"
  9. Слайдер - добавляем родительскому элементу слайдера класс owl-carousel

*/

// версия от 09.10.2017

/* Новое:
 - добавлен динамический год
*/

addEventListener('load', function () {
  
  $('.scrollto').click(function(){
  $("html, body").animate({scrollTop: $("#toform").offset().top-300}, 1000);
  return false;
});

    // Защита страницы - в <head> страницы пишем <script>var mv_protect="on"</script>


    // Главная дата - нужно добавить класс элементу .mv_mdate
    var mv_mdate = document.getElementsByClassName('mv_mdate');
    var mv_now = Date.now(),
        mv_one_month = 1000 * 60 * 60 * 24 * 10;
    if(mv_mdate) {
        for (i=0; i < mv_mdate.length; i++) {
            mv_mdate[i].innerHTML = new Date(mv_now - mv_one_month).toLocaleDateString();
        }
    }

    // Дата сегодня- нужно добавить класс элементу .mv_tdate
    var mv_tdate = document.getElementsByClassName('mv_tdate');
    if(mv_tdate) {
        for (i=0; i < mv_tdate.length; i++) {
            mv_tdate[i].innerHTML = new Date(mv_now).toLocaleDateString();
        }
    }

    // Даты для комментов - нужно элементам где должна быть дата добавить класс .mv_rdate
    var mv_rdate = document.getElementsByClassName('mv_rdate');
    if(mv_rdate) {
        for (i=0; i<mv_rdate.length; i++) {
            let now = Date.now();
            let one_month = 1000 * 60 * 60 * 24 * (i+2)*0.3;
            let new_rdate = new Date(now - one_month).toLocaleDateString();
            let y = mv_rdate.length-i-1;
            mv_rdate[y].innerHTML = new_rdate;
        }
    }

    // Текущий год - нужно добавить класс элементу .mv_tyear
    var mv_tyear = document.getElementsByClassName('mv_tyear');
    if(mv_tyear) {
        for (i=0; i < mv_tyear.length; i++) {
            mv_tyear[i].innerHTML = new Date().getFullYear();
        }
    }

//ТАЙМЕР
    var mv_timer = document.getElementById("mv_timer");
    if(mv_timer) {
        setInterval(function() {
            var newDate = new Date();
            var hours = 26 - newDate.getHours();
            var minutes = 60 - newDate.getMinutes();
            var seconds = 60 - newDate.getSeconds();
            if (seconds<10&&minutes<10) {
                mv_timer.innerHTML = hours+":"+0+minutes+":"+0+seconds
            } else if (seconds<10){
                mv_timer.innerHTML = hours+":"+minutes+":"+0+seconds
            } else if (minutes<10){
                mv_timer.innerHTML = hours+":"+0+minutes+":"+seconds
            } else {
                mv_timer.innerHTML = hours+":"+minutes+":"+seconds
            }}, 1000);
    }
    var mv_timer_class = document.getElementsByClassName("mv_timer");
    if(mv_timer_class) {
        setInterval(function() {
            var newDate = new Date();
            var hours = 26 - newDate.getHours();
            var minutes = 60 - newDate.getMinutes();
            var seconds = 60 - newDate.getSeconds();
            for(i=0; i<mv_timer_class.length; i++){
                if (seconds<10&&minutes<10) {
                    mv_timer_class[i].innerHTML = hours+":"+0+minutes+":"+0+seconds
                } else if (seconds<10){
                    mv_timer_class[i].innerHTML = hours+":"+minutes+":"+0+seconds
                } else if (minutes<10){
                    mv_timer_class[i].innerHTML = hours+":"+0+minutes+":"+seconds
                } else {
                    mv_timer_class[i].innerHTML = hours+":"+minutes+":"+seconds
                }}}, 1000);
    }

    var mv_slider = document.querySelector('.owl-carousel');
    if(mv_slider) {
        var mv_slider_js = document.createElement('script');
        mv_slider_js.src="/cdn/js/owl.carousel.js";
        document.head.appendChild(mv_slider_js);
        //добавляем главные стили слайдера
        var mv_slider_main_css = document.createElement('link');
        mv_slider_main_css.rel="stylesheet";
        mv_slider_main_css.href="/cdn/css/owl.carousel.min.css";
        document.body.appendChild(mv_slider_main_css);
        //добавляем главные стили темы
        var mv_slider_default_css = document.createElement('link');
        mv_slider_default_css.rel="stylesheet";
        mv_slider_default_css.href="/cdn/css/owl.theme.default.css";
        document.body.appendChild(mv_slider_default_css);
    }



//КОММЕНТЫ №1 - А-ЛЯ ФЕЙСБУК
    // Объявляем переменные
    var send = document.querySelector(".send-btn"),
        textarea = document.querySelector(".textarea"),
        sendContainer = document.querySelector(".input-action"),
        commentNameInput =  document.querySelector(".comment-name-input");



    // Работа кнопок 'лайк'
    if (sendContainer) {
        function likeCount(){
            var like = document.querySelectorAll('.like');
            var likeCountOutput = document.querySelectorAll('.like-count');
            [].forEach.call(like, function(item, i){
                item.onclick = function() {
                    if (item.classList.contains('liked')) {
                        item.classList.remove('liked');
                        item.style.fontWeight = "normal";
                        --likeCountOutput[i].innerHTML;
                        likeCountOutput[i].classList.remove('like-count-liked');
                        likeCountOutput[i].classList.add('like-count-unliked');
                    } else {
                        item.classList.add('liked');
                        item.style.fontWeight = "bold";
                        ++likeCountOutput[i].innerHTML;
                        likeCountOutput[i].classList.add('like-count-liked');
                        likeCountOutput[i].classList.remove('like-count-unliked');
                    }
                }
            });
        };
        likeCount();

        // Если JS не загрузится, то кнопка отправки комментария будет доступна по-умолчанию
        sendContainer.classList.remove('input-action-focus');
        // И ширина инпута тоже будет больше
        textarea.classList.remove('textarea-focus');


        // При фокусировке на поле ввода появляется кнопка отправления комментария, а также увеличивается высота поля ввода
        textarea.addEventListener("focus", function(event) {
            sendContainer.classList.add("input-action-focus");
            textarea.classList.add("textarea-focus");
        });

        // При потере фокуса поле ввода схлопнется, если оно пустое
        textarea.addEventListener("blur", function() {
            if(!textarea.value) {
                textarea.classList.remove("textarea-focus");
            } else {
                return false;
            }
        });

        // Добавление коммента и проверка заполненности полей
        send.addEventListener("click", function(event) {
            if (!textarea.value) {
                alert("WRITE YOUR COMMENT!");
            } else {
                var allComments = document.querySelectorAll('.comments-item');
                var newComment = document.createElement('div');
                newComment.classList.add('comments-item');
                newComment.classList.add('comment-appear');
                newComment.innerHTML = allComments[allComments.length-1].innerHTML;
                newComment.querySelector('.comment-username').innerHTML= textarea.value;
                newComment.querySelector('.like-count').classList.remove('like-count-liked');
                newComment.querySelector('.like').classList.remove('liked');
                newComment.querySelector('.like').style.fontWeight = 'normal';
                newComment.querySelector('.like-count').innerHTML= 0;
                newComment.querySelector('.comment-date').innerHTML= '';
                // вставляем данные в новый коммент, если есть инпут имени
                if(commentNameInput){
                    newComment.querySelector('.comment-text').innerHTML =  '<span class="comment-username">' + commentNameInput.value + '</span>' + textarea.value;
                    textarea.value = '';
                    commentNameInput.value = '';
                    document.querySelector('.comments').insertBefore(newComment, document.querySelector('.comment-input'));
                    likeCount();
                } else {
                    alert('Your comment is sent for moderation!');
                    textarea.value = '';
                }
            }
        });

    }
    // функция обновления комментов
    var commentRefresh = function(a,b) {
        counter = Math.floor(Math.random()*10000)+5000;
        if(document.querySelector('.comments-newly-showed')){
            document.querySelector('.comments-newly-showed').classList.remove('comments-newly-showed');
        }
        document.querySelector('.comments-refreshing').classList.add('refresh-appear');

        // убираем анимацию набора текста
        setTimeout(function(){document.querySelector('.comments-refreshing').classList.remove('refresh-appear')}, counter);
        // добавляем коммент
        setTimeout(function(){
                a[b].classList.add('comments-newly-showed');
                ++b;
                // console.log(b)
                if(b < a.length){
                    setTimeout(commentRefresh,(counter+6000), a,b);
                }
            },
            // через одну секунду после того как анимация убралась
            counter+1000)
    }
    var commentsRefreshing = document.querySelector('.comments-refreshing-wrapper');
    if (commentsRefreshing && commentsRefreshing.querySelector('.comments-item')){
        var commentFlag = 0;
        commentsRefreshing.querySelector('.comments-item').classList.add('comments-newly-showed');
        window.addEventListener('scroll', function() {
            if(commentsRefreshing.getBoundingClientRect().top <= 500 && commentFlag == 0) {
                ++commentFlag;
                var counter = 4000;
                setTimeout(commentRefresh, counter, commentsRefreshing.querySelectorAll('.comments-item'),1);
            }
        })
    }

})