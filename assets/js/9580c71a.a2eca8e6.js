"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[5701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Concepts",c={unversionedId:"spec/circuit-breaker/README",id:"version-v0.47/spec/circuit-breaker/README",title:"Concepts",description:"The intention of the circuit breaker is to have a contingency plan for a",source:"@site/versioned_docs/version-v0.47/spec/circuit-breaker/README.md",sourceDirName:"spec/circuit-breaker",slug:"/spec/circuit-breaker/",permalink:"/v0.47/spec/circuit-breaker/",draft:!1,tags:[],version:"v0.47",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bech32 on Cosmos",permalink:"/v0.47/spec/addresses/bech32"},next:{title:"Reserve Pool",permalink:"/v0.47/spec/reserve-pool/"}},s={},l=[{value:"Pause state",id:"pause-state",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,'The intention of the circuit breaker is to have a contingency plan for a\nrunning network which maintains network liveness. This can be achieved through\nselectively "pausing" functionality of specific modules on a running network.\nThe circuit breaker is intended to be enabled through either:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"governance"),(0,o.kt)("li",{parentName:"ul"},"for emergencies a special subset of accounts selected by the state machine"),(0,o.kt)("li",{parentName:"ul"},"a transaction which proves the expected behaviour is broken")),(0,o.kt)("h2",{id:"pause-state"},"Pause state"),(0,o.kt)("p",null,'The basic pause state of any module simply disables all message routes to\nthat module. Beyond that, it may be a appropriate for different modules to\nprocess begin-block/end-block in an altered "safe" way.'))}u.isMDXComponent=!0}}]);