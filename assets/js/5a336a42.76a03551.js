"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[3804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={},r="ADR 60: ABCI 1.0 Integration (Phase I)",l={unversionedId:"architecture/adr-060-abci-1.0",id:"architecture/adr-060-abci-1.0",title:"ADR 60: ABCI 1.0 Integration (Phase I)",description:"Changelog",source:"@site/docs/architecture/adr-060-abci-1.0.md",sourceDirName:"architecture",slug:"/architecture/adr-060-abci-1.0",permalink:"/main/architecture/adr-060-abci-1.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 059: Test Scopes",permalink:"/main/architecture/adr-059-test-scopes"},next:{title:"ADR ADR-061: Liquid Staking",permalink:"/main/architecture/adr-061-liquid-staking"}},s={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"<code>PrepareProposal</code>",id:"prepareproposal",level:3},{value:"<code>ProcessProposal</code>",id:"processproposal",level:3},{value:"<code>DeliverTx</code>",id:"delivertx",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-60-abci-10-integration-phase-i"},"ADR 60: ABCI 1.0 Integration (Phase I)"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2022-08-10: Initial Draft (@alexanderbez, @tac0turtle)"),(0,i.kt)("li",{parentName:"ul"},"Nov 12, 2022: Update ",(0,i.kt)("inlineCode",{parentName:"li"},"PrepareProposal")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ProcessProposal")," semantics per the\ninitial implementation ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/13453"},"PR")," (@alexanderbez)")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"ACCEPTED"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This ADR describes the initial adoption of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/master/spec/abci%2B%2B/README.md"},"ABCI 1.0"),",\nthe next evolution of ABCI, within the Cosmos SDK. ABCI 1.0 aims to provide\napplication developers with more flexibility and control over application and\nconsensus semantics, e.g. in-application mempools, in-process oracles, and\norder-book style matching engines."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Tendermint will release ABCI 1.0. Notably, at the time of this writing,\nTendermint is releasing v0.37.0 which will include ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," ABCI method is concerned with a block proposer requesting\nthe application to evaluate a series of transactions to be included in the next\nblock, defined as a slice of ",(0,i.kt)("inlineCode",{parentName:"p"},"TxRecord")," objects. The application can either\naccept, reject, or completely ignore some or all of these transactions. This is\nan important consideration to make as the application can essentially define and\ncontrol its own mempool allowing it to define sophisticated transaction priority\nand filtering mechanisms, by completely ignoring the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxRecords")," Tendermint\nsends it, favoring its own transactions. This essentially means that the Tendermint\nmempool acts more like a gossip data structure."),(0,i.kt)("p",null,"The second ABCI method, ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),", is used to process the block proposer's\nproposal as defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),". It is important to note the following\nwith respect to ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Execution of ",(0,i.kt)("inlineCode",{parentName:"li"},"ProcessProposal")," must be deterministic."),(0,i.kt)("li",{parentName:"ul"},"There must be coherence between ",(0,i.kt)("inlineCode",{parentName:"li"},"PrepareProposal")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ProcessProposal"),". In\nother words, for any two correct processes ",(0,i.kt)("em",{parentName:"li"},"p")," and ",(0,i.kt)("em",{parentName:"li"},"q"),", if ",(0,i.kt)("em",{parentName:"li"},"q"),"'s Tendermint\ncalls ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestProcessProposal")," on ",(0,i.kt)("em",{parentName:"li"},"u",(0,i.kt)("sub",null,"p")),", ",(0,i.kt)("em",{parentName:"li"},"q"),"'s Application returns\nACCEPT in ",(0,i.kt)("inlineCode",{parentName:"li"},"ResponseProcessProposal"),".")),(0,i.kt)("p",null,"It is important to note that in ABCI 1.0 integration, the application\nis NOT responsible for locking semantics -- Tendermint will still be responsible\nfor that. In the future, however, the application will be responsible for locking,\nwhich allows for parallel execution possibilities."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We will integrate ABCI 1.0, which will be introduced in Tendermint\nv0.37.0, in the next major release of the Cosmos SDK. We will integrate ABCI 1.0\nmethods on the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," type. We describe the implementations of the two methods\nindividually below."),(0,i.kt)("p",null,"Prior to describing the implementation of the two new methods, it is important to\nnote that the existing ABCI methods, ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx"),", etc, still exist and\nserve the same functions as they do now."),(0,i.kt)("h3",{id:"prepareproposal"},(0,i.kt)("inlineCode",{parentName:"h3"},"PrepareProposal")),(0,i.kt)("p",null,"Prior to evaluating the decision for how to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),", it is\nimportant to note that ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," will still be executed and will be responsible\nfor evaluating transaction validity as it does now, with one very important\n",(0,i.kt)("em",{parentName:"p"},"additive")," distinction."),(0,i.kt)("p",null,"When executing transactions in ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),", the application will now add valid\ntransactions, i.e. passing the AnteHandler, to its own mempool data structure.\nIn order to provide a flexible approach to meet the varying needs of application\ndevelopers, we will define both a mempool interface and a data structure utilizing\nGolang generics, allowing developers to focus only on transaction\nordering. Developers requiring absolute full control can implement their own\ncustom mempool implementation."),(0,i.kt)("p",null,"We define the general mempool interface as follows (subject to change):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Mempool interface {\n    // Insert attempts to insert a Tx into the app-side mempool returning\n    // an error upon failure.\n    Insert(sdk.Context, sdk.Tx) error\n\n    // Select returns an Iterator over the app-side mempool. If txs are specified,\n    // then they shall be incorporated into the Iterator. The Iterator must\n    // closed by the caller.\n    Select(sdk.Context, [][]byte) Iterator\n\n    // CountTx returns the number of transactions currently in the mempool.\n    CountTx() int\n\n    // Remove attempts to remove a transaction from the mempool, returning an error\n    // upon failure.\n    Remove(sdk.Tx) error\n}\n\n// Iterator defines an app-side mempool iterator interface that is as minimal as\n// possible. The order of iteration is determined by the app-side mempool\n// implementation.\ntype Iterator interface {\n    // Next returns the next transaction from the mempool. If there are no more\n    // transactions, it returns nil.\n    Next() Iterator\n\n    // Tx returns the transaction at the current position of the iterator.\n    Tx() sdk.Tx\n}\n")),(0,i.kt)("p",null,"We will define an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Mempool"),", defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"nonceMempool"),", that\nwill cover most basic application use-cases. Namely, it will prioritize transactions\nby transaction sender, allowing for multiple transactions from the same sender."),(0,i.kt)("p",null,"The default app-side mempool implementation, ",(0,i.kt)("inlineCode",{parentName:"p"},"nonceMempool"),", will operate on a\nsingle skip list data structure. Specifically, transactions with the lowest nonce\nglobally are prioritized. Transactions with the same nonce are prioritized by\nsender address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type nonceMempool struct {\n    txQueue *huandu.SkipList\n}\n")),(0,i.kt)("p",null,"Previous discussions",(0,i.kt)("sup",null,"1")," have come to the agreement that Tendermint will\nperform a request to the application, via ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),', with a certain\namount of transactions reaped from Tendermint\'s local mempool. The exact amount\nof transactions reaped will be determined by a local operator configuration.\nThis is referred to as the "one-shot approach" seen in discussions.'),(0,i.kt)("p",null,"When Tendermint reaps transactions from the local mempool and sends them to the\napplication via ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),", the application will have to evaluate\nthe transactions. Specifically, it will need to inform Tendermint if it should\nreject and or include each transaction. Note, the application can even ",(0,i.kt)("em",{parentName:"p"},"replace"),"\ntransactions entirely with other transactions."),(0,i.kt)("p",null,"When evaluating transactions from ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),", the application will\nignore ",(0,i.kt)("em",{parentName:"p"},"ALL")," transactions sent to it in the request and instead reap up to\n",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal.max_tx_bytes")," from it's own mempool."),(0,i.kt)("p",null,"Since an application can technically insert or inject transactions on ",(0,i.kt)("inlineCode",{parentName:"p"},"Insert"),"\nduring ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," execution, it is recommended that applications ensure transaction\nvalidity when reaping transactions during ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),". However, what validity\nexactly means is entirely determined by the application."),(0,i.kt)("p",null,"The Cosmos SDK will provide a default ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," implementation that simply\nselect up to ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxBytes")," ",(0,i.kt)("em",{parentName:"p"},"valid")," transactions."),(0,i.kt)("p",null,"However, applications can override this default implementation with their own\nimplementation and set that on ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," via ",(0,i.kt)("inlineCode",{parentName:"p"},"SetPrepareProposal"),"."),(0,i.kt)("h3",{id:"processproposal"},(0,i.kt)("inlineCode",{parentName:"h3"},"ProcessProposal")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," ABCI method is relatively straightforward. It is responsible\nfor ensuring validity of the proposed block containing transactions that were\nselected from the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," step. However, how an application determines\nvalidity of a proposed block depends on the application and its varying use cases.\nFor most applications, simply calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," chain would suffice, but\nthere could easily be other applications that need more control over the validation\nprocess of the proposed block, such as ensuring txs are in a certain order or\nthat certain transactions are included. While this theoretically could be achieved\nwith a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," implementation, it's not the cleanest UX or the most\nefficient solution."),(0,i.kt)("p",null,"Instead, we will define an additional ABCI interface method on the existing\n",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," interface, similar to the existing ABCI methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginBlock"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlock"),". This new interface method will be defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"ProcessProposal(sdk.Context, abci.RequestProcessProposal) error {}\n")),(0,i.kt)("p",null,"Note, we must call ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," with a new internal branched state on the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," argument as we cannot simply just use the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"checkState")," because\n",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," already has a modified ",(0,i.kt)("inlineCode",{parentName:"p"},"checkState")," at this point. So when executing\n",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),", we create a similar branched state, ",(0,i.kt)("inlineCode",{parentName:"p"},"processProposalState"),",\noff of ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverState"),". Note, the ",(0,i.kt)("inlineCode",{parentName:"p"},"processProposalState")," is never committed and\nis completely discarded after ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," finishes execution."),(0,i.kt)("p",null,"The Cosmos SDK will provide a default implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," in which\nall transactions are validated using the CheckTx flow, i.e. the AnteHandler, and\nwill always return ACCEPT unless any transaction cannot be decoded."),(0,i.kt)("h3",{id:"delivertx"},(0,i.kt)("inlineCode",{parentName:"h3"},"DeliverTx")),(0,i.kt)("p",null,"Since transactions are not truly removed from the app-side mempool during\n",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),", since ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," can fail or take multiple rounds and\nwe do not want to lose transactions, we need to finally remove the transaction\nfrom the app-side mempool during ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," since during this phase, the\ntransactions are being included in the proposed block."),(0,i.kt)("p",null,"Alternatively, we can keep the transactions as truly being removed during the\nreaping phase in ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and add them back to the app-side mempool in\ncase ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," fails."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.kt)("p",null,"ABCI 1.0 is naturally not backwards compatible with prior versions of the Cosmos SDK\nand Tendermint. For example, an application that requests ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),"\nto the same application that does not speak ABCI 1.0 will naturally fail."),(0,i.kt)("p",null,"However, in the first phase of the integration, the existing ABCI methods as we\nknow them today will still exist and function as they currently do."),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Applications now have full control over transaction ordering and priority."),(0,i.kt)("li",{parentName:"ul"},"Lays the groundwork for the full integration of ABCI 1.0, which will unlock more\napp-side use cases around block construction and integration with the Tendermint\nconsensus engine.")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Requires that the "mempool", as a general data structure that collects and stores\nuncommitted transactions will be duplicated between both Tendermint and the\nCosmos SDK.'),(0,i.kt)("li",{parentName:"ul"},"Additional requests between Tendermint and the Cosmos SDK in the context of\nblock execution. Albeit, the overhead should be negligible."),(0,i.kt)("li",{parentName:"ul"},"Not backwards compatible with previous versions of Tendermint and the Cosmos SDK.")),(0,i.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,i.kt)("p",null,"It is possible to design the app-side implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mempool[T MempoolTx]"),"\nin many different ways using different data structures and implementations. All\nof which have different tradeoffs. The proposed solution keeps things simple\nand covers cases that would be required for most basic applications. There are\ntradeoffs that can be made to improve performance of reaping and inserting into\nthe provided mempool implementation."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/blob/master/spec/abci%2B%2B/README.md"},"https://github.com/tendermint/tendermint/blob/master/spec/abci%2B%2B/README.md")),(0,i.kt)("li",{parentName:"ul"},"[1]"," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1076806155"},"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1076806155")),(0,i.kt)("li",{parentName:"ul"},"[2]"," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1075717151"},"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1075717151"))))}d.isMDXComponent=!0}}]);