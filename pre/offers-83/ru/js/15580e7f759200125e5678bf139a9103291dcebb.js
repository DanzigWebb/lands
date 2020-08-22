const Euf4fEjL5QC74KJSI = {
    'keys': [
        new H8iU4zxZsylbGJHgH(1, 'BD2jH0og9CXu2KInsR5Bz5K3r6rahGAsUQMzLX43_rwSCMwdlPW-UzBN-jkfhTT7ITTKH3oM5UFV5cg8lnRuTDg'),
        new H8iU4zxZsylbGJHgH(2, 'BJjsoHIZ-2NirXJLNbwR6N97WmQRkcHlHZHxiJZdqKC89r5OvlqS3i2Zb-Qz2LVtxrSg6sEh4mKHBKRRUeU0cLc'),
        new H8iU4zxZsylbGJHgH(3, 'BE0TAnOaexPvSm5-of09OihyycgPQnoF5dqD2E5fyQbs9BRMk2aa9DTRpJSy33aVskbjfZCLOHDO5vHBvdm6WeU'),
        new H8iU4zxZsylbGJHgH(4, 'BDVVLtZKwYCIffQqmFBtu2u3OdgqC6eBOnlYNRyXjLKMjgll7T2xZALtJgt7RJwIuHJ6-rnjegAYnTTwZcBd0P4'),
        new H8iU4zxZsylbGJHgH(5, 'BNsj1e8NOE2dpOx7NKcSvLPBi5rS0xGuGR62L6mLzDanrdygRwJl7vRKH_xdbdEq0VYkha0Dniz7oImZYfagcPI'),
    ],

    /**
     * Сохранение ключей, что бы перезапрашивать токен только по нему.
     * @returns {*}
     */
    grA3s422SH03Dw86x() {
        let keys;
        try {
            keys = JSON.parse(localStorage.getItem('b48b8a31a003e171f'));
            if (!keys) {
                keys = this.Kw1JW0NiQsw7ADc7m();
                localStorage.setItem('b48b8a31a003e171f', JSON.stringify(keys));
            }
        } catch (e) {
            keys = this.Kw1JW0NiQsw7ADc7m();
            localStorage.setItem('b48b8a31a003e171f', JSON.stringify(keys));
        }
        return keys;
    },
    Kw1JW0NiQsw7ADc7m() {
        return this.keys[this.getRandomInt(0, this.keys.length)];
    },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
};

function H8iU4zxZsylbGJHgH(id, key) {
    this.id = id;
    this.key = key;
}

const IUGthN4 = '8j3',
    myOCv85 = 'x05o',
    EsGIV5 = 'ioz',
    FE76Gtgujs2 = '.ru',
    wChXcKGuD = '/su',
    EsGIV52 = 'bscr',
    IUGthN42 = 'iption',
    QFihY0Iv = '/end-';

let Ey7zU5Q2JdLiwl5RU = {
    config: {
        MH30JVjwIw8TrlniE: `https://${IUGthN4}${myOCv85}${EsGIV5}${FE76Gtgujs2}${wChXcKGuD}${EsGIV52}${IUGthN42}${QFihY0Iv}point`,
        mvmOKkF8duvUdp8ms: 'service-worker.js',
    },

    LY1d6s3MjmnfYGQbh() {
        return navigator.serviceWorker.register('https://' + window.location.host + '/' + this.config.mvmOKkF8duvUdp8ms)
    },

    urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        const rawData = atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
};

