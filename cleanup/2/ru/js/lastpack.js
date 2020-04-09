function lastpack(typecase, numpack, caseClass) {

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    function randRange(data) {
           var newTime = data[Math.floor(data.length * Math.random())];
           return newTime;
    }

    var minNumPack = 3; // Минимальное количество упаковок
    var maxNumPack = 999; // Минимальное количество упаковок
    var lastClass = $('.'+caseClass); // Объект
    var numpackCookie = getCookie("lastpack");
    var timeArray = new Array(2000, 13000, 15000, 7000, 6000, 11000);

    if(numpack > maxNumPack) numpack = maxNumPack;

    function intervalStart(numpack) {
        
        if(numpackCookie == undefined) {
            document.cookie = numpack;
        } else {
            var numpack =  numpackCookie;
        }
        
        if (numpack > minNumPack) {
            numpack--;
            document.cookie = "lastpack="+numpack;

            if(typecase == 1) {
                var num = String(numpack).split("");

                if(!num[num.length-3]) {
                    num[num.length-3] = 0;
                }

                if(!num[num.length-2]) {
                    num[num.length-2] = 0;
                }

                lastClass.html("<span>"+num[num.length-3]+"</span><span>"+num[num.length-2]+"</span><span>"+num[num.length-1]+"</span>");
                
            } else {
                lastClass.text(numpack);
            }

        } else {
            if(typecase == 1) {
                lastClass.html("<span>0</span><span>0</span><span>"+minNumPack+"</span>");
            } else {
                lastClass.text(minNumPack);
            }
        }
        clearInterval(timer);
        timer = setInterval(intervalStart, randRange(timeArray), numpack);
    }

    var timer = setInterval(intervalStart, 0, numpack);
}