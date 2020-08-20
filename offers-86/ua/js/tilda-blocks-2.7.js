 
function t142_checkSize(recid){
  var el=$("#rec"+recid).find(".t142__submit");
  if(el.length){
    var btnheight = el.height() + 5;
    var textheight = el[0].scrollHeight;
    if (btnheight < textheight) {
      var btntext = el.text();
      el.addClass("t142__submit-overflowed");
      el.html("<span class=\"t142__text\">" + btntext + "</span>");
    }
  }
} 
function t190_scrollToTop(){
    $('html, body').animate({scrollTop: 0}, 700);								
}	  
 
function t270_scroll(hash, offset, speed) {
    var $root = $('html, body');
    var target = "";

    try {
        target = $(hash);
    } catch(event) {
        console.log("Exception t270: " + event.message);
        return true;
    }
    if (target.length === 0) {
        target = $('a[name="' + hash.substr(1) + '"]');
        if (target.length === 0) {
            return true;
        }
    }

    $root.animate({
        scrollTop: target.offset().top - offset
    }, speed || 500, function() {
        if(history.pushState) {
            history.pushState(null, null, hash);
        } else {
            window.location.hash = hash;
        }
    });

    return true;
} 
function t391_checkSize(recid){
  var el=$("#rec"+recid);
  var cover = el.find('.t-cover');
  var carrier = el.find('.t-cover__carrier');
  var filter = el.find('.t-cover__filter');
  var height = el.find('.t391__firstcol').height() + el.find('.t391__secondcol').height();
  if (window.matchMedia('(max-width: 960px)').matches && height > 0) {
    cover.css('height',height);
    carrier.css('height',height);
    filter.css('height',height);
  }
} 

