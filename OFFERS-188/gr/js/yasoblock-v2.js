try {

    var YaSoBlock = function(target){
        var html = document.getElementsByTagName('html')[0];
        var margin_after = window.getComputedStyle(html).getPropertyValue('margin-top');
        if(margin_after != window.YaSoMargin) html.style.marginTop = window.YaSoMargin;
        target.style.setProperty('display', 'none', 'important');
    };

    var YaSoCheck = function(el){
        return typeof el !== "undefined" && el.innerHTML && (
            ( el.innerHTML.indexOf('Нaйдено')> -1 && el.innerHTML.indexOf('категории')> -1 ) ||
            el.innerHTML.indexOf('Нa&nbsp;этoй&nbsp;cтрaнице&nbsp;cамaя&nbsp;низкaя&nbsp;цeна')> -1 ||
            el.innerHTML.indexOf('Нa этoй cтрaнице cамaя низкaя цeна')> -1 ||
            el.innerHTML.indexOf('Более&nbsp;выгодная&nbsp;цена')> -1 ||
            el.innerHTML.indexOf('Более выгодная цена')> -1 ||
            el.innerHTML.indexOf('Советник')> -1
        );
    };

    var YaSoMargin = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('margin-top');

    if ("MutationObserver" in window || "WebKitMutationObserver" in window || "MozMutationObserver" in window ) {

        var MuOb = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var mo = new MuOb(function(g) {
            g.map(function(n) {
                var el = n.addedNodes[0];
                if ( YaSoCheck(el) ) {
                    setTimeout( function(){ window.YaSoBlock( el ); },200);
                }
            })
        });
        mo.observe(document.body, {
            childList: true,
            characterData: true,
        });

    } else if (typeof document.body.addEventListener !== 'undefined'){

        document.addEventListener('DOMNodeInserted',function (e) {
            var el = e.target;
            if ( YaSoCheck(el) ) {
                setTimeout( function(){ window.YaSoBlock( el ); },200);
                return true;
            }
        });

    }

} catch (e) {

    if (typeof console !== 'undefined')
        console.error('YaSoBlock: error', e);

}