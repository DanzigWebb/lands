$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 20,
      items: 1,
      dots: true,
      nav: false,
      autoHeight: true
    });
  });


require(['swiper','widget'],function(Swiper){
    var mySwiper1 = new window.Swiper('.swiper-container', {
        autoplay: 3000,
        loop: false,
        autoHeight:true,
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        paginationCustomRender: function(swiper, current, total) {
            var text = "";
            text = '<span class="swiper-pagination-current">' + current + ' / <span class="swiper-pagination-total">'+ total +'</span>';
            return text;
        }
    });
})

/*
;(function($){ 
})(jQuery);
*/

jQuery(function($){
    lazyload();

    $("input[name='address']").css("background", "#ffffff");
    $('input[name="payment_type"]').first().prop('checked', true);

    $(".video-js").removeAttr("preload").removeAttr("poster").removeAttr("loop").attr("muted", true).attr("autoplay", true);

    change_province_style();

    $(".payme label").first().addClass('pay_select');
    //点击切换配送方式
    $(".payme label").click(function(){
        change_province_style();
    });

    //点击选中套餐
    // set_comb_prototype()
    init_combo_attr_checked();
    $('.dxbox .combo').on('click', function(){
        
        if ($(this).hasClass("active")) {
            return false;
        }
        $(this).siblings("label").removeClass("active").find('input').prop("checked", false);
        $(this).addClass("active").find('input').prop("checked", true);
        var combo_id = $(this).attr('combo-id');
        $("input[name='combo_id']").attr("sale_num", $(this).attr('sale_num'));
        $('section[data-loopindex]').hide();
        $('section[data-loopindex="'+combo_id+'"]').show();
        // $('section[data-loopindex]').find("input[type='radio']").removeAttr('checked');
        // $('section[data-loopindex]').eq(index-1).find(".prop").each(function(){
        //     $(this).find("input:[type='radio']").first().attr("checked", "checked");
        // })

        // jQuery.each(jQuery("input[type='radio']:checked"),function(){
        //     if(jQuery(this).closest("section").is(":hidden")){
        //         jQuery(this).removeAttr("checked");
        //     };
        //  });
        
        // set_comb_prototype();
        init_combo_attr_checked();
        count();
        init_product_attr();
        return false;
    });


    //点击选中属性
    $('.dxbox .prop').on('click', function(){
        
        $(this).siblings("label").removeClass("active");
        $(this).siblings("label").find('input').prop('checked', false)
        $(this).addClass("active");
        $(this).find('input').prop("checked", true);
        // attr.push('<input type="hidden" name="attr['+ goudid +']" value="'+ attrid +'">')
        init_product_attr();
        return false;
    });

    //初始化已选产品
    function init_product_attr(){
        var for_lang = ['tw','tha'];
        if ( $.inArray(current_lang_code, for_lang) == -1 ) {

            return false;
        }
        /*
        var symbol = $('.symbol').html() ? $('.symbol').html() : 'NT$';
        var count = $('section[data-loopindex]:visible').children(".product_section").length;
        var total_price = $('.product_group .combo.active').data('price');
        var avg_price = Math.ceil(total_price /  count);
        var cur_price = avg_price;
        */
        $('section[data-loopindex]:visible .product_section .single_product').each(function(){
            
            var cur_index = $(this).data('index');
            /*
            if (cur_index == count) {
                cur_price = total_price - avg_price * (count - 1);
            }
            */
            var cur_attr_arr = [];
            $(this).next(".item").find('.prop.active .prop_name').each(function(){
                cur_attr_arr.push($(this).text());
            })
            var cur_attr = cur_attr_arr.join(' ');
            var cur_choose = '';
            switch (current_lang_code) {
                case 'tw':
                    cur_choose = '第'+cur_index+'件 (已選 '+cur_attr+')';
                    break;
                case 'tha':
                    cur_choose = 'ชิ้นที่'+cur_index+' (เลือกแล้ว '+cur_attr+')';
                    break;
                default:
                    cur_choose = '第'+cur_index+'件 (已选 '+cur_attr+')';
            }
            $(this).html(cur_choose);
        });
    }
    init_product_attr();

    //点击收缩已选产品
    $('.product_section .single_product').on('click', function(){
        $(this).toggleClass("single_product_down");
        var for_lang = ['tw','tha'];
        if ( $.inArray(current_lang_code, for_lang) == -1 ) {

            return false;
        }
        var cur_choose = '';

        var cur_index = $(this).data('index');
        /*
        var symbol = $('.symbol').html() ? $('.symbol').html() : 'NT$';
        var count = $('section[data-loopindex]:visible').children(".product_section").length;
        var total_price = $('.product_group .combo.active').data('price');

        var avg_price = Math.ceil(total_price /  count);
        var cur_price = avg_price;
        if (cur_index == count) {
            cur_price = total_price - avg_price * (count - 1);
        }
        */
        var cur_attr_arr = [];
        $(this).next(".item").find('.prop.active .prop_name').each(function(){
            cur_attr_arr.push($(this).text());
        })
        var cur_attr = cur_attr_arr.join(' ');
        switch (current_lang_code) {
            case 'tw':
                cur_choose = '第'+cur_index+'件 (已選 '+cur_attr+')';
                break;
            case 'tha':
                cur_choose = 'ชิ้นที่'+cur_index+' (เลือกแล้ว '+cur_attr+')';
                break;
            default:
                cur_choose = '第'+cur_index+'件 (已选 '+cur_attr+')';
        }
        $(this).html(cur_choose);
        return false;
    });

    //订单查询
    $('.inquiry').click(function(){
        var url = '/order_quality.php?product_id='+product_id;
        window.location.href = url;
    })
    //返回顶部
    $('.top').on('click',function(){
        $('body,html').animate({ scrollTop: 0 }, 500);
    })

    $("#contact_us_btn").click(function(){
        $('#contact_us_content').show();
    });
    $("#contact_us_ctu").click(function(){
        $('#contact_us_content').hide();
    });

    //底部点击收缩和隐藏
    $("#notes_play_btn").click(function(){
        $(this).toggleClass("notes_up");
        $("html, body").animate({
            scrollTop: $('html, body').get(0).scrollHeight
        }, 10);
    });

    //$(".m-img").find(".lazyload").parent("p").addClass('p-img');
})
/*
jQuery(window).load(function(){
    //attrcheck();
});
*/
window.addEventListener('load', function () {
    // change_province_style();
    var screenVideos = document.getElementsByClassName('video-js');
    for(var i=0;i < screenVideos.length;i++){
        screenVideo = screenVideos[i];  
        //screenVideo.play();
        screenVideo.addEventListener('ended', function () {
            screenVideo.load();
            let playPromise = screenVideo.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    screenVideo.play();
                }).catch(() => {
                    console.log('catch');
                })
            }
        }, false);
    }
    //jQuery('.video-js').trigger('click');
})