function t396_init(recid){var data='';var res=t396_detectResolution();t396_initTNobj();t396_switchResolution(res);t396_updateTNobj();t396_artboard_build(data,recid);window.tn_window_width=$(window).width();$( window ).resize(function () {tn_console('>>>> t396: Window on Resize event >>>>');t396_waitForFinalEvent(function(){if($isMobile){var ww=$(window).width();if(ww!=window.tn_window_width){t396_doResize(recid);}}else{t396_doResize(recid);}}, 500, 'resizeruniqueid'+recid);});$(window).on("orientationchange",function(){tn_console('>>>> t396: Orient change event >>>>');t396_waitForFinalEvent(function(){t396_doResize(recid);}, 600, 'orientationuniqueid'+recid);});$( window ).load(function() {var ab=$('#rec'+recid).find('.t396__artboard');t396_allelems__renderView(ab);});var rec = $('#rec' + recid);if (rec.attr('data-connect-with-tab') == 'yes') {rec.find('.t396').bind('displayChanged', function() {var ab = rec.find('.t396__artboard');t396_allelems__renderView(ab);});}}function t396_doResize(recid){var ww=$(window).width();window.tn_window_width=ww;var res=t396_detectResolution();var ab=$('#rec'+recid).find('.t396__artboard');t396_switchResolution(res);t396_updateTNobj();t396_ab__renderView(ab);t396_allelems__renderView(ab);}function t396_detectResolution(){var ww=$(window).width();var res;res=1200;if(ww<1200){res=960;}if(ww<960){res=640;}if(ww<640){res=480;}if(ww<480){res=320;}return(res);}function t396_initTNobj(){tn_console('func: initTNobj');window.tn={};window.tn.canvas_min_sizes = ["320","480","640","960","1200"];window.tn.canvas_max_sizes = ["480","640","960","1200",""];window.tn.ab_fields = ["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"];}function t396_updateTNobj(){tn_console('func: updateTNobj');if(typeof window.zero_window_width_hook!='undefined' && window.zero_window_width_hook=='allrecords' && $('#allrecords').length){window.tn.window_width = parseInt($('#allrecords').width());}else{window.tn.window_width = parseInt($(window).width());}/* window.tn.window_width = parseInt($(window).width()); */window.tn.window_height = parseInt($(window).height());if(window.tn.curResolution==1200){window.tn.canvas_min_width = 1200;window.tn.canvas_max_width = window.tn.window_width;}if(window.tn.curResolution==960){window.tn.canvas_min_width = 960;window.tn.canvas_max_width = 1200;}if(window.tn.curResolution==640){window.tn.canvas_min_width = 640;window.tn.canvas_max_width = 960;}if(window.tn.curResolution==480){window.tn.canvas_min_width = 480;window.tn.canvas_max_width = 640;}if(window.tn.curResolution==320){window.tn.canvas_min_width = 320;window.tn.canvas_max_width = 480;}window.tn.grid_width = window.tn.canvas_min_width;window.tn.grid_offset_left = parseFloat( (window.tn.window_width-window.tn.grid_width)/2 );}var t396_waitForFinalEvent = (function () {var timers = {};return function (callback, ms, uniqueId) {if (!uniqueId) {uniqueId = "Don't call this twice without a uniqueId";}if (timers[uniqueId]) {clearTimeout (timers[uniqueId]);}timers[uniqueId] = setTimeout(callback, ms);};})();function t396_switchResolution(res,resmax){tn_console('func: switchResolution');if(typeof resmax=='undefined'){if(res==1200)resmax='';if(res==960)resmax=1200;if(res==640)resmax=960;if(res==480)resmax=640;if(res==320)resmax=480;}window.tn.curResolution=res;window.tn.curResolution_max=resmax;}function t396_artboard_build(data,recid){tn_console('func: t396_artboard_build. Recid:'+recid);tn_console(data);/* set style to artboard */var ab=$('#rec'+recid).find('.t396__artboard');t396_ab__renderView(ab);/* create elements */ab.find('.tn-elem').each(function() {var item=$(this);if(item.attr('data-elem-type')=='text'){t396_addText(ab,item);}if(item.attr('data-elem-type')=='image'){t396_addImage(ab,item);}if(item.attr('data-elem-type')=='shape'){t396_addShape(ab,item);}if(item.attr('data-elem-type')=='button'){t396_addButton(ab,item);}if(item.attr('data-elem-type')=='video'){t396_addVideo(ab,item);}if(item.attr('data-elem-type')=='html'){t396_addHtml(ab,item);}if(item.attr('data-elem-type')=='tooltip'){t396_addTooltip(ab,item);}if(item.attr('data-elem-type')=='form'){t396_addForm(ab,item);}if(item.attr('data-elem-type')=='gallery'){t396_addGallery(ab,item);}});$('#rec'+recid).find('.t396__artboard').removeClass('rendering').addClass('rendered');if(ab.attr('data-artboard-ovrflw')=='visible'){$('#allrecords').css('overflow','hidden');}if($isMobile){$('#rec'+recid).append('<style>@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}</style>');}}function t396_ab__renderView(ab){var fields = window.tn.ab_fields;for ( var i = 0; i < fields.length; i++ ) {t396_ab__renderViewOneField(ab,fields[i]);}var ab_min_height=t396_ab__getFieldValue(ab,'height');var ab_max_height=t396_ab__getHeight(ab);var offset_top=0;if(ab_min_height==ab_max_height){offset_top=0;}else{var ab_valign=t396_ab__getFieldValue(ab,'valign');if(ab_valign=='top'){offset_top=0;}else if(ab_valign=='center'){offset_top=parseFloat( (ab_max_height-ab_min_height)/2 ).toFixed(1);}else if(ab_valign=='bottom'){offset_top=parseFloat( (ab_max_height-ab_min_height) ).toFixed(1);}else if(ab_valign=='stretch'){offset_top=0;ab_min_height=ab_max_height;}else{offset_top=0;}}ab.attr('data-artboard-proxy-min-offset-top',offset_top);ab.attr('data-artboard-proxy-min-height',ab_min_height);ab.attr('data-artboard-proxy-max-height',ab_max_height);}function t396_addText(ab,el){tn_console('func: addText');/* add data atributes */var fields_str='top,left,width,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);}function t396_addImage(ab,el){tn_console('func: addImage');/* add data atributes */var fields_str='img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);el.find('img').on("load", function() {t396_elem__renderViewOneField(el,'top');if(typeof $(this).attr('src')!='undefined' && $(this).attr('src')!=''){setTimeout( function() { t396_elem__renderViewOneField(el,'top');} , 2000);} }).each(function() {if(this.complete) $(this).load();}); el.find('img').on('tuwidget_done', function(e, file) { t396_elem__renderViewOneField(el,'top');});}function t396_addShape(ab,el){tn_console('func: addShape');/* add data atributes */var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);}function t396_addButton(ab,el){tn_console('func: addButton');/* add data atributes */var fields_str='top,left,width,height,container,axisx,axisy,caption,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);return(el);}function t396_addVideo(ab,el){tn_console('func: addVideo');/* add data atributes */var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);var viel=el.find('.tn-atom__videoiframe');var viatel=el.find('.tn-atom');viatel.css('background-color','#000');var vihascover=viatel.attr('data-atom-video-has-cover');if(typeof vihascover=='undefined'){vihascover='';}if(vihascover=='y'){viatel.click(function() {var viifel=viel.find('iframe');if(viifel.length){var foo=viifel.attr('data-original');viifel.attr('src',foo);}viatel.css('background-image','none');viatel.find('.tn-atom__video-play-link').css('display','none');});}var autoplay=t396_elem__getFieldValue(el,'autoplay');var showinfo=t396_elem__getFieldValue(el,'showinfo');var loop=t396_elem__getFieldValue(el,'loop');var mute=t396_elem__getFieldValue(el,'mute');var startsec=t396_elem__getFieldValue(el,'startsec');var endsec=t396_elem__getFieldValue(el,'endsec');var tmode=$('#allrecords').attr('data-tilda-mode');var url='';var viyid=viel.attr('data-youtubeid');if(typeof viyid!='undefined' && viyid!=''){ url='../www.youtube.com/embed/default.htm'; url+=viyid+'@rel=0&fmt=18&html5=1'; url+='&showinfo='+(showinfo=='y'?'1':'0'); if(loop=='y'){url+='&loop=1&playlist='+viyid;} if(startsec>0){url+='&start='+startsec;} if(endsec>0){url+='&end='+endsec;} if(mute=='y'){url+='&mute=1';} if(vihascover=='y'){ url+='&autoplay=1'; viel.html('<iframe id="youtubeiframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>'); }else{ if(typeof tmode!='undefined' && tmode=='edit'){}else{ if(autoplay=='y'){url+='&autoplay=1';} } if(window.lazy=='y'){ viel.html('<iframe id="youtubeiframe" class="t-iframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="lazy"></iframe>'); el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>'); }else{ viel.html('<iframe id="youtubeiframe" width="100%" height="100%" src="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>'); } }}var vivid=viel.attr('data-vimeoid');if(typeof vivid!='undefined' && vivid>0){url='//player.vimeo.com/video/';url+=vivid+'?color=ffffff&badge=0';if(showinfo=='y'){url+='&title=1&byline=1&portrait=1';}else{url+='&title=0&byline=0&portrait=0';}if(loop=='y'){url+='&loop=1';}if(mute=='y'){url+='&muted=1';}if(vihascover=='y'){url+='&autoplay=1';viel.html('<iframe data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');}else{if(typeof tmode!='undefined' && tmode=='edit'){}else{if(autoplay=='y'){url+='&autoplay=1';}}if(window.lazy=='y'){viel.html('<iframe class="t-iframe" data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>');}else{viel.html('<iframe src="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');}}}}function t396_addHtml(ab,el){tn_console('func: addHtml');/* add data atributes */var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);}function t396_addTooltip(ab, el) {tn_console('func: addTooltip');var fields_str = 'width,height,top,left,';fields_str += 'container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition';var fields = fields_str.split(',');el.attr('data-fields', fields_str);t396_elem__renderView(el);var pinEl = el.find('.tn-atom__pin');var tipEl = el.find('.tn-atom__tip');var tipopen = el.attr('data-field-tipopen-value');if (isMobile || (typeof tipopen!='undefined' && tipopen=='click')) {t396_setUpTooltip_mobile(el,pinEl,tipEl);} else {t396_setUpTooltip_desktop(el,pinEl,tipEl);}setTimeout(function() {$('.tn-atom__tip-img').each(function() {var foo = $(this).attr('data-tipimg-original');if (typeof foo != 'undefined' && foo != '') {$(this).attr('src', foo);}})}, 3000);}function t396_addForm(ab,el){tn_console('func: addForm');/* add data atributes */var fields_str='width,top,left,';fields_str+='inputs,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);}function t396_addGallery(ab,el){tn_console('func: addForm');/* add data atributes */var fields_str='width,height,top,left,';fields_str+='imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);/* render elem view */t396_elem__renderView(el);}function t396_elem__setFieldValue(el,prop,val,flag_render,flag_updateui,res){if(res=='')res=window.tn.curResolution;if(res<1200 && prop!='zindex'){el.attr('data-field-'+prop+'-res-'+res+'-value',val);}else{el.attr('data-field-'+prop+'-value',val);}if(flag_render=='render')elem__renderViewOneField(el,prop);if(flag_updateui=='updateui')panelSettings__updateUi(el,prop,val);}function t396_elem__getFieldValue(el,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value');}}if(res==640){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value');}}}if(res==480){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value');}}}}if(res==320){r=el.attr('data-field-'+prop+'-res-320-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value');}}}}}}else{r=el.attr('data-field-'+prop+'-value');}return(r);}function t396_elem__renderView(el){tn_console('func: elem__renderView');var fields=el.attr('data-fields');if(! fields) {return false;}fields = fields.split(',');/* set to element value of every fieldvia css */for ( var i = 0; i < fields.length; i++ ) {t396_elem__renderViewOneField(el,fields[i]);}}function t396_elem__renderViewOneField(el,field){var value=t396_elem__getFieldValue(el,field);if(field=='left'){value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('left',parseFloat(value).toFixed(1)+'px');}if(field=='top'){value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('top',parseFloat(value).toFixed(1)+'px');}if(field=='width'){value = t396_elem__getWidth(el,value);el.css('width',parseFloat(value).toFixed(1)+'px');var eltype=el.attr('data-elem-type');if(eltype=='tooltip'){var pinSvgIcon = el.find('.tn-atom__pin-icon');/*add width to svg nearest parent to fix InternerExplorer problem*/if (pinSvgIcon.length > 0) {var pinSize = parseFloat(value).toFixed(1) + 'px';pinSvgIcon.css({'width': pinSize, 'height': pinSize});}el.css('height',parseInt(value).toFixed(1)+'px');}if(eltype=='gallery') {var borderWidth = t396_elem__getFieldValue(el, 'borderwidth');var borderStyle = t396_elem__getFieldValue(el, 'borderstyle');if (borderStyle=='none' || typeof borderStyle=='undefined' || typeof borderWidth=='undefined' || borderWidth=='') borderWidth=0;value = value*1 - borderWidth*2;el.css('width', parseFloat(value).toFixed(1)+'px');el.find('.t-slds__main').css('width', parseFloat(value).toFixed(1)+'px');el.find('.tn-atom__slds-img').css('width', parseFloat(value).toFixed(1)+'px');}}if(field=='height'){var eltype = el.attr('data-elem-type');if (eltype == 'tooltip') {return;}value=t396_elem__getHeight(el,value);el.css('height', parseFloat(value).toFixed(1)+'px');if (eltype === 'gallery') {var borderWidth = t396_elem__getFieldValue(el, 'borderwidth');var borderStyle = t396_elem__getFieldValue(el, 'borderstyle');if (borderStyle=='none' || typeof borderStyle=='undefined' || typeof borderWidth=='undefined' || borderWidth=='') borderWidth=0;value = value*1 - borderWidth*2;el.css('height',parseFloat(value).toFixed(1)+'px');el.find('.tn-atom__slds-img').css('height', parseFloat(value).toFixed(1) + 'px');el.find('.t-slds__main').css('height', parseFloat(value).toFixed(1) + 'px');}}if(field=='container'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top');}if(field=='width' || field=='height' || field=='fontsize' || field=='fontfamily' || field=='letterspacing' || field=='fontweight' || field=='img'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top');}if(field=='inputs'){value=el.find('.tn-atom__inputs-textarea').val();try {t_zeroForms__renderForm(el,value);} catch (err) {}}}function t396_elem__convertPosition__Local__toAbsolute(el,field,value){value = parseInt(value);if(field=='left'){var el_container,offset_left,el_container_width,el_width;var container=t396_elem__getFieldValue(el,'container');if(container=='grid'){el_container = 'grid';offset_left = window.tn.grid_offset_left;el_container_width = window.tn.grid_width;}else{el_container = 'window';offset_left = 0;el_container_width = window.tn.window_width;}/* fluid or not*/var el_leftunits=t396_elem__getFieldValue(el,'leftunits');if(el_leftunits=='%'){value = t396_roundFloat( el_container_width * value/100 );}value = offset_left + value;var el_axisx=t396_elem__getFieldValue(el,'axisx');if(el_axisx=='center'){el_width = t396_elem__getWidth(el);value = el_container_width/2 - el_width/2 + value;}if(el_axisx=='right'){el_width = t396_elem__getWidth(el);value = el_container_width - el_width + value;}}if(field=='top'){var ab=el.parent();var el_container,offset_top,el_container_height,el_height;var container=t396_elem__getFieldValue(el,'container');if(container=='grid'){el_container = 'grid';offset_top = parseFloat( ab.attr('data-artboard-proxy-min-offset-top') );el_container_height = parseFloat( ab.attr('data-artboard-proxy-min-height') );}else{el_container = 'window';offset_top = 0;el_container_height = parseFloat( ab.attr('data-artboard-proxy-max-height') );}/* fluid or not*/var el_topunits=t396_elem__getFieldValue(el,'topunits');if(el_topunits=='%'){value = ( el_container_height * (value/100) );}value = offset_top + value;var el_axisy=t396_elem__getFieldValue(el,'axisy');if(el_axisy=='center'){/* var el_height=parseFloat(el.innerHeight()); */el_height=t396_elem__getHeight(el);value = el_container_height/2 - el_height/2 + value;}if(el_axisy=='bottom'){/* var el_height=parseFloat(el.innerHeight()); */el_height=t396_elem__getHeight(el);value = el_container_height - el_height + value;} }return(value);}function t396_ab__setFieldValue(ab,prop,val,res){/* tn_console('func: ab__setFieldValue '+prop+'='+val);*/if(res=='')res=window.tn.curResolution;if(res<1200){ab.attr('data-artboard-'+prop+'-res-'+res,val);}else{ab.attr('data-artboard-'+prop,val);}}function t396_ab__getFieldValue(ab,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'');}}if(res==640){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'');}}}if(res==480){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'');}}}}if(res==320){r=ab.attr('data-artboard-'+prop+'-res-320');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'');}}}}}}else{r=ab.attr('data-artboard-'+prop);}return(r);}function t396_ab__renderViewOneField(ab,field){var value=t396_ab__getFieldValue(ab,field);}function t396_allelems__renderView(ab){tn_console('func: allelems__renderView: abid:'+ab.attr('data-artboard-recid'));ab.find(".tn-elem").each(function() {t396_elem__renderView($(this));});}function t396_ab__filterUpdate(ab){var filter=ab.find('.t396__filter');var c1=filter.attr('data-filtercolor-rgb');var c2=filter.attr('data-filtercolor2-rgb');var o1=filter.attr('data-filteropacity');var o2=filter.attr('data-filteropacity2');if((typeof c2=='undefined' || c2=='') && (typeof c1!='undefined' && c1!='')){filter.css("background-color", "rgba("+c1+","+o1+")");}else if((typeof c1=='undefined' || c1=='') && (typeof c2!='undefined' && c2!='')){filter.css("background-color", "rgba("+c2+","+o2+")");}else if(typeof c1!='undefined' && typeof c2!='undefined' && c1!='' && c2!=''){filter.css({background: "-webkit-gradient(linear, left top, left bottom, from(rgba("+c1+","+o1+")), to(rgba("+c2+","+o2+")) )" });}else{filter.css("background-color", 'transparent');}}function t396_ab__getHeight(ab, ab_height){if(typeof ab_height=='undefined')ab_height=t396_ab__getFieldValue(ab,'height');ab_height=parseFloat(ab_height);/* get Artboard height (fluid or px) */var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');if(ab_height_vh!=''){ab_height_vh=parseFloat(ab_height_vh);if(isNaN(ab_height_vh)===false){var ab_height_vh_px=parseFloat( window.tn.window_height * parseFloat(ab_height_vh/100) );if( ab_height < ab_height_vh_px ){ab_height=ab_height_vh_px;}}} return(ab_height);} function t396_hex2rgb(hexStr){/*note: hexStr should be #rrggbb */var hex = parseInt(hexStr.substring(1), 16);var r = (hex & 0xff0000) >> 16;var g = (hex & 0x00ff00) >> 8;var b = hex & 0x0000ff;return [r, g, b];}String.prototype.t396_replaceAll = function(search, replacement) {var target = this;return target.replace(new RegExp(search, 'g'), replacement);};function t396_elem__getWidth(el,value){if(typeof value=='undefined')value=parseFloat( t396_elem__getFieldValue(el,'width') );var el_widthunits=t396_elem__getFieldValue(el,'widthunits');if(el_widthunits=='%'){var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat( window.tn.window_width * parseFloat( parseInt(value)/100 ) );}else{value=parseFloat( window.tn.grid_width * parseFloat( parseInt(value)/100 ) );}}return(value);}function t396_elem__getHeight(el,value){if(typeof value=='undefined')value=t396_elem__getFieldValue(el,'height');value=parseFloat(value);if(el.attr('data-elem-type')=='shape' || el.attr('data-elem-type')=='video' || el.attr('data-elem-type')=='html' || el.attr('data-elem-type')=='gallery'){var el_heightunits=t396_elem__getFieldValue(el,'heightunits');if(el_heightunits=='%'){var ab=el.parent();var ab_min_height=parseFloat( ab.attr('data-artboard-proxy-min-height') );var ab_max_height=parseFloat( ab.attr('data-artboard-proxy-max-height') );var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat( ab_max_height * parseFloat( value/100 ) );}else{value=parseFloat( ab_min_height * parseFloat( value/100 ) );}}}else if(el.attr('data-elem-type')=='button'){value = value;}else{value =parseFloat(el.innerHeight());}return(value);}function t396_roundFloat(n){n = Math.round(n * 100) / 100;return(n);}function tn_console(str){if(window.tn_comments==1)console.log(str);}function t396_setUpTooltip_desktop(el, pinEl, tipEl) {var timer;pinEl.mouseover(function() {/*if any other tooltip is waiting its timeout to be hided — hide it*/$('.tn-atom__tip_visible').each(function(){var thisTipEl = $(this).parents('.t396__elem');if (thisTipEl.attr('data-elem-id') != el.attr('data-elem-id')) {t396_hideTooltip(thisTipEl, $(this));}});clearTimeout(timer);if (tipEl.css('display') == 'block') {return;}t396_showTooltip(el, tipEl);});pinEl.mouseout(function() {timer = setTimeout(function() {t396_hideTooltip(el, tipEl);}, 300);})}function t396_setUpTooltip_mobile(el,pinEl,tipEl) {pinEl.on('click', function(e) {if (tipEl.css('display') == 'block' && $(e.target).hasClass("tn-atom__pin")) {t396_hideTooltip(el,tipEl);} else {t396_showTooltip(el,tipEl);}});var id = el.attr("data-elem-id");$(document).click(function(e) {var isInsideTooltip = ($(e.target).hasClass("tn-atom__pin") || $(e.target).parents(".tn-atom__pin").length > 0);if (isInsideTooltip) {var clickedPinId = $(e.target).parents(".t396__elem").attr("data-elem-id");if (clickedPinId == id) {return;}}t396_hideTooltip(el,tipEl);})}function t396_hideTooltip(el, tipEl) {tipEl.css('display', '');tipEl.css({"left": "","transform": "","right": ""});tipEl.removeClass('tn-atom__tip_visible');el.css('z-index', '');}function t396_showTooltip(el, tipEl) {var pos = el.attr("data-field-tipposition-value");if (typeof pos == 'undefined' || pos == '') {pos = 'top';};var elSize = el.height();var elTop = el.offset().top;var elBottom = elTop + elSize;var elLeft = el.offset().left;var elRight = el.offset().left + elSize;var winTop = $(window).scrollTop();var winWidth = $(window).width();var winBottom = winTop + $(window).height();var tipElHeight = tipEl.outerHeight();var tipElWidth = tipEl.outerWidth();var padd=15;if (pos == 'right' || pos == 'left') {var tipElRight = elRight + padd + tipElWidth;var tipElLeft = elLeft - padd - tipElWidth;if ((pos == 'right' && tipElRight > winWidth) || (pos == 'left' && tipElLeft < 0)) {pos = 'top';}}if (pos == 'top' || pos == 'bottom') {var tipElRight = elRight + (tipElWidth / 2 - elSize / 2);var tipElLeft = elLeft - (tipElWidth / 2 - elSize / 2);if (tipElRight > winWidth) {var rightOffset = -(winWidth - elRight - padd);tipEl.css({"left": "auto","transform": "none","right": rightOffset + "px"});}if (tipElLeft < 0) {var leftOffset = -(elLeft - padd);tipEl.css({"left": leftOffset + "px","transform": "none"});}}if (pos == 'top') {var tipElTop = elTop - padd - tipElHeight;if (winTop > tipElTop) {pos = 'bottom';}}if (pos == 'bottom') {var tipElBottom = elBottom + padd + tipElHeight;if (winBottom < tipElBottom) {pos = 'top';}}tipEl.attr('data-tip-pos', pos);tipEl.css('display', 'block');tipEl.addClass('tn-atom__tip_visible');el.css('z-index', '1000');}function t396_hex2rgba(hexStr, opacity){var hex = parseInt(hexStr.substring(1), 16);var r = (hex & 0xff0000) >> 16;var g = (hex & 0x00ff00) >> 8;var b = hex & 0x0000ff;return [r, g, b, parseFloat(opacity)];} 
 
function t418_checkSize(recid){
  var el=$("#rec"+recid);
  var sizer = el.find('.t418__height');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var gallerywrapper = el.find(".t418__checksize");
  var gallerywidth = gallerywrapper.width();
  gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});

  var maxwidth = el.find(".t418__height").width();
  var windowwidth  = $(window).width();
  var value = windowwidth - 80;
  if (maxwidth > windowwidth) {
    el.find(".t418__item").css("max-width", value + "px");
    el.find(".t418__img").css("left", "20px");
    el.find(".t418__img").css("right", "20px");
  } else {
    el.find(".t418__item").css("max-width", "");
    el.find(".t418__img").css("left", "");
    el.find(".t418__img").css("right", "");
  }
}

