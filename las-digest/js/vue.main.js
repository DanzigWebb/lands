/* Plugins */
VueScrollTo.setDefaults({
    container: "body",
    duration: 1500,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});


/* Components */
Vue.component('fb_header', {
    template: '<header><i class="icons_top icons_top_back"></i>{{template_setting.app_name}} - {{template_language.app_teams}}</header>'
});

Vue.component('fb_page', {
    template: '<div id="fb_page"><div class="fb_main"><img v-bind:src="template_setting.app_bg" id="app_bg"><div id="app_display"><div class="app_display_left"><div class="app_ava" v-bind:style="{background: \'url(\'+template_setting.app_ava+\') no-repeat center\', backgroundSize: \'cover\'}"></div> <div> <div>{{template_setting.app_name}}<span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEUYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/L////NAev+AAAARHRSTlMAEVyhv9jyT737OcQDjg+31DqvHLarBAWzBgcCpNnQugig83to/gkBnA5mwQqYawyT2xpvxw2PGIvWFobTFIESfC+JuPo1V8IAAAABYktHREWOs6hXAAAAB3RJTUUH4wUPFAwxKsMYMAAAAUFJREFUOMudlOdygzAQhFcUA6bZxumBJKT33otT7v2fKSOKLGRBmOwfTqMPSbc6HSCJGaZlDwa2ZRoMejmuR0Ke62iQoU+K/KGCBCFpFAYyE8WkVRxJzIhaNBJUEFOr4nrHkDoUlsyYOlXm6HdDfuEh/SHuqqufmiTJtIxcgHlaZmkZSKobYjD066xAQGTA1DGra9y+STUyYWmY6TqAjc16aCGtwyyro61tzuyIf1LkVbQL7O2X2RwAODyaLzwQ0DGAE06dnnHmnGSo3q5w/4LIv+TBlXzEVBz8+oZP3t7d889DIw9rboH9yKe5P3hqJmtKZj6/VKXzqjhiyNfy9l4wHwrjscYFZzMAn6q1rlIq2Rf7XvDf6Vt0/cq310NA8NPOiCfV63ECUcta8jPv1zB4joutZ/y/Jla3wzTPU7Ud/gLIEucA6oO0+gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNS0xNlQwMzoxMjo0OS0wNzowMBxCwawAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDUtMTZUMDM6MTI6NDktMDc6MDBtH3kQAAAAAElFTkSuQmCC" alt=""></span></div> <div class="app_first">{{template_language.app_first}}</div> </div> </div> <div v-scroll-to="\'#objectScrollState\'" id="app_display_right"> <div><img src="data:image/png;base64,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"></div> <div class="app_first">{{template_language.liked}}</div></div></div><div class="app_messenger"> <div v-scroll-to="\'#objectScrollAttention\'" class="messenger"><span style="margin-right:7px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjAwUIKhPJvJUgAAACr0lEQVRYw7WXz0sUYRzGnxm1VShScU1DE6n0EhR0WCOpICqkQDAI6iLioXNXzx0UPPgD+hPCQxSEIgR1ay8ddPEQiR7UcMVgIzFWNtdPB3dnZ91f78w6z3t75+X5vDPf533nfS1URJaeaEi31a6zqqx9xfVV7zWvYmYUtggx/ChGpNCt0H6ElC97gBQjlQBDpAHYY4oITcigNRFhij0A0gyVA1wgAcAy3UbW7tbNMgAJWksDZgHYMJx54ZtsADDr7rVchW9QXOclxZRUj5oN8uNWQqtq0HVJf9SuZLEU9fsu7kn151xt1xweeJxzabmdHNYghwDsM00fzZ4r0Ewf0+wDcMjgySK3ZPKzQpevAmdbFyuZLLXkA47zs0ljVfZCNLIJwIw7RWe0oyZJn1SvXoXzKuNFR/qlHzrQQ0m/1aZUtgZ3Ty0/bt3Jpajn1PLjVq8k2ZLqNBoIYFR1x59oPJAPBDCOLC5qXfWBvIF0oMu2hgOzl+o1bGsgMHtJGrCIqy1AwI6tcFUGH9WhS1os+TysqlKySB1CdJQe4ndTkKSonuqfJMkqM8r37GPOxmjzrvQwv4A12pz98025gf4A265Tx+vyQ/0AElxz7F9VGlwOsMQkSwW9f7nl2A9z5B+wRC2ilrm83hSPCv7iPgGTGZsaFyLNM8f+HkmT71npDfIRLx37m5mzaBUAmKMmDzHm2Peya2ZfKUVuxHPHvjNzBj0FgBuRO0F9N7c3WQf5iHN882JvttByiBBfvNmbruS5zJr44NUeLA5VY7A1L+uz7uuG5y09bbGt9qr+aeUVt7UeoL20Zms+UMCCRadWAzx4XbW1pZnA5j+jn8fpjnqPn4GihLI3nHAAiChh9xUqxITZ/m6kJBOECi/inXqhx7qiVqOlV0xp7WpNC3qrrWzXf7Upa3grP5eKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTA1VDE2OjQyOjE5LTA4OjAwzgRVGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0wNVQxNjo0MjoxOS0wODowML9Z7acAAAAASUVORK5CYII="></span>{{template_language.messenger}}</div> <div v-scroll-to="\'#objectScrollState\'" class="three_dots"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVESVBESVBESVBESVBESVBESVBESVBESVBESVD///9ameT5AAAACHRSTlMAPbLme/79epxjaKcAAAABYktHRAnx2aXsAAAAB3RJTUUH4wMFCCoVIN8wFQAAAHJJREFUOMtjYBgFwxgIGSuCKEZlIwEkLgMDS0RHWwEDA4NrR0c6EpeBQayjoyORgYExo6OjTQDOZWBg0Ojo6GhiYGDq6OjoUIBzGRgYLDo6OpoZGJhBEgZwLj4JnEbhtJwlA+I+N6hzM2DOxenBUTA8AQC5NDU+NnRgpgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMy0wNVQxNjo0MjoyMS0wODowMHNkHJ8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDMtMDVUMTY6NDI6MjEtMDg6MDACOaQjAAAAAElFTkSuQmCC"></div> </div> <div id="app_status_page" class="app_first"> <span><img src="data:image/png;base64,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"></span>{{template_language.status}}</div></div></div>'
});

