import{K as b}from"./flowbite-vue-3e651750.js";import{u as _}from"./user-4c9e2e6d.js";import{_ as g,r as p,o as d,c,a as e,t as s,i as w,w as a,e as v,g as u,f as h,T as x}from"./bootstrap-9979bcf7.js";import"./_commonjsHelpers-de833af9.js";import"./browser-77dd377d.js";import"./preload-helper-f61836a9.js";import"./axios-4a70c6fc.js";const y={components:{Modal:b},props:["pathname","reward"],setup(){return{userStore:_()}},data(){return{isShowModal:!1}},methods:{Copy(){var t=document.getElementById("referralURL");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),this.$toast.success("Referral Url Copied")},closeModal(){this.isShowModal=!1},showModal(){this.isShowModal=!0}}},k={class:"card"},M={class:"card-body text-center"},S=e("div",{class:"text-warning mb-2 flex items-center justify-center"},[e("i",{class:"bi bi-gift rounded-full px-2 py-1 text-2xl shadow"})],-1),C={class:"card-title text-xl font-semibold"},R={class:"mb-3 text-lg font-light text-gray-500 dark:text-gray-400 md:text-xl"},B={class:"text-xl font-semibold text-gray-900 dark:text-white"},j={class:"px-sm-4 mx-5 mb-10 text-center"},E={class:"mb-10 text-xl font-light text-gray-500 dark:text-gray-400 md:text-xl"},V=e("br",null,null,-1),z={class:"grid md:grid-cols-3 xs:grid-cols-1 gap-5"},U={class:"card p-5 shadow"},$=e("div",{class:"mb-1 flex justify-center"},[e("div",{class:"rounded-full px-3 py-2 shadow-lg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"text-warning h-12 w-12"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})])])],-1),A={class:"text-center"},H={class:"fw-bolder mb-1"},I={class:"card p-5 shadow"},L=e("div",{class:"mb-1 flex justify-center"},[e("div",{class:"rounded-full px-3 py-2 shadow-lg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"text-info h-12 w-12"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"})])])],-1),N={class:"text-center"},T={class:"fw-bolder mb-1"},K={class:"card p-5 shadow"},D=e("div",{class:"mb-1 flex justify-center"},[e("div",{class:"rounded-full px-3 py-2 shadow-lg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"text-success h-12 w-12"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"})])])],-1),Y={class:"text-center"},q={class:"fw-bolder mb-1"},F={class:"px-sm-5 mx-5"},G={class:"text-xl font-bold dark:text-white"},J={key:0,class:"row g-1",onsubmit:"return false"},O={class:"lg:col-span-8"},P={class:"form-label",for:"referralURL"},Q={class:"relative mb-2"},W=["value"],X={class:"flex items-end lg:col-span-4"},Z={class:"social-btns"},ee=["href"],te=e("i",{class:"bi bi-facebook font-medium-2"},null,-1),se=[te],oe=["href"],re=e("i",{class:"bi bi-twitter font-medium-2"},null,-1),ne=[re],le=["href"],ae=e("i",{class:"bi bi-linkedin font-medium-2"},null,-1),ie=[ae],de=["href"],ce=e("i",{class:"bi bi-pinterest font-medium-2"},null,-1),ue=[ce],he={class:"flex justify-end"};function me(t,r,o,n,m,l){const f=p("Modal");return d(),c("div",k,[e("div",M,[S,e("h5",C,s(t.$t("Refer & Earn")),1),e("p",R,s(t.$t("Refer your friends & Earn for")+" "+(o.reward?o.reward:5)+"% "+t.$t("of every customer that completes 1 deposit in the platform.")),1),e("button",{type:"button",class:"mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:r[0]||(r[0]=i=>l.showModal())},s(t.$t("Invite")),1)]),w(x,{name:"modal",mode:"out-in","enter-active-class":"modal-enter-active","leave-active-class":"modal-leave-active"},{default:a(()=>[m.isShowModal?(d(),v(f,{key:0,size:"4xl",onClose:r[3]||(r[3]=i=>l.closeModal())},{header:a(()=>[e("div",B,s(t.$t("Refer & Earn")),1)]),body:a(()=>[e("div",j,[e("p",E,[u(s(t.$t("Invite your friend here, if thay sign up and complete 1 successful deposit,"))+" ",1),V,u(" "+s(t.$t("you will earn")+" "+(o.reward?o.reward:5)+"% "+t.$t("of their future deposits")),1)]),e("div",z,[e("div",U,[$,e("div",A,[e("h6",H,s(t.$t("Send Invitation"))+" 🤟🏻",1),e("p",null,s(t.$t("Send your referral link to your friend")),1)])]),e("div",I,[L,e("div",N,[e("h6",T,s(t.$t("Registration"))+" 👩🏻‍💻",1),e("p",null,s(t.$t("Let them register to our trading platform")),1)])]),e("div",K,[D,e("div",Y,[e("h6",q,s(t.$t("Earn"))+" "+s(o.reward?o.reward:5)+"% 🎉 ",1),e("p",null,s(t.$t("from each successful deposit from your friends")),1)])])])]),e("div",F,[e("h2",G,s(t.$t("Share the referral link")),1),n.userStore.user!=null?(d(),c("form",J,[e("div",O,[e("label",P,s(t.$t("You can also copy and send it or share it on your social media."))+" 🥳 ",1),e("div",Q,[e("input",{id:"referralURL",class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",type:"text",value:o.pathname+"/register/"+n.userStore.user.username,readonly:""},null,8,W),e("button",{id:"copyBoard",type:"submit",class:"absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:r[1]||(r[1]=i=>l.Copy())},s(t.$t("Copy link")),1)])]),e("div",X,[e("div",Z,[e("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+o.pathname+"/register/"+n.userStore.user.username,type:"button",class:"btn btn-icon btn-facebook mr-5 text-2xl"},se,8,ee),e("a",{href:"https://twitter.com/intent/tweet?url="+o.pathname+"/register/"+n.userStore.user.username,type:"button",class:"btn btn-icon btn-twitter mr-5 text-2xl"},ne,8,oe),e("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url="+o.pathname+"/register/"+n.userStore.user.username,type:"button",class:"btn btn-icon btn-linkedin mr-5 text-2xl"},ie,8,le),e("a",{href:"https://pinterest.com/pin/create/button/?url="+o.pathname+"/register/"+n.userStore.user.username,type:"button",class:"btn btn-icon btn-pinterest text-2xl"},ue,8,de)])])])):h("",!0)])]),footer:a(()=>[e("div",he,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:r[2]||(r[2]=i=>l.closeModal())},s(t.$t("Close")),1)])]),_:1})):h("",!0)]),_:1})])}const xe=g(y,[["render",me]]);export{xe as default};