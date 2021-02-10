jQuery(function($){
    $("input[name=payment_type]").eq(0).prop("checked",true);
    //选择支付方式
    function modePayment(){
        var payment_type = $("input[name='payment_type']");
        payment_type.click(function(){
            if($(this).hasClass('acitve')){
                return false;
            };
            if($(this).parents('.cee-wrap').length > 0){
                $(this).parents('.cee-wrap').find('input').removeClass('acitve');
            }else{
                $("input[name='payment_type']").parent().removeClass("pay_select");
                $(this).parents().find('input').removeClass('acitve');
            }
            $(this).addClass('acitve');
            $(this).parent().addClass("pay_select");
            var rel = $(this).val();
            var pay_num = $.trim($("#payment_discount").text());
            var keepPrice = uprice($.trim($("#keepPrice").text()));
            var old_pri = uprice($.trim($(".post_price").val()));
            var freight = 0;
            if($(".combo_freight").length > 0 ){
                var freight = $(".combo_freight").find("em").text()||0;
            }
            var newTotalas = number_format(Math.floor(old_pri*(pay_num/10)),0,',',3,freight);
            if(rel == 5){
                if(pay_num && pay_num != 0){
                    if($(".show_price").length > 0){
                        $(".show_price").text(newTotalas);
                    }
                    $(".post_price").val(newTotalas);
                if($(".total-price").length > 0){
                    $(".total-price").text(newTotalas);
                }
                }
            }else{
                if($(".show_price").length > 0){
                    $(".show_price").text(number_format(parseInt(keepPrice),0,',',3,parseInt(freight)));
                }
                $(".post_price").val(keepPrice);
                if($(".total-price").length > 0){
                    $(".total-price").text(keepPrice);
                }
            }
        })
    };
    modePayment();
    //去掉价格中的逗号
    function uprice(price){
        var keepPrice = price;
        if(keepPrice.indexOf(",") != -1){ //价格中有逗号
            keepPrice = keepPrice.replace(/,/g,'');
        }
        return keepPrice;
    }
    /**
     * number_format
     * @param number 传进来的数,
     * @param bit 保留的小数位,默认没有小数,
     * @param sign 为整数位间隔符号,默认为空格
     * @param gapnum 为整数位每几位间隔,默认为3位一隔
     * @type arguments的作用：arguments[0] == number(之一)
    */
    function number_format(number,bit,sign,gapnum,freight){
        if(!freight){
            freight = 0;
        }else{
            freight = parseInt(freight);
        }
        if(typeof(region_id)  != 'undefined'){
            if(region_id != 9 && region_id != 26 ){
                return number+freight;
                return false;
            }
        }else{
              return number+freight;
              return false;
        }

        //设置接收参数的默认值
        var bit    = arguments[1] ? arguments[1] : 0 ;
        var sign   = arguments[2] ? arguments[2] : ' ' ;
        var gapnum = arguments[3] ? arguments[3] : 3 ;
        var str    = '' ;
        //不要小数
        // number     = number.toFixed(bit);//格式化
        // realnum    = number.split('.')[0];//整数位(使用小数点分割整数和小数部分)
        // decimal    = number.split('.')[1];//小数位
        realnum = number.toString();
        realnumarr = realnum.split('');//将整数位逐位放进数组 ["1", "2", "3", "4", "5", "6"]

        //把整数部分从右往左拼接，每bit位添加一个sign符号
        for(var i=1;i<=realnumarr.length;i++){
            str = realnumarr[realnumarr.length-i] + str ;
            if(i%gapnum == 0){
                str = sign+str;//每隔gapnum位前面加指定符号
            }
        }

        //当遇到 gapnum 的倍数的时候，会出现比如 ",123",这种情况，所以要去掉最前面的 sign
        str = (realnum.length%gapnum==0) ? str.substr(1) : str;
        //重新拼接实数部分和小数位
        // realnum = str+'.'+decimal;
        realnum = str;
        return realnum;
    }
    //重置商品價格
    function initDiscount(){
        var addPrice = $.trim($('#keepPrice').text());
        var payment_type = $("input[name='payment_type']");
        if(payment_type.parents('.cee-wrap').length > 0){
            payment_type.parents('.cee-wrap').find('input').removeClass('acitve');
        }else{
            payment_type.parents().find('input').removeClass('acitve');
        }
        payment_type.eq(0).prop("checked", true);
        payment_type.eq(0).addClass('acitve');
        if($(".show_price").length > 0){
            $(".show_price").text(addPrice);
        }
        $(".post_price").val(addPrice);
        if($(".total-price").length > 0){
            $(".total-price").text(addPrice);
        }
    };
 });