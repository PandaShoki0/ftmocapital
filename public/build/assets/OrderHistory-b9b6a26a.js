import{K as u}from"./flowbite-vue-19d13a06.js";import{u as y}from"./ecommerce-d93c3141.js";import{_,r as g,o as a,c,a as e,t as s,F as f,d as b,q as i,i as x,w as n,e as v,n as k,f as w,T as M}from"./bootstrap-2a895a5a.js";import"./_commonjsHelpers-de833af9.js";import"./browser-77dd377d.js";import"./preload-helper-f61836a9.js";import"./axios-4a70c6fc.js";const C={components:{Modal:u},setup(){return{ecommerceStore:y()}},data(){return{showModal:!1,selectedOrder:null,loading:!1}},mounted(){this.loadOrders()},methods:{async loadOrders(){this.ecommerceStore.orders.length==0&&await this.ecommerceStore.fetch_orders()},openModal(t){this.selectedOrder=t,this.showModal=!0},closeModal(){this.selectedOrder=null,this.showModal=!1},async activate(t){this.loading=!0,await this.ecommerceStore.activate_order(t),this.loading=!1}}},O={class:"mb-3 flex items-center justify-between"},S={class:"text-lg font-semibold text-gray-700 dark:text-gray-200"},$={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},B={class:"w-full text-left text-sm text-gray-500 dark:text-gray-400"},V={class:"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},D={scope:"col",class:"px-6 py-3"},L={scope:"col",class:"px-6 py-3"},N={scope:"col",class:"px-6 py-3"},T={scope:"row",class:"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"},j={class:"px-6 py-4"},z={class:"px-6 py-4"},A=["onClick"],E=["disabled","onClick"],F={class:"flex items-center text-lg"},H={class:"text-gray-600 dark:text-gray-400"},K={class:"text-gray-600 dark:text-gray-400"},P={class:"flex justify-end"};function q(t,d,I,m,r,l){const h=g("Modal");return a(),c("div",null,[e("div",O,[e("h2",S,s(t.$t("Order History")),1)]),e("div",$,[e("table",B,[e("thead",V,[e("tr",null,[e("th",D,s(t.$t("Product name")),1),e("th",L,s(t.$t("Price")),1),e("th",N,s(t.$t("Action")),1)])]),e("tbody",null,[(a(!0),c(f,null,b(m.ecommerceStore.orders,(o,G)=>(a(),c("tr",{key:o.id,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[e("th",T,s(o.product.name),1),e("td",j,s(o.price),1),e("td",z,[o.license.activation===1?(a(),c("button",{key:0,type:"button",class:"btn btn-outline-success",onClick:i(p=>l.openModal(o),["prevent"])},s(t.$t("View License")),9,A)):(a(),c("button",{key:1,type:"button",disabled:r.loading,class:"btn btn-outline-primary",onClick:i(p=>l.activate(o),["prevent"])},s(t.$t("Activate Order")),9,E))])]))),128))])])]),x(M,{name:"modal",mode:"out-in","enter-active-class":"modal-enter-active","leave-active-class":"modal-leave-active"},{default:n(()=>[r.showModal?(a(),v(h,{key:0,class:k({hidden:!r.showModal}),size:"2xl",onClose:l.closeModal},{header:n(()=>[e("div",F,s(t.$t("Order Details")),1)]),body:n(()=>[e("p",H,s(t.$t("License"))+" : "+s(r.selectedOrder.license.license),1),e("p",K,s(t.$t("Transaction ID"))+" : "+s(r.selectedOrder.trx),1)]),footer:n(()=>[e("div",P,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:d[0]||(d[0]=(...o)=>l.closeModal&&l.closeModal(...o))},s(t.$t("Close")),1)])]),_:1},8,["class","onClose"])):w("",!0)]),_:1})])}const Z=_(C,[["render",q]]);export{Z as default};