function t418_init(recid){
  var el=$('#rec'+recid);
  var pos = 0;
  var t418_doResize;
  var totalSlides = el.find('.t418__item').length;
  var sliderWidth = el.find('.t418__item').width();

  $(window).resize(function() {
    if (t418_doResize) clearTimeout(t418_doResize);
    t418_doResize = setTimeout(function() {
      sliderWidth = el.find('.t418__item').width();
      el.find('.t418__slidecontainer').width(sliderWidth*totalSlides);
      console.log(sliderWidth);
    }, 200); 
  });
  
  el.find('.t418__slidecontainer').width(sliderWidth*totalSlides);
  
  el.find('.t418__next').click(function(){
    slideRight(recid);
  });

  el.find('.t418__previous').click(function(){
    slideLeft(recid);
  });

  function slideLeft(recid){
    var el=$('#rec'+recid);
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    el.find('.t418__slidecontainer').css({transform: 'translate(-' + (sliderWidth*pos) + 'px, 0)'})
    el.find('.t418__slidecontainer').css("transition-duration", ".3s");
    if(window.lazy=='y'){t_lazyload_update();}
  }

  function slideRight(recid){
    var el=$('#rec'+recid);
    pos++;
    if(pos==totalSlides){ pos = 0; }
    el.find('.t418__slidecontainer').css({transform: 'translate(-' + (sliderWidth*pos) + 'px, 0)'})
    el.find('.t418__slidecontainer').css("transition-duration", ".3s");
    if(window.lazy=='y'){t_lazyload_update();}
  }

  var swipeOptions = {
      triggerOnTouchEnd: true,
      swipeStatus: swipeStatus,
      allowPageScroll: "vertical",
      threshold: 75
  };

  el.find(".t418__slidecontainer").swipe(swipeOptions);
  el.find(".t418__slidecontainer").swipe( {
    tap:function(event, target) {
      slideRight(recid);
    }
  });

  function swipeStatus(event, phase, direction, distance) {
      if (phase == "move" && (direction == "left" || direction == "right")) {
          var duration = 0;

          if (direction == "left") {
              scrollImages((sliderWidth * pos) + distance, duration);
          } else if (direction == "right") {
              scrollImages((sliderWidth * pos) - distance, duration);
          }

      } else if (phase == "cancel") {
          scrollImages(sliderWidth * pos);
      } else if (phase == "end") {
          if (direction == "right") {
              slideLeft(recid);
          } else if (direction == "left") {
              slideRight(recid);
          }
      }
  }

  function scrollImages(distance, duration) {
      //el.find(".t418__slidecontainer").css("transition-duration", "0s");
      el.find(".t418__slidecontainer").css("transition-duration", (duration / 1000).toFixed(1) + "s");
      var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
      el.find(".t418__slidecontainer").css("transform", "translate(" + value + "px, 0)");
  }
}

                               
 