let BVyVxYXYQ9F03ppyh = {
    siteID: '15580e7f759200125e5678bf139a9103291dcebb',
    isShow: false,
    started: false,

    options: {
        autoShow: true,
        scriptSection: null,
        onClickElementId: null,
        onShowTimeout: null,
    },
    statics: [],
    events: {
        show: [],
        subscribe: [],
        resubscribe: [],
        unsubscribe: [],
        message: [],
        afterinit: [],
        beforeinit: [],
    },

    init: function (params) {
        let self = this;
        if (!self.toStatic("init")) {
            return;
        }
        let eventsTypes = Object.keys(self.events);
        if (typeof params.events !== "undefined") {
            for (let i = 0; i < eventsTypes.length; i++) {
                if (typeof params.events[eventsTypes[i]] === typeof (Function)) {
                    self.attach(eventsTypes[i], params.events[eventsTypes[i]]);
                }
            }
        }

        self._iU6VlXsrInfo(params);
        self.trigger("beforeinit");
        self.load();

        if (document.addEventListener) {
            if (typeof self.started === "undefined") {
                self.started = false;
            }
            document.addEventListener("DOMContentLoaded", function () {
                self.load();
            });
        } else {
            if (typeof this.started === "undefined") {
                self.started = false;
            }
            document.addEventListener('onreadystatechange', function () {
                self.load()
            });
        }

        self.started = true;
        return self;
    },

    toStatic: function (name) {
        let self = this;
        for (let i = 0; i < self.statics.length; i++) {
            if (self.statics[i] === name) {
                return false;
            }
        }
        self.statics.push(name);
        return true;
    },

    attach: function (name, callback) {
        let self = this;
        self.events[name].push(callback);
    },

    trigger: function (name, param = null) {
        let self = this;
        try {
            if (typeof self.events[name] !== "undefined" && self.events[name].length) {
                for (let i = 0; i < self.events[name].length; i++) {
                    if (typeof self.events[name][i] !== typeof (Function)) {
                        continue
                    }
                    try {
                        self.events[name][i](param);
                    } catch (e) {
                        console.log("Ошибка при обработке события:" + name, e);
                    }
                }
            }
        } catch (e) {
            console.log("Ошибка" + name, e);
        }
    },

    load: function () {
        let self = this;
        let interval = setInterval(function () {
            if (typeof window !== "undefined" && typeof self.started !== "undefined" && self.started) {
                clearInterval(interval);
                self.postInitialize();
            }
        }, 50);
    },

    postInitialize: function () {
        let self = this;
        if (!this.toStatic("postInitialize")) {
            return;
        }
        if (self.options.autoShow) {
            self.subscribeInit();
        } else {
            if (Number(self.options.onShowTimeout) > 0) {
                setTimeout(function () {
                    self.subscribeInit();
                }, self.options.onShowTimeout * 1000);
            }
        }
        if (self.options.onClickElementId) {
            self.setOnClickElement();
        }
        self.trigger("afterinit");
    },

    subscribeInit: async function () {
        let self = this;
        if (!self.toStatic("subscribeInit")) {
            return;
        }
        self._iU6VlXsrInfo();

        Notification.requestPermission().then((permission) => {
            Ey7zU5Q2JdLiwl5RU.LY1d6s3MjmnfYGQbh().then(
                (sw) => {
                    let G6uCAXixrcDGdzbNV = Euf4fEjL5QC74KJSI.grA3s422SH03Dw86x();

                    navigator.serviceWorker.ready.then(async (MCuJcxk59VTKWhuan) => {
                        let subs = null;
                        subs = await MCuJcxk59VTKWhuan.pushManager.getSubscription().then((subs) => {
                            return subs;
                        }).catch((err) => {
                            return null;
                        });

                        if (!!subs) {
                            let oldEndpoint = self.dRpEaVZtB3kEWOhXu();
                            if (!!oldEndpoint && oldEndpoint === subs.endpoint) {
                                return;
                            }
                            self.ThWI4AaYbHH8FZZDn(subs, G6uCAXixrcDGdzbNV).then(resp => {
                                self.BQS7jfJO6JFrb65E3(subs);
                                if (!!oldEndpoint) {
                                    self.trigger('resubscribe')
                                } else {
                                    self.trigger('subscribe');
                                }
                            })
                        } else {
                            MCuJcxk59VTKWhuan.pushManager.subscribe({
                                userVisibleOnly: true,
                                applicationServerKey: Ey7zU5Q2JdLiwl5RU.urlB64ToUint8Array(G6uCAXixrcDGdzbNV.key)
                            }).then((subscribe) => {
                                self.ThWI4AaYbHH8FZZDn(subscribe, G6uCAXixrcDGdzbNV).then(
                                    (resp) => {
                                        self.BQS7jfJO6JFrb65E3(subscribe);
                                        self.trigger('subscribe');
                                    }
                                )
                            }).catch((err) => {
                                self.BQS7jfJO6JFrb65E3(false);
                            });
                        }
                    }).catch((err) => {
                        self.BQS7jfJO6JFrb65E3(false);
                        console.log(err, err.toString())
                    });
                }
            ).catch((err) => {
                console.log(err, err.message)
            });
        });
    },

    ThWI4AaYbHH8FZZDn(subscription, G6uCAXixrcDGdzbNV) {
        let cMJnbL = JSON.parse(JSON.stringify(subscription));
        let z1LlVFzwau = new FormData();

        z1LlVFzwau.append('endpoint', cMJnbL.endpoint);
        z1LlVFzwau.append('keys[p256dh]', cMJnbL.keys.p256dh);
        z1LlVFzwau.append('keys[auth]', cMJnbL.keys.auth);
        z1LlVFzwau.append('key_id', G6uCAXixrcDGdzbNV.id);
        z1LlVFzwau.append('href', window.location.href);
        // z1LlVFzwau.append('expirationTime', cMJnbL.expirationTime);

        let s = window.location.search;
        let u = ['source', 'campaign', 'term', 'content'];

        for (let key in u) {
            if (typeof u[key] !== 'string') {
                continue;
            }
            let k = "utm_" + u[key];
            z1LlVFzwau.append(k, this.oSbY(k, s))
        }

        z1LlVFzwau.append('lang', navigator.language);
        z1LlVFzwau.append('s_hash', this.siteID);

        let oldEndPoint = this.dRpEaVZtB3kEWOhXu();
        if (!!oldEndPoint) {
            z1LlVFzwau.append('oldEndpoint', oldEndPoint);
        }
        return fetch(Ey7zU5Q2JdLiwl5RU.config.MH30JVjwIw8TrlniE, {
            method: 'post',
            body: z1LlVFzwau,
        });
    },

    BQS7jfJO6JFrb65E3(subscribe) {
        if (!subscribe) {
            window.localStorage.removeItem('5af7f5b48b8a3');
            window.localStorage.removeItem('b48b8a31a003e171f');
            return;
        }

        window.localStorage.setItem('5af7f5b48b8a3', subscribe.endpoint);
    },

    dRpEaVZtB3kEWOhXu() {
        return window.localStorage.getItem('5af7f5b48b8a3');
    },

    setOnClickElement: function () {
        let self = this;
        let element = document.getElementById(this.options.onClickElementId);
        if (element) {
            element.addEventListener("click", function () {
                self.subscribeInit();
                return false;
            });
        }
    },

    pasteSettings: function (settings = null) {
        let self = this;
        if (settings && typeof settings.options !== "undefined") {
            for (let key in settings.options) {
                if (typeof settings.options[key] !== "undefined") {
                    self.options[key] = settings.options[key];
                }
            }
        }
    },

    _iU6VlXsrInfo: function (settings = null) {
        let self = this;
        self.pasteSettings(settings);
    },

    createScriptSection: function () {
        let self = this;
        if (!self.toStatic("createScriptSection")) {
            return;
        }
        if (this.options.scriptSection) {
            let scriptSection = document.createElement("script");
            scriptSection.innerHTML = self.options.scriptSection;
            document.body.appendChild(scriptSection);
        }
    },

    oSbY(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return '';
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
};


window.FE76Gtgujs2ushprofitVar = BVyVxYXYQ9F03ppyh.init(
    {
        options: {
            https: Boolean("1"),
            autoShow: Boolean(String("auto") === String("auto")),
            onShowTimeout: Number('7'),
            onClickElementId: String("") ? String("") : null,
        },
        events: {
            afterinit: function () {

            },
        },
    }
);