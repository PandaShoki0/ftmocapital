import{t as f}from"./toDate-e910adc1.js";import{F as x}from"./Filter-555cb1ad.js";import{C as v}from"./Col-7414d455.js";import{_ as P,r as d,o as i,c as p,a as t,i as r,w as a,g as u,t as s,h as w,W as T,e as C,F as V,d as D,f as F}from"./bootstrap-2a895a5a.js";import"./_commonjsHelpers-de833af9.js";import"./browser-77dd377d.js";import"./preload-helper-f61836a9.js";import"./axios-4a70c6fc.js";const S={components:{toDate:f,Filter:x,Col:v},data(){return{tickets:[],filters:{ticket:{value:"",keys:["ticket"]}},currentPage:1,totalPages:0}},created(){this.fetchData()},methods:{fetchData(){axios.get("/user/support/tickets").then(e=>{this.tickets=e})}}},j={class:"my-2 text-end"},B={class:"mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"},L={class:"font-medium"},N={class:"card relative overflow-x-auto"},$={class:"bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},z={scope:"col"},A={"data-label":"Subject",class:"py-4 px-6"},M={"data-label":"Status",class:"py-4 px-6"},R={key:0,class:"badge bg-success"},U={key:1,class:"badge bg-primary"},E={key:2,class:"badge bg-warning"},I={key:3,class:"badge bg-danger"},O={"data-label":"Last Reply",class:"py-4 px-6"},W={"data-label":"Action",class:"py-4 px-6"},q=t("i",{class:"bi bi-display",style:{"margin-right":"0 !important"}},null,-1),G={key:1,scope:"row",class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},H={colspan:"100%",class:"py-4 px-6"},J={class:"sr-only"},K=t("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),Q={class:"sr-only"},X=t("svg",{class:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1);function Y(e,c,Z,tt,o,et){const g=d("router-link"),m=d("Filter"),_=d("Col"),y=d("VTh"),b=d("toDate"),k=d("VTable"),h=d("VTPagination");return i(),p("div",null,[t("div",j,[r(g,{to:"/support/ticket",class:"btn btn-outline-primary"},{default:a(()=>[u(s(e.$t("Create Ticket")),1)]),_:1})]),t("div",B,[t("div",L,s(e.$t("Support Tickets")),1),r(m,null,{default:a(()=>[w(t("input",{"onUpdate:modelValue":c[0]||(c[0]=n=>o.filters.ticket.value=n),type:"text",class:"filter-input",placeholder:"Ticket ID"},null,512),[[T,o.filters.ticket.value]])]),_:1})]),t("div",N,[(i(),C(k,{key:o.tickets.length,"current-page":o.currentPage,"onUpdate:currentPage":c[1]||(c[1]=n=>o.currentPage=n),class:"w-full text-left text-sm text-gray-500 dark:text-gray-400",data:o.tickets,filters:o.filters,"page-size":10,"hide-sort-icons":!0,onTotalPagesChanged:c[2]||(c[2]=n=>o.totalPages=n)},{head:a(()=>[t("tr",$,[r(y,{"sort-key":"subject",scope:"col",class:"py-3 px-6"},{default:a(()=>[r(_,{text:"Subject"})]),_:1}),r(y,{"sort-key":"status",scope:"col",class:"py-3 px-6"},{default:a(()=>[r(_,{text:"Status"})]),_:1}),r(y,{"sort-key":"last_reply",scope:"col",class:"py-3 px-6"},{default:a(()=>[r(_,{text:"Last Reply"})]),_:1}),t("th",z,s(e.$t("Action")),1)])]),body:a(({rows:n})=>[o.tickets.length>0?(i(!0),p(V,{key:0},D(n,l=>(i(),p("tr",{key:l.id,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[t("td",A,[r(g,{to:"/support/ticket/"+l.ticket,class:"fw-bold"},{default:a(()=>[u("["+s(e.$t("Ticket"))+"#"+s(l.ticket)+"] "+s(l.subject),1)]),_:2},1032,["to"])]),t("td",M,[l.status==0?(i(),p("span",R,s(e.$t("Open")),1)):l.status==1?(i(),p("span",U,s(e.$t("Answered")),1)):l.status==2?(i(),p("span",E,s(e.$t("Customer Reply")),1)):l.status==3?(i(),p("span",I,s(e.$t("Closed")),1)):F("",!0)]),t("td",O,[r(b,{time:l.last_reply},null,8,["time"])]),t("td",W,[r(g,{to:"/support/ticket/"+l.id,class:"btn btn-primary btn-sm"},{default:a(()=>[q]),_:2},1032,["to"])])]))),128)):(i(),p("tr",G,[t("td",H,s(e.$t("No results found!")),1)]))]),_:1},8,["current-page","data","filters"]))]),r(h,{currentPage:o.currentPage,"onUpdate:currentPage":c[3]||(c[3]=n=>o.currentPage=n),class:"float-right flex items-center justify-between pt-4","aria-label":"Table navigation","total-pages":o.totalPages,"max-page-links":3,"boundary-links":!0},{firstPage:a(()=>[u(s(e.$t("First")),1)]),lastPage:a(()=>[u(s(e.$t("Last")),1)]),next:a(()=>[t("span",J,s(e.$t("Next")),1),K]),previous:a(()=>[t("span",Q,s(e.$t("Previous")),1),X]),_:1},8,["currentPage","total-pages"])])}const pt=P(S,[["render",Y]]);export{pt as default};