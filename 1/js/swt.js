var bselink = "https://chat6.mo11shop.com/server.php";
var script_name = 'swt.js';
function _getUrlString(url,name)
{
     u = url.split('?');
     url = u[1] || '';
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = url.match(reg);
     if(r!=null)return  unescape(r[2]); return '';
}
function hidestyle(){
    var s = "display:none!important;z-index:-1!important;";
    if(document.all){ // document.createStyleSheet(url)
        window.style="#livezilla_wm{"+s+"}#lz_chat_state_bar{"+s+"}#lz_chat_apo{"+s+"}#lz_chat_apa{"+s+"}#livezilla_wm_chat{"+s+"}#lz_overlay_wm{"+s+"}";
        document.createStyleSheet("javascript:style");
    }else{ //document.createElement(style)
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML="#livezilla_wm{"+s+"}#lz_chat_state_bar{"+s+"}#lz_chat_apo{"+s+"}#lz_chat_apa{"+s+"}#livezilla_wm_chat{"+s+"}#lz_overlay_wm{"+s+"}";
        document.getElementsByTagName('head').item(0).appendChild(style);
    }
}
var src = document.scripts[document.scripts.length - 1].src;
var lz_ovlel_fsm = false;
var useticket = false;
var useknowlage = false;
var usephone = false;
var usechat = true;
var max = _getUrlString(src,'max');
var phone = _getUrlString(src,'phone');
var ticket = _getUrlString(src,'ticket');
var knowledge = _getUrlString(src,'knowledge');
var chat = _getUrlString(src,'chat');
var hide = _getUrlString(src,'hide');
if(src.indexOf(script_name) != '-1')
{
    if(max =='true') lz_ovlel_fsm = true;
    if(phone == 'true') usephone = true;
    if(ticket == 'true') useticket = true;
    if(knowledge == 'true') useknowlage = true;
    if(chat == 'false') usechat = false;
}
if(lz_ovlel_fsm)
{
    var oDiv = document.createElement('div');
    oDiv.innerHTML = '<div id="lz_chat_fs_loading"><div class="lz_anim_point_load" style="padding:5px 0 0 0;"><span></span><span></span><span></span></div></div>';
    oDiv.innerHTML += '<div id="lz_chat_fs_header" style="display:none;"><div id="lz_chat_fs_logo_left"><img src="" border="0"></div><div id="lz_chat_fs_logo_right"><img src="" border="0"></div></div>';
    oDiv.innerHTML += '<div id="lz_chat_fs_body" style="display:none;top:100px;"></div>';
    oDiv.innerHTML += '<div id="widget_frame" style="display: none;">';

    document.body.appendChild(oDiv);
    setTimeout(function(){
        document.getElementById('lz_chat_fs_loading').style.display='none';
        document.getElementById('lz_chat_fs_body').style.display='block';
        document.getElementById('lz_chat_fs_header').style.display='block';
        document.getElementById('widget_frame').style.display='block';
        lz_chat_scoll_down();
    },1000);
}
if(hide=='true')
{
    hidestyle();
}
var script = document.createElement("script");script.async=false;
script.type="text/javascript";
var src = bselink+"?rqst=track&output=jcrpt&ovlts=MA__&nse="+Math.random();
//src += '&';
src += '&ovlv=djI_';
src += '&ovlapo=MQ__';
src += '&ovlc=MQ__';
src += '&ovltwo=MQ__';
src += '&ovlmr=NDA_';
src += '&ovlbr=NQ__';
var lz_ovlel = [];
var lz_ovlel_rat = 1.2;
lz_ovlel.push({type:'wm',icon:'commenting'});
if(usechat)
    lz_ovlel.push({type:'chat',icon:'comments',counter:false});
if(useticket)
    lz_ovlel.push({type:'ticket',icon:'envelope'});
if(useknowlage)
    lz_ovlel.push({type:'knowledgebase',icon:'lightbulb-o',counter:true});
if(usephone)
    lz_ovlel.push({type:'phone',icon:'phone',inbound:false,outbound:true});
script.src=src;


var hasAppend = false;
function openZoosUrl(name)
{
    if(!hasAppend)
    {
        document.body.appendChild(script);
        setTimeout(function(){
            document.getElementById('livezilla_wm').click();
        },100);
        hasAppend = true;
    }
    else
    {
        document.getElementById('livezilla_wm').click();
    }
}
