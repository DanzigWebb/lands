(function($) {

    var clickId,
        country,
        // landUrl,
        progress = false,
        comebacker_launch = $.url(location.href).param('is_comebacker') == 1 ? true : false,
        debug = $.url(location.href).param('debug') ? true : false,
        callbacks = [],
        mailruId = $.url(location.href).param('mailruId'),
        yandexId = $.url(location.href).param('yandexId'),
        googleId = $.url(location.href).param('googleId'),
        fbId = $.url(location.href).param('fbId'),
        fbInit = false,
        runSr = true,
        cb_iJQ = function(urlredirect) {
            (function(A) {
                if (!String.prototype.trim)
                    A.trim = A.trim || function(object) {
                        return this.replace(/^\s+|\s+$/g, "");
                    };
                if (!String.prototype.ltrim)
                    A.ltrim = A.ltrim || function(object) {
                        return this.replace(/^\s+/, "");
                    };
                if (!String.prototype.rtrim)
                    A.rtrim = A.rtrim || function(object) {
                        return this.replace(/\s+$/, "");
                    };
            })(String.prototype);

            (function(A) {
                if (!Array.prototype.indexOf)
                    A.indexOf = A.indexOf || function(object) {
                        for (var i = 0, l = this.length; i < l; i++) {
                            if (i in this && this[i] === object) {
                                return i;
                            }
                        }
                        return -1;
                    };
                if (!Array.prototype.forEach)
                    A.forEach = A.forEach || function(action, that) {
                        for (var i = 0, l = this.length; i < l; i++)
                            if (i in this) action.call(that, this[i], i, this);
                    };
                if (!Array.prototype.push)
                    A.push = A.push || function() {
                        for (var i = 0, l = arguments.length; i < l; i++)
                            this[this.length] = arguments[i];
                        return this.length;
                    };
                A.inArray = function(needle, argStrict) {
                    var key = '',
                        strict = !!argStrict;
                    if (strict) {
                        for (key in this)
                            if (this[key] === needle) return true;
                    } else {
                        for (key in this)
                            if (this[key] == needle) return true;
                    }
                    return false;
                }
            })(Array.prototype);

            var array_exit_pages = new Array(),
                good_name = "CLEAN FORTE",
                comebacker = {
                    "settings": {
                        "dir_url": "/comebacker/",
                        "page_to": urlredirect,
                        "how_often_show": "every_time",
                        "button_name_capitalization": "first_upper",
                        "work_page": "",
                        "working_in_opera": "on",
                        "working_in_opera_after": "3"
                    },
                    "page": urlredirect,
                    "from": "0",
                    "to": "",
                    "exit_text": "------------------------------------------------\nПостойте. Мы хотим предложить вам скидку!\n------------------------------------------------\n\nЧтобы получить " + good_name + " со скидкой, просто нажмите \n\n на кнопку \"ОСТАТЬСЯ НА ЭТОЙ СТРАНИЦЕ\".\n\nВы действительно хотите покинуть эту страницу?\n\nОстаться на этой странице",
                    "bar": {
                        "link_text_left": "Сделано с помощью \"Comebacker\"",
                        "link_text_right": "Данный скрипт можно получить кликнув сюда",
                        "link_href": urlredirect,
                        "height": "12",
                        "background_color": "c9c7c7",
                        "link_size": "10",
                        "link_color": "242424"
                    },
                    "module_where_loaded": "site",
                    "audio": {
                        "mp3": "https://cbfilesfree.comebacker.ru/audio/ru/male/1.mp3",
                        "ogg": "https://cbfilesfree.comebacker.ru/audio/ru/male/1.ogg"
                    },
                    'temp': {
                        'audio_refresher': '',
                        'cursor_x': 0,
                        'cursor_y': 0,
                        'cursor_y_previous': 0,
                        'cancel_click': false,
                        'launch_time': 0,
                        'cache': {},
                        'anticache': 1779,
                        'start_time': comebacker_time(),
                        'log': []
                    },
                    "player": "/comebacker/player_mp3_js.swf"
                };

            array_exit_pages.push(comebacker['settings']['page_to']);
            var comebacker_html = { 'prefix': '', 'postfix': '', 'bar': '', 'image': '', 'audio': '', 'iframe': '' };
            comebacker_html['css'] = ' html{ height: 100%; }  body{ margin: 0px; padding: 0px; height: 100% !important; background: none; }';
            comebacker_html['prefix'] += '<div id="comebacker_main_div" style="overflow: hidden; width: 1px; height: 1px;">';
            comebacker_html['postfix'] = '</div>';
            comebacker_html['css'] += ' #comebacker_bar {background-color: #' +
                comebacker['bar']['background_color'] +
                '; height: ' +
                comebacker['bar']['height'] +
                'px; padding: 0px 7px 0px 7px;  line-height: ' +
                comebacker['bar']['height'] +
                'px; } #comebacker_bar a{color: #' +
                comebacker['bar']['link_color'] +
                '; font-size: ' +
                comebacker['bar']['link_size'] +
                'px; text-decoration: underline; font-family: tahoma;} #comebacker_bar a:hover{text-decoration: none;}</style>';

            /**
             * 1
             * @returns {*}
             */
            function cbDetectIE() {
                var ua = navigator.userAgent,
                    re = undefined;
                if ('Microsoft Internet Explorer' == navigator.appName) re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                else if ('Netscape' == navigator.appName) re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                else return false;
                if (null != re.exec(ua)) return parseFloat(RegExp.$1);
                return false;
            };

            /**
             * 1
             * @returns {boolean}
             */
            function cbDetectFlash() {
                result = false;
                try {
                    var foo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                    if (foo) result = true;
                } catch (e) {
                    if (undefined !== navigator.mimeTypes['application/x-shockwave-flash']) result = true;
                }
                return result;
            };

            if (cbDetectIE()) {
                comebacker_html['audio'] += '<object id="cb-audio-wmp21948" classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6" style="display:none;">';
                comebacker_html['audio'] += '  <param name="URL" value="' + comebacker.audio.mp3 + '" />';
                comebacker_html['audio'] += '  <param name="uiMode" value="invisible" />';
                comebacker_html['audio'] += '  <param name="autoStart" value="false" />';
                comebacker_html['audio'] += '  <param name="volume" value="100" />';
                comebacker_html['audio'] += '  <param name="playCount" value="1" />';
                comebacker_html['audio'] += '</object>';
            } else if (cbDetectFlash()) {
                window.cbAudioListener21948 = new Object();
                window.cbAudioListener21948.onInit = function() {
                    if ('undefined' === typeof window.cbAudioInstance21948)
                        window.cbAudioInstance21948 = new cbAudioObject({
                            mode: 'flash',
                            mp3: comebacker.audio.mp3,
                            ogg: comebacker.audio.ogg
                        });
                    window.cbAudioInstance21948.preferred_object.SetVariable('method:setUrl', window.cbAudioInstance21948.config.mp3);
                    window.cbAudioRefresher21948 = window.setInterval(function() {
                        window.cbAudioInstance21948.setPosition(0);
                    }, 3000);
                    window.cbAudioInstance21948.cb_initialize().setVolume(0).cb_play();
                    comebacker_log('audio player initialized, flash mode');
                };
                window.cbAudioListener21948.onUpdate = function() {};
                comebacker_html['audio'] += '<object id="cb-audio-flash21948" type="application/x-shockwave-flash" data="' + comebacker.player + '" width="1" height="1" style="position: absolute;">';
                comebacker_html['audio'] += '  <param name="movie" value="' + comebacker.player + '">';
                comebacker_html['audio'] += '  <param name="FlashVars" value="listener=cbAudioListener21948&amp;interval=500">';
                comebacker_html['audio'] += '  <audio id="cb-audio-html521948" preload="auto">';
                comebacker_html['audio'] += '    <source src="' + comebacker.audio.mp3 + '" type="audio/mpeg; codecs=mp3" />';
                comebacker_html['audio'] += '    <source src="' + comebacker.audio.ogg + '" type="audio/ogg; codecs=vorbis" />';
                comebacker_html['audio'] += '    <object id="cb-audio-wmp21948" classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6" style="display:none;">';
                comebacker_html['audio'] += '      <param name="URL" value=' + comebacker.audio.mp3 + ' />';
                comebacker_html['audio'] += '      <param name="uiMode" value="invisible" />';
                comebacker_html['audio'] += '      <param name="autoStart" value="false" />';
                comebacker_html['audio'] += '      <param name="volume" value="100" />';
                comebacker_html['audio'] += '      <param name="playCount" value="1" />';
                comebacker_html['audio'] += '    </object>';
                comebacker_html['audio'] += '  </audio>';
                comebacker_html['audio'] += '  <a href="http://www.adobe.com/go/getflash"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player"/></a>';
                comebacker_html['audio'] += '</object>';
            } else {
                comebacker_html['audio'] += '<audio id="cb-audio-html521948" preload="auto">';
                comebacker_html['audio'] += '  <source src="' + comebacker.audio.mp3 + '" type="audio/mpeg; codecs=mp3" />';
                comebacker_html['audio'] += '  <source src="' + comebacker.audio.ogg + '" type="audio/ogg; codecs=vorbis" />';
                comebacker_html['audio'] += '  <object id="cb-audio-wmp21948" classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6" style="display:none;">';
                comebacker_html['audio'] += '    <param name="URL" value="' + comebacker.audio.mp3 + '" />';
                comebacker_html['audio'] += '    <param name="uiMode" value="invisible" />';
                comebacker_html['audio'] += '    <param name="autoStart" value="false" />';
                comebacker_html['audio'] += '    <param name="volume" value="100" />';
                comebacker_html['audio'] += '    <param name="playCount" value="1" />';
                comebacker_html['audio'] += '  </object>';
                comebacker_html['audio'] += '</audio>';
            };

            /**
             * 2
             * @param config
             * @returns {cbAudioObject}
             */
            function cbAudioObject(config) {
                this.cb_initialized = false;
                this.preferred_mode = undefined;
                this.preferred_object = undefined;
                this.getPreferredMode = function() {
                    this.preferred_mode = undefined;
                    if (cbDetectIE()) {
                        this.preferred_object = document.getElementById("cb-audio-wmp21948");
                        if ('undefined' !== typeof this.preferred_object.playState) {
                            this.preferred_mode = 'wmp';
                            return this.preferred_mode;
                        };
                    };
                    if (cbDetectFlash()) {
                        this.preferred_mode = 'flash';
                        this.preferred_object = document.getElementById("cb-audio-flash21948");
                        return this.preferred_mode;
                    };
                    this.preferred_object = document.getElementById("cb-audio-html521948");
                    if (this.preferred_object.cb_play instanceof Function) {
                        this.preferred_mode = "html5";
                        return this.preferred_mode;
                    };
                    return undefined;
                };
                this.initializeMode = function() {
                    return this;
                };
                this.getPreferredFunctions = function() {
                    switch (this.preferred_mode) {
                        case "html5":
                            this.isPlaying = function() {
                                return !this.preferred_object.paused;
                            };
                            this.cb_play = function() {
                                this.preferred_object.cb_play();
                                return this;
                            };
                            this.cb_pause = function() {
                                this.preferred_object.cb_pause();
                                return this;
                            };
                            this.cb_stop = function() {
                                this.preferred_object.cb_pause();
                                this.preferred_object.currentTime = 0;
                                return this;
                            };
                            this.setPosition = function(position) {
                                this.preferred_object.currentTime = position;
                                return this;
                            };
                            this.setVolume = function(volume) {
                                this.preferred_object.volume = volume / 100;
                                return this;
                            };
                            break;
                        case "wmp":
                            this.isPlaying = function() {
                                return (3 == this.preferred_object.playState);
                            };
                            this.cb_play = function() {
                                this.preferred_object.controls.cb_play();
                                return this;
                            };
                            this.cb_pause = function() {
                                this.preferred_object.controls.cb_pause();
                                return this;
                            };
                            this.cb_stop = function() {
                                this.preferred_object.controls.cb_stop();
                                return this;
                            };
                            this.setPosition = function(position) {
                                this.preferred_object.controls.currentPosition = position;
                                return this;
                            };
                            this.setVolume = function(volume) {
                                this.preferred_object.settings.volume = volume;
                                return this;
                            };
                            break;
                        case "flash":
                            this.isPlaying = function() {};
                            this.cb_play = function() {
                                try {
                                    this.preferred_object.SetVariable('method:play', '');
                                    this.preferred_object.SetVariable('enabled', 'true');
                                } catch (e) {};
                                return this;
                            };
                            this.cb_pause = function() {
                                try {
                                    this.preferred_object.SetVariable('method:pause', '');
                                } catch (e) {};
                                return this;
                            };
                            this.cb_stop = function() {
                                try {
                                    this.preferred_object.SetVariable('method:stop', '');
                                } catch (e) {};
                                return this;
                            };
                            this.setPosition = function(position) {
                                try {
                                    this.preferred_object.SetVariable('method:setPosition', position);
                                } catch (e) {};
                                return this;
                            };
                            this.setVolume = function(volume) {
                                try {
                                    this.preferred_object.SetVariable('method:setVolume', volume);
                                } catch (e) {};
                                return this;
                            };
                            break;
                        default:
                            this.isPlaying = function() {};
                            this.cb_play = function() {};
                            this.cb_pause = function() {};
                            this.cb_stop = function() {};
                            this.setPosition = function(position) {
                                return this;
                            };
                            this.setVolume = function(volume) {
                                return this;
                            };
                            break;
                    };
                };

                this.cb_initialize = function() {
                    if (true === this.cb_initialized) return this;
                    if ('undefined' !== typeof config.preferred_mode) this.preferred_mode = config.preferred_mode;
                    else this.getPreferredMode();
                    this.initializeMode();
                    this.getPreferredFunctions();
                    this.cb_initialized = true;
                    return this;
                };
                this.config = config;
                return this;
            };


            if ('undefined' !== typeof(Storage)) localStorage.removeItem('cb_worked');
            var cb_iframe_styles = 'width: 100%; height: 100%; border: 0px; display: block;';
            comebacker_html['iframe'] = '<iframe id="comebacker_iframe" class="comebacker_iframe" src="' +
                comebacker['settings']['page_to'] +
                '" style="' +
                cb_iframe_styles +
                '"></iframe>';

            /**
             * 1 main launch
             * @returns {*}
             */
            function comebackerPlay(e) {
                if (comebacker_launch) {
                    $('#cb-audio-html521948').trigger('play');
                    return comebackerBodyRemove(e);
                }
            }

            function comebackerBodyRemove(e) {
                if (comebacker_launch) {
                    $('body').children().not('#comebacker_main_div').remove();
                    return comebackerHeadLinkRemove(e);
                }
            }

            function comebackerHeadLinkRemove(e) {
                if (comebacker_launch) {
                    $('head link').remove();
                    return comebackerHeadStyleRemove(e);
                }
            }

            function comebackerHeadStyleRemove(e) {
                if (comebacker_launch) {
                    $('head style').remove();
                    return comebackerMainSize(e);
                }
            }

            function comebackerMainSize(e) {
                if (comebacker_launch) {
                    $('#comebacker_main_div').css('width', '100%').css('height', '100%');
                    return comebackerMainFrame(e);
                }
            }

            function comebackerMainFrame(e) {
                if (comebacker_launch) {
                    $('#comebacker_iframe').css('display', 'block');
                    return comebackerMainDiv(e);
                }
            }

            function comebackerMainDiv(e) {
                if (comebacker_launch) {
                    $('#comebacker_main_div').append(comebacker_html['iframe']);
                    return comebackerMainCss(e);
                }
            }

            function comebackerMainCss(e) {
                if (comebacker_launch) {
                    $('body').append('<style>' + comebacker_html['css'] + '</style>');
                    return comebackerLaunch(e);
                }
            }

            function comebackerLaunch(e) {
                window.beforeunload = false;
                comebacker_launch = false;
                var confirmationMessage = 'Подождите! У нас есть специальное предложение для Вас!';
                (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                return confirmationMessage; //Webkit, Safari, Chrome etc.
            }

            if (true === comebacker_launch) {
                window.addEventListener("beforeunload", comebackerPlay);
            }

            comebacker_log('prepared for launch');

            comebacker_log('functions for audio loaded');

            jQuery(document).ready(function() {
                jQuery('body').append(comebacker_html['prefix'] + comebacker_html['audio'] + comebacker_html['postfix']);
                window.cbAudioInstance21948 = cbAudioObject({
                    mode: 'flash',
                    mp3: comebacker.audio.mp3,
                    ogg: comebacker.audio.ogg
                });
                window.cbAudioInstance21948.cb_initialize();
            });

            /**
             * 1
             * @returns {number}
             */
            function comebacker_time() {
                return Math.floor(new Date().getTime() / 1000);
            }

            /**
             * 2
             * @param message
             */
            function comebacker_log(message) {
                if ('undefined' != typeof(comebacker) &&
                    'undefined' != typeof(comebacker['temp']) &&
                    'undefined' != typeof(comebacker['temp']['log'])
                ) {
                    comebacker['temp']['log'].push(message);
                }
            }

            function comebacker_showlog() {
                console.log(comebacker['temp']['log']);
            }

            function comebacker_create_cookie(name, value, days) {
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    var expires = "; expires=" + date.toGMTString();
                } else var expires = "";
                document.cookie = name + "=" + value + expires + "; path=/;domain=." + document.domain.substring(document.domain.lastIndexOf(".", document.domain.lastIndexOf(".") - 1) + 1);
            }
        },
        upClick = function(options, callback, form) {
            callbacks.push({ callback: callback, form: form });
            if (debug) console.log(options, callback, form);
            if (progress) return;
            if (clickId) return callback(clickId, null, form);
            progress = true;
            var url = options.url;
            options.url = null;
            /** Чистим пустые значения */
            $.each(options, function(i, n) {
                if (!n) delete options[i];
            });
            if (debug) console.log(options, callback, form);
            /** Асинхронный запрос позволяет не вешать браузер */
            $.ajax({
                url: url,
                jsonpCallback: 'callback',
                dataType: 'jsonp',
                data: options,
                success: function(data) {
                    clickId = data.clickId;
                    country = data.country;
                    progress = false;
                    $(callbacks).each(function(i, obj) {
                        obj.callback(clickId, country, obj.form);
                    })
                    countryCheck(country);
                }
            }).always(function(result) {
                if (debug) console.log(result);
            });
            console.info('done');
        },
        addJsScript = function(clickId) {
            if (debug) console.log(clickId);
            /** Асинхронный запрос позволяет не вешать браузер */
            $.ajax({
                url: '//click.lucky.online/click/js.html?clickId=' + clickId + '&host=' + location.host,
                dataType: 'jsonp',
                success: function(data) {
                    eval(data);
                }
            }).always(function(result) {
                if (debug) console.log(result);
            });
            console.info('done');
        },
        submit_form = function(form, options) {
            var submit = $(form).serializeObject(),
                submitButton = $(form).find("[type='submit']").first(),
                leadUrl = options.leadUrl,
                comebacker_launch_old = comebacker_launch;
            comebacker_launch = false;
            // options.leadUrl = null;

            submitButton.attr("disabled", "disabled").css({ 'cursor': 'default' });

            if (submit.luckyPoll) {
                delete submit.luckyPoll
            }

            $.ajax({
                url: leadUrl,
                data: submit,
                dataType: 'jsonp',
                jsonpCallback: 'callback',
                success: function(data) {
                    if (data.error) {
                        options.errorCallback(form, data.error);
                        comebacker_launch = comebacker_launch_old;
                        submitButton.removeAttr("disabled").css({ 'cursor': 'pointer' });
                    } else {
                        options.successCallback(form, parseInt(data.id_order));
                    }
                }
            });

            return false;
        },
        // click_go = function(a, options) {
        //     comebacker_launch = false;
        //     if (landUrl.length > 0) document.location = landUrl;
        //     else $.ajax({
        //         url: options.landUrl,
        //         data: { click_id: $(a).data('clickId') },
        //         dataType: 'jsonp',
        //         jsonpCallback: 'callback',
        //         success: function(data) {
        //             if (data.error) {
        //                 alert("Ошибка: " + data.error.message);
        //             } else {
        //                 document.location = data.url;
        //             }
        //         }
        //     });

        //     return false;
        // },
        // counters = function() {
        //     try {
        //         var cMailru = function(mailruId) {
        //                 (function(d, id) {
        //                     var _tmr = window._tmr || (window._tmr = []);
        //                     _tmr.push({ id: id, type: "pageView", start: (new Date()).getTime() });
        //                     (function(d, w, id) {
        //                         if (d.getElementById(id)) return;
        //                         var ts = d.createElement("script");
        //                         ts.type = "text/javascript";
        //                         ts.async = true;
        //                         ts.id = id;
        //                         ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
        //                         var f = function() {
        //                             var s = d.getElementsByTagName("script")[0];
        //                             s.parentNode.insertBefore(ts, s);
        //                         };
        //                         if (w.opera == "[object Opera]") {
        //                             d.addEventListener("DOMContentLoaded", f, false);
        //                         } else {
        //                             f();
        //                         }
        //                     })(document, window, "topmailru-code");
        //                     var r = d.createElement('img'),
        //                         v = d.createElement('div'),
        //                         n = d.createElement('noscript');
        //                     r.src = '//top-fwz1.mail.ru/counter?id=' + id + ';js=na';
        //                     r.style = 'border:0;';
        //                     r.height = 1;
        //                     r.width = 1;
        //                     v.style = 'position:absolute;left:-10000px;';
        //                     v.appendChild(r);
        //                     n.appendChild(v);
        //                     d.body.appendChild(n);
        //                 })(document, mailruId);
        //             },
        //             cYandex = function(yandexId) {
        //                 (function(d, w, c, id) {
        //                     (w[c] = w[c] || []).push(function() {
        //                         try {
        //                             w.yacounter[yandexId] = new Ya.Metrika({
        //                                 id: id,
        //                                 clickmap: true,
        //                                 trackLinks: true,
        //                                 accurateTrackBounce: true,
        //                                 webvisor: true
        //                             });
        //                         } catch (e) {}
        //                     });
        //                     var n = d.getElementsByTagName("script")[0],
        //                         s = d.createElement("script"),
        //                         f = function() {
        //                             n.parentNode.insertBefore(s, n);
        //                         };
        //                     s.type = "text/javascript";
        //                     s.async = true;
        //                     s.src = "https://mc.yandex.ru/metrika/watch.js";
        //                     if (w.opera == "[object Opera]") {
        //                         d.addEventListener("DOMContentLoaded", f, false);
        //                     } else {
        //                         f();
        //                     }
        //                 })(document, window, "yandex_metrika_callbacks", yandexId);
        //             },
        //             cGoogle = function(googleId) {
        //                 var head = $('head');
        //                 var googleTagScript = "window.dataLayer = window.dataLayer || []; \n" +
        //                     "   function gtag(){dataLayer.push(arguments);} \n" +
        //                     "   gtag('js', new Date()); \n" +
        //                     "   gtag('config', '" + googleId + "'); \n";
        //                 head.prepend('<script>' + "\n" + googleTagScript + "\n" + '</script>');
        //                 head.prepend('<script src="https://www.googletagmanager.com/gtag/js?id=' + googleId + '"></script>');
        //             };
        //         if (mailruId) cMailru(mailruId);
        //         if (yandexId) cYandex(yandexId);
        //         if (googleId) cGoogle(googleId);
        //     } catch (e) { /** silence */ }
        // },
        // cFb = function(fbId, action) {
        //     if (!fbInit) {
        //         try {
        //             ! function(f, b, e, v, n, t, s) {
        //                 if (f.fbq) return;
        //                 n = f.fbq = function() {
        //                     n.callMethod ?
        //                         n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        //                 };
        //                 if (!f._fbq) f._fbq = n;
        //                 n.push = n;
        //                 n.loaded = !0;
        //                 n.version = '2.0';
        //                 n.queue = [];
        //                 t = b.createElement(e);
        //                 t.async = !0;
        //                 t.src = v;
        //                 s = b.getElementsByTagName(e)[0];
        //                 s.parentNode.insertBefore(t, s)
        //             }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        //             fbq('init', fbId);
        //             fbInit = true;
        //         } catch (e) {
        //             console.error(e);
        //         }
        //     }
        //     if (fbInit) {
        //         fbq('track', action || 'PageView');
        //     }
        // },
        countryCheck = function(country) {
            var select = $('select[name=country]');
            var selectCountries = [];
            var countryGet = $.url(location.href).param('country');

            select.find('option').each(function (k, v) {
                selectCountries[k] = v.value;
            });

            function countryValidate(country) {
                return (selectCountries.indexOf(country) !== -1);
            }

            if (countryGet && countryValidate(countryGet)) {
                select.val(countryGet).trigger("change");
            } else if (country && countryValidate(country)) {
                select.val(country).trigger("change");
            }
        }

    $.fn.leadprofit = function(options) {
        var url = location.href,
            click_id = $.url(url).param('click_id');
        options = $.extend($.url(url).param(), {
            clickId: parseInt(click_id),
            url: '//click.lucky.online/click/click.html',
            hash: null,
            isHashPrioritet: false
        }, options);
        options.hash = options.id = options.isHashPrioritet && options.hash ? options.hash : ($.url(url).param('cid') || options.hash);
        if (options.comebacker === false) {
            comebacker_launch = false;
        } else if (options.comebacker === true) {
            comebacker_launch = true;
        }
        if (options.clickId > 0) {
            clickId = options.clickId;
        }
        if (fbId) cFb(fbId);
        upClick(options, function(clickId, a) {
            addJsScript(clickId);
        }, this);
        return this;
    };
    $.fn.leadprofitSubmit = function(options) {
        options = $.extend({
            confirmUrl: 'confirm.html',
            srUrl: "//click.lucky.online/click/sr.html",
            leadUrl: "//click.lucky.online/lead/direct.html",
            topLocation: false,
            initPoll: false,
            errorCallback: function(form, errorMessage) {
                alert(errorMessage);
            },
            successCallback: function(form, idOrder) {
                var submit = $(form).serializeObject();
                $.cookie("name", submit.name, { expires: 30, path: '/' });
                $.cookie("phone", submit.phone, { expires: 30, path: '/' });
                $.cookie("return", location.href, { expires: 30, path: '/' });

                var docLoc = !options.topLocation ? document : top;

                if (options.initPoll && submit.luckyPoll) {
                    $.ajax({
                        url: 'https://lucky.online/api-lead-poll/send.html',
                        data: { data: submit.luckyPoll, click_id: submit.click_id },
                        dataType: 'json',
                        type: "POST",
                        success: changeLocation
                    });
                } else {
                    changeLocation()
                }

                function changeLocation() {
                    docLoc.location = $(form).data('confirm-url')
                        .replace("{id}", idOrder).replace("%7Bid%7D", idOrder)
                        .replace("{country}", submit.country).replace("%7Bcountry%7D", submit.country);
                }

            },
            counterParams: {}
        }, options);

        if (options.runSr !== undefined) {
            runSr = options.runSr;
        }

        var confirmUrl = $.url(options.confirmUrl);
        options.counterParams = $.extend($.url(location.href).param(), confirmUrl.param(), options.counterParams, { 'id': "{id}" });

        this.each(function(i, form) {
            $(form).data('confirm-url', confirmUrl.attr('base') + confirmUrl.attr('path') + '?' + $.param(options.counterParams));
        });
        var callback = function(clickId, country, form) {

            var input = $(form).find('input[name=click_id]');

            if (typeof input.val() !== "undefined") {
                input.val(clickId).data('leadprofitOptions', options);
            } else {
                $('<input>').attr({
                    type: 'hidden',
                    name: 'click_id',
                    value: clickId
                }).data('leadprofitOptions', options).appendTo(form);
            }

        };
        this.each(function(i, form) {
            upClick(options, callback, form);
        });
        this.on('submit', function() {
            return submit_form(this, options);
        });
        upClick(options, function(clickId, a) {
            if (runSr) {
                $.ajax({
                    url: options.srUrl,
                    data: { click_id: clickId },
                    dataType: 'jsonp',
                    type: "POST",
                    jsonpCallback: 'callback',
                    success: function(data) {
                        if (debug) console.log(data);
                    }
                });
            }
        }, this);
        return this;
    };
    $.fn.leadprofitPreland = function(options) {
        var url = location.href,
            click_id = $.url(url).param('click_id');
        options = $.extend({
            // clickId: parseInt(click_id),
            // url: '//click.lucky.online/click/click.html',
            // landUrl: "//click.lucky.online/click/landing-url.html",
            isHashPrioritet: false
        }, options);
        options.hash = options.id = options.isHashPrioritet && options.hash ? options.hash : ($.url(url).param('cid') || options.hash);
        var callback = function(clickId, a) {
            $(a).data('clickId', clickId);

            if (typeof(updatePricePreLead) === "function") {
                updatePricePreLead(country);
            }
        };
        this.on('click contextmenu', function() {
            return click_go(this, options);
        });
        if (options.clickId > 0) {
            clickId = options.clickId;
        }
        this.each(function(i, a) {
            upClick(options, callback, a);
        });
        // upClick(options, function(clickId, a) {
        //     $.ajax({
        //         url: options.landUrl,
        //         data: { click_id: clickId },
        //         dataType: 'jsonp',
        //         type: "POST",
        //         jsonpCallback: 'callback',
        //         success: function(data) {
        //             landUrl = data.url;
        //             if (debug) console.log(data);
        //             cb_iJQ(data.url);
        //             loadShowcase();
        //         }
        //     });
        // }, this);
        return this;
    };
    $.fn.leadprofitEmail = function(options) {
        options = $.extend({
            emailUrl: '//click.lucky.online/notification/email.html',
            clickId: null,
        }, options);
        this.each(function(i, emailInput) {
            emailInput = $(emailInput);
            if ("undefined" !== typeof $.cookie("email") && $.cookie("email").length) {
                emailInput.val($.cookie("email"));
                // emailInput.attr("disabled", "disabled").css({'background':'#e9f4fb'});
                // submitButton.attr("disabled", "disabled").css({'cursor':'default'});
            }
            emailInput.parent("form").submit(function(e) {
                var submitButton = $(this).find("button[type='submit']").first(),
                    color = emailInput.css('background');
                e.preventDefault();
                emailInput.attr("disabled", "disabled").css({ 'background': '#e9f4fb' });
                submitButton.attr("disabled", "disabled").css({ 'cursor': 'default' });
                $.ajax({
                    url: options.emailUrl,
                    jsonpCallback: 'callback',
                    dataType: 'jsonp',
                    data: {
                        'click_id': options.clickId ? options.clickId : $.leadprofitClickId(),
                        'email': emailInput.val()
                    },
                    success: function(data) {
                        if (data.success == true) {
                            alert("Спасибо за вашу заявку!");
                            $.cookie("email", emailInput.val(), { expires: 30 });
                        } else {
                            emailInput.removeAttr("disabled").css({ 'background': color });
                            submitButton.removeAttr("disabled").css({ 'cursor': 'pointer' });
                            alert("Проверьте заполнение формы!");
                        }
                    }
                }).always(function(result) {
                    if (debug) console.log(result);
                }).fail(function() {
                    emailInput.removeAttr("disabled").css({ 'background': color });
                    submitButton.removeAttr("disabled").css({ 'cursor': 'pointer' });
                });
            });
        });
    };
    $.fn.leadprofitConfirm = function(options) {
        $('#leadprofit-id').text($.url(location.href).param('id'));
        $('#leadprofit-name').text($.cookie("name"));
        $('#leadprofit-phone').text($.cookie("phone"));
        $('#leadprofit-returnurl').attr('href', $.cookie("return"));

        if ($("input[name='email']").length) {
            $("input[name='email']").leadprofitEmail({ clickId: $.url(location.href).param('id') });
        }
        if (fbId) cFb(fbId, 'Lead');
        return this;
    };
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    $.leadprofitClickId = function() {
        return clickId;
    };
    // $.leadproLandUrl = function() {
    //     return landUrl;
    // };
    $.leadprofitSendTest = function(options) {
        options = $.extend({
            url: '//click.lucky.online/notification/send-test.html',
            classItem: '.test__question',
            classQuestion: '.test__question-name',
            debug: false
        }, options);
        var data = [];
        $(options.classItem).each(function(i, item) {
            var name = $(item).find(options.classQuestion).first().text().trim(),
                value = [],
                input, label;
            $(item).find('input').each(function(i, input) {
                input = $(input);
                if (input.prop('name') == 'user-age') {
                    value.push(input.val());
                    data.push([
                        'age',
                        value
                    ]);
                } else if (input.prop('type') == 'text')
                    value.push(input.val());
                else if (input.is(':checked'))
                    value.push($(item).find("label[for*='" + input.prop('id') + "']").first().text().trim());
            });
            data.push([
                '#' + i + ' ' + name,
                value
            ]);
        });
        if (options.debug) {
            console.log(data);
            return 'done';
        }
        $.ajax({
            type: "POST",
            url: options.url,
            data: {
                click_id: clickId,
                data: data
            },
            success: function(data) {
                if (debug) console.log(data);
            },
            dataType: 'json'
        });
    };
    $.fn.leadprofitAddComment = function(options) {
        options = $.extend({
            commentUrl: '//click.lucky.online/lead/add-comment.html',
            clickId: $.url(location.href).param('id'),
        }, options);
        $(this).on('click', function() {
            $.ajax({
                url: options.commentUrl,
                jsonpCallback: 'callback',
                dataType: 'jsonp',
                data: {
                    'click_id': options.clickId ? options.clickId : $.leadprofitClickId(),
                    'comment': $(this).data('comment')
                },
                success: function(data) {
                    if (data.success == true) {
                        alert("Спасибо за вашу заявку!");
                    } else {
                        console.log(data);
                    }
                }
            }).fail(function(error) {
                console.log(error);
            });
        });
    };
    counters();
})(jQuery);

function loadShowcase() {
    var showcase = document.createElement('script');
    showcase.type = 'text/javascript';
    showcase.src = '//lucky.online/showcase/showcase-selected-js.html?click_id=' + $.leadprofitClickId();
    document.body.appendChild(showcase);
}

function clickfp() {
    var uascript = document.createElement('script');
    uascript.type = 'text/javascript';
    uascript.src = 'https://cdn.jsdelivr.net/npm/ua-parser-js@0/dist/ua-parser.min.js';
    document.body.appendChild(uascript);

    var fpscript = document.createElement('script');
    fpscript.type = 'text/javascript';
    fpscript.src = '//lucky.online/js/fp.js';
    document.body.appendChild(fpscript);

    var track = document.createElement('script');
    track.type = 'text/javascript';
    track.src = '//lucky.online/js/tr.js';
    document.body.appendChild(track);
}

clickfp();
