"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={},l="Upgrading Cosmos SDK",r={unversionedId:"migrations/upgrading",id:"version-v0.50/migrations/upgrading",title:"Upgrading Cosmos SDK",description:"This guide provides instructions for upgrading to specific versions of Cosmos SDK.",source:"@site/versioned_docs/version-v0.50/migrations/02-upgrading.md",sourceDirName:"migrations",slug:"/migrations/upgrading",permalink:"/v0.50/migrations/upgrading",draft:!1,tags:[],version:"v0.50",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SDK Migrations",permalink:"/v0.50/migrations/intro"},next:{title:"List of Modules",permalink:"/v0.50/modules"}},p={},s=[{value:"v0.50.x",id:"v050x",level:2},{value:"Migration to CometBFT (Part 2)",id:"migration-to-cometbft-part-2",level:3},{value:"Enable Vote Extensions",id:"enable-vote-extensions",level:4},{value:"BaseApp",id:"baseapp",level:3},{value:"Events",id:"events",level:4},{value:"Config files",id:"config-files",level:3},{value:"gRPC-Web",id:"grpc-web",level:4},{value:"Database Support",id:"database-support",level:4},{value:"Protobuf",id:"protobuf",level:3},{value:"Stringer",id:"stringer",level:4},{value:"SimApp",id:"simapp",level:3},{value:"Module Assertions",id:"module-assertions",level:4},{value:"Module wiring",id:"module-wiring",level:4},{value:"Logger",id:"logger",level:4},{value:"Module Basics",id:"module-basics",level:4},{value:"AutoCLI",id:"autocli",level:4},{value:"Packages",id:"packages",level:3},{value:"Math",id:"math",level:4},{value:"Store",id:"store",level:4},{value:"Extract Store to a standalone module",id:"extract-store-to-a-standalone-module",level:5},{value:"Streaming",id:"streaming",level:5},{value:"Client",id:"client",level:4},{value:"Modules",id:"modules",level:3},{value:"<code>**all**</code>",id:"all",level:4},{value:"<code>x/auth</code>",id:"xauth",level:4},{value:"<code>x/capability</code>",id:"xcapability",level:4},{value:"<code>x/genutil</code>",id:"xgenutil",level:4},{value:"<code>x/gov</code>",id:"xgov",level:4},{value:"Expedited Proposals",id:"expedited-proposals",level:5},{value:"Cancelling Proposals",id:"cancelling-proposals",level:5},{value:"<code>x/evidence</code>",id:"xevidence",level:4},{value:"Extract evidence to a standalone module",id:"extract-evidence-to-a-standalone-module",level:5},{value:"<code>x/nft</code>",id:"xnft",level:4},{value:"Extract nft to a standalone module",id:"extract-nft-to-a-standalone-module",level:5},{value:"x/feegrant",id:"xfeegrant",level:4},{value:"Extract feegrant to a standalone module",id:"extract-feegrant-to-a-standalone-module",level:5},{value:"<code>x/upgrade</code>",id:"xupgrade",level:4},{value:"Extract upgrade to a standalone module",id:"extract-upgrade-to-a-standalone-module",level:5},{value:"Tooling",id:"tooling",level:3},{value:"Rosetta",id:"rosetta",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading-cosmos-sdk"},"Upgrading Cosmos SDK"),(0,o.kt)("p",null,"This guide provides instructions for upgrading to specific versions of Cosmos SDK.\nNote, always read the ",(0,o.kt)("strong",{parentName:"p"},"SimApp")," section for more information on application wiring updates."),(0,o.kt)("h2",{id:"v050x"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/cosmos/cosmos-sdk/releases/tag/v0.50.0"},"v0.50.x")),(0,o.kt)("h3",{id:"migration-to-cometbft-part-2"},"Migration to CometBFT (Part 2)"),(0,o.kt)("p",null,"The Cosmos SDK has migrated in its previous versions, to CometBFT.\nSome functions have been renamed to reflect the naming change."),(0,o.kt)("p",null,"Following an exhaustive list:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client.TendermintRPC")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"client.CometRPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clitestutil.MockTendermintRPC")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"clitestutil.MockCometRPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clitestutilgenutil.CreateDefaultTendermintConfig")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"clitestutilgenutil.CreateDefaultCometConfig")),(0,o.kt)("li",{parentName:"ul"},"Package ",(0,o.kt)("inlineCode",{parentName:"li"},"client/grpc/tmservice")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"client/grpc/cmtservice"))),(0,o.kt)("p",null,"Additionally, the commands and flags mentioning ",(0,o.kt)("inlineCode",{parentName:"p"},"tendermint")," have been renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"comet"),".\nThese commands and flags are still supported for backward compatibility."),(0,o.kt)("p",null,"For backward compatibility, the ",(0,o.kt)("inlineCode",{parentName:"p"},"**/tendermint/**")," gRPC services are still supported."),(0,o.kt)("p",null,"Additionally, the SDK is starting its abstraction from CometBFT Go types thorought the codebase:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The usage of the CometBFT logger has been replaced by the Cosmos SDK logger interface (",(0,o.kt)("inlineCode",{parentName:"li"},"cosmossdk.io/log.Logger"),")."),(0,o.kt)("li",{parentName:"ul"},"The usage of ",(0,o.kt)("inlineCode",{parentName:"li"},"github.com/cometbft/cometbft/libs/bytes.HexByte")," has been replaced by ",(0,o.kt)("inlineCode",{parentName:"li"},"[]byte"),"."),(0,o.kt)("li",{parentName:"ul"},"Usage of an application genesis (see ",(0,o.kt)("a",{parentName:"li",href:"#xgenutil"},"genutil"),").")),(0,o.kt)("h4",{id:"enable-vote-extensions"},"Enable Vote Extensions"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This is an optional feature that is disabled by default.")),(0,o.kt)("p",null,"Once all the code changes required to implement Vote Extensions are in place,\nthey can be enabled by setting the consensus param ",(0,o.kt)("inlineCode",{parentName:"p"},"Abci.VoteExtensionsEnableHeight"),"\nto a value greater than zero."),(0,o.kt)("p",null,"In a new chain, this can be done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file."),(0,o.kt)("p",null,"For existing chains this can be done in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"During an upgrade the value is set in an upgrade handler."),(0,o.kt)("li",{parentName:"ul"},"A governance proposal that changes the consensus param ",(0,o.kt)("strong",{parentName:"li"},"after a coordinated upgrade has taken place"),".")),(0,o.kt)("h3",{id:"baseapp"},"BaseApp"),(0,o.kt)("p",null,"All ABCI methods now accept a pointer to the request and response types defined\nby CometBFT. In addition, they also return errors. An ABCI method should only\nreturn errors in cases where a catastrophic failure has occurred and the application\nshould halt. However, this is abstracted away from the application developer. Any\nhandler that an application can define or set that returns an error, will gracefully\nby handled by ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseApp")," on behalf of the application."),(0,o.kt)("p",null,"BaseApp calls of ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"Endblock")," are now private but are still exposed\nto the application to define via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manager")," type. ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," is public\nand should be used in order to test and run operations. This means that although\n",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"Endblock")," no longer exist in the ABCI interface, they are automatically\ncalled by ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseApp")," during ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),". Specifically, the order of operations\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx")," (for all txs) -> ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock"),"."),(0,o.kt)("p",null,"ABCI++ 2.0 also brings ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendVote")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtension")," ABCI methods. These\nmethods allow applications to extend and verify pre-commit votes. The Cosmos SDK\nallows an application to define handlers for these methods via ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendVoteHandler"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtensionHandler")," respectively. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.50/building-apps/vote-extensions"},"here"),"\nfor more info."),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("p",null,"The log section of ",(0,o.kt)("inlineCode",{parentName:"p"},"abci.TxResult")," is not populated in the case of successful\nmsg(s) execution. Instead a new attribute is added to all messages indicating\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"msg_index")," which identifies which events and attributes relate the same\ntransaction."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," Events are now emitted through ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," but have\nan added attribute, ",(0,o.kt)("inlineCode",{parentName:"p"},"mode=BeginBlock|EndBlock"),", to identify if the event belongs\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock"),"."),(0,o.kt)("h3",{id:"config-files"},"Config files"),(0,o.kt)("p",null,"Confix is a new SDK tool for modifying and migrating configuration of the SDK.\nIt is the replacement of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.Cmd")," command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"client/config")," package."),(0,o.kt)("p",null,"Use the following command to migrate your configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"simd config migrate v0.50\n")),(0,o.kt)("p",null,"If you were using ",(0,o.kt)("inlineCode",{parentName:"p"},"<appd> config [key]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<appd> config [key] [value]")," to set and get values from the ",(0,o.kt)("inlineCode",{parentName:"p"},"client.toml"),", replace it with ",(0,o.kt)("inlineCode",{parentName:"p"},"<appd> config get client [key]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<appd> config set client [key] [value]"),". The extra verbosity is due to the extra functionalities added in config."),(0,o.kt)("p",null,"More information about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/confix"},"confix")," and how to add it in your application binary in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/confix"},"documentation"),"."),(0,o.kt)("h4",{id:"grpc-web"},"gRPC-Web"),(0,o.kt)("p",null,"gRPC-Web is now listening to the same address and port as the gRPC Gateway API server (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:1317"),").\nThe possibility to listen to a different address has been removed, as well as its settings.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"confix")," to clean-up your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"),". A nginx (or alike) reverse-proxy can be set to keep the previous behavior."),(0,o.kt)("h4",{id:"database-support"},"Database Support"),(0,o.kt)("p",null,"ClevelDB, BoltDB and BadgerDB are not supported anymore. To migrate from a unsupported database to a supported database please use a database migration tool."),(0,o.kt)("h3",{id:"protobuf"},"Protobuf"),(0,o.kt)("p",null,"With the deprecation of the Amino JSON codec defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gogoproto"},"cosmos/gogoproto")," in favor of the protoreflect powered x/tx/aminojson codec, module developers are encouraged verify that their messages have the correct protobuf annotations to deterministically produce identical output from both codecs."),(0,o.kt)("p",null,"For core SDK types equivalence is asserted by generative testing of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-beta.0/tests/integration/rapidgen/rapidgen.go#L102"},"SignableTypes")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-beta.0/tests/integration/tx/aminojson/aminojson_test.go#L94"},"TestAminoJSON_Equivalence"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TODO: summarize proto annotation requirements.")),(0,o.kt)("h4",{id:"stringer"},"Stringer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gogoproto.goproto_stringer = false")," annotation has been removed from most proto files. This means that the ",(0,o.kt)("inlineCode",{parentName:"p"},"String()")," method is being generated for types that previously had this annotation. The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"String()")," method uses ",(0,o.kt)("inlineCode",{parentName:"p"},"proto.CompactTextString")," for ",(0,o.kt)("em",{parentName:"p"},"stringifying")," structs.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/13850#issuecomment-1328889651"},"Verify")," the usage of the modified ",(0,o.kt)("inlineCode",{parentName:"p"},"String()")," methods and double-check that they are not used in state-machine code."),(0,o.kt)("h3",{id:"simapp"},"SimApp"),(0,o.kt)("p",null,"In this section we describe the changes made in Cosmos SDK' SimApp.\n",(0,o.kt)("strong",{parentName:"p"},"These changes are directly applicable to your application wiring.")),(0,o.kt)("h4",{id:"module-assertions"},"Module Assertions"),(0,o.kt)("p",null,"Previously, all modules were required to be set in ",(0,o.kt)("inlineCode",{parentName:"p"},"OrderBeginBlockers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OrderEndBlockers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OrderInitGenesis / OrderExportGenesis")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.go")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"app_config.go"),". This is no longer the case, the assertion has been loosened to only require modules implementing, respectively, the ",(0,o.kt)("inlineCode",{parentName:"p"},"appmodule.HasBeginBlocker"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"appmodule.HasEndBlocker")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"appmodule.HasGenesis")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"module.HasGenesis")," interfaces."),(0,o.kt)("h4",{id:"module-wiring"},"Module wiring"),(0,o.kt)("p",null,"The following modules ",(0,o.kt)("inlineCode",{parentName:"p"},"NewKeeper")," function now take a ",(0,o.kt)("inlineCode",{parentName:"p"},"KVStoreService")," instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreKey"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/auth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/authz")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/bank")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/consensus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/crisis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/distribution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/evidence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/feegrant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/gov")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/mint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/nft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/slashing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/upgrade"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Users using ",(0,o.kt)("inlineCode",{parentName:"strong"},"depinject")," / app v2 do not need any changes, this is abstracted for them.")),(0,o.kt)("p",null,"Users manually wiring their chain need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime.NewKVStoreService")," method to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"KVStoreService")," from a ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreKey"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"app.ConsensusParamsKeeper = consensusparamkeeper.NewKeeper(\n  appCodec,\n- keys[consensusparamtypes.StoreKey]\n+ runtime.NewKVStoreService(keys[consensusparamtypes.StoreKey]),\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n)\n")),(0,o.kt)("h4",{id:"logger"},"Logger"),(0,o.kt)("p",null,"Replace all your CometBFT logger imports by ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/log"),"."),(0,o.kt)("p",null,"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"depinject")," / app v2 users must now supply a logger through the main ",(0,o.kt)("inlineCode",{parentName:"p"},"depinject.Supply")," function instead of passing it to ",(0,o.kt)("inlineCode",{parentName:"p"},"appBuilder.Build"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"appConfig = depinject.Configs(\n    AppConfig,\n    depinject.Supply(\n        // supply the application options\n        appOpts,\n+       logger,\n    ...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- app.App = appBuilder.Build(logger, db, traceStore, baseAppOptions...)\n+ app.App = appBuilder.Build(db, traceStore, baseAppOptions...)\n")),(0,o.kt)("p",null,"User manually wiring their chain need to add the logger argument when creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank")," keeper."),(0,o.kt)("h4",{id:"module-basics"},"Module Basics"),(0,o.kt)("p",null,"Previously, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleBasics")," was a global variable that was used to register all modules's ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModuleBasic")," implementation.\nThe global variable has been removed and the basic module manager can be now created from the module manager."),(0,o.kt)("p",null,"This is automatically done for ",(0,o.kt)("inlineCode",{parentName:"p"},"depinject")," / app v2 users, however for supplying different app module implementation, pass them via ",(0,o.kt)("inlineCode",{parentName:"p"},"depinject.Supply")," in the main ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfig")," (",(0,o.kt)("inlineCode",{parentName:"p"},"app_config.go"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"depinject.Supply(\n            // supply custom module basics\n            map[string]module.AppModuleBasic{\n                genutiltypes.ModuleName: genutil.NewAppModuleBasic(genutiltypes.DefaultMessageValidator),\n                govtypes.ModuleName: gov.NewAppModuleBasic(\n                    []govclient.ProposalHandler{\n                        paramsclient.ProposalHandler,\n                    },\n                ),\n            },\n        )\n")),(0,o.kt)("p",null,"Users manually wiring their chain need to use the new ",(0,o.kt)("inlineCode",{parentName:"p"},"module.NewBasicManagerFromManager")," function, after the module manager creation, and pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"map[string]module.AppModuleBasic")," as argument for optionally overridding some module's ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModuleBasic"),"."),(0,o.kt)("h4",{id:"autocli"},"AutoCLI"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/autocli"},(0,o.kt)("inlineCode",{parentName:"a"},"AutoCLI"))," has been implemented by the SDK for all its module CLI queries. This means chains must add the following in their ",(0,o.kt)("inlineCode",{parentName:"p"},"root.go")," to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoCLI")," in their application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"if err := autoCliOpts.EnhanceRootCommand(rootCmd); err != nil {\n    panic(err)\n}\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"autoCliOpts")," is the autocli options of the app, containing all modules and codecs.\nThat value can injected by depinject (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-beta.0/simapp/simd/cmd/root_v2.go#L49-L67"},"see root_v2.go"),") or manually provided by the app (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-beta.0/simapp/app.go#L636-L655"},"see legacy app.go"),")."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Not doing this will result in all core SDK modules queries not to be included in the binary.")),(0,o.kt)("p",null,"Additionally ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoCLI")," automatically adds the custom modules commands to the root command for all modules implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/core/appmodule#AppModule"},(0,o.kt)("inlineCode",{parentName:"a"},"appmodule.AppModule"))," interface.\nThis means, after ensuring all the used modules implement this interface, the following can be removed from your ",(0,o.kt)("inlineCode",{parentName:"p"},"root.go"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"func txCommand() *cobra.Command {\n    ....\n- appd.ModuleBasics.AddTxCommands(cmd)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"func queryCommand() *cobra.Command {\n    ....\n- appd.ModuleBasics.AddQueryCommands(cmd)\n}\n")),(0,o.kt)("h3",{id:"packages"},"Packages"),(0,o.kt)("h4",{id:"math"},"Math"),(0,o.kt)("p",null,"References to ",(0,o.kt)("inlineCode",{parentName:"p"},"types/math.go")," which contained aliases for math types aliasing the ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/math")," package have been removed.\nImport directly the ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/math")," package instead."),(0,o.kt)("h4",{id:"store"},"Store"),(0,o.kt)("p",null,"References to ",(0,o.kt)("inlineCode",{parentName:"p"},"types/store.go")," which contained aliases for store types have been remapped to point to appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"store/types"),", hence the ",(0,o.kt)("inlineCode",{parentName:"p"},"types/store.go")," file is no longer needed and has been removed."),(0,o.kt)("h5",{id:"extract-store-to-a-standalone-module"},"Extract Store to a standalone module"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," module is extracted to have a separate go.mod file which allows it be a standalone module.\nAll the store imports are now renamed to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/store")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/cosmos/cosmos-sdk/store")," across the SDK."),(0,o.kt)("h5",{id:"streaming"},"Streaming"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/architecture/adr-038-state-listening"},"ADR-38")," has been implemented in the SDK."),(0,o.kt)("p",null,"To continue using state streaming, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"streaming.LoadStreamingServices")," by the following in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.go"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"if err := app.RegisterStreamingServices(appOpts, app.kvStoreKeys()); err != nil {\n    panic(err)\n}\n")),(0,o.kt)("h4",{id:"client"},"Client"),(0,o.kt)("p",null,"The return type of the interface method ",(0,o.kt)("inlineCode",{parentName:"p"},"TxConfig.SignModeHandler()")," has been changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/signing.SignModeHandler")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"x/tx/signing.HandlerMap"),". This change is transparent to most users as the ",(0,o.kt)("inlineCode",{parentName:"p"},"TxConfig")," interface is typically implemented by private ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/tx.config")," struct (as returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.NewTxConfig"),") which has been updated to return the new type.  If users have implemented their own ",(0,o.kt)("inlineCode",{parentName:"p"},"TxConfig")," interface, they will need to update their implementation to return the new type."),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("h4",{id:"all"},(0,o.kt)("inlineCode",{parentName:"h4"},"**all**")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/rfc/rfc-001-tx-validation"},"RFC 001")," has defined a simplification of the message validation process for modules.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," interface has been updated to not require the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method.\nIt is now recommended to validate message directly in the message server. When the validation is performed in the message server, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method on a message is no longer required and can be removed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Messages no longer need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"LegacyMsg")," interface and implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"GetSignBytes")," can be deleted. Because of this change, global legacy Amino codec definitions and their registration in ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," can safely be removed as well.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModuleBasic")," interface has been simplifed. Defining ",(0,o.kt)("inlineCode",{parentName:"p"},"GetTxCmd() *cobra.Command")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GetQueryCmd() *cobra.Command")," is no longer required. The module manager detects when module commands are defined. If AutoCLI is enabled, ",(0,o.kt)("inlineCode",{parentName:"p"},"EnhanceRootCommand()")," will add the auto-generated commands to the root command, unless a custom module command is defined and register that one instead.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The following modules' ",(0,o.kt)("inlineCode",{parentName:"p"},"Keeper")," methods now take in a ",(0,o.kt)("inlineCode",{parentName:"p"},"context.Context")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.Context"),'. Any module that has an interfaces for them (like "expected keepers") will need to update and re-generate mocks if needed:'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/authz")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/bank")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/mint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/crisis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/distribution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/evidence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/gov")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/slashing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/upgrade"))))),(0,o.kt)("h4",{id:"xauth"},(0,o.kt)("inlineCode",{parentName:"h4"},"x/auth")),(0,o.kt)("p",null,"For ante handler construction via ",(0,o.kt)("inlineCode",{parentName:"p"},"ante.NewAnteHandler"),", the field ",(0,o.kt)("inlineCode",{parentName:"p"},"ante.HandlerOptions.SignModeHandler")," has been updated to ",(0,o.kt)("inlineCode",{parentName:"p"},"x/tx/signing/HandlerMap")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/signing/SignModeHandler"),".  Callers typically fetch this value from ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxConfig.SignModeHandler()")," (which is also changed) so this change should be transparent to most users."),(0,o.kt)("h4",{id:"xcapability"},(0,o.kt)("inlineCode",{parentName:"h4"},"x/capability")),(0,o.kt)("p",null,"Capability has been moved to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"IBC Go"),". IBC v8 will contain the necessary changes to incorporate the new module location."),(0,o.kt)("h4",{id:"xgenutil"},(0,o.kt)("inlineCode",{parentName:"h4"},"x/genutil")),(0,o.kt)("p",null,"The Cosmos SDK has migrated from a CometBFT genesis to a application managed genesis file.\nThe genesis is now fully handled by ",(0,o.kt)("inlineCode",{parentName:"p"},"x/genutil"),". This has no consequences for running chains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Importing a CometBFT genesis is still supported."),(0,o.kt)("li",{parentName:"ul"},"Exporting a genesis now exports the genesis as an application genesis.")),(0,o.kt)("p",null,"When needing to read an application genesis, use the following helpers from the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/genutil/types")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// AppGenesisFromReader reads the AppGenesis from the reader.\nfunc AppGenesisFromReader(reader io.Reader) (*AppGenesis, error)\n\n// AppGenesisFromFile reads the AppGenesis from the provided file.\nfunc AppGenesisFromFile(genFile string) (*AppGenesis, error)\n")),(0,o.kt)("h4",{id:"xgov"},(0,o.kt)("inlineCode",{parentName:"h4"},"x/gov")),(0,o.kt)("h5",{id:"expedited-proposals"},"Expedited Proposals"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," v1 module now supports expedited governance proposals. When a proposal is expedited, the voting period will be shortened to ",(0,o.kt)("inlineCode",{parentName:"p"},"ExpeditedVotingPeriod")," parameter. An expedited proposal must have an higher voting threshold than a classic proposal, that threshold is defined with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExpeditedThreshold")," parameter."),(0,o.kt)("h5",{id:"cancelling-proposals"},"Cancelling Proposals"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module now supports cancelling governance proposals. When a proposal is canceled, all the deposits of the proposal are either burnt or sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"ProposalCancelDest")," address. The deposits burn rate will be determined by a new parameter called ",(0,o.kt)("inlineCode",{parentName:"p"},"ProposalCancelRatio")," parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"1. deposits * proposal_cancel_ratio will be burned or sent to `ProposalCancelDest` address , if `ProposalCancelDest` is empty then deposits will be burned.\n2. deposits * (1 - proposal_cancel_ratio) will be sent to depositors.\n")),(0,o.kt)("p",null,"By default, the new ",(0,o.kt)("inlineCode",{parentName:"p"},"ProposalCancelRatio")," parameter is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5")," during migration and ",(0,o.kt)("inlineCode",{parentName:"p"},"ProposalCancelDest")," is set to empty string (i.e. burnt)."),(0,o.kt)("h4",{id:"xevidence"},(0,o.kt)("inlineCode",{parentName:"h4"},"x/evidence")),(0,o.kt)("h5",{id:"extract-evidence-to-a-standalone-module"},"Extract evidence to a standalone module"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/evidence")," module is extracted to have a separate go.mod file which allows it be a standalone module.\nAll the evidence imports are now renamed to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/x/evidence")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/cosmos/cosmos-sdk/x/evidence")," across the SDK."),(0,o.kt)("h4",{id:"xnft"},(0,o.kt)("inlineCode",{parentName:"h4"},"x/nft")),(0,o.kt)("h5",{id:"extract-nft-to-a-standalone-module"},"Extract nft to a standalone module"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/nft")," module is extracted to have a separate go.mod file which allows it to be a standalone module.\nAll the evidence imports are now renamed to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/x/nft")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/cosmos/cosmos-sdk/x/nft")," across the SDK."),(0,o.kt)("h4",{id:"xfeegrant"},"x/feegrant"),(0,o.kt)("h5",{id:"extract-feegrant-to-a-standalone-module"},"Extract feegrant to a standalone module"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/feegrant")," module is extracted to have a separate go.mod file which allows it to be a standalone module.\nAll the feegrant imports are now renamed to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/x/feegrant")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/cosmos/cosmos-sdk/x/feegrant")," across the SDK."),(0,o.kt)("h4",{id:"xupgrade"},(0,o.kt)("inlineCode",{parentName:"h4"},"x/upgrade")),(0,o.kt)("h5",{id:"extract-upgrade-to-a-standalone-module"},"Extract upgrade to a standalone module"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/upgrade")," module is extracted to have a separate go.mod file which allows it to be a standalone module.\nAll the upgrade imports are now renamed to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/x/upgrade")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/cosmos/cosmos-sdk/x/upgrade")," across the SDK."),(0,o.kt)("h3",{id:"tooling"},"Tooling"),(0,o.kt)("h4",{id:"rosetta"},"Rosetta"),(0,o.kt)("p",null,"Rosetta has moved to it's own ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/rosetta"},"repo")," and not imported by the Cosmos SDK SimApp by default.\nAny user who is interested on using the tool can connect it standalone to any node without the need to add it as part of the node binary.\nThe rosetta tool also allows multi chain connections."))}m.isMDXComponent=!0}}]);