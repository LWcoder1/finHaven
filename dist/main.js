(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"* {\n\n}\n\nbody {\n    margin: 0;\n}\n\nbutton {\n    width: 7vw;\n    height: 5vh;\n    border: none;\n    border-radius: 10px;\n    color: black;\n}\n\n#navBar {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 15vh;\n    background-color: red;\n    margin: 0;\n    padding: 0;\n}\n\n#btnContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 30vw;\n    height: 7.5vh;\n    background-color: white;\n    border-radius: 15px;\n    flex: 2;\n}\n\n#bodyContent {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 75vh;\n    background-color: green;\n    margin: 0;\n    padding: 0;\n}\n\n#footer {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 10vh;\n    background-color: blue;\n    margin: 0;\n    padding: 0;\n}\n\n.logoImg {\n    width: 5vw;\n    height: auto;\n    flex: 1;\n    margin-left: 5vw;\n}\n\n.logoName {\n    flex: 4;\n    margin-left: -6vw;\n    font-size: 3rem;\n}\n\n.loginBtn {\n    flex: 1;\n    max-width: 10vw;\n    margin-left: 3vw;\n    margin-right: 4vw;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),m=t.n(u),p=t(28),f={};function v(n,...e){for(let t of e)n.appendChild(t)}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=document.createElement("div");h.id="navBar";const g=document.createElement("div");g.id="bodyContent";const b=document.createElement("div");b.id="footer";const y=document.createElement("img");y.className="logoImg",y.src="./images/logo.png",y.alt="logo-img";const x=document.createElement("h1");x.className="logoName",x.textContent="FinHaven";const w=document.createElement("div");w.id="btnContainer";const C=document.createElement("button");C.className="loginBtn",C.textContent="Log in";const E=document.createElement("button");E.className="homeBtn",E.textContent="Home";const N=document.createElement("button");N.className="simBtn",N.textContent="Simulation";const T=document.createElement("button");T.className="aboutBtn",T.textContent="About Us",document.body.appendChild(h),v(h,y,x,w,C),v(w,E,N,T),document.body.appendChild(g),document.body.appendChild(b)})()})();