function t462_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "./"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "./"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "./"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "default.htm"; }
  $(".t462__list_item a[href='"+url+"']").addClass("t-active");
  $(".t462__list_item a[href='"+url+"default.htm']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='./"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"default.htm']").addClass("t-active");
  $(".t462__list_item a[href='./"+pathname+"default.htm']").addClass("t-active");
}

function t462_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t462_navLinks = $("#rec"+recid+" .t462__list_item a:not(.tooltipstered)[href*='#']");
      if (t462_navLinks.length>0){
      	t462_catchScroll(t462_navLinks);
      };
	}
}

function t462_catchScroll(t462_navLinks) {
    var t462_clickedSectionId = null,
      t462_sections = new Array(),
      t462_sectionIdTonavigationLink = {},
      t462_interval = 100,
      t462_lastCall,
      t462_timeoutId,
	  t462_offsetTop = $(".t270").attr("data-offset-top");
	if (typeof t462_offsetTop == "undefined") { t462_offsetTop = 0; }
	t462_navLinks = $(t462_navLinks.get().reverse());
	t462_navLinks.each(function(){
		var t462_cursection = t462_getSectionByHref($(this));
		if (typeof t462_cursection.attr("id") != "undefined") { t462_sections.push(t462_cursection); }
		t462_sectionIdTonavigationLink[t462_cursection.attr("id")] = $(this);
	});

	t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
	t462_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t462_navLinks.removeClass('t-active');	
          t462_sectionIdTonavigationLink[t462_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t462_clickedSectionId = t462_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t462_now = new Date().getTime();
		if (t462_lastCall && t462_now < (t462_lastCall + t462_interval) ) {
				clearTimeout(t462_timeoutId);
				t462_timeoutId = setTimeout(function () {
						t462_lastCall = t462_now;
						t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
				}, t462_interval - (t462_now - t462_lastCall) );
		} else {
				t462_lastCall = t462_now;
				t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
		}
	});
}