Vue.component('fb_post', {
    methods: {
        get_data() {
            var Data = new Date();
            var Year = Data.getFullYear();
            var Month = Data.getMonth();
            var Day = Data.getDate();
            switch (Month)
            {
                case 0: fMonth=data_language.January; break;
                case 1: fMonth=data_language.February; break;
                case 2: fMonth=data_language.March; break;
                case 3: fMonth=data_language.April; break;
                case 4: fMonth=data_language.May; break;
                case 5: fMonth=data_language.June; break;
                case 6: fMonth=data_language.July; break;
                case 7: fMonth=data_language.August; break;
                case 8: fMonth=data_language.September; break;
                case 9: fMonth=data_language.October; break;
                case 10: fMonth=data_language.November; break;
                case 11: fMonth=data_language.December; break;
            }
            var data_time = "de " + Day+" "+fMonth+" de "+Year + " a las ";
            return data_time;
        }
    },
    template: '<div id="fb_post" class="app_display_left" style="padding: 10px 10px 11px;"><div class="app_ava_post" style="background: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAY3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHjaPcGxDYAwDATA3lMwwid+v804kCgSHQX7C4mCO7vuZ9j28TIvdu6cIIhf29tAVwKNHloadKUOlxaDpcnJ05E9M4KLZQ7AXqpLFDUKJFVYAAAcpklEQVR4Xu2deZRU5Z33v7/n3rq3lq6u7obuRkAgEkFkUcEF3BBQMK8xKjIDmeicaJCoeF4laPJGJ8n4JtETTTDJ0RkGdTLn6EzUIU4S44mSCCouxPUVQQQ3duhueqmqruUuz/N7/+iWzYbqpar6VtX9HA7KObe6qm997u/5Pb9nI2ZGZZPIcmsnNyW5OcktnaotxR0ZJC0+kOCmlOrIcGcajoLlMAAzQAGBqjBqQtQYEUOrKWpSTQh1EaqvEg1RaozSkCqqDlKuty1zqNLE2tuuPmzhD/bKD5r5k/1ydwe3pTjpKNclqRSIQBCABggNAUGagBAgQBAAKAYDSkEqOIqVhAQUAAaYNSF0naMBURehkTU0dph2agOdOlw7pZ6G14pcH62sKH+xLJe37FOvbZdvb1fv75U72ziRUbYiKDYM6AK6II1AXX8A6lesYe5SC8yQDFexq2DbgCBDcHVIjKqjycO1aWPEuWO0CScIU+/X25QOZSvW1v3qpY/cddvU23vkvg7OZJk0DmoI6KQJdJlUBLo8kwqOy1kJlhQK0gk1NG2ENmucmHmyPn5YeUayshKLwa9/op7d5K7d6m5ulpk0C42CAQQ00kWRTDo+zHAVHMlZB0pyKEwTG7TZ4/XLJukzxgqCBz5inigPsfjNHWr12+6fN7sftUrHhaEhbJAmuhMjb6IYUiFtsy0R0HHyEO0rE/UF0/SzRguUvmGlLdaODvnUm+6T77ib9kibEdYQMkgTJfa1MCAVMjanJQzCpBHawqn635+lj67Rcr3Uu5SoWPz8h+5vXpXPfeDGLRXREDJJL4tcxVXIWJySiJni0lP1687T5p2il2IAKzGxLAf/vsF+9BXnvd2KwbEwBbyRPOUXZjgK8TQT6LSR4lvnB66fbpiBXC/zEiUjVntKPfii88gGd+cBFQ5yxCCt7Hz6IpKRsjmdpVFDxeLp+i0XBWojpRGZS0CstqRasdZZ9ZrVkqSYyUGz/CJUDhjIWhy3qD7KS841vzM7UBf1ul6eFitt4+d/sf5lvdUUp9oQTCPXC8ody0Z7Bo0xvvkC8/ZLzLCHb4h3xXroZfu+Nc7ONlUb9JU6AstGexaj6sR35waWXujRW+NBsfi5TfL7z2T+305ETI5W/GjusUhmOWXR6aNw7+WhSydpXus5ekus3XEsezL79LuWaYhYCAR46MN5jK6bE8/AstX8M8wHFgZHxnK9poh4SKwHXrB+/Lzd0clDolTuQ7T5xGW0Jrmmin4wz1g2x8x1eZHwhFib98sb/9N6ZausjiIS8KNUnyEg5SCRxPnjtZXfMCcOG/yS/eCL9fO/2j94JisZdWESftvXXwhQQFuaNcKPLw/efvEgJ/WDKVZzQn3zMfvPm6y6sDD9QJUPCLActKXVVyaZ/3Gt0VA9aOWuQRPrdxvtpY87zZ1OQ3UllNCLCgPNCdlQFXjomsDVUwYndA2OWHc8bf18TbYqQlGDBuP9yx8iJG3uTPHtc4P3zx+EjL7YYnVksGBV+oUP7KExLSD85q+AEOAoHIjLOacaq5eEa0K5XpBXiirWhk/Vwt+kdraqxqiouAG/QYIZTUk1aoh48rrI9JOKl3IVT6z/fMte/FgWTLURFOs9fdDVLLanAOJHrg1+48wipVxFUvie561rHskYwrdqEGBGbQSGoGseydzzvJXr8vxQjIh10xOZlS86tVEK6r5VgwYRsi7ak3zjRYF/XVTwhKvgYs1flf2fN+36OtLJT9UHGQJcRksbX3WW8fSSYK7LB0Rhxbr0odTz7zsNMc3Lq2UqDcVojst5kwPPLY3kurb/FEosxZj9y/RL25yGauFb5TUUozmhZo4LrL0tXKBvpyBiKebzfpHa8LEcFiu1pViVA2N/XE3/svbq8kghaj+F6BXyRSuyGz6Vw2p8qzwMYViN2PCpvGhFthBD//kXa96D6fUf242en+3vA6AxKtZ/bM97MJ3rwj6T56//in/LrtnsNsYKEVx98g8RGmNizWb3in/L5rq2b+RTrJt+m/7jO3ZjdYHSQZ+CQEBjtfjjO/ZNv81n3MqbWPc+b61c5w6NkR+rSg4iDI3RynXuvfmry+enV/jE2/bXH87WRcnUCpAH+hQeAiyJtiT/9obgoml5GE/Mg1h/+1Sd90CqykQ44I/YlDBESDvotPDqssg5A54HMVCxEhmefE+qJS5rImJgP6msYAAM9fnmkcyf71MK4PPt1Q7uTHnwbwz2zmtE6Eip+pj2/p2R6tCAPstAxbr416m1W91hUTGgn1IWHNytz1FwbbAGAdIFDJ11TRgE1kAAq8P2j1RKSlIKksHEzBCErv3iNEG6gKDuP0XLXAnYn1Szx+t//d8DGvAZkFjfWW098JfssArbD/gopILlImOzZAqbPLxaG1tP4+ppzBAxcggNi1AsJEJhRDTSBATgMpiRdZB12bKQcFQ8i/Y0t6W4NamaO6kpqVqS3JZS7WnK2MqSJKVSRKYGTSAYoCLMvN3frpZdElyxoP9zmvsv1v+8Z8//1+yQKAUGfxHbIMBA1kHKZoBG1eK8sYGZJ4sZo7QvNwojkIfwYjloyaiWDt7eqj5r4+0t6qM2tauF27KKUYhS+RE4Eq1Jfvqm4FWn9TOR76dYrSk+9Z870wpRo+ISdmZ0WpyyaFgNXTZRX3imNnNcwChW1L53jf2jP1p1kcI2jkRI2ggLfPDPVUMi/XknPdcFPfMPv7Gas+qEcMUl7KkMkg5OHabdeGHgH8/WY+FiCfU5Q0KQua4ZOMyI6tiXVv/wG+v5W/ozc6s/Yv3ir/aa9+3GmOD+qFySEJB10Z7isY1YMTe4+Fw9j7XlPmHLIvUcmdAYEmvet3/xV7G87+uq+yzWlib1g2esuiiJwqeQHoGB9gwE1F1fCf7frwaEGBylio8QqIvSD56x/tdkfUJj337rvl0NYMljGVcpozJWxBMgFZricvIwvPG96p98zawcq7qeKCMAV6klj2VyXXs0fbtNv1xnvbLNrY1URLAiwHLRklA3zQy++f3opOHFaYI8BqM2Il7Z5v5yXd+GEfsg1t4E3/0nuzoqKqG8QISUg/asemhh6F8W9Sd7LRs0oDoq7v6TvTfRh3DSB7FufdKKZ1TEKP9oRYSUDdvhp64P3Tyrz3lrmcFAxEA8o259sg9Bq7dirdnirH7XHlJV/vUFImQtpCz1xOLIgqmVblUXzBhSJVa/a6/Z4uS6tpveinXH761wAGVfZCfAdtGe4YevCV0xpdx/274Q0BAO4I7f9zZo9Uqsh160N+7kqmD5bzkkGa1JddelxnXT/Vh1BMyoCtLGnfzQi3aua9ErsWwX971gR00u+/3RCGhLqUsn6T+5oqKz9WOhEaIm3/eCbbu5Lu2NWPessXa2cjhI5R2tCOi0UBcST9xQ8H0NShQGwkHa2cr3rMndIOYQK5HilS/bUbNIwwiDiMtIWvyLvwvGzNwPW8VCQNTEypftRCpHnMlxE3+21mpKqHD/p+WUCIR4Vs09Rbvm7JI6u20wCJtoSqifrc0RtI4nViLDj653Y6HyX87lSJDS7r3SbwRzQ0AsJB5d7yYyxwtaxxPr1+vspqQKlv0zTIin+arT9amj/EawVwQDaEqqX687XvfwmLfSleqR192qUPlnV46ErvEdc8r+AcobBFSF8MjrrivVsa45pliPvO7uOKCqjDL3ioDODM88OTB1jF8O7QNVBu04oB55/ZiFh2OK9fArbsgs7woDupZC2Kyun9HneWk+IZMffqWPYq3Z7Ly7W1aZZR6uAGRdfKlOu/J0v87eZ6pMene3XLO559HDnsVatUEaxGXfG2Qg5fCc8brhN4N9RxAM4lUbep6C34NYe9vlui1uqALO9GYFodTlk/xw1R8ICJm0bou7t70Ht3oQ67G33LaUMivgIbYlhkb1c08upScoYtAxe2JFx9TQllKPvdVDpvXFpJVXv+uGzMIuW/MIls1njtGGFH0J10HSDva1yd0Jlcggq7o2eDgmBNRE6LXtbihA8MbILRFCJla/637vEuOoQ6mPFuuN7Wrjbrc6OGj3umgwYCnMGD0IkfnjJvX7je5LW90Pm2RTml2HFKAYfFyxuHvuCteYHgpaEYM27nbf2K7OPrJec7RYq99yXVURRzIrBSF46olFFevtz+Tdz2Vf2MZZSwYMMjUyBJnB7g1negPBQ1YB0AmuotVvuccXi5/90A0HUP7ldkAyojqNH1682LzsKevB9Q6zioUoapZLn5sQDuDZD937cERreMRtff0z9UmzG6yEeAW4EjXVNLooW+VIFxc9kPrlukx1kOuryNDK6skN6vRJs/v6Z0dE0iNu6zMbXVeSXoxbPfi4iodXi7BRjCx41q9TL33kNlZrZVkw0wVcSc9sPKJveLhEvG6ra1RGO9g1mDOshorw2978ZHb9h245n/1JMAJYt9U9fHelQ2JtbVJbmmS4MtpBAK7C8EjBg/OrHzsr19t15b7xfVinLU1ya9Oh1vDQnX35I5nKslaOsfqLMECModUF/7Z/+KyjAWa5j3FrGlJZfvmjQyX4Q2Kt3aqERuXSV8kFA0B1ONdlA2PjLrn+Y6cmXP7L5gRBaLR26xciFjO/s1tWwjBOFwwwuLrA0zeeeK9SioJdwzvv7JYHN4jsFuu9XWpP3DUr5B50QSj0g/Tah05IL0L3wBOYOu2Ju+/t6g5a3WJt2CEzVkXt/QQCCppQdmTUJ60IVMyzKgQyltiwozvN6lbpb9ulppX/BKwjYFHQL31nO3dYskKKgl1plqbx37YfKdamPapo+/56h4Km1E0dynIq69hiQ2DTnsOawr1xtaudKydoF4eEDebeDi2XBwGddrXz3rjqFmtrCyfSqnKCdnGQkgsbEr2HLpBIq60t3C3Wpl3SURWWYBWeiopVXQiCo3jTLtkt1rYWBvkHWPoMFCKAaNvBiLWlWQb8A+d9BgwBAYEtzZ9HrH3trBeyouNTOega9rUzAJG0uD3FWtlv1+dTFDSN2lOctFi0JDluSd8rn7ygEeKWbEmyaE6ylJrfJfTJC4IgpdacZNHcya50/S6hT14ggivd5k4WzUlFlTXw4FNACCAhmpNKtKcYqhKreT6FgAhQaE+x6MigIk5d8ikWQkNHBiJhsVZhQ1o+BUVjJCwWrQkW5T7V36eYCB2tCRYHUkr3c3ef/KELakkp0Zphf8KMTx7RBOIZFp0Z+AHLJ49ohHgGelaWklgMZB0wD3Tpi2K4NtxCbgjkKrg20k7+bi/D1KF7/jxuQchK6LbLpVLEYkADasOkY6ArQKWCUAgV8syAUADVEdSFoOUj0yCGFICiTsfr5/sRwXaZRv6fhMMDfP6LRMZGfRW9cWe4JijSvT1CtmeIwAxDQyAf33qPOAq27H6jgaNrMAUWrcr+4QO7Jujpr4uBAEEXOsEuDbMYIHBtUACIFDLY5IWAyL+1u5PSG5uPHheGCJAIalDe/6yHke15X/HyJ5nB7jZleH4xlWIENYhYCLKkxKpYdnao9lKoDUlGLAQRC9Gxj3Dy8RCftchsKayAlQqxEIn6iHBLqy2sVD5qZle53hfLVVwfEWJINaleHEruM+hsbVGaVgI7AyoXQ6pJVJskPf9ZfQB8ckDppdC0SEK1SaImBFWp/awSghXv6WC9FOahKImaEERthCDyU8TzKRy74tzWybrHi+4AMyBQGyHREBWs/Ozd6+w+wHFL5WV0qKAwwEo1RIVoqCJd0/2I5XG2HpDSLYGNW5iha3pDFYmGKGma9EOWx/m4mcElsHGLYmiabIiSqI9SzNT84rvH+bhZohRO4JGMmKnVR0lETaqNkPTN8jT8WRuXxF6eUnJthKImCQAn1JLrVxw8TCLL++Il0CXsOlPthFrq3sZoQoPmKK/PS6xkdhzgRKYENmBmwFGY0KB1izWunsDsdww9yycdKmOXwC78zADzuPrPI9akE7WAIL9j6Fk+3q8ksee9gmIEBE068fOINaGeolXCT7M8y7YW1kpht1xXIlolJhyMWMNiYnSMLL9j6FU+a5Xer7kDsCSPjtGwmDh0MsXkEUL5+bsncRzsblPeP96BAaUweUS3Ud3/OWuM5sjyP1avFNmTUm3JEpiRzAxH0lljurcu6v6800drIVMpf46y99jZwnErP4sTC4pSCJlq+ugjxTrtRDEipluuH7I8x0ctUnIJDD9bLo+I6aedeGRTSERTR2qW3zH0Hp+0MJXC8LMlMXWkdvCDHoqws8cLJdmvZnmNrU0syOvDz4qhJM8ef0inQ/934claKEjS20GLgGBlbWzJu9uk988NkRKhIF148qEPemgS9fhGMbFRe2+vjHm1Z0sCEvRpm6oLIWXnuvq4EKCUqIsgbOS6tL+kbbSlIET/24AqE7s7eE+Cvb/6Oe3yacO18Y2H4tThs/Np1nj9zR0S5kA3CSoQIQ1pm2fc1ynUQD+hYhxI44lvBf/ujEKZ9exme9Gj2aHh/m9jRIALEMgMFPg02AHCsB3MGn/EuepHLPu4fIq+4oWsq8ijsZfAgOPSgLfHgmIoGwVt96WEssky+y8WAwIwdG9bBbgKusaXTznCpSP+MeNLYmyDvrNVVnl46o+ZjyVQiqEHClsc0gT0AEy9/2KVClmXxzboM750xN086tbSZafoacfrj4iPh2CkHVx2in5UK3L0M7vgTF0X7BdKfXqJy9AFLzjz6HbkaLHOHiOmjNRTtm+WT69I2TxlpH72mKNF+mKWQQvO0DOWvzbaJzfMyFhYcMbR7WCPYuHaM/W6iPCHd3xyYknURcS1X2gHexZreK02a4KesfyY5XM8GMhYPGuCPry2h+pUzx3uJdM1m/1Z8D7HQzFspiXTe6559izW3ImBM0ZqnZZvls8x6bT4jJHa3Ik97199zBLhDefrGavcS3s+AyBj0Q3nH7NafUyxFs/QRw8VnX7dwacnOm0ePVQsntF3sXRNXD9D78z4RXifo2GgM4PrZ+j6sQfFjjdadtssoyEqsgM7XMSn/Mg6aIiK22Ydb2LI8cSqDtHiC/R4xu8d+hyCgXhGLb5Arw4dLwXPMb7/vdlmY7VIW8e/yqeCSFtorBbfm20e/7IcYlVH6MYLjaTlZ1o+6ApXSQs3XmhUR3JUDHLPSLpzrjlqCKWz7NceKhwC0lkeNYTunJsjXPVKLEPHd+cYSYv8vR0qHMlIWvTdOYbRi7mWucUCsPQiY8oo6syWzFmsPnmHCJ1ZnjKKll7Uq1UCvRILwP1XmmkHjj/loVJxJNIO7r8ydyPYRW/FmjshsOAMo7VT+UGrAiFCa6dacIYxd0JvT7btrVgAfrXQjIVEyh7oChmf0oKAlI1YSPxqYW/DVd/EGl5NP/qqkUj6ZzpVFhJIJNWPvmoMr+5DSOmDWABum2WeP05vTyk/alUKhPaUOn+cftusPoSrPosFYNW1IV0I2/HVKn8IsB3oQqy6NpTr2qPps1gTGsWPLzfbkuzv0lb2KIW2JP/4cnNCY5896fMLACy/2Jg72WjKKPJLpuULMZoyau5kY/nFvSpcHUV/xALwX9eZDUGRdEtgj2iffkCEpIuGoPiv6/qWWh2kn2INidDKa8zOFNv+QeXliO2iM8UrrzGH5BpsPhb9FAvAVacZyy42WxN+qlWGtCbUsovNq07rTyPYRf/FArBigTlnot6UVP202sd7ENCUVHMm6isW9LMR7GJAYgF4+obwiXVaR9of6ikHiNCRVifWaU/fEM51bQ4GKlZ1iJ66LmyzSDt+Il/aECHtwGbx1HXh40877g0DFQvAOSeJx79pxjvZcv2qaalCgOUi3smPf9M856Q8WJGHHwFg0TTjp1eZbXF2/FS+NHEU2uL806vMRdP6n7AfTn7EAnDnPPPbs/QDcf9AzdKDGQfi/O1Z+p3zBpSwH07exAKw8uvhr001mhL+crFSgoGmhPraVGPl1weasB9OPsUC8IdvB+dO1Jviyo9bJQEzmuJq7kT9D98O5rq2b+RZLADP3xK+4MtGU9LPtkqApqS64MvG87fkM1Z1kX+xAHrxO8HpJ2n7O/yjNT0MY3+Hmn6S9uJ3ggPeNr8HCiEWBNGry6tmjg/sT/htohdhxv6Emjk+8OryKlGY8mNBxAIgCC8uC8+bpDfFpZ/MewrFaIrLeZP0F5eFC3e4QaHE6uK5pZH5U4PNbSy5ANHWp48QIBnNbTx/avC5pZFclw+IwooF4HdLgjfMCbTEOSv9MZ/BhAhZiZY43zAn8Lslee4DfpGCiwVg1aLQT68y25MqlfXdGhyIkMqiPal+epW5alGfJ7D3g2KI1VWXf3xxyFbcnvLdKjZEaE/BVvz44lAea+vHp0hiAfjGmca6W6saYtjnl0+LCDP2xVVDDOturfrGmfkZB+wNxRMLwPSTxHt3RmePDzR1SNdfm1hgCHAVmjrk7PGB9+6MTs/HnIXeU9Q3A1ATwgu3hm+fFzqQUEnH376mUBAh6fCBhLp9XuiFW8M1xUirjqDYYnVx/3xz9c2hiKbtj/u7buUfBvbHZUTTVt8cun9+kZKqoxgcsQBcPcXY+E+heRODTXHlr6vOF11rl5viat7E4MZ/Cl09pXhJ1VEMmlgAGqrFn5cG7786lHb5QJoHftJzJUMAAwfSnHb5/qtDf14abKgezC93MN+7i9svNt76fuSc0XpTG1J+6OoXBKQcNLXhnNH6W9+P3N6vtcv5ZfDFAjBxmLZ+eXjFQkPTsD/hHxzcN1zG/gRrGlYsNNYvD08c1vNxXEXGE2J1sWyOufGu6NWnG20JFc8Afst4XLpuTjyDtoS6+nRj413RZXMGJ0/vEQ+JBWBkDP+9xHx2aWTcMOyPI5H1Y9cxSWR5fxzjhuHZpZH/XmKOjOV6QXHpxcbKxYYunaRfOin60Mv2fWucnW2qNghz8HMGD2HZaM9iVJ32s/mBpRd69NZ4K2IdztILjS0/jNx9mWEYvD8Oy871ggrAsrE/DsPguy8ztvww4lmrvBmxDhE28MPLzJsuDPxqrbPqNWt/gmImB82KK9czkLU4blF9lO+aad46O1Af9W5E6MLTYnVRHxU/ucJcfnHgwRedRza4Ow+ocJAjBmkV4JdkpGxOZ2nUUG35xfotFwVqI15XqosSEKuL2oj4wWXmd+ea/77BfvQV573dCuDqMAW0Muw8MuBIJNIM0GkjtW+dH7h+umH2dot1T1AyYnVhBnDTBcZNFwTWfOg+/Kr8ywduW0pFAgiZpJfGk5wDVyFjccpBLCSunBq44Txt7il6KRZeSkysz6G5pwTmnhLY0SGfetN98h130x5pM8IaQgZposS+BwakQsbmtIRBmDRCWzhV//uz9NE1nih19o8SFaub0TXaHZdod1xivLlDrX7b/dNm99NW6bgwNIQN0gQKtwpl4CiGVEjbbEsEdJw0RPvqRH3BNP2s0aIUQ9RRlLZYn0NnjdbOGq39bL7x2ifq2U3u2q3u5iaZybAgCgYQ0EgXnpgSzQxXwZGcdaCYQyadNkKbPV6/bJJ+7thy8Okg5SHWQejcsdq5YzXA3NqkXtrmrtum3t4j93VwR4pJ45AGXS9qW8kMlyEVXJczEiwpFKQTasS0EdqscWLmOH1837dQLwnKTKxDjG8U4xuNJRfAcnnTPvXGdvnWdrVxr9zVxomMyrrEnewUcstnx4Wb5ANMQZ2rQ2JsvZgyXDtzjDh7jDbpBGHqRXN7cChbsQ5i6jTtRG3aiRouAIC97erDFn5/j9zwqWqsKWC0aKwRi2Ya008Sk0dop9TT8NoCvpcHIX+jNJ9C8P8BfMDBkpANAnYAAAAASUVORK5CYII=&quot;) center center / cover no-repeat;"></div> <div><div style="font-weight: 600;">{{template_setting.app_name}}</div> <div class="app_first_post">{{get_data()}} , 9:37 <span class="dots_small_center">.</span> <i class="icons_spray select_globus"></i> </div></div></div>'
});

