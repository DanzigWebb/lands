if("undefined"==typeof scaaffCheck&&(scaaffCheck=!1),!scaaffCheck){function scaaff_is_installed(){for(var e=!1,a=document.getElementsByTagName("script"),t=0;t<a.length;++t){var o=a[t].getAttribute("src");if(a[t].innerText.indexOf("asyncLoad")>=0&&a[t].innerText.indexOf("sca_affiliate.js")>=0||o&&o.indexOf("shop=")>=0&&o.indexOf("sca_affiliate.js")>=0){console.log("already has scripttag, load AFF"),e=!0;break}}return e}if(scaaff_is_installed()){scaaffCheck=!0;var scaAppUrl="https://af.secomapp.com",scaCdn="https://d1639lhkj5l89m.cloudfront.net",scaLoadScript=function(e,a){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,a())}:t.onload=function(){a()},t.src=e,document.getElementsByTagName("head")[0].appendChild(t)};function scaParseQueryString(e){for(var a=e.split("&"),t={},o=0;o<a.length;o++){var i=a[o].split("="),r=decodeURIComponent(i[0]),c=decodeURIComponent(i[1]);if(void 0===t[r])t[r]=decodeURIComponent(c);else if("string"==typeof t[r]){var n=[t[r],decodeURIComponent(c)];t[r]=n}else t[r].push(decodeURIComponent(c))}return t}function scaSetCookieExpiredSecond(e,a,t){var o=new Date;o.setTime(o.getTime()+1e3*t);var i="expires="+o.toUTCString();document.cookie=e+"="+a+";"+i+";path=/"}function scaSetCookie(e,a,t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var i="expires="+o.toUTCString();document.cookie=e+"="+a+";"+i+";path=/"}function scaGetCookie(e){for(var a=e+"=",t=document.cookie.split(";"),o=0;o<t.length;o++){for(var i=t[o];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(a))return i.substring(a.length,i.length)}return"none"}function scaGetShopName(){var e=Shopify.shop.indexOf("myshopify.com");return Shopify.shop.substr(0,e-1)}function scaPostClickTracking(e,a){e.sca_source=localStorage.getItem("scaaf_sca_source_secomus")||void 0,jQuerySCAAF.ajax({type:"POST",async:!1,url:scaAppUrl+"/api/click_tracking",crossDomain:!0,data:e,dataType:"json",success:function(e,t,o){"ok"==e.status?(localStorage.setItem("scaaf_tid",e.tid),localStorage.setItem("scaaf_ep",1e3*e.ep),scaSetCookie("scaaf_tid",e.tid,360),scaSetCookie("scaaf_ep",1e3*e.ep,360),localStorage.setItem("scaaf_received","true")):clearInterval(a)},error:function(e,t,o){console.warn(e,t,o),clearInterval(a)}})}function scaPostCartToken(e,a){e.ug=navigator.userAgent,e.sca_source=localStorage.getItem("scaaf_sca_source_secomus")||void 0,jQuerySCAAF.ajax({type:"POST",async:!1,url:scaAppUrl+"/api/ctk",crossDomain:!0,data:e,dataType:"json",success:function(t,o,i){"ok"==t.status?(scaSetCookie("scaaf_tid",t.tid,360),localStorage.setItem("scaaf_tid",t.tid),localStorage.setItem("scaaf_ctk",e.ctk),scaSetCookie("scaaf_ctk",e.ctk,360),localStorage.setItem("scaaf_received","true"),scaGetCouponCode()):clearInterval(a)},error:function(e,t,o){console.warn(e,t,o),clearInterval(a)}})}function restoreLocalStorage(e,a,t,o,i){localStorage.setItem("scaaf_aid",e),localStorage.setItem("scaaf_tid",a),localStorage.setItem("scaaf_c_c",t),localStorage.setItem("scaaf_ctk",o),localStorage.setItem("scaaf_ep",i)}function scaPostCheckoutToken(){let e={aid:localStorage.getItem("scaaf_aid"),ct_tk:Shopify.Checkout.token,s:shopName,hc:localStorage.getItem("scaaf_hc"),order_id:Shopify.checkout.order_id};e.sca_source=localStorage.getItem("scaaf_sca_source_secomus")||void 0,jQuerySCAAF.ajax({type:"POST",async:!1,url:scaAppUrl+"/api/ct_tk",crossDomain:!0,data:e,dataType:"json",success:function(e,a,t){e.status},error:function(e,a,t){console.warn(e,a,t)}})}function scaPostAffiliatePurchase(e){var a=e.target;jQuerySCAAF(a).text("Loading...."),jQuerySCAAF(a).prop("disabled",!0),data={email:Shopify.checkout.email,first_name:Shopify.checkout.billing_address.first_name,last_name:Shopify.checkout.billing_address.last_name,shop:Shopify.shop},jQuerySCAAF.ajax({type:"POST",async:!0,url:scaAppUrl+"/api/post_affiliate_purchase",crossDomain:!0,data:data,dataType:"json",beforeSend:function(){jQuerySCAAF(a).text("Loading....")},success:function(e,a,t){if("ok"==e.status){let a='<div class="result_wrapper" style="display: flex;padding:20px;"><div class="input-link-wrapper" style="flex-grow: 1;"><input class="sca_ip" id="sca_referral_link_ip" style="border: 1px solid rgba(33,33,33,.12);color:#237392;font-weight:600;padding:10px;width:100%;" type="text" name="" value="'+e.referral_link+'"></div><button class="sca_bt sca_btn_copy" id="sca_popup_copy_btn" onclick="scaCopy(\'sca_referral_link_ip\',\'sca_popup_copy_btn\')" style="margin-left: 15px;" >Copy link</button></div>',t='<a href="https://www.facebook.com/sharer.php?u='+e.referral_link+'" title="Share on Facebook" target="_blank"><img src="'+scaCdn+'/img/facebook.svg"></a><a href="https://twitter.com/intent/tweet?url='+e.referral_link+'" title="Share on Twitter" target="_blank"><img src="'+scaCdn+'/img/twitter.svg"></a><a href="http://pinterest.com/pin/create/link/?url='+e.referral_link+'" title="Share on Pinterest" target="_blank"><img src="'+scaCdn+'/img/pinterest.svg"></a><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url='+e.referral_link+'" title="Share on LinkedIn" target="_blank"><img src="'+scaCdn+'/img/linkedin.svg"></a>';jQuerySCAAF("#sca_result_wrapper").html(a),jQuerySCAAF("#sca_share").html(t),jQuerySCAAF("#sca_share").show()}},error:function(e,a,t){console.warn(e,a,t)}})}function scaShowPurchasePopup(e){jQuerySCAAF("head").append('<style type="text/css">.sca_modal_overlay{z-index:1000;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center}.sca_modal_container{background-color:#fff;max-height:100vh;margin-left:8px;margin-right:8px;border-radius:4px;overflow-y:auto;box-sizing:border-box}.sca_modal_header{display:flex;justify-content:space-between;align-items:center}.sca_modal_title{margin-top:0;margin-bottom:0;font-weight:600;font-size:1.25rem;line-height:1.25;color:#00449e;box-sizing:border-box}.sca_modal_close{background:0 0;border:0}.x-btn{font-size:18px}.modal_content{margin-top:2rem;margin-bottom:2rem;line-height:1.5;color:rgba(0,0,0,.8)}.modal_btn{font-size:.875rem;background-color:#e6e6e6;color:rgba(0,0,0,.8);border-radius:.25rem;border-style:none;border-width:0;cursor:pointer;-webkit-appearance:button;text-transform:none;overflow:visible;line-height:1.15;margin:0;will-change:transform;-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out;padding:.5rem 1rem}.modal_btn:focus,.modal_btn:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.modal_btn-primary{background-color:#00449e;color:#fff}@keyframes mmfadeIn{from{opacity:0}to{opacity:1}}@keyframes mmfadeOut{from{opacity:1}to{opacity:0}}@keyframes mmslideIn{from{transform:translateY(15%)}to{transform:translateY(0)}}@keyframes mmslideOut{from{transform:translateY(0)}to{transform:translateY(-10%)}}.sml{display:none}.sml.is-open{display:block}.sml[aria-hidden=false] .sca_modal_overlay{animation:mmfadeIn .3s cubic-bezier(0,0,.2,1)}.sml[aria-hidden=false] .sca_modal_container{animation:mmslideIn .3s cubic-bezier(0,0,.2,1)}.sml[aria-hidden=true] .sca_modal_overlay{animation:mmfadeOut .3s cubic-bezier(0,0,.2,1)}.sml[aria-hidden=true] .sca_modal_container{animation:mmslideOut .3s cubic-bezier(0,0,.2,1)}.sml .sca_modal_container,.sml .sca_modal_overlay{will-change:transform}#sca_main{text-align:center}#sca_content{max-width:400px;width:80%;display:inline-block;overflow:hidden}#sca_title{font-size:1.2rem;text-align:center;padding:16px 8px 2px}#sca_subtitle{font-size:.8rem;opacity:.9;text-align:center;padding:8px 4px}.x-btn{position:absolute;top:4px;right:8px;cursor: pointer;border-radius: 0.25rem;background-color: lightgray;padding:0px 6px 4px 6px;}#sca_share{padding:10px 0 12px;background-color:#efefef;text-align:center}#sca_share a{text-decoration:none;margin:4px;width:32px;height:32px;display:inline-block}#sca_share a:hover,#sca_share a:visited{text-decoration:none;margin:4px;width:32px;height:32px;display:inline-block}#sca_share img{width:28px;height:28px;margin:2px;transition:.1s}.sca_input_block_parent{margin:16px 4px}.sca_input_block{display:flex;border-radius:2px;border:1px solid #ced4da}.sca_input{border:transparent;background:0 0;outline:0;flex:1;padding:0 4px;opacity:.75;font-size:1rem}.sca_copy_button{background-color:#efefef;border-color:transparent;padding:4px;height:100%;min-width:60px;min-height:32px;font-size:1rem}.sca_copy_button:hover{background-color:#ddd}.input_label{font-weight:700;font-size:.8rem;display:inline-block;width:100%;margin:0;padding:0;text-align:left}#sca_reg_mode_manual_btn{font-size:1.2rem;display:inline-block;padding:.8rem 1rem;margin:1rem;text-decoration:none;box-shadow:0 0 12px #bbb}.sca_input-group{display:table;border-collapse:collapse;width:100%}.sca_input-group>div{display:table-cell;border:1px solid #ddd;vertical-align:middle}.sca_input-group-icon{background:#eee;color:#777;padding:0 12px}.sca_input-group-area{width:100%}.sca_input-group input{border:0;display:block;width:100%;padding:8px}.sca_ip{-webkit-writing-mode:horizontal-tb!important;text-rendering:auto;color:initial;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;display:inline-block;text-align:start;-webkit-appearance:textfield;background-color:#fff;-webkit-rtl-ordering:logical;cursor:text;margin:0;font:400 13.3333px Arial;padding:1px 0;border-width:2px;border-style:inset;border-color:initial;border-image:initial}.sca_bt{-webkit-appearance:button;-webkit-writing-mode:horizontal-tb!important;text-rendering:auto;color:buttontext;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;display:inline-block;text-align:center;align-items:flex-start;cursor:default;background-color:buttonface;box-sizing:border-box;margin:0;font:400 13.3333px Arial;padding:1px 6px;border-width:2px;border-style:outset;border-color:buttonface;border-image:initial}</style>');let a='<div id="sca_purchase_popup_modal_container"><div class="sml is-open" id="modal-1" aria-hidden="false"><div class="sca_modal_overlay" id="sca_modal_overlay" tabindex="-1" data-micromodal-close=""><div class="sca_modal_container" id="modal_container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title" style="max-width: '+e.image_width+'px; width: 90%;"><button class="sca_modal_close x-btn" aria-label="Close modal" data-micromodal-close="">x</button><div id="sca_popup"><div id="sca_img" style="background-image: url('+scaCdn+"/"+e.header_image+"); background-position: center center; background-repeat: no-repeat; background-size: cover; width: 100%; height: "+e.image_height+'px;"></div><div id="sca_main" style="display: block;"><div id="sca_content"><h2 id="sca_title" style="font-size:24px;color:'+e.title_color+';">'+e.title+'</h2><div id="sca_subtitle" style="color:'+e.subtitle_color+';">'+e.sub_title+'</div><div id="sca_result_wrapper"><a onclick="scaPostAffiliatePurchase(event)" id="sca_reg_mode_manual_btn"  style="cursor: pointer;background-color: '+e.button_background+"; color: "+e.button_text_color+"; border-radius: "+e.button_border_radius+'px; ">'+e.button_text+' <div class="loader"></div></a></div></div></div><div id="sca_share" style="display:none"></div></div></div></div></div></div>';jQuerySCAAF("body").append(a)}function scaCopyToClipboard(e){if(e="string"==typeof e?document.querySelector(e):e,navigator.userAgent.match(/ipad|ipod|iphone/i)){var a=e.contentEditable,t=e.readOnly;e.contentEditable=!0,e.readOnly=!0;var o=document.createRange();o.selectNodeContents(e);var i=window.getSelection();i.removeAllRanges(),i.addRange(o),e.setSelectionRange(0,999999),e.contentEditable=a,e.readOnly=t}else e.select();document.execCommand("copy")}function scaCopy(e,a){var t=document.getElementById(e),o=document.getElementById(a);scaCopyToClipboard(t),o.innerHTML="Copied",setTimeout(function(){o.innerHTML="Copy link"},1e3)}var shopName=scaGetShopName();function scaGetCouponCode(){"none"!==scaGetCookie("scaaf_aid")&&jQuerySCAAF.ajax({type:"GET",url:scaAppUrl+"/api/get_coupon",crossDomain:!0,data:{aid:scaGetCookie("scaaf_aid")},dataType:"json",success:function(e,a,t){if("ok"==e.status){var o=e.coupon;if("none"===scaGetCookie("scaaf_cp")||o!=scaGetCookie("scaaf_cp")){scaSetCookieExpiredSecond("scaaf_cp",o,30);var i=encodeURI("/discount/"+o);i=i.replace("#","%2523"),jQuerySCAAF("body").prepend('<iframe src="'+i+'" height=0 width=0 frameborder=0 marginheight=0 marginwidth=0 scrolling=no onload="scroll(0,0);"></iframe>')}}}})}scaLoadScript("//code.jquery.com/jquery-3.0.0.min.js",function(){jQuerySCAAF=jQuery.noConflict(!0),scaGetCouponCode();var e=scaParseQueryString(window.location.search.substring(1)),a=localStorage.getItem("scaaf_tid"),t=(scaGetCookie("tracked_start_checkout"),navigator.userAgent);if(void 0!==e.sca_ref){var o=e.sca_ref.split("."),i={aid:o[0],hc:o[1],s:shopName,tid:a,ug:t},r=localStorage.getItem("scaaf_c_c"),c=(new Date).getTime();localStorage.setItem("scaaf_received","false"),localStorage.setItem("scaaf_aid",i.aid),localStorage.setItem("scaaf_hc",i.hc),localStorage.setItem("scaaf_c_c",c),void 0!==e.sca_source&&(localStorage.setItem("scaaf_sca_source_secomus",e.sca_source),scaSetCookie("scaaf_sca_source_secomus",e.sca_source,360)),scaSetCookie("scaaf_aid",i.aid,360),scaSetCookie("scaaf_c_c",c,360),null==r?scaPostClickTracking(i):c-r>6e4&&scaPostClickTracking(i),void 0!==e.sca_rib&&(window.location.href=e.sca_rib)}null!=localStorage.getItem("scaaf_aid")&&Shopify.Checkout&&Shopify.Checkout.token&&localStorage.getItem("scaaf_ep")>(new Date).getTime()&&scaPostCheckoutToken();var n=setInterval(function(){var e=localStorage.getItem("scaaf_ctk"),a=scaGetCookie("cart");if("none"!==a){if(null!=localStorage.getItem("scaaf_tid")&&null!=localStorage.getItem("scaaf_aid")){var o=localStorage.getItem("scaaf_ep");if(null!=o&&o<(new Date).getTime())return clearInterval(n),"";if(a!=e)scaPostCartToken({aid:localStorage.getItem("scaaf_aid"),tid:localStorage.getItem("scaaf_tid"),ctk:a,s:shopName},n)}else{var i=scaGetCookie("scaaf_tid"),r=scaGetCookie("scaaf_aid");if("none"!==i&&"none"!==r){var c=scaGetCookie("scaaf_ctk");restoreLocalStorage(r,i,scaGetCookie("scaaf_c_c"),c,scaGetCookie("scaaf_ep"))}}if("false"==localStorage.getItem("scaaf_received"))scaPostClickTracking({aid:localStorage.getItem("scaaf_aid"),hc:localStorage.getItem("scaaf_hc"),s:shopName,tid:localStorage.getItem("scaaf_tid"),ug:t},n)}},1e3);Shopify.Checkout&&Shopify.checkout.email&&(jQuerySCAAF.ajax({type:"GET",url:scaAppUrl+"/api/purchase_popup/setting",crossDomain:!0,data:{shop:Shopify.shop,email:Shopify.checkout.email},dataType:"json",success:function(e,a,t){if("ok"==e.status){let a=e.settings;"none"!=scaGetCookie("sca_p_p_show_once")&&0!=a.show_only_once||(scaShowPurchasePopup(a.design),1==a.close_background_click&&(window.onclick=function(e){var a=document.getElementById("sca_modal_overlay");e.target==a&&(a.style.display="none")}),1==a.show_only_once&&scaSetCookie("sca_p_p_show_once",1,365))}},error:function(e,a,t){console.warn(e,a,t)}}),jQuerySCAAF(document).on("click",".sca_modal_close",function(){jQuerySCAAF("#sca_purchase_popup_modal_container").hide()}))})}}