define("mod/3w_saas/progressBar",["proj/3w_saas/zepto"],function(require,exports,module){var t=require("proj/3w_saas/zepto"),e=function(){var t=[];return{push:function(e){t.push(e)},flush:function(){function e(){n.playing=!0,t.shift().start(function(){return n.isEmpty()?(n.playing=!1,void(n.onComplete&&n.onComplete())):void e()})}if(!this.isEmpty()){var n=this;e()}},setOnComplete:function(t){this.onComplete=t},isPlaying:function(){return!!this.playing},isEmpty:function(){return!t.length}}},n=function(t,e,n){return{start:function(r){function i(){var a=Date.now(),s=(a-o)/t;s>1&&(s=1),e(n[0]+(n[1]-n[0])*s),s<1?requestAnimationFrame(i):r()}var o=Date.now();requestAnimationFrame(i)}}};return function(r,i){function o(t){var e=t.toFixed(p)+"%";f.css("width",e),h.text(e)}function a(t){t=parseFloat(t),isNaN(t)||(t=100*t,y.push(new n((t-g)*v/100,o,[g,t])),g=t,y.isPlaying()||y.flush(),t>=100&&y.setOnComplete(d))}function s(){f.toggleClass("active")}function u(){f.removeClass("active"),l.remove(),l=null,f=null,h=null,c=null}var c=t.extend({},i),l=t(r),f=l.find(".progress-bar"),h=l.find(".progress-value"),p=c.decimal||0,d=c.onComplete||t.noop,m=c.active||!0,v=c.duration||1500,g=0,y=new e;return o(0),m&&s(),{toggle:s,setValue:a,destroy:u}}}),function(t,e){"function"==typeof define&&define.cmd?define("proj/3w_saas/zepto",[],function(){return e(t)}):e(t)}(this,function(t){var e=function(){function e(t){return null==t?String(t):Y[J.call(t)]||"object"}function n(t){return"function"==e(t)}function r(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(t){return"object"==e(t)}function a(t){return o(t)&&!r(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){var e=!!t&&"length"in t&&t.length,n=C.type(t);return"function"!=n&&!r(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function u(t){return D.call(t,function(t){return null!=t})}function c(t){return t.length>0?C.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in L?L[t]:L[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||$[l(t)]?e:e+"px"}function p(t){var e,n;return k[t]||(e=F.createElement(t),F.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function d(t){return"children"in t?M.call(t.children):C.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function m(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function v(t,e,n){for(j in e)n&&(a(e[j])||tt(e[j]))?(a(e[j])&&!a(t[j])&&(t[j]={}),tt(e[j])&&!tt(t[j])&&(t[j]=[]),v(t[j],e[j],n)):e[j]!==T&&(t[j]=e[j])}function g(t,e){return null==e?C(t):C(t).filter(e)}function y(t,e,r,i){return n(e)?e.call(t,r,i):e}function b(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",r=n&&n.baseVal!==T;return e===T?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function E(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;n<r;n++)w(t.childNodes[n],e)}var T,j,C,S,N,P,O=[],A=O.concat,D=O.filter,M=O.slice,F=t.document,k={},L={},$={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},R=/^\s*<(\w+|!)[^>]*>/,z=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,_=/([A-Z])/g,W=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],I=F.createElement("table"),U=F.createElement("tr"),V={tr:F.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:U,th:U,"*":F.createElement("div")},X=/complete|loaded|interactive/,B=/^[\w-]*$/,Y={},J=Y.toString,G={},K=F.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},tt=Array.isArray||function(t){return t instanceof Array};return G.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=K).appendChild(t),r=~G.qsa(i,e).indexOf(t),o&&K.removeChild(t),r},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return D.call(t,function(e,n){return t.indexOf(e)==n})},G.fragment=function(t,e,n){var r,i,o;return z.test(t)&&(r=C(F.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(q,"<$1></$2>")),e===T&&(e=R.test(t)&&RegExp.$1),e in V||(e="*"),o=V[e],o.innerHTML=""+t,r=C.each(M.call(o.childNodes),function(){o.removeChild(this)})),a(n)&&(i=C(r),C.each(n,function(t,e){W.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},G.Z=function(t,e){return new m(t,e)},G.isZ=function(t){return t instanceof G.Z},G.init=function(t,e){var r;if(!t)return G.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&R.test(t))r=G.fragment(t,RegExp.$1,e),t=null;else{if(e!==T)return C(e).find(t);r=G.qsa(F,t)}else{if(n(t))return C(F).ready(t);if(G.isZ(t))return t;if(tt(t))r=u(t);else if(o(t))r=[t],t=null;else if(R.test(t))r=G.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==T)return C(e).find(t);r=G.qsa(F,t)}}return G.Z(r,t)},C=function(t,e){return G.init(t,e)},C.extend=function(t){var e,n=M.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){v(t,n,e)}),t},G.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=B.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:M.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=F.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=e,C.isFunction=n,C.isWindow=r,C.isArray=tt,C.isPlainObject=a,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},C.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},C.camelCase=N,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return c(o)},C.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},C.grep=function(t,e){return D.call(t,e)},t.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Y["[object "+e+"]"]=e.toLowerCase()}),C.fn={constructor:G.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=G.isZ(e)?e.toArray():e;return A.apply(G.isZ(this)?this.toArray():this,n)},map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(M.apply(this,arguments))},ready:function(t){return X.test(F.readyState)&&F.body?t(C):F.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===T?M.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):C(D.call(this,function(e){return G.matches(e,t)}))},add:function(t,e){return C(P(this.concat(C(t,e))))},is:function(t){return this.length>0&&G.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==T)this.each(function(n){t.call(this,n)||e.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&n(t.item)?M.call(t):C(t);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return C(e)},has:function(t){return this.filter(function(){return o(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:C(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?C(t).filter(function(){var t=this;return O.some.call(n,function(e){return C.contains(e,t)})}):1==this.length?C(G.qsa(this[0],t)):this.map(function(){return G.qsa(this,t)}):C()},closest:function(t,e){var n=[],r="object"==typeof t&&C(t);return this.each(function(o,a){for(;a&&!(r?r.indexOf(a)>=0:G.matches(a,t));)a=a!==e&&!i(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){if((t=t.parentNode)&&!i(t)&&e.indexOf(t)<0)return e.push(t),t});return g(e,t)},parent:function(t){return g(P(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||M.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return D.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var r=C(t).get(0),i=r.parentNode||this.length>1;return this.each(function(n){C(this).wrapAll(e?t.call(this,n):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var r=C(this),i=r.contents(),o=e?t.call(this,n):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===T?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(j in t)b(this,j,t[j]);else b(this,t,y(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:T},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){b(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=Q[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(_,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?E(r):T},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=y(this,t,e,this.value)})):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=C(this),r=y(this,e,t,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(F.documentElement!==this[0]&&!C.contains(F.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,n){if(arguments.length<2){var r=this[0];if("string"==typeof t){if(!r)return;return r.style[N(t)]||getComputedStyle(r,"").getPropertyValue(t)}if(tt(t)){if(!r)return;var i={},o=getComputedStyle(r,"");return C.each(t,function(t,e){i[e]=r.style[N(e)]||o.getPropertyValue(e)}),i}}var a="";if("string"==e(t))n||0===n?a=l(t)+":"+h(t,n):this.each(function(){this.style.removeProperty(l(t))});else for(j in t)t[j]||0===t[j]?a+=l(j)+":"+h(j,t[j])+";":this.each(function(){this.style.removeProperty(l(j))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&O.some.call(this,function(t){return this.test(x(t))},f(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=x(this),r=y(this,t,e,n);r.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||S.push(t)},this),S.length&&x(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===T)return x(this,"");S=x(this),y(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(f(t)," ")}),x(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=C(this),i=y(this,t,n,x(this));i.split(/\s+/g).forEach(function(t){(e===T?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===T?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===T?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=Z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,r.top+=parseFloat(C(e[0]).css("border-top-width"))||0,r.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||F.body;t&&!Z.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(n){var o,a=this[0];return n===T?r(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=C(this),a.css(t,y(this,n,e,a[t]()))})}}),H.forEach(function(n,r){var i=r%2;C.fn[n]=function(){var n,o,a=C.map(arguments,function(t){var r=[];return n=e(t),"array"==n?(t.forEach(function(t){return t.nodeType!==T?r.push(t):C.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(G.fragment(t)))}),r):"object"==n||null==t?t:G.fragment(t)}),s=this.length>1;return a.length<1?this:this.each(function(e,n){o=i?n:n.parentNode,n=0==r?n.nextSibling:1==r?n.firstChild:2==r?n:null;var u=C.contains(F.documentElement,o);a.forEach(function(e){if(s)e=e.cloneNode(!0);else if(!o)return C(e).remove();o.insertBefore(e,n),u&&w(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},C.fn[i?n+"To":"insert"+(r?"Before":"After")]=function(t){return C(t)[n](this),this}}),G.Z.prototype=m.prototype=C.fn,G.uniq=P,G.deserializeValue=E,C.zepto=G,C}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function n(t){return t._zid||(t._zid=p++)}function r(t,e,r,a){if(e=i(e),e.ns)var s=o(e.ns);return(g[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||s.test(t.ns))&&(!r||n(t.fn)===n(r))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function a(t,e){return t.del&&!b&&t.e in x||!!e}function s(t){return E[t]||b&&x[t]||t}function u(t,r,o,u,c,f,p){var d=n(t),m=g[d]||(g[d]=[]);r.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(o);var r=i(n);r.fn=o,r.sel=c,r.e in E&&(o=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return r.fn.apply(this,arguments)}),r.del=f;var d=f||o;r.proxy=function(e){if(e=l(e),!e.isImmediatePropagationStopped()){e.data=u;var n=d.apply(t,e._args==h?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},r.i=m.length,m.push(r),"addEventListener"in t&&t.addEventListener(s(r.e),r.proxy,a(r,p))})}function c(t,e,i,o,u){var c=n(t);(e||"").split(/\s/).forEach(function(e){r(t,e,i,o).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,a(e,u))})})}function l(t,n){if(n||!t.isDefaultPrevented){n||(n=t),e.each(C,function(e,r){var i=n[e];t[e]=function(){return this[r]=w,i&&i.apply(n,arguments)},t[r]=T});try{t.timeStamp||(t.timeStamp=Date.now())}catch(r){}(n.defaultPrevented!==h?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=w)}return t}function f(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===h||(n[e]=t[e]);return l(n,t)}var h,p=1,d=Array.prototype.slice,m=e.isFunction,v=function(t){return"string"==typeof t},g={},y={},b="onfocusin"in t,x={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",e.event={add:u,remove:c},e.proxy=function(t,r){var i=2 in arguments&&d.call(arguments,2);if(m(t)){var o=function(){return t.apply(r,i?i.concat(d.call(arguments)):arguments)};return o._zid=n(t),o}if(v(r))return i?(i.unshift(t[r],t),e.proxy.apply(null,i)):e.proxy(t[r],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},T=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r,i,o){var a,s,l=this;return t&&!v(t)?(e.each(t,function(t,e){l.on(t,n,r,e,o)}),l):(v(n)||m(i)||i===!1||(i=r,r=n,n=h),i!==h&&r!==!1||(i=r,r=h),i===!1&&(i=T),l.each(function(l,h){o&&(a=function(t){return c(h,t.type,i),i.apply(this,arguments)}),n&&(s=function(t){var r,o=e(t.target).closest(n,h).get(0);if(o&&o!==h)return r=e.extend(f(t),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(d.call(arguments,1)))}),u(h,t,i,r,n,s||a)}))},e.fn.off=function(t,n,r){var i=this;return t&&!v(t)?(e.each(t,function(t,e){i.off(t,n,e)}),i):(v(n)||m(r)||r===!1||(r=n,n=h),r===!1&&(r=T),i.each(function(){c(this,t,r,n)}))},e.fn.trigger=function(t,n){return t=v(t)||e.isPlainObject(t)?e.Event(t):l(t),t._args=n,this.each(function(){t.type in x&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var i,o;return this.each(function(a,s){i=f(v(t)?e.Event(t):t),i._args=n,i.target=s,e.each(r(s,t.type||t),function(t,e){if(o=e.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){v(t)||(e=t,t=e.type);var n=document.createEvent(y[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),l(n)}}(e),function(e){function n(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function r(t,e,r,i){if(t.global)return n(e||x,r,i)}function i(t){t.global&&0===e.active++&&r(t,null,"ajaxStart")}function o(t){t.global&&!--e.active&&r(t,null,"ajaxStop")}function a(t,e){var n=e.context;return e.beforeSend.call(n,t,e)!==!1&&r(e,n,"ajaxBeforeSend",[t,e])!==!1&&void r(e,n,"ajaxSend",[t,e])}function s(t,e,n,i){var o=n.context,a="success";n.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),r(n,o,"ajaxSuccess",[e,n,t]),c(a,e,n)}function u(t,e,n,i,o){var a=i.context;i.error.call(a,n,e,t),o&&o.rejectWith(a,[n,e,t]),r(i,a,"ajaxError",[n,i,t||e]),c(e,n,i)}function c(t,e,n){var i=n.context;n.complete.call(i,e,t),r(n,i,"ajaxComplete",[e,n]),o(n)}function l(t,e,n){if(n.dataFilter==f)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function f(){}function h(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==j?"json":w.test(t)?"script":T.test(t)&&"xml")||"text"}function p(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=p(t.url,t.data),t.data=void 0)}function m(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function v(t,n,r,i){var o,a=e.isArray(n),s=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?t.add(u.name,u.value):"array"==o||!r&&"object"==o?v(t,u,r,n):t.add(n,u)})}var g,y,b=+new Date,x=t.document,E=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,T=/^(?:text|application)\/xml/i,j="application/json",C="text/html",S=/^\s*$/,N=x.createElement("a");N.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,r){if(!("type"in n))return e.ajax(n);var i,o,c=n.jsonpCallback,l=(e.isFunction(c)?c():c)||"Zepto"+b++,f=x.createElement("script"),h=t[l],p=function(t){e(f).triggerHandler("error",t||"abort")},d={abort:p};return r&&r.promise(d),e(f).on("load error",function(a,c){clearTimeout(o),e(f).off().remove(),"error"!=a.type&&i?s(i[0],d,n,r):u(null,c||"error",d,n,r),t[l]=h,i&&e.isFunction(h)&&h(i[0]),h=i=void 0}),a(d,n)===!1?(p("abort"),d):(t[l]=function(){i=arguments},f.src=n.url.replace(/\?(.+)=\?/,"?$1="+l),x.head.appendChild(f),n.timeout>0&&(o=setTimeout(function(){p("timeout")},n.timeout)),d)},e.ajaxSettings={type:"GET",beforeSend:f,success:f,error:f,complete:f,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:j,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:f},e.ajax=function(n){var r,o,c=e.extend({},n||{}),m=e.Deferred&&e.Deferred();for(g in e.ajaxSettings)void 0===c[g]&&(c[g]=e.ajaxSettings[g]);i(c),c.crossDomain||(r=x.createElement("a"),r.href=c.url,r.href=r.href,c.crossDomain=N.protocol+"//"+N.host!=r.protocol+"//"+r.host),c.url||(c.url=t.location.toString()),(o=c.url.indexOf("#"))>-1&&(c.url=c.url.slice(0,o)),d(c);var v=c.dataType,b=/\?.+=\?/.test(c.url);if(b&&(v="jsonp"),c.cache!==!1&&(n&&n.cache===!0||"script"!=v&&"jsonp"!=v)||(c.url=p(c.url,"_="+Date.now())),"jsonp"==v)return b||(c.url=p(c.url,c.jsonp?c.jsonp+"=?":c.jsonp===!1?"":"callback=?")),e.ajaxJSONP(c,m);var E,w=c.accepts[v],T={},j=function(t,e){T[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:t.location.protocol,P=c.xhr(),O=P.setRequestHeader;if(m&&m.promise(P),c.crossDomain||j("X-Requested-With","XMLHttpRequest"),j("Accept",w||"*/*"),(w=c.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),P.overrideMimeType&&P.overrideMimeType(w)),(c.contentType||c.contentType!==!1&&c.data&&"GET"!=c.type.toUpperCase())&&j("Content-Type",c.contentType||"application/x-www-form-urlencoded"),c.headers)for(y in c.headers)j(y,c.headers[y]);if(P.setRequestHeader=j,P.onreadystatechange=function(){if(4==P.readyState){P.onreadystatechange=f,clearTimeout(E);var t,n=!1;if(P.status>=200&&P.status<300||304==P.status||0==P.status&&"file:"==C){if(v=v||h(c.mimeType||P.getResponseHeader("content-type")),"arraybuffer"==P.responseType||"blob"==P.responseType)t=P.response;else{t=P.responseText;try{t=l(t,v,c),"script"==v?(0,eval)(t):"xml"==v?t=P.responseXML:"json"==v&&(t=S.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return u(n,"parsererror",P,c,m)}s(t,P,c,m)}else u(P.statusText||null,P.status?"error":"abort",P,c,m)}},a(P,c)===!1)return P.abort(),u(null,"abort",P,c,m),P;var A=!("async"in c)||c.async;if(P.open(c.type,c.url,A,c.username,c.password),c.xhrFields)for(y in c.xhrFields)P[y]=c.xhrFields[y];for(y in T)O.apply(P,T[y]);return c.timeout>0&&(E=setTimeout(function(){P.onreadystatechange=f,P.abort(),u(null,"timeout",P,c,m)},c.timeout)),P.send(c.data?c.data:null),P},e.get=function(){return e.ajax(m.apply(null,arguments))},e.post=function(){var t=m.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=m.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var i,o=this,a=t.split(/\s/),s=m(t,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(t){o.html(i?e("<div>").html(t.replace(E,"")).find(i):t),u&&u.apply(o,arguments)},e.ajax(s),this};var P=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(P(t)+"="+P(n))},v(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(t){function e(n){var r=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],i="pending",o={state:function(){return i},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(r,function(r,i){var s=t.isFunction(n[r])&&n[r];a[i[1]](function(){var n=s&&s.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var r=this===o?e.promise():this,a=s?[n]:arguments;e[i[0]+"With"](r,a)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},a={};return t.each(r,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){i=s},r[1^t][2].disable,r[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this},a[e[0]+"With"]=n.fireWith}),o.promise(a),n&&n.call(a,a),a}var n=Array.prototype.slice;t.when=function(r){var i,o,a,s=n.call(arguments),u=s.length,c=0,l=1!==u||r&&t.isFunction(r.promise)?u:0,f=1===l?r:e(),h=function(t,e,r){return function(o){e[t]=this,r[t]=arguments.length>1?n.call(arguments):o,r===i?f.notifyWith(e,r):--l||f.resolveWith(e,r)}};if(u>1)for(i=new Array(u),o=new Array(u),a=new Array(u);c<u;++c)s[c]&&t.isFunction(s[c].promise)?s[c].promise().done(h(c,a,s)).fail(f.reject).progress(h(c,o,i)):--l;return l||f.resolveWith(a,s),f.promise()},t.Deferred=e}(e),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,r,i,o,a,s,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,r=!0,s=o||0,o=0,a=u.length,i=!0;u&&s<a;++s)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var r=u.length,s=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&s(n)})};s(arguments),i?a=u.length:n&&(o=r,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var r;(r=t.inArray(n,u,r))>-1;)u.splice(r,1),i&&(r<=a&&--a,r<=s&&--s)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return a=u.length=0,this},disable:function(){return u=c=n=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||r&&!c||(e=e||[],e=[t,e.slice?e.slice():e],i?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!r}};return f}}(e),function(e){function n(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function r(){f=null,p.last&&(p.el.trigger("longTap"),p={})}function i(){f&&clearTimeout(f),f=null}function o(){u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),f&&clearTimeout(f),u=c=l=f=null,p={}}function a(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function s(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var u,c,l,f,h,p={},d=750;e(document).ready(function(){var m,v,g,y,b=0,x=0;"MSGesture"in t&&(h=new MSGesture,h.target=document.body),e(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(p.el.trigger("swipe"),p.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(t){(y=s(t,"down"))&&!a(t)||(g=y?t:t.touches[0],t.touches&&1===t.touches.length&&p.x2&&(p.x2=void 0,p.y2=void 0),m=Date.now(),v=m-(p.last||m),p.el=e("tagName"in g.target?g.target:g.target.parentNode),u&&clearTimeout(u),p.x1=g.pageX,p.y1=g.pageY,v>0&&v<=250&&(p.isDoubleTap=!0),p.last=m,f=setTimeout(r,d),h&&y&&h.addPointer(t.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(y=s(t,"move"))&&!a(t)||(g=y?t:t.touches[0],i(),p.x2=g.pageX,p.y2=g.pageY,b+=Math.abs(p.x1-p.x2),x+=Math.abs(p.y1-p.y2))}).on("touchend MSPointerUp pointerup",function(t){(y=s(t,"up"))&&!a(t)||(i(),p.x2&&Math.abs(p.x1-p.x2)>30||p.y2&&Math.abs(p.y1-p.y2)>30?l=setTimeout(function(){p.el&&(p.el.trigger("swipe"),p.el.trigger("swipe"+n(p.x1,p.x2,p.y1,p.y2))),p={}},0):"last"in p&&(b<30&&x<30?c=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=o,p.el&&p.el.trigger(t),p.isDoubleTap?(p.el&&p.el.trigger("doubleTap"),p={}):u=setTimeout(function(){u=null,p.el&&p.el.trigger("singleTap"),p={}},250)},0):p={}),b=x=0)}).on("touchcancel MSPointerCancel pointercancel",o),e(t).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){
e.fn[t]=function(e){return this.on(t,e)}})}(e),e});