//移除单件产品的已选信息
function is_single_product()
{
  console.log(123);  
}

//數量加
function plus(){

    var sale_num = parseInt($("input[name='combo_id']").attr("sale_num"));
    var num = parseInt($("input[name='num']").val());
    var i = 20;
    if(sale_num > 0){
        i = sale_num;
    }
    if(num < i){
        num = num + 1;
    }
    $("input[name='num']").val(num);
    $('#num').val(num);
    $('.textWrap .tt span').html(num);
    //$(".count .pdbox .numbox").html(num);
    count();
}
//數量減
function deplus(){
    var num=parseInt($("input[name='num']").val());
    if(num>1){
        num=num-1;
    }
    $("input[name='num']").val(num);
    $('#num').val(num);
    $('.textWrap .tt span').html(num);
    $('.textWrap .tt span').html(num);
    //$(".count .pdbox .numbox").html(num);
    count();
}
//金額計算
function count(){
    var total = parseInt($('.combo.active').data('price'))*$("input[name='num']").val();
    
    $('input[name="price"]').val(total);
    $("#keepPrice").html(total);
    $("#keep_price_two").html(total);

    //$(".totle").html(totle);
    //$("#finally_price").html(totle);
}

// 重置province的样式
function change_province_style()
{
    if($("input[name='province']").length){
        var province = $("input[name='province']").val();
        if (-1 == $.inArray(province, [2,3,11,17,36])){
            return;
        }
    }
    $("input[name='address']").css("background", "#ffffff");
    if (jQuery("select[name='province_name']").find('option').length == 1){
        jQuery("select[name='province_name']").hide();
    }
    if(jQuery("#province").find("select:visible").length == 2){
        jQuery("#province").find("select:visible").css('width', "calc(50% - 10px)");
        jQuery("#province").find("select:visible").last().css('width', "calc(50%)");
    }
}
// 根据套餐初始化
function set_comb_prototype(index)
{
    // 先要清除选中状态
    $('section[data-loopindex]').find('input').prop("checked", false);
    $('section[data-loopindex]').eq(index-1).find('.dxbox').each(function(){
        $(this).find('.prop').removeClass('active').first().addClass('active').find('input').prop("checked", true);
    });
}
function init_combo_attr_checked() {
    jQuery("section[data-loopindex]:hidden").find("input[type='radio']:checked").prop("checked", false);

    jQuery("section[data-loopindex]:visible").find('.dxbox').each(function(){
        $(this).find('.prop').removeClass('active').first().addClass('active').find('input').prop("checked", true);
        // $(this).find("input[type='radio']").eq(0).attr("checked", "checked");
    })
}

//重置商品價格
function initDiscount(){
    var addPrice = $.trim($('#keepPrice').text());
    var payment_type = $("input[name='payment_type']");
    if(payment_type.parents('.cee-wrap').length > 0){
        payment_type.parents('.cee-wrap').find('label').removeClass('active');
    }else{
        payment_type.parent().removeClass('active');
        payment_type.removeClass('acitve');
    }
    payment_type.eq(0).prop("checked", true);
    payment_type.eq(0).parent("label").addClass('active');
    payment_type.eq(0).addClass('acitve');
    if($(".show_price").length > 0){
        $(".show_price").text(addPrice);
    }
    $(".post_price").val(addPrice);
    if($(".total-price").length > 0){
        $(".total-price").text(addPrice);
    }
    $("input[name='payment_type']:checked").click();
};
function lazyload(){
    var screenHeight = $(window).height();
    var imgdata = $('.m-img').html();
    var img = imgdata.replace(/<img src="/g,'<img src="" data-img="');
    $('.m-img').html(img);
    $('.m-img img').addClass("lazyload");
    showImg(screenHeight);
    window.addEventListener('scroll', function(){
        var img = $('.lazyload');
        if(img.length<=0){
            window.removeEventListener('scroll',arguments.callee);
            return false;
        }else{
            var screenHeight = $(document).scrollTop();
            setTimeout(function(){
                showImg(screenHeight+screenHeight);
            }, 100)
        }
    })
}
function showImg(height){
    var img = $('.lazyload');
    for (var i = 0; i < img.length; i++) {
        var top = img.eq(i).offset().top;
        var src = img.eq(i).attr('data-img');
        if (top<=height) {
            img.eq(i).attr('src',src);
        }
    }
}