function t462_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,offsetTop) {	                                                      
	var t462_scrollPosition = $(window).scrollTop(),
		t462_valueToReturn = t462_clickedSectionId;
	$(t462_sections).each(function(e) {
			var t462_curSection = $(this),
					t462_sectionTop = t462_curSection.offset().top,
					t462_id = t462_curSection.attr('id'),
					t462_navLink = t462_sectionIdTonavigationLink[t462_id];
			if (t462_scrollPosition >= (t462_sectionTop - offsetTop) || (t462_sections[0].attr("id") == t462_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t462_clickedSectionId == null && !t462_navLink.hasClass('t-active')) {
					t462_navLinks.removeClass('t-active');
					t462_navLink.addClass('t-active');
					t462_valueToReturn = null;
				} else {
					if (t462_clickedSectionId != null && t462_id == t462_clickedSectionId) {
						t462_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t462_valueToReturn;
}

function t462_setPath(){
}

function t462_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t462").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t462_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t462").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t462_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t462_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t462"),
      burger=el.find(".t462__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t462_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}
 
function t478_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t478__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t478__blockimg, .t478__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((width/ratio)+'px')});
  }
} 
function t481_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "./"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "./"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "./"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "default.htm"; }
  $(".t481__list_item a[href='"+url+"']").addClass("t-active");
  $(".t481__list_item a[href='"+url+"default.htm']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='./"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"default.htm']").addClass("t-active");
  $(".t481__list_item a[href='./"+pathname+"default.htm']").addClass("t-active");
}

