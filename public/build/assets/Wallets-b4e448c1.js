import{u as B}from"./wallets-92ad6f06.js";import{_ as W,o as i,c as u,a as e,n as h,q as A,t as a,f as T,r as y,m as V,i as g,w as o,h as w,U as M,e as C,g as m,F as x,b as S}from"./bootstrap-249b0f62.js";import{F}from"./Filter-3bb21f90.js";import"./_commonjsHelpers-de833af9.js";import"./dijkstra-f906a09e.js";import"./preload-helper-f61836a9.js";import"./axios-7a713374.js";const L={props:{walletsStore:{type:Object,required:!0},activeTab:{type:String,required:!0}},data(){return{tradingWallet,ext,plat}},emits:["tab-changed"],methods:{setActive(t){this.$emit("tab-changed",t)},isActive(t){return this.activeTab===t}}},j={class:"border-b border-gray-200 dark:border-gray-700",style:{margin:"0 -20px 16px -20px"}},z={id:"myTab",class:"-mb-px flex flex-wrap text-center text-sm font-medium",role:"tablist"},D={key:0,class:"mr-2",role:"presentation"},N={class:"flex"},U={class:"mr-2"},E={key:1,class:"mr-2",role:"presentation"},q={class:"flex"},I={class:"mr-2"},R={key:2,class:"mr-2",role:"presentation"},O={class:"flex"},G={class:"mr-2"},H={class:"mr-2",role:"presentation"},J={class:"flex"},K={class:"mr-2"};function Q(t,s,d,f,n,l){return i(),u("div",j,[e("ul",z,[n.ext.eco==1?(i(),u("li",D,[e("button",{id:"main-tab",class:h(["inline-block rounded-t-lg border-b-2 p-4",l.isActive("main")?"text-gray-900 dark:text-gray-300":"border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"]),type:"button",role:"tab","aria-controls":"main","aria-selected":"false",href:"#main",onClick:s[0]||(s[0]=A(b=>l.setActive("main"),["prevent"]))},[e("div",N,[(i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:h(["mr-2 h-5 w-5",l.isActive("main")?"text-blue-600 dark:text-blue-500":" text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"])},s[4]||(s[4]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"},null,-1),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"},null,-1)]),2)),e("span",U,a(t.$t("Primary")),1)])],2)])):T("",!0),n.plat.eco.ecosystem_trading_only!=1&&n.tradingWallet==1?(i(),u("li",E,[e("button",{id:"trading-tab",class:h(["inline-block rounded-t-lg border-b-2 p-4",l.isActive("trading")?"text-gray-900 dark:text-gray-300":"border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"]),type:"button",role:"tab","aria-controls":"trading","aria-selected":"false",href:"#trading",onClick:s[1]||(s[1]=A(b=>l.setActive("trading"),["prevent"]))},[e("div",q,[(i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:h(["mr-2 h-5 w-5",l.isActive("trading")?"text-blue-600 dark:text-blue-500":" text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"])},s[5]||(s[5]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"},null,-1)]),2)),e("span",I,a(t.$t("Trading")),1)])],2)])):T("",!0),n.plat.eco.ecosystem_trading_only!=1&&n.tradingWallet==1&&n.ext.futures==1?(i(),u("li",R,[e("button",{id:"futures-tab",class:h(["inline-block rounded-t-lg border-b-2 p-4",l.isActive("futures")?"text-gray-900 dark:text-gray-300":"border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"]),type:"button",role:"tab","aria-controls":"futures","aria-selected":"false",href:"#futures",onClick:s[2]||(s[2]=A(b=>l.setActive("futures"),["prevent"]))},[e("div",O,[(i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:h(["mr-2 h-5 w-5",l.isActive("futures")?"text-blue-600 dark:text-blue-500":" text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"])},s[6]||(s[6]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"},null,-1)]),2)),e("span",G,a(t.$t("Futures")),1)])],2)])):T("",!0),e("li",H,[e("button",{id:"funding-tab",class:h(["inline-block rounded-t-lg border-b-2 p-4",l.isActive("funding")?"text-gray-900 dark:text-gray-300":"border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"]),type:"button",role:"tab","aria-controls":"funding","aria-selected":"false",href:"#funding",onClick:s[3]||(s[3]=A(b=>l.setActive("funding"),["prevent"]))},[e("div",J,[(i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:h(["mr-2 h-5 w-5",l.isActive("funding")?"text-blue-600 dark:text-blue-500":" text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"])},s[7]||(s[7]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"},null,-1)]),2)),e("span",K,a(t.$t("Funding")),1)])],2)])])])}const X=W(L,[["render",Q]]),Y={components:{Filter:F},props:{currencies:{type:Array,required:!0},loading:{type:Boolean,required:!0},type:{type:String,required:!0}},emits:["create-wallet","make-default"],data(){return{wallets:[],filters:{symbol:{value:"",keys:["symbol"]}},currentPage:1,totalPages:0}},methods:{onImageError(t){t.target.src="/assets/no-image.png"},createWallet(t,s){this.$emit("create-wallet",t,s)},makeDefault(t,s){this.$emit("make-default",t,s)}}},Z={class:"mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"},ee={class:"font-medium"},te={class:"card relative overflow-x-auto"},se={class:"bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},ae={"data-label":"Coin",class:"py-2 px-3 flex justify-start items-center"},re={class:"flex items-center"},le={class:"text-dark text-md"},ne={"data-label":"Balance",class:"py-2 px-3"},oe={"data-label":"Action",class:"py-2 px-3"},ie={class:"btn btn-outline-primary",type:"button"},de=["disabled","loading","onClick"],ce=["disabled","loading","onClick"],ue={key:1,scope:"row",class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},ge={colspan:"100%",class:"py-2 px-3"},ye={class:"flex justify-end"},me={class:"sr-only"},pe={class:"sr-only"};function he(t,s,d,f,n,l){const b=y("Filter"),p=y("VTh"),v=y("router-link"),k=y("VTable"),$=y("VTPagination"),P=V("lazy");return i(),u(x,null,[e("div",Z,[e("div",ee,a(t.$t("Wallets")),1),g(b,null,{default:o(()=>[w(e("input",{"onUpdate:modelValue":s[0]||(s[0]=c=>n.filters.symbol.value=c),type:"text",class:"filter-input",placeholder:"Search"},null,512),[[M,n.filters.symbol.value]])]),_:1})]),e("div",te,[(i(),C(k,{key:d.currencies.length,"current-page":n.currentPage,"onUpdate:currentPage":s[2]||(s[2]=c=>n.currentPage=c),class:"w-full text-left text-sm text-gray-500 dark:text-gray-400",data:d.currencies,filters:n.filters,"page-size":10,"hide-sort-icons":!0,onTotalPagesChanged:s[3]||(s[3]=c=>n.totalPages=c)},{head:o(()=>[e("tr",se,[g(p,{"sort-key":"coin",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Coin")),1)]),_:1}),g(p,{"sort-key":"total",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Balance")),1)]),_:1}),g(p,{"sort-key":"action",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Action")),1)]),_:1})])]),body:o(({rows:c})=>[d.currencies.length>0?(i(!0),u(x,{key:0},S(c,r=>(i(),u("tr",{key:r.id,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[e("td",ae,[e("div",re,[w(e("img",{width:"40",class:"mr-2 rounded-full",onError:s[1]||(s[1]=(..._)=>l.onImageError&&l.onImageError(..._))},null,544),[[P,"/assets/images/cryptoCurrency/"+r.symbol.toLowerCase()+".png"]]),e("span",le,a(r.symbol),1)])]),e("td",ne,a(d.type=="funding"?r.fundingWallet?Number(r.fundingWallet.balance).toFixed(2):"N/A":r.tradingWallet?Number(r.tradingWallet.balance).toFixed(2):"N/A")+" "+a(r!=null&&r.usdtRate?"("+(r==null?void 0:r.usdtRate)+" USDT)":""),1),e("td",oe,[(d.type=="funding"?r.fundingWallet:r.tradingWallet)?(i(),C(v,{key:0,to:"/wallet/"+d.type+"/"+r.symbol+"/"+(d.type=="funding"?r.fundingWallet.address:r.tradingWallet.address)},{default:o(()=>[e("button",ie,a(t.$t("View")),1)]),_:2},1032,["to"])):(i(),u("button",{key:1,class:"btn btn-outline-info",type:"button",disabled:d.loading,loading:d.loading,onClick:_=>l.createWallet(r.symbol,d.type)},a(t.$t("Create Wallet")),9,de)),(d.type=="funding"?r.fundingWallet&&r.fundingWallet.is_default!=1:r.tradingWallet&&r.tradingWallet.is_default!=1)?(i(),u("button",{key:2,class:"btn btn-outline-warning",type:"button",disabled:d.loading,loading:d.loading,onClick:_=>l.makeDefault(r.symbol,d.type)},a(t.$t("Make Default")),9,ce)):T("",!0)])]))),128)):(i(),u("tr",ue,[e("td",ge,a(t.$t("No results found!")),1)]))]),_:1},8,["current-page","data","filters"]))]),e("div",ye,[g($,{currentPage:n.currentPage,"onUpdate:currentPage":s[4]||(s[4]=c=>n.currentPage=c),class:"float-right flex items-center justify-between pt-4","aria-label":"Table navigation","total-pages":n.totalPages,"max-page-links":3,"boundary-links":!0},{firstPage:o(()=>[m(a(t.$t("First")),1)]),lastPage:o(()=>[m(a(t.$t("Last")),1)]),next:o(()=>[e("span",me,a(t.$t("Next")),1),s[5]||(s[5]=e("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1))]),previous:o(()=>[e("span",pe,a(t.$t("Previous")),1),s[6]||(s[6]=e("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1))]),_:1},8,["currentPage","total-pages"])])],64)}const be=W(Y,[["render",he]]),fe={components:{Filter:F},props:{currencies:{type:Array,required:!0},loading:{type:Boolean,required:!0}},emits:["create-wallet"],data(){return{wallets:[],filters:{symbol:{value:"",keys:["symbol"]}},currentPage:1,totalPages:0}},methods:{onImageError(t){t.target.src="/assets/no-image.png"},createWallet(t){this.$emit("create-wallet",t)}}},_e={class:"mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"},ve={class:"font-medium"},ke={class:"card relative overflow-x-auto"},xe={class:"bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},we={"data-label":"Coin",class:"py-2 px-3 flex justify-start items-center"},Ce={class:"flex items-center"},$e={class:"text-dark text-md"},Pe={"data-label":"Balance",class:"py-2 px-3"},We={"data-label":"Action",class:"py-2 px-3"},Ae={class:"btn btn-outline-primary",type:"button"},Te=["disabled","loading","onClick"],Ve={key:1,scope:"row",class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},Me={colspan:"100%",class:"py-2 px-3"},Se={class:"flex justify-end"},Fe={class:"sr-only"},Be={class:"sr-only"};function Le(t,s,d,f,n,l){const b=y("Filter"),p=y("VTh"),v=y("router-link"),k=y("VTable"),$=y("VTPagination"),P=V("lazy");return i(),u(x,null,[e("div",_e,[e("div",ve,a(t.$t("Wallets")),1),g(b,null,{default:o(()=>[w(e("input",{"onUpdate:modelValue":s[0]||(s[0]=c=>n.filters.symbol.value=c),type:"text",class:"filter-input",placeholder:"Search"},null,512),[[M,n.filters.symbol.value]])]),_:1})]),e("div",ke,[(i(),C(k,{key:d.currencies.length,"current-page":n.currentPage,"onUpdate:currentPage":s[2]||(s[2]=c=>n.currentPage=c),class:"w-full text-left text-sm text-gray-500 dark:text-gray-400",data:d.currencies,filters:n.filters,"page-size":10,"hide-sort-icons":!0,onTotalPagesChanged:s[3]||(s[3]=c=>n.totalPages=c)},{head:o(()=>[e("tr",xe,[g(p,{"sort-key":"coin",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Coin")),1)]),_:1}),g(p,{"sort-key":"total",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Balance")),1)]),_:1}),g(p,{"sort-key":"action",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Action")),1)]),_:1})])]),body:o(({rows:c})=>[d.currencies.length>0?(i(!0),u(x,{key:0},S(c,r=>(i(),u("tr",{key:r.id,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[e("td",we,[e("div",Ce,[w(e("img",{width:"40",class:"mr-2 rounded-full",onError:s[1]||(s[1]=(..._)=>l.onImageError&&l.onImageError(..._))},null,544),[[P,"/assets/images/cryptoCurrency/"+r.symbol.toLowerCase()+".png"]]),e("span",$e,a(r.symbol),1)])]),e("td",Pe,a(r.wallet?parseFloat(r.wallet.total_balance):"N/A"),1),e("td",We,[r.wallet&&r.wallet.address?(i(),C(v,{key:0,to:"/wallet/main/"+r.symbol+"/"+r.wallet.address},{default:o(()=>[e("button",Ae,a(t.$t("View")),1)]),_:2},1032,["to"])):(i(),u("button",{key:1,class:"btn btn-outline-info",type:"button",disabled:d.loading,loading:d.loading,onClick:_=>l.createWallet(r)},a(t.$t("Create Wallet")),9,Te))])]))),128)):(i(),u("tr",Ve,[e("td",Me,a(t.$t("No results found!")),1)]))]),_:1},8,["current-page","data","filters"]))]),e("div",Se,[g($,{currentPage:n.currentPage,"onUpdate:currentPage":s[4]||(s[4]=c=>n.currentPage=c),class:"flex items-center justify-between pt-4","aria-label":"Table navigation","total-pages":n.totalPages,"max-page-links":3,"boundary-links":!0},{firstPage:o(()=>[m(a(t.$t("First")),1)]),lastPage:o(()=>[m(a(t.$t("Last")),1)]),next:o(()=>[e("span",Fe,a(t.$t("Next")),1),s[5]||(s[5]=e("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1))]),previous:o(()=>[e("span",Be,a(t.$t("Previous")),1),s[6]||(s[6]=e("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1))]),_:1},8,["currentPage","total-pages"])])],64)}const je=W(fe,[["render",Le]]),ze={components:{Filter:F},props:{currencies:{type:Array,required:!0},loading:{type:Boolean,required:!0},type:{type:String,required:!0}},emits:["create-wallet"],data(){return{wallets:[],filters:{symbol:{value:"",keys:["symbol"]}},currentPage:1,totalPages:0}},methods:{onImageError(t){t.target.src="/assets/no-image.png"},createWallet(t,s){this.$emit("create-wallet",t,s)}}},De={class:"mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"},Ne={class:"font-medium"},Ue={class:"card relative overflow-x-auto"},Ee={class:"bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},qe={"data-label":"Coin",class:"py-2 px-3 flex justify-start items-center"},Ie={class:"flex items-center"},Re={class:"text-dark text-md"},Oe={"data-label":"Balance",class:"py-2 px-3"},Ge={"data-label":"Action",class:"py-2 px-3"},He={class:"btn btn-outline-primary",type:"button"},Je=["disabled","loading","onClick"],Ke={key:1,scope:"row",class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},Qe={colspan:"100%",class:"py-2 px-3"},Xe={class:"flex justify-end"},Ye={class:"sr-only"},Ze={class:"sr-only"};function et(t,s,d,f,n,l){const b=y("Filter"),p=y("VTh"),v=y("router-link"),k=y("VTable"),$=y("VTPagination"),P=V("lazy");return i(),u(x,null,[e("div",De,[e("div",Ne,a(t.$t("Wallets")),1),g(b,null,{default:o(()=>[w(e("input",{"onUpdate:modelValue":s[0]||(s[0]=c=>n.filters.symbol.value=c),type:"text",class:"filter-input",placeholder:"Search"},null,512),[[M,n.filters.symbol.value]])]),_:1})]),e("div",Ue,[(i(),C(k,{key:d.currencies.length,"current-page":n.currentPage,"onUpdate:currentPage":s[2]||(s[2]=c=>n.currentPage=c),class:"w-full text-left text-sm text-gray-500 dark:text-gray-400",data:d.currencies,filters:n.filters,"page-size":10,"hide-sort-icons":!0,onTotalPagesChanged:s[3]||(s[3]=c=>n.totalPages=c)},{head:o(()=>[e("tr",Ee,[g(p,{"sort-key":"coin",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Coin")),1)]),_:1}),g(p,{"sort-key":"total",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Balance")),1)]),_:1}),g(p,{"sort-key":"action",scope:"col",class:"py-3 px-6"},{default:o(()=>[m(a(t.$t("Action")),1)]),_:1})])]),body:o(({rows:c})=>[d.currencies.length>0?(i(!0),u(x,{key:0},S(c,r=>(i(),u("tr",{key:r.id,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[e("td",qe,[e("div",Ie,[w(e("img",{width:"40",class:"mr-2 rounded-full",onError:s[1]||(s[1]=(..._)=>l.onImageError&&l.onImageError(..._))},null,544),[[P,"/assets/images/cryptoCurrency/"+r.symbol.toLowerCase()+".png"]]),e("span",Re,a(r.symbol),1)])]),e("td",Oe,a(r.wallet?parseFloat(r.wallet.balance):"N/A"),1),e("td",Ge,[r.wallet?(i(),C(v,{key:0,to:"/wallet/"+d.type+"/"+r.symbol},{default:o(()=>[e("button",He,a(t.$t("View")),1)]),_:2},1032,["to"])):(i(),u("button",{key:1,class:"btn btn-outline-info",type:"button",disabled:d.loading,loading:d.loading,onClick:_=>l.createWallet(r.symbol,d.type)},a(t.$t("Create Wallet")),9,Je))])]))),128)):(i(),u("tr",Ke,[e("td",Qe,a(t.$t("No results found!")),1)]))]),_:1},8,["current-page","data","filters"]))]),e("div",Xe,[g($,{currentPage:n.currentPage,"onUpdate:currentPage":s[4]||(s[4]=c=>n.currentPage=c),class:"float-right flex items-center justify-between pt-4","aria-label":"Table navigation","total-pages":n.totalPages,"max-page-links":3,"boundary-links":!0},{firstPage:o(()=>[m(a(t.$t("First")),1)]),lastPage:o(()=>[m(a(t.$t("Last")),1)]),next:o(()=>[e("span",Ye,a(t.$t("Next")),1),s[5]||(s[5]=e("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1))]),previous:o(()=>[e("span",Ze,a(t.$t("Previous")),1),s[6]||(s[6]=e("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1))]),_:1},8,["currentPage","total-pages"])])],64)}const tt=W(ze,[["render",et]]),st={components:{WalletsTabs:X,Currencies:be,MainCurrencies:je,FutureCurrencies:tt},setup(){return{walletsStore:B()}},data(){return{ext,plat,activeTab:ext.eco==1?"main":tradingWallet==1?"trading":"funding"}},computed:{loading(){return this.walletsStore.loading}},created(){this.fetchData(),ext.eco==1&&this.fetchMainWallet()},methods:{handleTabChanged(t){this.activeTab=t},isActive(t){return this.activeTab===t},async fetchData(){(!Array.isArray(this.walletsStore.wallets)||this.walletsStore.wallets.length===0)&&await this.walletsStore.fetch(),tradingWallet==0&&(ext.eco==1?this.activeTab="main":this.activeTab="funding")},async fetchMainWallet(){(!Array.isArray(this.walletsStore.main_wallets)||this.walletsStore.main_wallets.length===0)&&await this.walletsStore.fetch_main()},async createWallet(t,s){await this.walletsStore.create(t,s)},async makeDefault(t,s){await this.walletsStore.make_default(t,s)},async createMainWallet(t){await this.walletsStore.create_main(t)}}},at={class:"card mt-5"},rt={class:"card-title"},lt={class:"card-header"},nt={class:"card-body"},ot={class:"list-disc list-inside space-y-2"},it={class:"text-sm"},dt={class:"text-sm"},ct={class:"text-sm"},ut={class:"card mt-5"},gt={class:"card-title"},yt={class:"card-header"},mt={class:"card-body"},pt={class:"list-disc list-inside space-y-2"},ht={class:"text-sm"},bt={class:"text-sm"},ft={class:"text-sm"},_t={class:"text-sm"},vt={class:"card mt-5"},kt={class:"card-title"},xt={class:"card-header"},wt={class:"card-body"},Ct={class:"list-disc list-inside space-y-2"},$t={class:"text-sm"},Pt={class:"text-sm"},Wt={class:"text-sm"},At={class:"card mt-5"},Tt={class:"card-title"},Vt={class:"card-header"},Mt={class:"card-body"},St={class:"list-disc list-inside space-y-2"},Ft={class:"text-sm"},Bt={class:"text-sm"},Lt={class:"text-sm"},jt={class:"text-sm"};function zt(t,s,d,f,n,l){const b=y("wallets-tabs"),p=y("main-currencies"),v=y("currencies"),k=y("future-currencies");return i(),u(x,null,[g(b,{"wallets-store":f.walletsStore,"active-tab":n.activeTab,onTabChanged:l.handleTabChanged},null,8,["wallets-store","active-tab","onTabChanged"]),e("div",null,[e("div",{class:h(l.isActive("main")?"":"hidden")},[g(p,{currencies:f.walletsStore.main_currencies,loading:l.loading,onCreateWallet:l.createMainWallet},null,8,["currencies","loading","onCreateWallet"]),e("div",at,[e("div",rt,[e("h2",lt,a(t.$t("Features")),1)]),e("div",nt,[e("ul",ot,[e("li",it,a(t.$t("Used mainly in the new hot markets")),1),e("li",dt,a(t.$t("Very low fees on transactions and trades")),1),e("li",ct,a(t.$t("Completely automated deposit and withdrawal")),1)])])])],2),e("div",{class:h(l.isActive("trading")?"":"hidden")},[g(v,{currencies:f.walletsStore.currencies,loading:l.loading,type:"trading",onCreateWallet:l.createWallet,onMakeDefault:l.makeDefault},null,8,["currencies","loading","onCreateWallet","onMakeDefault"]),e("div",ut,[e("div",gt,[e("h2",yt,a(t.$t("Features")),1)]),e("div",mt,[e("ul",pt,[e("li",ht,a(t.$t("Used in most of the trading pairs")),1),e("li",bt,a(t.$t("Normal fees on transactions and trades")),1),e("li",ft,a(t.$t("Fully automated withdrawal, but deposit requires transaction hash for verification within given time")),1),e("li",_t,a(t.$t("Automated transfer to funding wallet")),1)])])])],2),e("div",{class:h(l.isActive("futures")?"":"hidden")},[g(k,{currencies:f.walletsStore.futureCurrencies,loading:l.loading,type:"futures",onCreateWallet:l.createWallet},null,8,["currencies","loading","onCreateWallet"]),e("div",vt,[e("div",kt,[e("h2",xt,a(t.$t("Features")),1)]),e("div",wt,[e("ul",Ct,[e("li",$t,a(t.$t("Used in Futures trading pairs")),1),e("li",Pt,a(t.$t("Low fees on transactions and trades")),1),e("li",Wt,a(t.$t("Automated transfer to trading wallet")),1)])])])],2),e("div",{class:h(l.isActive("funding")?"":"hidden")},[g(v,{currencies:f.walletsStore.currencies,loading:l.loading,type:"funding",onCreateWallet:l.createWallet,onMakeDefault:l.makeDefault},null,8,["currencies","loading","onCreateWallet","onMakeDefault"]),e("div",At,[e("div",Tt,[e("h2",Vt,a(t.$t("Features")),1)]),e("div",Mt,[e("ul",St,[e("li",Ft,a(t.$t("Used in binary trading, investments, and most of the features")),1),e("li",Bt,"0 "+a(t.$t("fees on activity")),1),e("li",Lt,a(t.$t("Deposit and withdrawal by payment gateways with fiat or crypto")),1),e("li",jt,a(t.$t("Ability to transfer to trading wallet with verification from support")),1)])])])],2)])],64)}const Ot=W(st,[["render",zt]]);export{Ot as default};