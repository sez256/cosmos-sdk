"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[3182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={},r="ADR-065: Store V2",s={unversionedId:"architecture/adr-065-store-v2",id:"architecture/adr-065-store-v2",title:"ADR-065: Store V2",description:"Changelog",source:"@site/docs/architecture/adr-065-store-v2.md",sourceDirName:"architecture",slug:"/architecture/adr-065-store-v2",permalink:"/main/architecture/adr-065-store-v2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 64: ABCI 2.0 Integration (Phase II)",permalink:"/main/architecture/adr-064-abci-2.0"},next:{title:"ADR 067: Simulator v2",permalink:"/main/architecture/adr-067-simulator-v2"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Decision",id:"decision",level:2},{value:"Separating SS and SC",id:"separating-ss-and-sc",level:3},{value:"State Commitment (SC)",id:"state-commitment-sc",level:4},{value:"State Storage (SS)",id:"state-storage-ss",level:4},{value:"State Sync",id:"state-sync",level:4},{value:"Queries",id:"queries",level:4},{value:"Proofs",id:"proofs",level:4},{value:"Atomic Commitment",id:"atomic-commitment",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Module Storage Control",id:"module-storage-control",level:3},{value:"Historical State Proofs",id:"historical-state-proofs",level:3},{value:"Physical DB Backends",id:"physical-db-backends",level:3},{value:"References",id:"references",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-065-store-v2"},"ADR-065: Store V2"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feb 14, 2023: Initial Draft (@alexanderbez)")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"DRAFT"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"The storage and state primitives that Cosmos SDK based applications have used have\nby and large not changed since the launch of the inaugural Cosmos Hub. The demands\nand needs of Cosmos SDK based applications, from both developer and client UX\nperspectives, have evolved and outgrown the ecosystem since these primitives\nwere first introduced."),(0,i.kt)("p",null,"Over time as these applications have gained significant adoption, many critical\nshortcomings and flaws have been exposed in the state and storage primitives of\nthe Cosmos SDK."),(0,i.kt)("p",null,"In order to keep up with the evolving demands and needs of both clients and developers,\na major overhaul to these primitives are necessary."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"The Cosmos SDK provides application developers with various storage primitives\nfor dealing with application state. Specifically, each module contains its own\nmerkle commitment data structure -- an IAVL tree. In this data structure, a module\ncan store and retrieve key-value pairs along with Merkle commitments, i.e. proofs,\nto those key-value pairs indicating that they do or do not exist in the global\napplication state. This data structure is the base layer ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore"),"."),(0,i.kt)("p",null,"In addition, the SDK provides abstractions on top of this Merkle data structure.\nNamely, a root multi-store (RMS) is a collection of each module's ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore"),".\nThrough the RMS, the application can serve queries and provide proofs to clients\nin addition to provide a module access to its own unique ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," though the use\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"StoreKey"),", which is an OCAP primitive."),(0,i.kt)("p",null,"There are further layers of abstraction that sit between the RMS and the underlying\nIAVL ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"GasKVStore")," is responsible for tracking gas IO consumption for\nstate machine reads and writes. A ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheKVStore")," is responsible for providing a\nway to cache reads and buffer writes to make state transitions atomic, e.g.\ntransaction execution or governance proposal execution."),(0,i.kt)("p",null,"There are a few critical drawbacks to these layers of abstraction and the overall\ndesign of storage in the Cosmos SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since each module has its own IAVL ",(0,i.kt)("inlineCode",{parentName:"li"},"KVStore"),", commitments are not ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/14625"},"atomic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note, we can still allow modules to have their own IAVL ",(0,i.kt)("inlineCode",{parentName:"li"},"KVStore"),", but the\nIAVL library will need to support the ability to pass a DB instance as an\nargument to various IAVL APIs."))),(0,i.kt)("li",{parentName:"ul"},"Since IAVL is responsible for both state storage and commitment, running an\narchive node becomes increasingly expensive as disk space grows exponentially."),(0,i.kt)("li",{parentName:"ul"},"As the size of a network increases, various performance bottlenecks start to\nemerge in many areas such as query performance, network upgrades, state\nmigrations, and general application performance."),(0,i.kt)("li",{parentName:"ul"},"Developer UX is poor as it does not allow application developers to experiment\nwith different types of approaches to storage and commitments, along with the\ncomplications of many layers of abstractions referenced above.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/13545"},"Storage Discussion")," for more information."),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"There was a previous attempt to refactor the storage layer described in ",(0,i.kt)("a",{parentName:"p",href:"/main/architecture/adr-040-storage-and-smt-state-commitments"},"ADR-040"),".\nHowever, this approach mainly stems on the short comings of IAVL and various performance\nissues around it. While there was a (partial) implementation of ",(0,i.kt)("a",{parentName:"p",href:"/main/architecture/adr-040-storage-and-smt-state-commitments"},"ADR-040"),",\nit was never adopted for a variety of reasons, such as the reliance on using an\nSMT, which was more in a research phase, and some design choices that couldn't\nbe fully agreed upon, such as the snap-shotting mechanism that would result in\nmassive state bloat."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We propose to build upon some of the great ideas introduced in ",(0,i.kt)("a",{parentName:"p",href:"/main/architecture/adr-040-storage-and-smt-state-commitments"},"ADR-040"),",\nwhile being a bit more flexible with the underlying implementations and overall\nless intrusive. Specifically, we propose to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Separate the concerns of state commitment (",(0,i.kt)("strong",{parentName:"li"},"SC"),"), needed for consensus, and\nstate storage (",(0,i.kt)("strong",{parentName:"li"},"SS"),"), needed for state machine and clients."),(0,i.kt)("li",{parentName:"ul"},"Reduce layers of abstractions necessary between the RMS and underlying stores."),(0,i.kt)("li",{parentName:"ul"},"Provide atomic module store commitments by providing a batch database object\nto core IAVL APIs."),(0,i.kt)("li",{parentName:"ul"},"Reduce complexities in the ",(0,i.kt)("inlineCode",{parentName:"li"},"CacheKVStore")," implementation while also improving\nperformance",(0,i.kt)("sup",null,"[3]"),".")),(0,i.kt)("p",null,"Furthermore, we will keep the IAVL is the backing ",(0,i.kt)("a",{parentName:"p",href:"https://cryptography.fandom.com/wiki/Commitment_scheme"},"commitment"),"\nstore for the time being. While we might not fully settle on the use of IAVL in\nthe long term, we do not have strong empirical evidence to suggest a better\nalternative. Given that the SDK provides interfaces for stores, it should be sufficient\nto change the backing commitment store in the future should evidence arise to\nwarrant a better alternative. However there is promising work being done to IAVL\nthat should result in significant performance improvement ",(0,i.kt)("sup",null,"[1,2]"),"."),(0,i.kt)("h3",{id:"separating-ss-and-sc"},"Separating SS and SC"),(0,i.kt)("p",null,"By separating SS and SC, it will allow for us to optimize against primary use cases\nand access patterns to state. Specifically, The SS layer will be responsible for\ndirect access to data in the form of (key, value) pairs, whereas the SC layer (IAVL)\nwill be responsible for committing to data and providing Merkle proofs."),(0,i.kt)("p",null,"Note, the underlying physical storage database will be the same between both the\nSS and SC layers. So to avoid collisions between (key, value) pairs, both layers\nwill be namespaced."),(0,i.kt)("h4",{id:"state-commitment-sc"},"State Commitment (SC)"),(0,i.kt)("p",null,"Given that the existing solution today acts as both SS and SC, we can simply\nrepurpose it to act solely as the SC layer without any significant changes to\naccess patterns or behavior. In other words, the entire collection of existing\nIAVL-backed module ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore"),"s will act as the SC layer."),(0,i.kt)("p",null,"However, in order for the SC layer to remain lightweight and not duplicate a\nmajority of the data held in the SS layer, we encourage node operators to keep\ntight pruning strategies."),(0,i.kt)("h4",{id:"state-storage-ss"},"State Storage (SS)"),(0,i.kt)("p",null,"In the RMS, we will expose a ",(0,i.kt)("em",{parentName:"p"},"single")," ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," backed by the same physical\ndatabase that backs the SC layer. This ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," will be explicitly namespaced\nto avoid collisions and will act as the primary storage for (key, value) pairs."),(0,i.kt)("p",null,"While we most likely will continue the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos-db"),", or some local interface,\nto allow for flexibility and iteration over preferred physical storage backends\nas research and benchmarking continues. However, we propose to hardcode the use\nof RocksDB as the primary physical storage backend."),(0,i.kt)("p",null,"Since the SS layer will be implemented as a ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore"),", it will support the\nfollowing functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Range queries"),(0,i.kt)("li",{parentName:"ul"},"CRUD operations"),(0,i.kt)("li",{parentName:"ul"},"Historical queries and versioning"),(0,i.kt)("li",{parentName:"ul"},"Pruning")),(0,i.kt)("p",null,"The RMS will keep track of all buffered writes using a dedicated and internal\n",(0,i.kt)("inlineCode",{parentName:"p"},"MemoryListener")," for each ",(0,i.kt)("inlineCode",{parentName:"p"},"StoreKey"),". For each block height, upon ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit"),", the\nSS layer will write all buffered (key, value) pairs under a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/wiki/User-defined-Timestamp-%28Experimental%29"},"RocksDB user-defined timestamp")," column\nfamily using the block height as the timestamp, which is an unsigned integer.\nThis will allow a client to fetch (key, value) pairs at historical and current\nheights along with making iteration and range queries relatively performant as\nthe timestamp is the key suffix."),(0,i.kt)("p",null,"Note, we choose not to use a more general approach of allowing any embedded key/value\ndatabase, such as LevelDB or PebbleDB, using height key-prefixed keys to\neffectively version state because most of these databases use variable length\nkeys which would effectively make actions likes iteration and range queries less\nperformant."),(0,i.kt)("p",null,"Since operators might want pruning strategies to differ in SS compared to SC,\ne.g. having a very tight pruning strategy in SC while having a looser pruning\nstrategy for SS, we propose to introduce an additional pruning configuration,\nwith parameters that are identical to what exists in the SDK today, and allow\noperators to control the pruning strategy of the SS layer independently of the\nSC layer."),(0,i.kt)("p",null,"Note, the SC pruning strategy must be congruent with the operator's state sync\nconfiguration. This is so as to allow state sync snapshots to execute successfully,\notherwise, a snapshot could be triggered on a height that is not available in SC."),(0,i.kt)("h4",{id:"state-sync"},"State Sync"),(0,i.kt)("p",null,"The state sync process should be largely unaffected by the separation of the SC\nand SS layers. However, if a node syncs via state sync, the SS layer of the node\nwill not have the state synced height available, since the IAVL import process is\nnot setup in way to easily allow direct key/value insertion. A modification of\nthe IAVL import process would be necessary to facilitate having the state sync\nheight available."),(0,i.kt)("p",null,"Note, this is not problematic for the state machine itself because when a query\nis made, the RMS will automatically direct the query correctly (see ",(0,i.kt)("a",{parentName:"p",href:"#queries"},"Queries"),")."),(0,i.kt)("h4",{id:"queries"},"Queries"),(0,i.kt)("p",null,'To consolidate the query routing between both the SC and SS layers, we propose to\nhave a notion of a "query router" that is constructed in the RMS. This query router\nwill be supplied to each ',(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," implementation. The query router will route\nqueries to either the SC layer or the SS layer based on a few parameters. If\n",(0,i.kt)("inlineCode",{parentName:"p"},"prove: true"),", then the query must be routed to the SC layer. Otherwise, if the\nquery height is available in the SS layer, the query will be served from the SS\nlayer. Otherwise, we fall back on the SC layer."),(0,i.kt)("p",null,"If no height is provided, the SS layer will assume the latest height. The SS\nlayer will store a reverse index to lookup ",(0,i.kt)("inlineCode",{parentName:"p"},"LatestVersion -> timestamp(version)"),"\nwhich is set on ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit"),"."),(0,i.kt)("h4",{id:"proofs"},"Proofs"),(0,i.kt)("p",null,"Since the SS layer is naturally a storage layer only, without any commitments\nto (key, value) pairs, it cannot provide Merkle proofs to clients during queries."),(0,i.kt)("p",null,"Since the pruning strategy against the SC layer is configured by the operator,\nwe can therefore have the RMS route the query SC layer if the version exists and\n",(0,i.kt)("inlineCode",{parentName:"p"},"prove: true"),". Otherwise, the query will fall back to the SS layer without a proof."),(0,i.kt)("p",null,"We could explore the idea of using state snapshots to rebuild an in-memory IAVL\ntree in real time against a version closest to the one provided in the query.\nHowever, it is not clear what the performance implications will be of this approach."),(0,i.kt)("h3",{id:"atomic-commitment"},"Atomic Commitment"),(0,i.kt)("p",null,"We propose to modify the existing IAVL APIs to accept a batch DB object instead\nof relying on an internal batch object in ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeDB"),". Since each underlying IAVL\n",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," shares the same DB in the SC layer, this will allow commits to be\natomic."),(0,i.kt)("p",null,"Specifically, we propose to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"dbm.Batch")," field from ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeDB")),(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"SaveVersion")," method of the ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableTree")," IAVL type to accept a batch object"),(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"Commit")," method of the ",(0,i.kt)("inlineCode",{parentName:"li"},"CommitKVStore")," interface to accept a batch object"),(0,i.kt)("li",{parentName:"ul"},"Create a batch object in the RMS during ",(0,i.kt)("inlineCode",{parentName:"li"},"Commit")," and pass this object to each\n",(0,i.kt)("inlineCode",{parentName:"li"},"KVStore")),(0,i.kt)("li",{parentName:"ul"},"Write the database batch after all stores have committed successfully")),(0,i.kt)("p",null,"Note, this will require IAVL to be updated to not rely or assume on any batch\nbeing present during ",(0,i.kt)("inlineCode",{parentName:"p"},"SaveVersion"),"."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"As a result of a new store V2 package, we should expect to see improved performance\nfor queries and transactions due to the separation of concerns. We should also\nexpect to see improved developer UX around experimentation of commitment schemes\nand storage backends for further performance, in addition to a reduced amount of\nabstraction around KVStores making operations such as caching and state branching\nmore intuitive."),(0,i.kt)("p",null,"However, due to the proposed design, there are drawbacks around providing state\nproofs for historical queries."),(0,i.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.kt)("p",null,"This ADR proposes changes to the storage implementation in the Cosmos SDK through\nan entirely new package. Interfaces may be borrowed and extended from existing\ntypes that exist in ",(0,i.kt)("inlineCode",{parentName:"p"},"store"),", but no existing implementations or interfaces will\nbe broken or modified."),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Improved performance of independent SS and SC layers"),(0,i.kt)("li",{parentName:"ul"},"Reduced layers of abstraction making storage primitives easier to understand"),(0,i.kt)("li",{parentName:"ul"},"Atomic commitments for SC"),(0,i.kt)("li",{parentName:"ul"},"Redesign of storage types and interfaces will allow for greater experimentation\nsuch as different physical storage backends and different commitment schemes\nfor different application modules")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Providing proofs for historical state is challenging")),(0,i.kt)("h3",{id:"neutral"},"Neutral"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keeping IAVL as the primary commitment data structure, although drastic\nperformance improvements are being made")),(0,i.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,i.kt)("h3",{id:"module-storage-control"},"Module Storage Control"),(0,i.kt)("p",null,"Many modules store secondary indexes that are typically solely used to support\nclient queries, but are actually not needed for the state machine's state\ntransitions. What this means is that these indexes technically have no reason to\nexist in the SC layer at all, as they take up unnecessary space. It is worth\nexploring what an API would look like to allow modules to indicate what (key, value)\npairs they want to be persisted in the SC layer, implicitly indicating the SS\nlayer as well, as opposed to just persisting the (key, value) pair only in the\nSS layer."),(0,i.kt)("h3",{id:"historical-state-proofs"},"Historical State Proofs"),(0,i.kt)("p",null,"It is not clear what the importance or demand is within the community of providing\ncommitment proofs for historical state. While solutions can be devised such as\nrebuilding trees on the fly based on state snapshots, it is not clear what the\nperformance implications are for such solutions."),(0,i.kt)("h3",{id:"physical-db-backends"},"Physical DB Backends"),(0,i.kt)("p",null,"This ADR proposes usage of RocksDB to utilize user-defined timestamps as a\nversioning mechanism. However, other physical DB backends are available that may\noffer alternative ways to implement versioning while also providing performance\nimprovements over RocksDB. E.g. PebbleDB supports MVCC timestamps as well, but\nwe'll need to explore how PebbleDB handles compaction and state growth over time."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[1]"," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/iavl/pull/676"},"https://github.com/cosmos/iavl/pull/676")),(0,i.kt)("li",{parentName:"ul"},"[2]"," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/iavl/pull/664"},"https://github.com/cosmos/iavl/pull/664")),(0,i.kt)("li",{parentName:"ul"},"[3]"," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/14990"},"https://github.com/cosmos/cosmos-sdk/issues/14990"))))}h.isMDXComponent=!0}}]);