!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createElement("p");return t.textContent=e,t}},function(e,t,n){"use strict";e.exports=function(e){document.body.append(e)}},function(e,t,n){"use strict";var o=u(n(1)),r=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var s=new Promise(function(e,t){setTimeout(function(){e("Segundo mensaje con retardo de 3 seg")},3e3)});e.exports={firstMessage:"Mensaje desde modulo",delayedMessage:async function(){var e=await s;console.log(e),(0,o.default)((0,r.default)(e))}}},function(e,t,n){"use strict";n(5);var o=n(2);document.write(o.firstMessage),(0,o.delayedMessage)(),console.log("hello"),console.log("hello")},,function(e,t){}]);