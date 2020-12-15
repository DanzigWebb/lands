

$(document).ready(function () {

    var play = $('.play1');
    var play2 = $('.play2');
    var videoname = $('.video_name');
    var _vc = $('.video-container'),
        _video = _vc.find('video.avid')
    _img = _vc.find('img'),
        _host = (_video.find('source').attr('src')+'').split('/adcombocdn/')[0];
    _db = [{id:_img.data('id'),img:_img.attr('src'),video:_img.data('video')}];



    var _videoInit = function(){

        var videoWrap = _vc;
        var video = document.getElementById('video1');
        var video2 = document.getElementById('video2');
        var poster = _vc.find('img');



        play.on('click',function(){
            video.play();
            play.hide();
            poster.hide();
            videoname.hide();
            $('.transparent-poster').hide();
        })

        video.addEventListener('ended',function(){
            play.show();
            poster.show();
        }, false);


        play2.on('click',function(){
            video2.play();
            play2.hide();
            poster.hide();
            videoname.hide();
            $('.transparent-poster').hide();
        })

        video2.addEventListener('ended',function(){
            play2.show();
            poster.show();
        }, false);
    };


    _videoInit();



});
