(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n  color: #333;\n}\n\nli {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem 1rem;\n\n  cursor: pointer;\n}\n\nli:hover {\n  background-color: #c3fae8;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 20rem 1fr;\n  grid-template-rows: 4rem 1fr;\n  height: 100vh;\n  width: 100vw;\n\n  overflow-x: hidden;\n}\n\n.header {\n  grid-column: 1 / 3;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  gap: 1rem;\n  padding: 1rem 2rem;\n\n  color: #fff;\n  background-color: #5c940d;\n}\n\n.inbox-box,\n.projects-box {\n  padding-top: 2rem;\n}\n\n.projects-box {\n  padding: 2rem 1rem 1rem 1rem;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n\n  font-size: 18px;\n}\n\n.icon-box {\n  display: flex;\n  gap: 1rem;\n}\n\n.icon {\n  height: 24px;\n  width: 24px;\n}\n\n.icon-inbox {\n  color: #1971c2;\n}\n\n.icon-today {\n  color: #f59f00;\n}\n\n.icon-priority {\n  color: #3b5bdb;\n}\n\nheader .icon:hover {\n  transform: scale(120%);\n  cursor: pointer;\n}\n\n.add-task-box {\n  display: flex;\n  gap: 1rem;\n}\n\n.nav {\n  grid-area: 2 / 1 / 3 / 2;\n\n  background-color: #e6fcf5;\n}\n\n#content {\n  grid-area: 2 / 2 / 3 / 3;\n\n  max-width: 800px;\n  width: 100%;\n  margin: 0 auto;\n\n  padding: 4rem;\n  color: #333;\n}\n\n.inbox-title-box {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n\n  margin-bottom: 1rem;\n}\n\n.inbox-title {\n  font-size: 28px;\n}\n\n.heading {\n  margin-bottom: 0.6rem;\n}\n\n/* Todo Cards */\n\n.todo-card {\n  padding: 1rem;\n  margin-bottom: 0.6rem;\n  border-radius: 6px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: space-between;\n  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);\n\n  cursor: pointer;\n}\n\n.todo-card:hover {\n  transform: scale(101%);\n}\n\n.todo-title {\n  grid-area: 1 / 1 / 2 / 2;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.todo-desc {\n  grid-area: 2 / 1 / 3 / 2;\n  font-size: 14px;\n  color: #555;\n}\n\n.todo-due-date {\n  justify-self: flex-end;\n}\n\n.inbox {\n  margin-bottom: 2rem;\n}\n\n.date,\n.todo-due-date {\n  font-size: 12px;\n  color: #777;\n}\n\n/* Priority settings */\n\n.priority-1 {\n  border: 1px solid #e03131;\n}\n\n.priority-2 {\n  border: 1px solid #f59f00;\n}\n\n.priority-3 {\n  border: 1px solid #1971c2;\n}\n\n.priority-4 {\n  border: 1px solid #ccc;\n}",""]);const u=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var d=this[u][0];null!=d&&(i[d]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var d=t[u],s=r.base?d[0]+r.base:d[0],c=o[s]||0,l="".concat(s," ").concat(c);o[s]=c+1;var f=n(l),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=a(h,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var d=r(t,a),s=0;s<o.length;s++){var c=n(o[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),d=n.n(u),s=n(216),c=n.n(s),l=n(589),f=n.n(l),h=n(426),m={};function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function v(t){return g(1,arguments),t instanceof Date||"object"===p(t)&&"[object Date]"===Object.prototype.toString.call(t)}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function w(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===b(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(t){if(g(1,arguments),!v(t)&&"number"!=typeof t)return!1;var e=w(t);return!isNaN(Number(e))}function x(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function C(t,e){g(2,arguments);var n=w(t).getTime(),r=x(e);return new Date(n+r)}function T(t,e){g(2,arguments);var n=x(e);return C(t,-n)}m.styleTagTransform=f(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var M=864e5;function D(t){g(1,arguments);var e=1,n=w(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function S(t){g(1,arguments);var e=w(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=D(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=D(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function k(t){g(1,arguments);var e=S(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=D(n);return r}var E=6048e5,P={};function U(){return P}function W(t,e){var n,r,a,o,i,u,d,s;g(1,arguments);var c=U(),l=x(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(d=c.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=w(t),h=f.getUTCDay(),m=(h<l?7:0)+h-l;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function L(t,e){var n,r,a,o,i,u,d,s;g(1,arguments);var c=w(t),l=c.getUTCFullYear(),f=U(),h=x(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(d=f.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(l+1,0,h),m.setUTCHours(0,0,0,0);var p=W(m,e),v=new Date(0);v.setUTCFullYear(l,0,h),v.setUTCHours(0,0,0,0);var b=W(v,e);return c.getTime()>=p.getTime()?l+1:c.getTime()>=b.getTime()?l:l-1}function Y(t,e){var n,r,a,o,i,u,d,s;g(1,arguments);var c=U(),l=x(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(d=c.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),f=L(t,e),h=new Date(0);h.setUTCFullYear(f,0,l),h.setUTCHours(0,0,0,0);var m=W(h,e);return m}var O=6048e5;function N(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const q=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return N("yy"===e?r%100:r,e.length)},j=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):N(n+1,2)},H=function(t,e){return N(t.getUTCDate(),e.length)},F=function(t,e){return N(t.getUTCHours()%12||12,e.length)},z=function(t,e){return N(t.getUTCHours(),e.length)},A=function(t,e){return N(t.getUTCMinutes(),e.length)},B=function(t,e){return N(t.getUTCSeconds(),e.length)},Q=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return N(Math.floor(r*Math.pow(10,n-3)),e.length)};var G={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return q(t,e)},Y:function(t,e,n,r){var a=L(t,r),o=a>0?a:1-a;return"YY"===e?N(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):N(o,e.length)},R:function(t,e){return N(S(t),e.length)},u:function(t,e){return N(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return N(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return N(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return j(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return N(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){g(1,arguments);var n=w(t),r=W(n,e).getTime()-Y(n,e).getTime();return Math.round(r/O)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):N(a,e.length)},I:function(t,e,n){var r=function(t){g(1,arguments);var e=w(t),n=D(e).getTime()-k(e).getTime();return Math.round(n/E)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):N(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):H(t,e)},D:function(t,e,n){var r=function(t){g(1,arguments);var e=w(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/M)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):N(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return N(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return N(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return N(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return F(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):z(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):N(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):N(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):A(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):B(t,e)},S:function(t,e){return Q(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return X(a);case"XXXX":case"XX":return I(a);default:return I(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return X(a);case"xxxx":case"xx":return I(a);default:return I(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+R(a,":");default:return"GMT"+I(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+R(a,":");default:return"GMT"+I(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return N(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return N((r._originalDate||t).getTime(),e.length)}};function R(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+N(o,2)}function X(t,e){return t%60==0?(t>0?"-":"+")+N(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+N(Math.floor(a/60),2)+n+N(a%60,2)}const J=G;var _=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Z=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const $={p:Z,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return _(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",_(a,e)).replace("{{time}}",Z(o,e))}};function V(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var K=["D","DD"],tt=["YY","YYYY"];function et(t){return-1!==K.indexOf(t)}function nt(t){return-1!==tt.indexOf(t)}function rt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var at={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ot(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const it={date:ot({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ot({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ot({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var ut={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function dt(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const st={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:dt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:dt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:dt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:dt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:dt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function ct(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?ft(d,(function(t){return t.test(u)})):lt(d,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(u.length);return{value:i,rest:c}}}function lt(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function ft(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var ht,mt={ordinalNumber:(ht={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(ht.matchPattern);if(!n)return null;var r=n[0],a=t.match(ht.parsePattern);if(!a)return null;var o=ht.valueCallback?ht.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:ct({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ct({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ct({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ct({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ct({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const gt={code:"en-US",formatDistance:function(t,e,n){var r,a=at[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:it,formatRelative:function(t,e,n,r){return ut[t]},localize:st,match:mt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var pt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bt=/^'([^]*?)'?$/,wt=/''/g,yt=/[a-zA-Z]/;function xt(t,e,n){var r,a,o,i,u,d,s,c,l,f,h,m,p,v,b,C,M,D;g(2,arguments);var S=String(e),k=U(),E=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:k.locale)&&void 0!==r?r:gt,P=x(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==u?u:k.firstWeekContainsDate)&&void 0!==i?i:null===(l=k.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=x(null!==(h=null!==(m=null!==(p=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(b=n.locale)||void 0===b||null===(C=b.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==p?p:k.weekStartsOn)&&void 0!==m?m:null===(M=k.locale)||void 0===M||null===(D=M.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==h?h:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var L=w(t);if(!y(L))throw new RangeError("Invalid time value");var Y=V(L),O=T(L,Y),N={firstWeekContainsDate:P,weekStartsOn:W,locale:E,_originalDate:L},q=S.match(vt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,$[e])(t,E.formatLong):t})).join("").match(pt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return Ct(r);var o=J[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!nt(r)||rt(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!et(r)||rt(r,e,String(t)),o(O,r,E.localize,N);if(a.match(yt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return q}function Ct(t){var e=t.match(bt);return e?e[1].replace(wt,"'"):t}function Tt(t,e){g(2,arguments);var n=w(t),r=w(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function Mt(t){g(1,arguments);var e=w(t);return e.setHours(0,0,0,0),e}function Dt(t,e){g(2,arguments);var n=Mt(t),r=Mt(e);return n.getTime()===r.getTime()}function St(t){return g(1,arguments),Dt(t,Date.now())}const kt=document.getElementById("content"),Et=document.querySelector(".main-inbox"),Pt=document.querySelector(".today-inbox"),Ut=document.querySelector(".priority-inbox");let Wt=[],Lt=[],Yt=[],Ot=[],Nt=[];const qt=new Date;function jt(){kt.innerHTML="";const t=document.createElement("div"),e=document.createElement("h2"),n=document.createElement("span");t.classList.add("inbox-title-box"),e.classList.add("inbox-title"),e.textContent="Inbox ",n.classList.add("date"),n.textContent=xt(qt,"EEE, MMM dd"),e.appendChild(n),t.appendChild(e),kt.appendChild(t),Lt.length>0&&kt.appendChild(function(){const t=document.createElement("div"),e=document.createElement("h3"),n=document.createElement("div");return t.classList.add("inbox"),e.classList.add("heading"),e.textContent="Overdue",Lt.forEach((t=>n.appendChild(Ft(t)))),t.appendChild(e),t.appendChild(n),t}()),Yt.length>0&&kt.appendChild(Ht()),Ot.length>0&&kt.appendChild(function(){const t=document.createElement("div"),e=document.createElement("h3"),n=document.createElement("div");return e.classList.add("heading"),e.textContent="Future Due",Ot.forEach((t=>n.appendChild(Ft(t)))),t.appendChild(e),t.appendChild(n),t}())}function Ht(){const t=document.createElement("div"),e=document.createElement("h3"),n=document.createElement("span"),r=document.createElement("div");return t.classList.add("inbox"),e.classList.add("heading"),e.textContent="Today ",n.classList.add("date"),n.textContent=`${xt(qt,"EEE, MMM dd")}`,e.appendChild(n),Yt.forEach((t=>r.appendChild(Ft(t)))),t.appendChild(e),t.appendChild(r),t}function Ft(t){const e=document.createElement("div"),n=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p");return e.classList.add("todo-card"),e.classList.add(`priority-${t.priority}`),e.dataset.project=t.type,n.classList.add("todo-title"),r.classList.add("todo-desc"),a.classList.add("todo-due-date"),n.textContent=t.title,r.textContent=t.desc,a.textContent=xt(t.dueDate,"MMM dd, yyyy"),e.appendChild(n),e.appendChild(r),e.appendChild(a),e}function zt(t,e,n,r,a,o,i){return""===i&&(i="default"),{title:t,desc:e,dueDate:new Date(a,r,n),priority:o,type:i}}Wt.push(zt("Matthew's Birthday","He's old",9,0,1998,"4","")),Wt.push(zt("Xio's Birthday","She's young",11,3,2001,"1","")),Wt.push(zt("Today","today card",30,11,2022,"4","")),Wt.push(zt("you?","this is a todo",8,3,2200,"3","")),Wt.push(zt("are","this is a todo",7,4,2042,"2","")),Wt.push(zt("how","this is a todo",6,5,2023,"3","")),Et.addEventListener("click",jt),Pt.addEventListener("click",(function(){kt.innerHTML="",Yt.length>0&&kt.appendChild(Ht()),document.querySelector(".heading").classList.add("inbox-title")})),Ut.addEventListener("click",(function(){kt.innerHTML="",Nt.length>0&&kt.appendChild(function(){const t=document.createElement("div"),e=document.createElement("h3"),n=document.createElement("div");return e.classList.add("heading"),e.textContent="Priority Inbox",Nt.forEach((t=>n.appendChild(Ft(t)))),t.appendChild(e),t.appendChild(n),t}()),document.querySelector(".heading").classList.add("inbox-title")})),Wt=function(t){for(let e=0;e<t.length;e++)for(let n=0;n<t.length-e-1;n++)if(1===Tt(t[n].dueDate,t[n+1].dueDate)){let e=t[n];t[n]=t[n+1],t[n+1]=e}return t}(Wt),Lt=[],Yt=[],Ot=[],Nt=[],Lt=Wt.filter((t=>function(t){return g(1,arguments),w(t).getTime()<Date.now()}(t.dueDate)&&!St(t.dueDate))),Yt=Wt.filter((t=>St(t.dueDate))),Ot=Wt.filter((t=>function(t){return g(1,arguments),w(t).getTime()>Date.now()}(t.dueDate))),Nt=Wt.sort(((t,e)=>t.priority-e.priority)),jt()})()})();