"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s="Bech32 on Cosmos",i={unversionedId:"spec/addresses/bech32",id:"spec/addresses/bech32",title:"Bech32 on Cosmos",description:"The Cosmos network prefers to use the Bech32 address format wherever users must handle binary data. Bech32 encoding provides robust integrity checks on data and the human readable part (HRP) provides contextual hints that can assist UI developers with providing informative error messages.",source:"@site/docs/spec/addresses/bech32.md",sourceDirName:"spec/addresses",slug:"/spec/addresses/bech32",permalink:"/main/spec/addresses/bech32",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addresses spec",permalink:"/main/spec/addresses/"},next:{title:"Store",permalink:"/main/spec/store/"}},c={},l=[{value:"HRP table",id:"hrp-table",level:2},{value:"Encoding",id:"encoding",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bech32-on-cosmos"},"Bech32 on Cosmos"),(0,o.kt)("p",null,"The Cosmos network prefers to use the Bech32 address format wherever users must handle binary data. Bech32 encoding provides robust integrity checks on data and the human readable part (HRP) provides contextual hints that can assist UI developers with providing informative error messages."),(0,o.kt)("p",null,"In the Cosmos network, keys and addresses may refer to a number of different roles in the network like accounts, validators etc."),(0,o.kt)("h2",{id:"hrp-table"},"HRP table"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"HRP"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cosmos"),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos Account Address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cosmosvalcons"),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos Validator Consensus Address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cosmosvaloper"),(0,o.kt)("td",{parentName:"tr",align:null},"Cosmos Validator Operator Address")))),(0,o.kt)("h2",{id:"encoding"},"Encoding"),(0,o.kt)("p",null,"While all user facing interfaces to Cosmos software should exposed Bech32 interfaces, many internal interfaces encode binary value in hex or base64 encoded form."),(0,o.kt)("p",null,"To covert between other binary representation of addresses and keys, it is important to first apply the Amino encoding process before Bech32 encoding."),(0,o.kt)("p",null,"A complete implementation of the Amino serialization format is unnecessary in most cases. Simply prepending bytes from this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/main/spec/blockchain/encoding.md"},"table")," to the byte string payload before Bech32 encoding will sufficient for compatible representation."))}p.isMDXComponent=!0}}]);