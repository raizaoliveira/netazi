(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"e8e20d73"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({about:"about"}[e]||e)+"."+{about:"8314804c"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2ec1":function(e,t,n){},"349a":function(e,t,n){"use strict";var r=n("6264"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar"),n("v-content",[n("router-view")],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("v-toolbar",{attrs:{app:"",dark:""}},[n("v-toolbar-title",{attrs:{to:"{ name : 'home'}"}},[n("router-link",{attrs:{to:{name:"home"}}},[e._v("Home")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{fab:"",depressed:"",dark:"",color:"yellow",to:"about"}},[n("v-icon",[e._v(" account_box ")])],1),n("v-btn",{attrs:{fab:"",depressed:"",dark:"",color:"purple",to:"system"}},[n("v-icon",[e._v(" favorite ")])],1)],1)],1)],1)},i=[],c={},u=c,l=n("2877"),p=n("6544"),f=n.n(p),d=n("8336"),v=n("132d"),m=n("2fa4"),h=n("71d9"),b=n("2a7f"),y=Object(l["a"])(u,s,i,!1,null,null,null),g=y.exports;f()(y,{VBtn:d["a"],VIcon:v["a"],VSpacer:m["a"],VToolbar:h["a"],VToolbarItems:b["a"],VToolbarTitle:b["b"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service"},[n("v-btn",{on:{click:function(t){return e.callHelloApi()}}},[e._v("Spring Boot")]),n("h4",[e._v("Backend response: "+e._s(e.backendResponse))])],1)},w=[],S=n("7338"),k=n.n(S),j=k.a.create({baseURL:"/api",timeout:1e3}),O={getSystem:function(){return j.get("/system/'a'")},callHelloApi:function(){return j.get("/hello")},createSystem:function(e,t,n){return j.post("/system/"+e+"/"+t+"/"+n)}},x={name:"service",data:function(){return{backendResponse:[],errors:[]}},methods:{callHelloApi:function(){var e=this;O.hello().then((function(t){e.backendResponse=t.data})).catch((function(t){e.errors.push(t)}))}}},E=x,T=(n("b336"),Object(l["a"])(E,_,w,!1,null,"0e79599e",null)),C=T.exports;f()(T,{VBtn:d["a"]});var V={name:"App",components:{Service:C,Navbar:g},data:function(){return{}}},A=V,P=n("7496"),B=n("a75b"),R=Object(l["a"])(A,o,a,!1,null,null,null),H=R.exports;f()(R,{VApp:P["a"],VContent:B["a"]});n("d3b7");var L=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},$=[],q={},M=q,I=Object(l["a"])(M,N,$,!1,null,null,null),D=I.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{on:{click:e.retrieveSystem}},[e._v("Click me!")])},G=[],J={data:function(){return{projects:[{title:"Patrimônio",description:"Gestão de bens mobiliários e imobiliários",status:"complete"},{title:"Almoxarifado",description:"Gestão de estoque e almoxarido",status:"ongoing"}],response:[],errors:[],system:{name:"",description:"",status:""},showResponse:!1,retrievedSystem:{},showRetrievedSystem:!1}},methods:{handleClick:function(){alert("test")},retrieveSystem:function(){var e=this;O.getSystem().then((function(t){e.retrievedSystem=t.data,e.showRetrievedSystem=!0})).catch((function(t){e.errors.push(t)}))}}},U=J,K=(n("74cf"),n("b0af")),z=n("a523"),Q=n("0e8f"),W=n("a722"),X=Object(l["a"])(U,F,G,!1,null,null,null),Y=X.exports;f()(X,{VCard:K["a"],VContainer:z["a"],VFlex:Q["a"],VLayout:W["a"]});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.hellomsg))]),n("h2",[e._v("See the sources here: ")]),n("h3",[e._v("This site contains more stuff :)")]),n("ul",[n("li",[e._v("HowTo call REST-Services:")]),n("li",[n("router-link",{attrs:{to:"/callservice"}},[e._v("/callservice")])],1),n("li",[e._v("HowTo to interact with the Spring Boot database backend:")]),n("li",[n("router-link",{attrs:{to:"/system"}},[e._v("/user")])],1)])])},ee=[],te={name:"hello",props:{hellomsg:{type:String,required:!0}}},ne=te,re=(n("349a"),Object(l["a"])(ne,Z,ee,!1,null,"25fa2456",null)),oe=re.exports;r["a"].use(L["a"]);var ae=[{path:"/",name:"home",component:D},{path:"/api",component:oe},{path:"/callservice",component:C},{path:"/system",name:"system",component:Y},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],se=new L["a"]({mode:"history",base:"/",routes:ae}),ie=se,ce=n("f309");r["a"].use(ce["a"]);var ue=new ce["a"]({icons:{iconfont:"mdi"}});n("d1e78");r["a"].config.productionTip=!1,new r["a"]({router:ie,vuetify:ue,render:function(e){return e(H)}}).$mount("#app")},6264:function(e,t,n){},"74cf":function(e,t,n){"use strict";var r=n("b487"),o=n.n(r);o.a},b336:function(e,t,n){"use strict";var r=n("2ec1"),o=n.n(r);o.a},b487:function(e,t,n){}});
//# sourceMappingURL=app.a7ee3984.js.map