function t481_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t481_navLinks = $("#rec"+recid+" .t481__list_item a:not(.tooltipstered)[href*='#']");
      if (t481_navLinks.length>0){
      	t481_catchScroll(t481_navLinks);
      };
	}
}

function t481_catchScroll(t481_navLinks) {
    var t481_clickedSectionId = null,
      t481_sections = new Array(),
      t481_sectionIdTonavigationLink = {},
      t481_interval = 100,
      t481_lastCall,
      t481_timeoutId,
	  t481_offsetTop = $(".t270").attr("data-offset-top");
	if (typeof t481_offsetTop == "undefined") { t481_offsetTop = 0; }
	t481_navLinks = $(t481_navLinks.get().reverse());
	t481_navLinks.each(function(){
		var t481_cursection = t481_getSectionByHref($(this));
		if (typeof t481_cursection.attr("id") != "undefined") { t481_sections.push(t481_cursection); }
		t481_sectionIdTonavigationLink[t481_cursection.attr("id")] = $(this);
	});

	t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
	t481_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t481_navLinks.removeClass('t-active');	
          t481_sectionIdTonavigationLink[t481_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t481_clickedSectionId = t481_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t481_now = new Date().getTime();
		if (t481_lastCall && t481_now < (t481_lastCall + t481_interval) ) {
				clearTimeout(t481_timeoutId);
				t481_timeoutId = setTimeout(function () {
						t481_lastCall = t481_now;
						t481_clickedSectionId = t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
				}, t481_interval - (t481_now - t481_lastCall) );
		} else {
				t481_lastCall = t481_now;
				t481_clickedSectionId = t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
		}
	});
}

function t481_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,offsetTop) {	                                                      
	var t481_scrollPosition = $(window).scrollTop(),
		t481_valueToReturn = t481_clickedSectionId;
	$(t481_sections).each(function(e) {
			var t481_curSection = $(this),
					t481_sectionTop = t481_curSection.offset().top,
					t481_id = t481_curSection.attr('id'),
					t481_navLink = t481_sectionIdTonavigationLink[t481_id];                                                 			                                                      
			if (t481_scrollPosition >= (t481_sectionTop - offsetTop) || (t481_sections[0].attr("id") == t481_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t481_clickedSectionId == null && !t481_navLink.hasClass('t-active')) {
					t481_navLinks.removeClass('t-active');
					t481_navLink.addClass('t-active');					
					t481_valueToReturn = null;
				} else {
					if (t481_clickedSectionId != null && t481_id == t481_clickedSectionId) {
						t481_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t481_valueToReturn;
}

function t481_setPath(){
}

function t481_setWidth(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var left_exist=el.find('.t481__leftcontainer').length;
      var left_w=el.find('.t481__leftcontainer').outerWidth(true);
      var max_w=left_w;
      var right_exist=el.find('.t481__rightcontainer').length;
      var right_w=el.find('.t481__rightcontainer').outerWidth(true);
    var items_align=el.attr('data-menu-items-align');
      if(left_w<right_w)max_w=right_w;
      max_w=Math.ceil(max_w);
      var center_w=0;
      el.find('.t481__centercontainer').find('li').each(function() {
        center_w+=$(this).outerWidth(true);
      });
      //console.log(max_w);
      //console.log(center_w);
      var padd_w=40;
      var maincontainer_width=el.find(".t481__maincontainer").outerWidth(true);
      if(maincontainer_width-max_w*2-padd_w*2>center_w+20){
          //if(left_exist>0 && right_exist>0){
      if(items_align=="center" || typeof items_align==="undefined"){
            el.find(".t481__leftside").css("min-width",max_w+"px");
            el.find(".t481__rightside").css("min-width",max_w+"px");
            
          }
       }else{
          el.find(".t481__leftside").css("min-width","");
          el.find(".t481__rightside").css("min-width","");  
          
      }
    });
  }
}

function t481_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);             
      }
      });
      }else{
        $(".t481").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t481_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t481").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("visibility","visible");
                                el.animate({"opacity": "1"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.animate({"opacity": "0"}, 200,function() {
                            });
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t481_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t481_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t481"),
      burger=el.find(".t481__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t481_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}

 
function t533_equalHeight(recid){
  var el = $('#rec'+recid);
  el.find('.t533').css('visibility', 'visible');
  el.find('.t533__textwrapper').css('height','auto');
  $('#rec'+recid+' .t533__row').each(function() {
    var highestBox = 0;
    $('.t533__textwrapper', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t533__textwrapper',this).css('height', highestBox); 
    }else{
      $('.t533__textwrapper',this).css('height', "auto");    
    }
  });
}; 
function t576_init(recid){
  var el = $('#rec'+recid),
      line = el.find('.t576__line'),
      cirqle = el.find('.t576__cicqle'),
      block = el.find('.t576__item'),
      t576_resize;

  block.each(function() {
    $(this).find('.t576__circle').css('top', $(this).find('.t576__img').outerHeight() + 15);
  });

  el.find('.t576__item:first-child').find('.t576__line').css('top', el.find('.t576__item:first-child').find('.t576__img').outerHeight() + 15);
                      
  el.find('.t576__item:last-child').find('.t576__line').css('height', el.find('.t576__item:last-child').find('.t576__img').outerHeight() + 20);
} 
function t678_onSuccess(t678_form){
	var t678_inputsWrapper = t678_form.find('.t-form__inputsbox');
    var t678_inputsHeight = t678_inputsWrapper.height();
    var t678_inputsOffset = t678_inputsWrapper.offset().top;
    var t678_inputsBottom = t678_inputsHeight + t678_inputsOffset;
	var t678_targetOffset = t678_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t678_target = t678_targetOffset - 200;
    }	else {
        var t678_target = t678_targetOffset - 100;
    }

    if (t678_targetOffset > $(window).scrollTop() || ($(document).height() - t678_inputsBottom) < ($(window).height() - 100)) {
        t678_inputsWrapper.addClass('t678__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t678_target}, 400);
        setTimeout(function(){t678_inputsWrapper.addClass('t678__inputsbox_hidden');}, 400);
    }

	var successurl = t678_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}

 
function t706_onSuccessCallback(t706_form){
 /*if (typeof localStorage === 'object') {
	try {
	  localStorage.removeItem("tcart");
	} catch (e) {
	  console.log('Your web browser does not support localStorage.');
	}
 }		
 delete window.tcart;
 tcart__loadLocalObj();*/
 $( ".t706__cartwin-products" ).slideUp( 10, function() {	
 });
 $( ".t706__cartwin-bottom" ).slideUp( 10, function() {	
 });
 $( ".t706 .t-form__inputsbox" ).slideUp( 700, function() {	
 });
 /*window.tcart_success='yes';*/
 try {
	/*fix IOS11 cursor bug + general IOS background scroll*/
	tcart__unlockScroll();
 } catch (e) {}
} 
function t718_onSuccess(t718_form){
	var t718_inputsWrapper = t718_form.find('.t-form__inputsbox');
    var t718_inputsHeight = t718_inputsWrapper.height();
    var t718_inputsOffset = t718_inputsWrapper.offset().top;
    var t718_inputsBottom = t718_inputsHeight + t718_inputsOffset;
	var t718_targetOffset = t718_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t718_target = t718_targetOffset - 200;
    }	else {
        var t718_target = t718_targetOffset - 100;
    }

    if (t718_targetOffset > $(window).scrollTop() || ($(document).height() - t718_inputsBottom) < ($(window).height() - 100)) {
        t718_inputsWrapper.addClass('t718__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t718_target}, 400);
        setTimeout(function(){t718_inputsWrapper.addClass('t718__inputsbox_hidden');}, 400);
    }

	var successurl = t718_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t734_init(recid) {
    var rec = $('#rec' + recid);
    if ($('body').find('.t830').length > 0) {
        if (rec.find('.t-slds__items-wrapper').hasClass('t-slds_animated-none')) {
            t_sldsInit(recid);
        } else {
            setTimeout(function() {
                t_sldsInit(recid);
            }, 500);   
        }
    } else {
        t_sldsInit(recid);
    }

    rec.find('.t734').bind('displayChanged', function() {
        t_slds_updateSlider(recid);
    });
} 
function t756_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
    t756_initPopup(recid);
  }, 500);
}

function t756_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    $('.r').on('click', 'a[href="' + hook + '"]', function(e) {
      t756_showPopup(recid);
      e.preventDefault();

      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t756_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup'),
      sliderWrapper = el.find('.t-slds__items-wrapper'),
      sliderWidth = el.find('.t-slds__container').width(),
      pos = parseFloat(sliderWrapper.attr('data-slider-pos'));

  popup.css('display', 'block');

  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    t_slds_SliderWidth(recid);
    sliderWrapper = el.find('.t-slds__items-wrapper');
    sliderWidth = el.find('.t-slds__container').width();
    pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').mousedown(function(e){
    if (e.target == this) { t756_closePopup(recid); }
  });

  el.find('.t-popup__close, .t756__close-text').click(function(e){
    t756_closePopup(recid);
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t756_closePopup(recid);
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t756_closePopup(recid); }
  });
}

