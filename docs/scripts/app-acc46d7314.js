!function(e){var i={};function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=0)}([function(n,t,e){"use strict";var i,o=e(1);new((i=o)&&i.__esModule?i:{default:i}).default},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,t,e){return t&&i(n.prototype,t),e&&i(n,e),n}}();var o=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.body=document.body,this.nav=document.querySelector(".navigation"),this.navList=document.querySelector(".navigation__list"),this.navLinks=Array.from(document.querySelectorAll(".navigation__link")),this.navToggle=document.querySelector(".navigation__toggle"),this.events()}return i(n,[{key:"isNavListCollapsed",value:function(){return this.navList.classList.contains("navigation__list--collapsed")}},{key:"toggleNav",value:function(n){this.navList.classList.toggle("navigation__list--collapsed"),n.stopPropagation()}},{key:"hideNav",value:function(){this.navList.classList.remove("navigation__list--collapsed")}},{key:"onNavLinkClick",value:function(){this.isNavListCollapsed&&this.hideNav()}},{key:"addBackgroundOnScroll",value:function(){window.scrollY>this.nav.clientHeight?this.nav.classList.add("navigation--dark-bg"):this.nav.classList.remove("navigation--dark-bg")}},{key:"events",value:function(){var t=this;this.navToggle.addEventListener("click",function(n){t.toggleNav(n)}),window.addEventListener("scroll",function(){t.addBackgroundOnScroll()}),this.navLinks.forEach(function(n){n.addEventListener("click",function(){t.onNavLinkClick()})})}}]),n}();t.default=o}]);