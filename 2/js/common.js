jQuery(function(){    
    require(['source'],function(source){
        source.init(); 
        var h = window.location.host;  
        var protocolStr = document.location.protocol;  
        var http = "http://";
        console.log(protocolStr);
        if(protocolStr == "https:")  
        {  
           http = "https://";  
        }  
        var s = source.ajax_get(http+h+"/code/getzone");  
        var x=document.getElementsByName("_auth_token_");
        if(s!='')
        {
            for (i in x)
            {
                x[i].value = s;
            }
        }             
    });
    pro_id=$('input[name="proId"]').val();
    if(pro_id == undefined){
        pro_id=$('input[name="product_id"]').val();
    }
    $.ajax({
        type: "POST",
        url: "/proinfo",
        async: false,
        data: "pro_id="+pro_id,
        success: function(msg){
        	var msg = msg;
        	if(msg){
        		var _msg=$.parseJSON(msg);

	            if(_msg.data.tpl_path == 'Thai_Shopee' || _msg.data.tpl_path == 'Taiwan_newstyle3' ){
	                var lan=getBrowserLanguage();
	                var m=getQueryString('m');
	                if(lan == 'zh-cn' && m == '' ){
	                    $('.car-nameb').css('display','none');
	                    //把评价里边的评论数去掉
	                    var li3=$('.detail-bars').find('li').eq(2).find('span');
	                    var _li3=li3.html();
	                    if(_li3 != ''){
	                        _li3 = _li3.replace(/\([^\)]*\)/g, '');
	                        _li3 = _li3.replace(' ','');
	                        li3.html(_li3);
	                    }
	                    $('.hmbox .hm').css('display','none');
	                }
	                if(_msg.data.create_time != ''){
	                    //评论的心数随时间增长
	                    var create_time=_msg.data.create_time;
	                    var xin_num=num_increase(create_time);
	                    $('.detail-cen').find('.car-nameb').find('.car-xin').find('em').html(xin_num);
	                }
	            }
        	}
            
        }
    });
    function getBrowserLanguage(){
        return (navigator.language || navigator.browserLanguage).toLowerCase();
    }
    function num_increase(time){
        var startTime = new Date(time);
        var startTime = startTime.getTime();
        var dayTime=24*60*60*1000;
        var starNum=60;
        var num=6;
        var xin_num=60;
        var nowTime = new Date();
        var time = nowTime.getTime() - startTime;
        var tt = Math.floor(time/dayTime);
        var xin_num = Math.floor(starNum+(time/dayTime)*num);
        return xin_num;
    }


    $('.mui-input-group,.mui-input-row input,.mui-input-row textarea').on('click',function(){
        $("body").removeClass('mui-focusin');
    })



});