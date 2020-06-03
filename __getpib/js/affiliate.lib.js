//if(Shopify.checkout == undefined){
	var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
		document.getElementsByTagName("head")[0].appendChild(script);

	var crturl = (window.location.href).split("ref:");
		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
		
		var domainT = "."+window.location.hostname;
		//console.log("TTTTTT "+domainT);
		
		var CookieeVal = "";
		if(crturl[1] != undefined){
			var d = new Date();
			d.setTime(d.getTime() + (30*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			var cookiepath = "/";
			var CookieeVal = document.cookie = "refApp=" + crturl[1] + ";" + expires + ";path=" + cookiepath+";domain="+domainT+";";
			document.cookie = "refAppUrl=" + document.referrer + ";" + expires + ";path=" + cookiepath+";domain="+domainT+";";
			document.cookie = "lastCurrentUrl=" + window.location.href + ";" + expires + ";path=" + cookiepath+";domain="+domainT+";";
			sessionStorage.setItem("affiliateLinkHit", "ClickRecorded");
		}
		
			function getIP(json) {
				//document.getElementById("ipaddress").innerHTML = "Your IP Address is " + json.ip;				
					//var lastOrderId = getCookie("lastOrderIdGlobal");
					var d = new Date();
					d.setTime(d.getTime() + (30*24*60*60*1000));
					var expires = "expires="+ d.toUTCString();
					var cookiepath = "/"; // accessible from every web page of the domain
					document.cookie = "CURRENTIPADDRESS= "+json.ip+";" + expires + ";path=" + cookiepath+";domain="+domainT+";";
					
					var lastOrderWebsite = getCookie("lastOrderWebsite");
					var lastOrderId = getCookie("lastOrderId");
					var getcookie = getCookie("refApp");
					if(window.location.href.indexOf("cart") > -1){
						
						var LinkHitSession = sessionStorage.getItem("affiliateLinkHit");
						var getcookieRefUrl = getCookie("refAppUrl");
						var getcookieLastUrl = getCookie("lastCurrentUrl");
					   var MixedCode = "rf="+document.referrer+";cu="+window.location.href+";ci="+json.ip+";rc="+getcookie+";lrf="+getcookieRefUrl+";lcu="+getcookieLastUrl;
						var encCode = btoa(MixedCode);
						var xhttp = new XMLHttpRequest();
						var host = "http://"+window.location.hostname;
						var scripts = document.getElementsByTagName("script"),
						src = scripts[scripts.length-1].src;
						var arr = src.split("/");
						var result = arr[0] + "//" + arr[2];
						//console.log(lastOrderId+" HH");
						//console.log(window.location.hostname);
						//console.log(lastOrderWebsite);
						var isnum = /^\d+$/.test(lastOrderId);
						//console.log(isnum);
						//(lastOrderWebsite == window.location.hostname)
						
						if((!isnum)){
							var result = 'https://affilo.io';
							//xhttp.open("GET", result+"/track?ref="+encCode, true);
							xhttp.open("GET", result+"/track?ref="+encCode, true);
							//xhttp.open("GET", result+"/track?ref="+getcookie, true);
							xhttp.send();
							console.log(xhttp.response);
						}
						return;
					}
					
					if(getcookie!=""){
						var getcookieRefUrl = getCookie("refAppUrl");
						var getcookieLastUrl = getCookie("lastCurrentUrl");
						var MixedCode = "rf="+document.referrer+";cu="+window.location.href+";ci="+json.ip+";rc="+getcookie+";lrf="+getcookieRefUrl+";lcu="+getcookieLastUrl;
						var encCode = btoa(MixedCode);
						var xhttp = new XMLHttpRequest();
						var host = "http://"+window.location.hostname;
						var scripts = document.getElementsByTagName("script"),
						src = scripts[scripts.length-1].src;
						var arr = src.split("/");
						var result = arr[0] + "//" + arr[2];
						var result = 'https://affilo.io';
						//xhttp.open("GET", result+"/track?ref="+encCode, true);
						xhttp.open("GET", result+"/track?ref="+encCode, true);
						//xhttp.open("GET", result+"/track?ref="+getcookie, true);
						xhttp.send();
					}
			}			
//}
