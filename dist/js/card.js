!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e,t,n,r,a,s){var i,o=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,o=e.default);var c,u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=r),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:o,options:u}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(r[s]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(10),s={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(g(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(g(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(p){var a=l++;r=o||(o=h()),t=b.bind(null,r,a,!1),n=b.bind(null,r,a,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,a=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(f,t.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){c=n,d=r||{};var i=a(e,t);return v(i),function(t){for(var n=[],r=0;r<i.length;r++){var o=i[r];(l=s[o.id]).refs--,n.push(l)}t?v(i=a(e,t)):i=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}};var x,m=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function b(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},function(e,t,n){var r=n(0)(n(14),n(15),!1,function(e){n(12)},"data-v-428ece9e",null);e.exports=r.exports},function(e,t,n){var r=n(0)(n(16),n(17),!1,null,null,null);e.exports=r.exports},function(e,t,n){n(6),e.exports=n(24)},function(e,t,n){Nova.booting(function(e){e.component("nova-update-card",n(7)),e.component("laravel-update-card",n(19))})},function(e,t,n){var r=n(0)(n(11),n(18),!1,function(e){n(8)},"data-v-41b2d690",null);e.exports=r.exports},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("ad71835c",r,!0,{})},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".content-box[data-v-41b2d690]{padding-left:150px}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],i=s[0],o={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(o):n.push(r[i]={id:i,parts:[o]})}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=n.n(r),s=n(4),i=n.n(s);t.default={props:["card"],components:{CardContainer:a.a,CardVersion:i.a},data:function(){return{updateAvailable:!1,currentVersion:null,latestVersion:null}},mounted:function(){var e=this;Nova.request().get("/nova-vendor/skydiver/nova-update-card/nova-check").then(function(t){var n=t.data;e.latestVersion=n.latest_version,e.currentVersion=n.current_version,e.updateAvailable=n.update_available})}}},function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("052034c3",r,!0,{})},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".st0[data-v-428ece9e]{fill:#fb503b}.st1[data-v-428ece9e]{fill:#252d37}.laravel-bg[data-v-428ece9e]{height:100%;background-image:url(\"data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 700 700' style='enable-background:new 0 0 700 700;' xml:space='preserve'><path class='st0' fill='%23FB503B' d='M556.8,344.2c-2.9-3.2-42.3-52.6-49.3-61c-7-8.4-10.3-6.9-14.6-6.2s-54.2,9-60,10c-5.8,1-9.4,3.3-5.9,8.3c3.2,4.4,36,51,43.2,61.2l-130.5,31.3L236.1,214.3c-4.1-6.1-5-8.3-14.4-7.8c-9.4,0.4-81.4,6.4-86.5,6.8c-5.1,0.4-10.8,2.7-5.6,14.8c5.1,12.1,86.9,188.3,89.2,193.4c2.3,5.1,8.2,13.4,22.1,10.1c14.2-3.4,63.5-16.3,90.4-23.3c14.2,25.8,43.3,78,48.6,85.5\tc7.2,10,12.1,8.3,23.1,5c8.6-2.6,134.4-47.8,140.1-50.2c5.7-2.3,9.2-4,5.3-9.7c-2.8-4.2-36-48.6-53.4-71.9c11.9-3.2,54.2-14.4,58.8-15.7C559,350,559.7,347.4,556.8,344.2z M319.6,392.7c-1.6,0.3-74.6,17.8-78.5,18.7c-3.9,0.9-3.9,0.4-4.3-0.9c-0.4-1.3-86.9-179.6-88.1-181.8c-1.2-2.2-1.1-4,0-4c1.1,0,69-6.1,71.4-6.2s2.1,0.4,3,1.9c0,0,95.7,165.2,97.4,168.1C322.2,391.5,321.2,392.4,319.6,392.7z M525.7,431.3c1.2,1.8,2.3,3-1.3,4.3c-3.7,1.3-123.7,41.8-126,42.8c-2.3,1-4.2,1.3-7.2-3s-42-71.9-42-71.9l127.2-33.1c3.2-1,4.2-1.7,6.2,1.5S524.5,429.5,525.7,431.3z M533.8,341c-2.9,0.6-49.6,12.2-49.6,12.2l-38.2-52.4c-1.1-1.5-2-3,0.7-3.4c2.7-0.4,46.1-8.2,48-8.6c2-0.4,3.7-1,6.1,2.3c2.4,3.3,35.4,45.1,36.7,46.7C538.8,339.4,536.7,340.4,533.8,341z'/></svg>\");background-size:cover}.laravel-bg[data-v-428ece9e],.nova-bg[data-v-428ece9e]{width:150px;background-position:50%;background-repeat:no-repeat}.nova-bg[data-v-428ece9e]{height:80px;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path class='st1' d='M25.8 25.6C23 28.3 19.2 30 15 30c-4.7 0-8.9-2.1-11.6-5.4 6 4.9 14.8 4.6 20.4-.9a9.42 9.42 0 0 0 0-13.5c-3.8-3.7-9.9-3.7-13.6 0-1.6 1.6-1.6 4.2 0 5.8s4.2 1.6 5.8 0c.5-.5 1.4-.5 1.9 0s.5 1.4 0 1.9c-2.7 2.7-7.1 2.7-9.7 0-2.7-2.7-2.7-7 0-9.6 4.8-4.8 12.7-4.8 17.5 0 4.8 4.7 4.9 12.5.1 17.3zm.8-20.2C20.6.5 11.8.8 6.2 6.3a9.42 9.42 0 0 0 0 13.5c3.8 3.7 9.9 3.7 13.6 0 1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0c-.5.5-1.4.5-1.9 0s-.5-1.4 0-1.9c2.7-2.7 7.1-2.7 9.7 0s2.7 7 0 9.6c-4.8 4.8-12.7 4.8-17.5 0C-.5 17-.6 9.2 4.3 4.4 7 1.7 10.8 0 15 0c4.7 0 8.9 2.1 11.6 5.4z' fill='%23252d37'/></svg>\");background-size:70px 70px}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{type:{type:String,default:""}},computed:{containerClass:function(){return this.type+"-bg"}}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"px-3 mb-6 w-full"},[t("div",{staticClass:"flex justify-center items-centers"},[t("div",{staticClass:"relative w-full max-w-xl"},[t("card",{staticClass:"flex flex-col items-center justify-center",staticStyle:{"min-height":"118px"}},[t("div",{staticClass:"absolute pin-l",class:this.containerClass}),this._v(" "),t("div",{staticClass:"px-3 py-3 w-full"},[this._t("default")],2)])],1)])])},staticRenderFns:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{label:{type:String,default:""},version:{type:String,default:""},fullWidth:{type:Boolean,default:!1},alignment:{type:String,default:"left"}},computed:{cssClass:function(){return this.cardWidth+" "+this.boxAlignment},cardWidth:function(){return this.fullWidth?"w-full":"w-1/2"},boxAlignment:function(){return this.fullWidth?"justify-center":"right"===this.alignment?"justify-end":"justify-start"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex mt-2 px-3 items-center",class:e.cssClass},[n("span",{staticClass:"mr-1"},[e._v(e._s(e.label))]),e._v(" "),n("strong",[e._v(e._s(e.version))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardContainer",{attrs:{type:"nova"}},[n("div",{staticClass:"content-box"},[e.currentVersion?n("div",[e.updateAvailable?n("h1",{staticClass:"text-3xl text-error-message font-light text-center"},[e._v("A new version of Nova is available.")]):n("h1",{staticClass:"text-3xl text-80 font-light text-center"},[e._v("You're using the latest version of Nova!")]),e._v(" "),n("div",{staticClass:"flex flex-wrap"},[e.updateAvailable?n("CardVersion",{attrs:{version:e.currentVersion,label:"Your version:",alignment:"right"}}):e._e(),e._v(" "),e.latestVersion?n("CardVersion",{attrs:{version:e.latestVersion,"full-width":!e.updateAvailable,label:"Latest version:",alignment:"left"}}):e._e()],1)]):n("div",[n("h1",{staticClass:"text-3xl text-80 font-light text-center"},[e._v("Checking for Nova updates ...")])])])])},staticRenderFns:[]}},function(e,t,n){var r=n(0)(n(22),n(23),!1,function(e){n(20)},"data-v-18550574",null);e.exports=r.exports},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("a7c7d7ba",r,!0,{})},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".content-box[data-v-18550574]{padding-left:150px}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=n.n(r),s=n(4),i=n.n(s);t.default={props:["card"],components:{CardContainer:a.a,CardVersion:i.a},data:function(){return{updateAvailable:!1,currentVersion:null,latestVersion:null}},mounted:function(){var e=this;Nova.request().get("/nova-vendor/skydiver/nova-update-card/laravel-check").then(function(t){var n=t.data;e.latestVersion=n.latest_version,e.currentVersion=n.current_version,e.updateAvailable=n.update_available})}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardContainer",{attrs:{type:"laravel"}},[n("div",{staticClass:"content-box"},[e.currentVersion?n("div",[e.updateAvailable?n("h1",{staticClass:"text-3xl text-error-message font-light text-center"},[e._v("A new version of Laravel is available.")]):n("h1",{staticClass:"text-3xl text-80 font-light text-center"},[e._v("You're using the latest version of Laravel!")]),e._v(" "),n("div",{staticClass:"flex flex-wrap"},[e.updateAvailable?n("CardVersion",{attrs:{version:e.currentVersion,label:"Your version:",alignment:"right"}}):e._e(),e._v(" "),e.latestVersion?n("CardVersion",{attrs:{version:e.latestVersion,"full-width":!e.updateAvailable,label:"Latest version:",alignment:"left"}}):e._e()],1)]):n("div",[n("h1",{staticClass:"text-3xl text-80 font-light text-center"},[e._v("Checking for Laravel updates ...")])])])])},staticRenderFns:[]}},function(e,t){}]);