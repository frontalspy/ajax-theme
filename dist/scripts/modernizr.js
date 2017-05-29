!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?x[s[0]]=i:(!x[s[0]]||x[s[0]]instanceof Boolean||(x[s[0]]=new Boolean(x[s[0]])),x[s[0]][s[1]]=i),b.push((i?"":"no-")+s.join("-"))}}function o(e){var t=S.className,n=x._config.classPrefix||"";if(C&&(t=t.baseVal),x._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?S.className.baseVal=t:S.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function l(e,n,r,i){var o,l,c,u,d="modernizr",f=a("div"),p=s();if(parseInt(r,10))for(;r--;)c=a("div"),c.id=i?i[r]:d+(r+1),f.appendChild(c);return o=a("style"),o.type="text/css",o.id="s"+d,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):f.parentNode.removeChild(f),!!l}function c(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(u(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+u(t[i])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,i,o){function s(){u&&(delete L.style,delete L.modElem)}if(o=!r(o,"undefined")&&o,!r(i,"undefined")){var l=d(e,i);if(!r(l,"undefined"))return l}for(var u,p,m,h,v,g=["modernizr","tspan"];!L.style;)u=!0,L.modElem=a(g.shift()),L.style=L.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],v=L.style[h],c(h,"-")&&(h=f(h)),L.style[h]!==n){if(o||r(i,"undefined"))return s(),"pfx"!=t||h;try{L.style[h]=i}catch(e){}if(L.style[h]!=v)return s(),"pfx"!=t||h}return s(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?m(i,n||t):i);return!1}function v(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+A.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?p(s,t,i,o):(s=(e+" "+P.join(a+" ")+a).split(" "),h(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],E={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},x=function(){};x.prototype=E,x=new x;var b=[],S=t.documentElement,C="svg"===S.nodeName.toLowerCase();C||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=T.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=T.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),T.elements=n+" "+e,c(t)}function o(e){var t=C[e[b]];return t||(t={},S++,e[b]=S,C[S]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():x.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||E.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),l=s.length;a<l;a++)i.createElement(s[a]);return i}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return T.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(T,t.frag)}function c(e){e||(e=t);var r=o(e);return!T.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(d(t)));return a}function d(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(N+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function f(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+N+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),s=e.namespaces,l=e.parentWindow;return!_||e.printShived?e:("undefined"==typeof s[N]&&s.add(N),l.attachEvent("onbeforeprint",function(){t();for(var o,a,s,l=e.styleSheets,c=[],d=l.length,p=Array(d);d--;)p[d]=l[d];for(;s=p.pop();)if(!s.disabled&&w.test(s.media)){try{o=s.imports,a=o.length}catch(e){a=0}for(d=0;d<a;d++)p.push(o[d]);try{c.push(s.cssText)}catch(e){}}c=f(c.reverse().join("")),i=u(e),r=n(e,c)}),l.attachEvent("onafterprint",function(){p(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",y=e.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,x=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",S=0,C={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){h=!0,v=!0}}();var T={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s,addElements:i};e.html5=T,c(t);var w=/^$|\b(?:all|print)\b/,N="html5shiv",_=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();T.type+=" print",T.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=T)}("undefined"!=typeof e?e:this,t),x.addTest("contenteditable",function(){if("contentEditable"in S){var e=a("div");return e.contentEditable=!0,"true"===e.contentEditable}}),x.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest);var T=a("input"),w="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),N={};x.input=function(t){for(var n=0,r=t.length;n<r;n++)N[t[n]]=!!(t[n]in T);return N.list&&(N.list=!(!a("datalist")||!e.HTMLDataListElement)),N}(w);var _=E.testStyles=l;x.addTest("checked",function(){return _("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var j=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];E._prefixes=j,x.addTest("opacity",function(){var e=a("a").style;return e.cssText=j.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),x.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),x.addTest("hidden","hidden"in a("a")),x.addTest("contains",r(String.prototype.contains,"function")),x.addTest("history",function(){var t=navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1)&&(e.history&&"pushState"in e.history)});var k="Moz O ms Webkit",A=E._config.usePrefixes?k.split(" "):[];E._cssomPrefixes=A;var z={elem:a("modernizr")};x._q.push(function(){delete z.elem});var L={style:z.elem.style};x._q.unshift(function(){delete L.style});var P=E._config.usePrefixes?k.toLowerCase().split(" "):[];E._domPrefixes=P,E.testAllProps=v;var M=function(t){var r,i=j.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;a<i;a++){var s=j[a],l=s.toUpperCase()+"_"+r;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};E.atRule=M;var q=E.prefixed=function(e,t,n){return 0===e.indexOf("@")?M(e):(e.indexOf("-")!=-1&&(e=f(e)),t?v(e,t,n):v(e,"pfx"))};x.addTest("performance",!!q("performance",e)),x.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),x.addTest("webanimations","animate"in a("div")),x.addTest("template","content"in a("template")),x.addTest("time","valueAsDate"in a("time")),x.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),E.testAllProps=g,x.addTest("ellipsis",g("textOverflow","ellipsis")),i(),o(b),delete E.addTest,delete E.addAsyncTest;for(var F=0;F<x._q.length;F++)x._q[F]();e.Modernizr=x}(window,document);