import{_,r as g,o as a,c as r,a as t,i,w as d,t as c,F as u,d as h,f as p,B as m,C as b}from"./bootstrap-9979bcf7.js";import"./_commonjsHelpers-de833af9.js";import"./browser-77dd377d.js";import"./preload-helper-f61836a9.js";import"./axios-4a70c6fc.js";const k={data(){return{articles:[],tag:[]}},watch:{async $route(s){s.params.slug!=null&&this.fetchTags()}},mounted(){this.fetchTags()},methods:{fetchTags(){axios.get("/user/knowledge/tags/"+(this.$route.params.slug?this.$route.params.slug+"/":"")+this.$route.params.id).then(s=>{this.articles=s.articles,this.tag=s.tag}).catch(s=>{})}}},x=s=>(m("data-v-d8540728"),s=s(),b(),s),f={id:"knowledge-base-search"},v={class:"card knowledge-base-bg",style:{"background-image":"url('/assets/images/banner/banner.png')"}},y={class:"pt-5 pl-5 absolute top-0 left-0",style:{position:"absolute",top:"15px",left:"15px"}},w=x(()=>t("i",{class:"bi bi-chevron-left"},null,-1)),S={class:"card-body text-center"},T={class:"text-primary text-2xl"},B={id:"knowledge-base-content",class:"mt-5"},C={class:"grid gap-5 xs:grid-cols-1 md:grid-cols-3"},I={class:"card"},$=["src"],N={class:"card-body text-center"},V={class:"text-body mt-1 mb-0"},F={key:1,class:"col-12 no-result no-items text-center"},D={class:"mt-4"};function E(s,L,j,q,o,z){const n=g("router-link");return a(),r("div",null,[t("section",f,[t("div",v,[t("div",y,[i(n,{class:"text-dark mr-5 rounded-full border px-1 py-0.5 hover:bg-gray-300 dark:hover:bg-gray-600",to:"/knowledge"},{default:d(()=>[w]),_:1})]),t("div",S,[t("h2",T,c(o.tag.name?o.tag.name:"...")+" ("+c(o.tag.articles_count)+") ",1)])])]),t("section",B,[t("div",C,[o.articles.data!=null?(a(!0),r(u,{key:0},h(o.articles.data,(e,l)=>(a(),r("div",{key:l},[t("div",I,[i(n,{class:"text-dark",to:"/knowledge/articles/"+e.slug+"/"+e.id},{default:d(()=>[e.img!=null?(a(),r("img",{key:0,src:"/assets/images/article/"+e.img,class:"card-img-top",alt:"knowledge-base-image"},null,8,$)):p("",!0),t("div",N,[t("h4",null,c(e.title),1),t("p",V,c(e.short_text),1)])]),_:2},1032,["to"])])]))),128)):(a(),r("div",F,[t("h4",D,c(s.$t("Search result not found!")),1)]))])])])}const M=_(k,[["render",E],["__scopeId","data-v-d8540728"]]);export{M as default};