function t756_closePopup(recid){
  $('body').removeClass('t-body_popupshowed');
  $('#rec' + recid + ' .t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}
/* deprecated */
function t756_sendPopupEventToStatistics(popupname) {
  var virtPage = 'tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
} 
function t776__init(recid){
  setTimeout(function(){
    t_prod__init(recid);
    t776_initPopup(recid);
    t776__hoverZoom_init(recid);
    t776__updateLazyLoad(recid);
    t776__alignButtons_init(recid);
  }, 500);
}

function t776__alignButtons_init(recid) {
    var rec = $('#rec' + recid);
    if (rec.find('[data-buttons-v-align]')[0]) {
        try {
            t776__alignButtons(recid);
            $(window).bind(
                'resize',
                t_throttle(function() {
                    if (
                        typeof window.noAdaptive !== 'undefined' &&
                        window.noAdaptive === true &&
                        $isMobile
                    ) {
                        return;
                    }
                    t776__alignButtons(recid);
                }, 200)
            );

            $('.t776').bind('displayChanged', function() {
                t776__alignButtons(recid);
            });

            if ($isMobile) {
                $(window).on('orientationchange', function() {
                    t776__alignButtons(recid);
                });
            }
        } catch (e) {
            console.log('buttons-v-align error: ' + e.message);
        }
    }
}

function t776__alignButtons(recid) {
    var rec = $('#rec' + recid);
    var wrappers = rec.find('.t776__textwrapper');
    var maxHeight = 0;
    var itemsInRow = rec.find('.t-container').attr('data-blocks-per-row') * 1;
    
    var mobileView = $(window).width() <= 480;
    var tableView = $(window).width() <= 960 && $(window).width() > 480;
    var mobileOneRow = $(window).width() <= 960 && rec.find('.t776__container_mobile-flex')[0] ? true: false;
    var mobileTwoItemsInRow = $(window).width() <= 480 && rec.find('.t776 .mobile-two-columns')[0] ? true: false;

    if (mobileView) {
        itemsInRow = 1;
    }

    if (tableView) {
        itemsInRow = 2;
    }
    
    if (mobileTwoItemsInRow) {
        itemsInRow = 2;
    }

    if (mobileOneRow) {
        itemsInRow = 999999;
    }

    var i = 1;
    var wrappersInRow = [];
    
    $.each(wrappers, function(key, element) {
        element.style.height = 'auto';
        if (itemsInRow === 1) {
            element.style.height = 'auto';
        } else {
            wrappersInRow.push(element);
            if (element.offsetHeight > maxHeight) {
                maxHeight = element.offsetHeight;
            }

            $.each(wrappersInRow, function(key, wrapper) {
                wrapper.style.height = maxHeight + 'px';
            });
            
            if (i === itemsInRow) {
                i = 0;
                maxHeight = 0;
                wrappersInRow = [];
            }

            i++;
        }
    });
}

function t776__hoverZoom_init(recid) {
    if(isMobile) {
        return;
    }
    var rec = $('#rec'+recid);
    try {
        if (rec.find('[data-hover-zoom]')[0]) {
            if (!jQuery.cachedZoomScript) {
                jQuery.cachedZoomScript = function(url) {
                    var options = {
                        dataType: 'script',
                        cache: true,
                        url: url
                    };
                    return jQuery.ajax(options);
                };
            }
            $.cachedZoomScript(
                '../static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js'
            ).done(function(script, textStatus) {
                if (textStatus == 'success') {
                    setTimeout(function() {
                        t_hoverZoom_init(recid, ".t-slds__container");
                    }, 500);
                } else {
                    console.log('Upload script error: ' + textStatus);
                }
            });
        }
    } catch (e) {
        console.log('Zoom image init error: ' + e.message);
    } 
}

function t776__updateLazyLoad(recid) {
  var scrollContainer = $("#rec"+recid+" .t776__container_mobile-flex");
  var curMode = $(".t-records").attr("data-tilda-mode");
  if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
    scrollContainer.bind('scroll', t_throttle(function() {
        t_lazyload_update();
    }, 500));
  }
}

function t776_initPopup(recid){
    var rec=$('#rec' + recid);

    rec.find('[href^="#prodpopup"]').each(function(e) {
        var el_popup=rec.find('.t-popup');
        var el_prod=$(this).closest('.js-product');
        var lid_prod=el_prod.attr('data-product-lid');
        $(".r").find('a[href$="#!/tproduct/' + recid + '-' + lid_prod + '"]').click(function(e) {
            if (rec.find('[data-product-lid=' + lid_prod + ']').length) {
                rec.find('[data-product-lid=' + lid_prod + '] [href^="#prodpopup"]').triggerHandler('click');
            }
        });
    });

  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  t_sldsInit(recid+' #t776__product-' + lid_prod + '');
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      t776_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');
	  el_fullprod.css('display','block');

    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

      var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0) {
        if (typeof history.replaceState!='undefined'){
          window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);
        }
      }
      t776_updateSlider(recid+' #t776__product-' + lid_prod + '');
      if(window.lazy=='y'){t_lazyload_update();}
  });
  if ($('#record'+recid).length==0){ t776_checkUrl(recid); }
  t776_copyTypography(recid);
}

