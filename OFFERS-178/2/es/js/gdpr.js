/*
=======================================================================
 * Item Name    : GDPR Cookie Law
 * Item URL     : https://codecanyon.net/item/gdpr-cookie-law/22061612
 * Item Version : 1.0.6
 * Author by    : jablonczay
=======================================================================
 */

;(function ($, undefined) {

    var pluginName, baseName, baseEl, desc, animList, defaults;

    desc = '';
    desc += 'We use cookies to ensure that we give you the best experience on our website. ';
    desc += 'By continuing to use our site, you accept our cookie policy.';
    pluginName = 'gdprCookieLaw';
    baseName = 'gdpr-cookie-law';
    animList = ['fade', 'slide', 'fade-slide'];

    defaults = {
        expire: 365,
        breakpoint: '768px',
        zIndex: 1000000000,
        delay: null,
        theme: null,
        animationStatus: true,
        animationDuration: 500,
        animationName: 'fade',
        position: 'bottom',
        margin: null,
        padding: '20px',
        width: 'auto',
        bgColor: '#09a0e1',
        bgColorOpacity: 1,
        boxShadowStatus: true,
        boxShadowHorizonalOffset: '0px',
        boxShadowVerticalOffset: '0px',
        boxShadowBlur: '30px',
        boxShadowSpread: '0px',
        boxShadowColor: '#000',
        boxShadowOpacity: 0.05,
        fontFamily: null,
        fontSize: '16px',
        fontWeight: 'normal',
        color: '#fff',
        contentWidth: 'auto',
        desc: desc,
        contentAndBtnHorizontalSpace: '3em',
        contentAndBtnVerticalSpace: '2em',
        moreLinkStatus: true,
        moreLinkDecorationStatus: true,
        moreLinkDecorationType: 'dotted',
        moreLinkText: 'More information',
        moreLinkColor: '#fff',
        moreLinkFontFamily: null,
        moreLinkFontSize: '16px',
        moreLinkFontWeight: 'bold',
        moreLinkHref: null,
        btnAcceptText: 'Accept',
        btnAcceptPaddingTop: '15px',
        btnAcceptPaddingRight: '56px',
        btnAcceptPaddingBottom: '13px',
        btnAcceptPaddingLeft: '56px',
        btnAcceptBgColor: '#0780c0',
        btnAcceptBgColorHover: '#0670b0',
        btnAcceptBgColorFocus: '#0670b0',
        btnAcceptBgColorActive: '#0670b0',
        btnAcceptColor: '#fff',
        btnAcceptColorHover: '#fff',
        btnAcceptColorFocus: '#fff',
        btnAcceptColorActive: '#fff',
        btnAcceptBorderRadius: '999px',
        btnAcceptFontFamily: null,
        btnAcceptFontSize: '14px',
        btnAcceptFontWeight: 'bold'
    };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {

        var that, opt, delay;

        that = this;
        opt = that.options;
        delay = parseInt(opt.delay, 10);

        function initFns() {
            that.setStyle(opt);
            that.setTpl(opt);
            that.setAnimationName(baseEl, opt, 'in');
            that.accept(baseEl, opt);
            that.forceSmByWidth(baseEl, opt);
            that.resize(baseEl, opt);
        }

        if (!delay) {
            initFns();
        } else if (delay > 0) {
            setTimeout(initFns, delay);
        }
    };

    Plugin.prototype.hexToRgba = function (hex, alpha) {

        var c;

        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){

            c = hex.substring(1).split('');

            if(c.length === 3){
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }

            c = '0x'+c.join('');

            return 'rgba(' + [(c>>16)&255, (c>>8)&255, c&255].join(',') + ',' + alpha + ')';
        }

        throw new Error('Bad hex value!');
    };

    Plugin.prototype.setAnimationName = function (baseEl, opt, type, cb) {

        if (!opt.animationStatus) return;
        if (animList.indexOf(opt.animationName) === -1) return;

        var anim, animIn, animOut, clsList, cls, clsAnim;

        if (opt.animationName === 'fade') {

            animIn = 'fade-in';
            animOut = 'fade-out';

        } else if (opt.animationName === 'slide') {

            if (/^top/.test(opt.position)) {
                animIn = 'slide-in-down';
                animOut = 'slide-out-up';
            } else if (/^bottom/.test(opt.position)) {
                animIn = 'slide-in-up';
                animOut = 'slide-out-down';
            }

        } else if (opt.animationName === 'fade-slide') {

            if (/^top/.test(opt.position)) {
                animIn = 'fade-in-down';
                animOut = 'fade-out-up';
            } else if (/^bottom/.test(opt.position)) {
                animIn = 'fade-in-up';
                animOut = 'fade-out-down';
            }

        }

        if (type === 'in') {
            anim = animIn;
        } else if (type === 'out') {
            anim = animOut;
        }

        clsList = [
            baseName + '--animation-fade-in',
            baseName + '--animation-fade-out',
            baseName + '--animation-slide-in-up',
            baseName + '--animation-slide-in-down',
            baseName + '--animation-slide-out-up',
            baseName + '--animation-slide-out-down'
        ];

        cls = baseName + '--animation-' + anim;
        clsAnim =  baseName + '--animated';


        clsList.forEach(function (cls) {
            baseEl.classList.remove(cls);
        });

        baseEl.classList.add(cls);
        baseEl.classList.add(clsAnim);

        $(baseEl)
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                this.classList.remove(cls);
                this.classList.remove(clsAnim);

                if (cb && typeof cb === 'function') cb();
            });
    };

    Plugin.prototype.setStyle = function (opt) {

        var styleText, style = {};

        // Element Animation
        style.animation = '';
        style.animation += opt.animationStatus ? ' -webkit-animation-duration: ' + opt.animationDuration + 'ms; animation-duration: ' + opt.animationDuration + 'ms;' : '';

        // Element zIndex
        style.zIndex = '';
        style.zIndex += ' z-index: ' + opt.zIndex + ';';

        // Element Top
        style.top = '';
        style.top += opt.position === 'top' ? ' top: 0; bottom: initial;': '';

        // Element Bottom
        style.bottom = '';
        style.bottom += opt.position === 'bottom' ? ' bottom: 0; top: initial;': '';

        // Element Bottom Left
        style.bottomLeft = '';
        style.bottomLeft += opt.position === 'bottom-left' ? ' bottom: ' + (opt.margin ? opt.margin + ';' : '0;') + ' top: initial; left: ' + (opt.margin ? opt.margin + ';' : '0;') + ' right: initial;': '';

        // Element Bottom Center
        style.bottomCenter = '';
        style.bottomCenter += opt.position === 'bottom-center' ? ' bottom: ' + (opt.margin ? opt.margin + ';' : '0;') + ' top: initial; right: 0; left: 0; margin-left: auto; margin-right: auto;' : '';

        // Element Bottom Right
        style.bottomRight = '';
        style.bottomRight += opt.position === 'bottom-right' ? ' bottom: ' + (opt.margin ? opt.margin + ';' : '0;') + ' top: initial; right: ' + (opt.margin ? opt.margin + ';' : '0;') + ' left: initial;': '';

        // Element Top Left
        style.topLeft = '';
        style.topLeft += opt.position === 'top-left' ? ' top: ' + (opt.margin ? opt.margin + ';' : '0;') + ' bottom: initial; left: ' + (opt.margin ? opt.margin + ';' : '0;') + ' right: initial; margin-left: auto; margin-right: auto;': '';

        // Element Top Center
        style.topCenter = '';
        style.topCenter += opt.position === 'top-center' ? ' top: ' + (opt.margin ? opt.margin + ';' : '0;') + ' bottom: initial; right: 0; left: 0; margin-left: auto; margin-right: auto;' : '';

        // Element Top Right
        style.topRight = '';
        style.topRight += opt.position === 'top-right' ? ' top: ' + (opt.margin ? opt.margin + ';' : '0;') + ' bottom: initial; right: ' + (opt.margin ? opt.margin + ';' : '0;') + ' left: initial;': '';

        // Element Padding
        style.padding = '';
        style.padding += opt.padding ? ' padding: ' + opt.padding + ';' : '';

        // Element Width
        style.width = '';
        style.width += opt.width ? ' width: ' + opt.width + ';' : '';
        style.width += opt.margin ? ' max-width: -webkit-calc(100% - ' +  (window.parseInt(opt.margin, 10) * 2) + 'px); max-width: calc(100% - ' +  (window.parseInt(opt.margin, 10) * 2) + 'px);' : '';

        // Element Background Color
        style.bgColor = '';
        style.bgColor += opt.bgColor ? ' background-color: ' + this.hexToRgba(opt.bgColor, opt.bgColorOpacity) + ';' : '';

        // Element Box Shadow
        style.boxShadow = '';
        style.boxShadow += opt.boxShadowStatus ? ' -webkit-box-shadow: ' + opt.boxShadowHorizonalOffset + ' ' + opt.boxShadowVerticalOffset + ' ' + opt.boxShadowBlur + ' ' + opt.boxShadowSpread + ' ' + this.hexToRgba(opt.boxShadowColor, opt.boxShadowOpacity) + ';' : '';
        style.boxShadow += opt.boxShadowStatus ? ' -moz-box-shadow: ' + opt.boxShadowHorizonalOffset + ' ' + opt.boxShadowVerticalOffset + ' ' + opt.boxShadowBlur + ' ' + opt.boxShadowSpread + ' ' + this.hexToRgba(opt.boxShadowColor, opt.boxShadowOpacity) + ';' : '';
        style.boxShadow += opt.boxShadowStatus ? ' box-shadow: ' + opt.boxShadowHorizonalOffset + ' ' + opt.boxShadowVerticalOffset + ' ' + opt.boxShadowBlur + ' ' + opt.boxShadowSpread + ' ' + this.hexToRgba(opt.boxShadowColor, opt.boxShadowOpacity) + ';' : '';

        // Element Font Family
        style.fontFamily = opt.fontFamily ? (' font-family: ' + opt.fontFamily + ';') : '';

        // Element Font Size
        style.fontSize = '';
        style.fontSize += opt.fontSize ? (' font-size: ' + opt.fontSize + ';') : '';

        // Element Font Weight
        style.fontWeight = '';
        style.fontWeight += opt.fontWeight ? (' font-weight: ' + opt.fontWeight + ';') : '';

        // Element Color
        style.color = '';
        style.color += opt.color ? (' color: ' + opt.color + ';') : '';

        // Content And Button Horizontal Space
        style.contentAndBtnHorizontalSpace = '';
        style.contentAndBtnHorizontalSpace += opt.contentAndBtnHorizontalSpace ? (' padding-bottom: 0; padding-right: ' + opt.contentAndBtnHorizontalSpace + ';') : '';

        // Content And Button Vertical Space
        style.contentAndBtnVerticalSpace = '';
        style.contentAndBtnVerticalSpace += opt.contentAndBtnVerticalSpace ? (' padding-right: 0; padding-bottom: ' + opt.contentAndBtnVerticalSpace + ';') : '';

        // Content Width
        style.contentWidth = '';
        style.contentWidth += opt.contentWidth ? ' width: ' + opt.contentWidth + ';' : '';

        // More Link Decoration
        style.moreLinkDecoration = '';
        style.moreLinkDecoration += (opt.moreLinkDecorationStatus && opt.moreLinkDecorationType && opt.moreLinkDecorationType !== 0 && opt.moreLinkDecorationType !== 'none') ? ' border-bottom: 1px ' + opt.moreLinkDecorationType + ' currentColor' + ';' : '';

        // More Link Color
        style.moreLinkColor = '';
        style.moreLinkColor += opt.moreLinkColor ? (' color: ' + opt.moreLinkColor + ';') : '';

        // More Link Font Family
        style.moreLinkFontFamily = '';
        style.moreLinkFontFamily += opt.moreLinkFontFamily ? (' font-family: ' + opt.moreLinkFontFamily + ';') : '';

        // More Link Font Size
        style.moreLinkFontSize = '';
        style.moreLinkFontSize += opt.moreLinkFontSize ? (' font-size: ' + opt.moreLinkFontSize + ';') : '';

        // More Link Font Weight
        style.moreLinkFontWeight = '';
        style.moreLinkFontWeight += opt.moreLinkFontWeight ? (' font-weight: ' + opt.moreLinkFontWeight + ';') : '';

        // Button Padding Top
        style.btnAcceptPaddingTop = '';
        style.btnAcceptPaddingTop += opt.btnAcceptPaddingTop ? (' padding-top: ' + opt.btnAcceptPaddingTop + ';') : '';

        // Button Padding Right
        style.btnAcceptPaddingRight = '';
        style.btnAcceptPaddingRight += opt.btnAcceptPaddingRight ? (' padding-right: ' + opt.btnAcceptPaddingRight + ';') : '';

        // Button Padding Bottom
        style.btnAcceptPaddingBottom = '';
        style.btnAcceptPaddingBottom += opt.btnAcceptPaddingBottom ? (' padding-bottom: ' + opt.btnAcceptPaddingBottom + ';') : '';

        // Button Padding Left
        style.btnAcceptPaddingLeft = '';
        style.btnAcceptPaddingLeft += opt.btnAcceptPaddingLeft ? (' padding-left: ' + opt.btnAcceptPaddingLeft + ';') : '';

        // Button Background Colors
        style.btnAcceptBgColor = '';
        style.btnAcceptBgColor += opt.btnAcceptBgColor ? (' background-color: ' + opt.btnAcceptBgColor + ';') : '';

        style.btnAcceptBgColorHover = '';
        style.btnAcceptBgColorHover += opt.btnAcceptBgColorHover ? (' background-color: ' + opt.btnAcceptBgColorHover + ';') : '';

        style.btnAcceptBgColorFocus = '';
        style.btnAcceptBgColorFocus += opt.btnAcceptBgColorFocus ? (' background-color: ' + opt.btnAcceptBgColorFocus + ';') : '';

        style.btnAcceptBgColorActive = '';
        style.btnAcceptBgColorActive += opt.btnAcceptBgColorActive ? (' background-color: ' + opt.btnAcceptBgColorActive + ';') : '';

        // Button Colors
        style.btnAcceptColor = '';
        style.btnAcceptColor += opt.btnAcceptColor ? (' color: ' + opt.btnAcceptColor + ';') : '';

        style.btnAcceptColorHover = '';
        style.btnAcceptColorHover += opt.btnAcceptColorHover ? (' color: ' + opt.btnAcceptColorHover + ';') : '';

        style.btnAcceptColorFocus = '';
        style.btnAcceptColorFocus += opt.btnAcceptColorFocus ? (' color: ' + opt.btnAcceptColorFocus + ';') : '';

        style.btnAcceptColorActive = '';
        style.btnAcceptColorActive += opt.btnAcceptColorActive ? (' color: ' + opt.btnAcceptColorActive + ';') : '';

        // Button Border Radius
        style.btnAcceptBorderRadius = '';
        style.btnAcceptBorderRadius +=  opt.btnAcceptBorderRadius ? (' border-radius: ' + opt.btnAcceptBorderRadius + ';') : '';

        // Button Font Family
        style.btnAcceptFontFamily = '';
        style.btnAcceptFontFamily +=  opt.btnAcceptFontFamily ? (' font-family: ' + opt.btnAcceptFontFamily + ';') : '';

        // Button Font Size
        style.btnAcceptFontSize = '';
        style.btnAcceptFontSize +=  opt.btnAcceptFontSize ? (' font-size: ' + opt.btnAcceptFontSize + ';') : '';

        // Button Font Weight
        style.btnAcceptFontWeight = '';
        style.btnAcceptFontWeight +=  opt.btnAcceptFontWeight ? (' font-weight: ' + opt.btnAcceptFontWeight + ';') : '';

        // CSS
        styleText = '';
        styleText += '.' + baseName + ' {' + style.animation + style.zIndex + style.top + style.bottom + style.bottomLeft + style.bottomCenter + style.bottomRight + style.topLeft + style.topCenter + style.topRight + style.padding + style.width + style.bgColor + style.boxShadow + style.fontFamily  + style.fontSize + style.fontWeight + style.color + ' }' + "\r\n";

        if (opt.animationStatus && opt.animationName === 'fade') {
            styleText += '.' + baseName + '--animation-fade-in {' + ' -webkit-animation-name: ' + baseName + '-fade-in; animation-name: ' + baseName + '-fade-in;' + ' }' + "\r\n";
            styleText += '.' + baseName + '--animation-fade-out {' + ' -webkit-animation-name: ' + baseName + '-fade-out; animation-name: ' + baseName + '-fade-out;' + ' }' + "\r\n";
        }

        if (opt.animationStatus && opt.animationName === 'slide') {
            styleText += '.' + baseName + '--animation-fade-slide-in-up {' + ' -webkit-animation-name: ' + baseName + '-slide-in-up; animation-name: ' + baseName + '-slide-in-up;' + ' }' + "\r\n";
            styleText += '.' + baseName + '--animation-fade-slide-in-down {' + ' -webkit-animation-name: ' + baseName + '-slide-in-down; animation-name: ' + baseName + '-slide-in-down;' + ' }' + "\r\n";
            styleText += '.' + baseName + '--animation-fade-slide-out-up {' + ' -webkit-animation-name: ' + baseName + '-slide-out-up; animation-name: ' + baseName + '-slide-out-up;' + ' }' + "\r\n";
            styleText += '.' + baseName + '--animation-fade-slide-out-down {' + ' -webkit-animation-name: ' + baseName + '-slide-out-down; animation-name: ' + baseName + '-slide-out-down;' + ' }' + "\r\n";
        }

        styleText += '.' + baseName + '__body {' + style.contentWidth + ' }' + "\r\n";
        styleText += '.' + baseName + '__btn--accept {'+ style.btnAcceptPaddingTop + style.btnAcceptPaddingRight + style.btnAcceptPaddingBottom + style.btnAcceptPaddingLeft + style.btnAcceptBgColor + style.btnAcceptColor + style.btnAcceptBorderRadius + style.btnAcceptFontFamily + style.btnAcceptFontSize + style.btnAcceptFontWeight + ' }' + "\r\n";
        styleText += '.' + baseName + '__btn--accept:hover {' + style.btnAcceptBgColorHover + style.btnAcceptColorHover + ' }' + "\r\n";
        styleText += '.' + baseName + '__btn--accept:focus {' + style.btnAcceptBgColorFocus + style.btnAcceptColorFocus + ' }' + "\r\n";
        styleText += '.' + baseName + '__btn--accept:active {' + style.btnAcceptBgColorActive + style.btnAcceptColorActive + ' }' + "\r\n";

        if (opt.moreLinkStatus) {
            styleText += '.' + baseName + '__link {' + style.moreLinkDecoration + style.moreLinkColor + style.moreLinkFontFamily + style.moreLinkFontSize + style.moreLinkFontWeight + ' }' + "\r\n";
        }

        styleText += '.' + baseName + '__desc {' + style.contentAndBtnHorizontalSpace + ' }' + "\r\n";
        styleText += '.' + baseName + '--sm ' + '.' + baseName + '__desc,' + "\r\n" + '.' + baseName + '--sm-fix ' + '.' + baseName + '__desc {' + style.contentAndBtnVerticalSpace + ' }' + "\r\n";

        document.querySelector('head').insertAdjacentHTML('beforeend', '<style id="' + baseName + '-style">' + styleText + '</style>');
    };

    Plugin.prototype.getTpl = function (opt) {

        var tpl = '';

        tpl += '<div class="' + baseName + ((this.getCookie(baseName) !== null) ? ' ' + baseName + '--is-hidden' : '') + ((opt.theme !== null) ? ' ' + baseName + '--' + opt.theme : '') + '" id="' + baseName + '">';
        tpl += '<div class="' + baseName + '__body">';
        tpl += '<div class="' + baseName + '__desc">';
        tpl += opt.desc;
        if (opt.moreLinkStatus) {
            tpl += ' ' + '<a class="' + baseName + '__link" href="' + ((opt.moreLinkHref) ? opt.moreLinkHref : '#') + '" target="_blank">' + opt.moreLinkText + '</a>';
        }
        tpl += '</div>';
        tpl += '<div class="' + baseName + '__btn-bar">';
        tpl += '<button class="' + baseName + '__btn ' + baseName + '__btn--accept" id="' + baseName + '-accept-btn" type="button">' + opt.btnAcceptText + '</button>';
        tpl += '</div>';
        tpl += '</div>';
        tpl += '</div>';

        return tpl;
    };

    Plugin.prototype.setTpl = function (opt) {
        var tpl = this.getTpl(opt);
        document.querySelector('body').insertAdjacentHTML('beforeend', tpl);
        baseEl = document.getElementById(baseName);
    };

    Plugin.prototype.getCookie = function (name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    };

    Plugin.prototype.setCookie = function (name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    };

    Plugin.prototype.accept = function (baseEl, opt) {

        var that = this;

        function acceptClickHandler() {

            this.blur();

            if (!opt.animationStatus || animList.indexOf(opt.animationName) === -1) {

                baseEl.classList.add(baseName + '--is-hidden');
                if (that.getCookie(baseName) !== null) return;
                that.setCookie(baseName, '1', opt.expire);

            } else if (opt.animationStatus) {

                that.setAnimationName(baseEl, opt, 'out', function () {
                    baseEl.classList.add(baseName + '--is-hidden');

                    if (that.getCookie(baseName) !== null) return;
                    that.setCookie(baseName, '1', opt.expire);
                });
            }
        }

        baseEl.querySelector('.' + baseName + '__btn--accept').addEventListener('click', acceptClickHandler);
    };

    Plugin.prototype.forceSmByWidth = function (baseEl, opt) {

        if (!opt.width || opt.width === 'auto') return;

        var w, bp;

        w = window.parseInt(opt.width, 10);
        bp = window.parseInt(opt.breakpoint, 10);

        baseEl.classList.remove(baseName + '--sm-fix');

        if (w >= bp) return;

        baseEl.classList.add(baseName + '--sm-fix');
    };

    Plugin.prototype.resize = function (baseEl, opt) {

        var mq;

        function resizeHandler() {
            mq = window.matchMedia('(min-width: ' + opt.breakpoint + ')');
            baseEl.classList.remove(baseName + '--sm');
            if (!mq.matches) baseEl.classList.add(baseName + '--sm');
        }

        window.addEventListener('resize', resizeHandler);
        resizeHandler();
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin(this, options));
            }
        });
    };
})(jQuery);