Vue.component('fb_post_end', {
    template: '<div id="fb_post_end"> <div class="bottom_icon"> <span class="icons_spray select_good"></span> <span>{{template_language.liked}}</span> </div> <div class="bottom_icon"> <span class="icons_spray select_comment"></span> <span>{{template_language.comment}}</span> </div> <div class="bottom_icon"> <span class="icons_spray select_rep"></span> <span>{{template_language.share}}</span> </div> </div>'
});

Vue.component('fb_post_status_bottom', {
    template: '<div id="fb_post_status" class="icons"> <span class="fb_licked l"></span> <span class="fb_licked u"></span> <span class="fb_licked s"></span> <span class="status_num">1,5 K</span> </div>'
});

Vue.component('fb_post_status_share', {
    template: '<div id="shares" class="icons"> <span>43 {{template_language.share}}</span> </div>'
});

Vue.component('comments_component', {
    data: function () {
        return {
            drift: 'drift'
        }
    },

    // template: ''
});



$app = new Vue({ el: '#global_wrapper',
    data: {
        show: false,
        comments_items: [],
        isDisplay: false,
        isFooter: false,
        counter: 111
    },
    methods: {
        doThat: function (id, $event) {
            console.log($event.target.remove());
            [].forEach.call(document.getElementsByClassName(id), function(v) {
                v.style.display = 'flex'
            })
        },
        doThatOffer: function (event) {
            console.log(event.target.remove());
            // [].forEach.call(document.getElementsByClassName(id), function(v) {
            //     v.style.display = 'flex'
            // })
        },
        random: function (min, max) {
                return parseInt(min + Math.random() * (max - min) );
        },
        update_comments: function () {

            var hash = Math.random().toString(36).substr(2);

            comments.forEach( function(val,index) {

                if (val.request) {
                    val['hash'] = hash;
                    // console.log(val.request)
                } else {
                    hash = Math.random().toString(36).substr(2);
                }




                if ( (this.random(-50, ( 2 * index) )) < 0 ) {

                    val['liced_num'] = 0

                } else {
                    val['liced_num'] = (this.random(0, ( 1 * index) ))
                }



                axios.get('selfy/'+ ++index +'.jpg').then( function(data) {

                    if (data.status === 200) {
                        val['src'] = 'selfy/'+index+'.jpg';
                    }

                    val['liced_num'] = this.random(38, ( 38 * index) );
                    console.log(data.status)
                    }.bind(this)
                ).catch(function (error) {
                    // handle error
                    // console.warn(error);
                })


            }.bind(this));

            this.comments_items =  comments;
            return this.comments_items;
        },
        isLiked: function ( isLiked ) {

            return isLiked;
        },
        indexBack: function (index) {
            var indexBack = index;
            indexBack = indexBack - 1;
            return indexBack;
        },
        repostDays: function (index) {

            var days = index / 1.3;
            var result = parseInt(days);
            if ( result <= 3 ) return repost_days_language.just_now;
            if ( result >= 4 ) return result + ' ' + repost_days_language.days;
        },
        getScrollTop: function (){
            if(typeof pageYOffset!= 'undefined'){
                //most browsers except IE before #9
                return pageYOffset;
            }
            else{
                var B= document.body; //IE 'quirks'
                var D= document.documentElement; //IE with doctype
                D= (D.clientHeight)? D: B;
                return D.scrollTop;
            }
        },
        handleScroll: function (evt, el) {
            window.addEventListener('scroll', function () {
                // console.log( this.$refs.formFooterPosition.offsetTop );

                if (this.getScrollTop() === 0) {
                    this.isFooter = false
                }

                if (this.getScrollTop()  >= 1) {
                    this.isFooter = true
                }

                if (this.getScrollTop()  >= ( this.$refs.formFooterPosition.offsetTop - window.innerHeight )) {
                    this.isFooter = false
                }
            }.bind(this))
        },
        countDown: function() {
            var s = 60;
            var m = 10;
            var h = 00;
            setInterval(function () {

                s += -1;
                // console.log(s)
                if ( s === 0 ) {
                    m += -1;
                    s += 59;
                }
                if ( m === 0 ) {
                    h += -1;
                    m += 59;
                }

                this.$refs.s.innerHTML = s + '';
                this.$refs.m.innerHTML = m + ' : ';
                this.$refs.h.innerHTML = h + ' : ';

            }.bind(this), 1000)

        }

    },
    mounted: function  () {
        this.comments_items = comments;

         setTimeout( function () {
            this.show =  true;
        }.bind(this), 2000);

        this.countDown()

    },
    created: function () {
        this.update_comments();
        $access_hash = [];
        comments.forEach(function(item, index) {

            if (item.hash !== undefined) {

                $access_hash[item.hash] = index;
                // console.log($access_hash);
            }

        });
        this.handleScroll()
    },
    computed: function () {

    }

});