function t776_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ tprodIndex = curUrl.indexOf('%23!/tproduct/'); }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t776_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_slds_SliderWidth(recid);
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
}

function t776_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').mousedown(function(e){
    var windowWidth = $(window).width();
    var maxScrollBarWidth = 17;
    var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
    if(e.clientX > windowWithoutScrollBar) {
        return;
    }
    if (e.target == this) {
      t776_closePopup();
    }
  });

  el.find('.t-popup__close, .t776__close-text').click(function(e){
    t776_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t776_closePopup();
    }
  });
}

function t776_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ indexToRemove=curUrl.indexOf('%23!/tproduct/'); }
  curUrl=curUrl.substring(0,indexToRemove);
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
	if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);
    }                                                                        	
  }, 300);
}

function t776_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t776_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t776__title').attr('style');
	var descrStyle=rec.find('.t776__descr').attr('style');
	rec.find('.t-popup .t776__title').attr("style",t776_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t776__descr, .t-popup .t776__text').attr("style",t776_removeSizeStyles(descrStyle));
} 
function t875_init(recid) {
    if (document.layers) {document.captureEvents(Event.MOUSEDOWN);}
    document.onmousedown = t875_click;
    document.oncontextmenu = function(event) {
            var event = event || window.event;
            var sender = event.target || event.srcElement;
            if (sender.tagName.match(/INPUT|TEXTAREA/i)) {
                return;
            } else {
                return false;
            }
    };
    t875_preventSelection(document);
    t875_preventUserSelect();
}


function t875_preventUserSelect() {
    $('body').css({'-ms-user-select': 'none', '-moz-user-select': 'none', '-webkit-user-select': 'none', 'user-select': 'none', '-webkit-touch-callout': 'none'});
}

function t875_click(event) {
    t875_returnPrevent(event);

    if (document.all) {
        if (event.button == 2) {
            return false;
        }
    }
    if (document.layers) {
        if (event.which == 3) {
            return false;
        }
    }
}


function t875_preventSelection(element) {
    var preventSelection = false;

    t875_addHandler(element, 'mousemove', function() {
        if (preventSelection) {
            t875_removeSelection();
        }
    });

    t875_addHandler(element, 'mousedown', function(event) {
        var event = event || window.event;
        var sender = event.target || event.srcElement;
        preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
    });

    t875_addHandler(element, 'mouseup', function() {
        if (preventSelection) {
            t875_removeSelection();
        }
        preventSelection = false;
    });

    t875_addHandler(element, 'keydown', t875_killCtrlA);
    t875_addHandler(element, 'keyup', t875_killCtrlA);
    t875_addHandler(element, 'keydown', t875_killCtrlU);
    t875_addHandler(element, 'keyup', t875_killCtrlU);
    t875_addHandler(element, 'keydown', t875_killAltCmdI);
    t875_addHandler(element, 'keyup', t875_killAltCmdI);
    t875_addHandler(element, 'keydown', t875_killCtrlShiftI);
    t875_addHandler(element, 'keyup', t875_killCtrlShiftI);
}


function t875_addHandler(element, event, handler) {
    if (element.attachEvent) {
        element.attachEvent('on' + event, handler);
    } else {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
    }
}


function t875_removeSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection && document.selection.clear) {
        document.selection.clear();
    }
}


function t875_killCtrlU(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if ((event.ctrlKey && key == 'U'.charCodeAt(0)) || (event.altKey && event.metaKey && (key == 'U'.charCodeAt(0) || key == 'u'.charCodeAt(0)))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killAltCmdI(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if (event.altKey && event.metaKey && (key == 'I'.charCodeAt(0) || key == 'i'.charCodeAt(0))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killCtrlShiftI(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if (event.shiftKey && event.ctrlKey && (key == 'I'.charCodeAt(0) || key == 'i'.charCodeAt(0))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killCtrlA(event) {
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    if (sender.tagName.match(/INPUT|TEXTAREA|BUTTON/i)) {return;}

    var key = event.keyCode || event.which;
    if ((event.ctrlKey && key == 'A'.charCodeAt(0)) || (event.metaKey && key == 'A'.charCodeAt(0))) {
        t875_removeSelection();
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_returnPrevent(event) {
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    if (sender.tagName.match(/INPUT|TEXTAREA/i)) {return;}
}
 
function t886_init(recid) {
    var el = $('#rec' + recid);
    var block = el.find('.t886');
    var closeBtn = el.find('.t886__btn');
    var storageItem = block.attr("data-storage-item");
    var lastOpen = localStorage.getItem(storageItem);

    if (lastOpen == null) {
        block.removeClass('t886_closed');
    }

    closeBtn.click(function (e) {
        block.addClass('t886_closed');
        localStorage.setItem(storageItem, Math.floor(Date.now() / 1000));
        e.preventDefault();
    });
}
