(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19e08bf6"],{"0d7e":function(t,e,a){"use strict";a.r(e);a("b0c0");var n=a("7a23"),c=Object(n["g"])("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[Object(n["g"])("h1",{class:"h2"},"Detail User")],-1),l={key:0,class:"alert alert-danger",role:"alert"},s={key:1,class:"card"},r=Object(n["g"])("img",{src:"/default-user-image.jpeg",class:"card-img-top",alt:"..."},null,-1),i={class:"card-body"},o={class:"card-title"},u={class:"card-text"},d=Object(n["g"])("br",null,null,-1),b=Object(n["g"])("br",null,null,-1),j=Object(n["g"])("br",null,null,-1),O=Object(n["g"])("br",null,null,-1),v=Object(n["g"])("br",null,null,-1),g=Object(n["g"])("br",null,null,-1),f=Object(n["g"])("br",null,null,-1),p=Object(n["g"])("br",null,null,-1);function m(t,e,a,m,h,k){var y=Object(n["A"])("layout-main");return Object(n["s"])(),Object(n["f"])("div",null,[Object(n["j"])(y,null,{default:Object(n["G"])((function(){var t,e,a,m,k,y,w,x,C,_,G,M,S,D,U,A,$;return[c,Object(n["g"])("div",null,[null==h.datausers?(Object(n["s"])(),Object(n["f"])("div",l,Object(n["C"])(h.errormessage),1)):(Object(n["s"])(),Object(n["f"])("div",s,[r,Object(n["g"])("div",i,[Object(n["g"])("h5",o,Object(n["C"])(null===(t=h.datausers)||void 0===t?void 0:t.name),1),Object(n["g"])("address",u,[Object(n["g"])("b",null,Object(n["C"])(null===(e=h.datausers)||void 0===e?void 0:e.username),1),d,Object(n["i"])(" "+Object(n["C"])(null===(a=h.datausers)||void 0===a||null===(m=a.address)||void 0===m?void 0:m.street)+", "+Object(n["C"])(null===(k=h.datausers)||void 0===k||null===(y=k.address)||void 0===y?void 0:y.suite),1),b,Object(n["i"])(" "+Object(n["C"])(null===(w=h.datausers)||void 0===w||null===(x=w.address)||void 0===x?void 0:x.city)+", "+Object(n["C"])(null===(C=h.datausers)||void 0===C||null===(_=C.address)||void 0===_?void 0:_.zipcode),1),j,Object(n["i"])(" "+Object(n["C"])(null===(G=h.datausers)||void 0===G?void 0:G.phone),1),O,Object(n["i"])(" "+Object(n["C"])(null===(M=h.datausers)||void 0===M?void 0:M.website),1),v,Object(n["i"])(" "+Object(n["C"])(null===(S=h.datausers)||void 0===S?void 0:S.email),1),g,f,Object(n["g"])("b",null,Object(n["C"])(null===(D=h.datausers)||void 0===D||null===(U=D.company)||void 0===U?void 0:U.name),1),p,Object(n["i"])(" "+Object(n["C"])(null===(A=h.datausers)||void 0===A||null===($=A.company)||void 0===$?void 0:$.catchPhrase),1)])])]))])]})),_:1})])}a("d3b7");var h=a("7909"),k={components:{LayoutMain:h["a"]},data:function(){return{id:this.$route.params.id,username:this.$route.params.username,datausers:null,errormessage:null}},methods:{getDetailUser:function(t){var e=this;fetch("https://jsonplaceholder.typicode.com/users/"+t).then((function(t){return t.json()})).then((function(t){void 0!==(null===t||void 0===t?void 0:t.id)?e.datausers=t:e.errormessage="Data user tidak ditemukan!"})).catch((function(t){console.log(t),e.errormessage="Maaf tidak dapat memuat data user, silakan coba lag!"}))}},mounted:function(){this.getDetailUser(this.id)}},y=a("6b0d"),w=a.n(y);const x=w()(k,[["render",m]]);e["default"]=x},7909:function(t,e,a){"use strict";var n=a("7a23"),c=function(t){return Object(n["v"])("data-v-66c8f5d3"),t=t(),Object(n["t"])(),t},l={class:"dashboard"},s={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},r=c((function(){return Object(n["g"])("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3",href:"#"},"Nur Rachmat .inc",-1)})),i=c((function(){return Object(n["g"])("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["g"])("span",{class:"navbar-toggler-icon"})],-1)})),o=c((function(){return Object(n["g"])("input",{class:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"},null,-1)})),u={class:"navbar-nav"},d={class:"nav-item text-nowrap"},b=Object(n["i"])("Sign out"),j={class:"container-fluid"},O={class:"row"},v={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},g={class:"position-sticky pt-3"},f={class:"nav flex-column"},p={class:"nav-item"},m=c((function(){return Object(n["g"])("span",{"data-feather":"home"},null,-1)})),h=Object(n["i"])(" Dashboard "),k={class:"nav-item"},y=c((function(){return Object(n["g"])("span",{"data-feather":"file"},null,-1)})),w=Object(n["i"])(" Profil "),x={class:"nav-item"},C=c((function(){return Object(n["g"])("span",{"data-feather":"shopping-cart"},null,-1)})),_=Object(n["i"])(" About "),G={class:"nav-item"},M=c((function(){return Object(n["g"])("span",{"data-feather":"shopping-cart"},null,-1)})),S=Object(n["i"])(" Users "),D={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"};function U(t,e,a,c,U,A){var $=Object(n["A"])("router-link");return Object(n["s"])(),Object(n["f"])("div",l,[Object(n["g"])("header",s,[r,i,o,Object(n["g"])("div",u,[Object(n["g"])("div",d,[Object(n["j"])($,{to:"/login",class:"nav-link px-3"},{default:Object(n["G"])((function(){return[b]})),_:1})])])]),Object(n["g"])("div",j,[Object(n["g"])("div",O,[Object(n["g"])("nav",v,[Object(n["g"])("div",g,[Object(n["g"])("ul",f,[Object(n["g"])("li",p,[Object(n["j"])($,{to:"/dashboard",class:"nav-link active","aria-current":"page"},{default:Object(n["G"])((function(){return[m,h]})),_:1})]),Object(n["g"])("li",k,[Object(n["j"])($,{to:"/profil",class:"nav-link"},{default:Object(n["G"])((function(){return[y,w]})),_:1})]),Object(n["g"])("li",x,[Object(n["j"])($,{to:"/about",class:"nav-link"},{default:Object(n["G"])((function(){return[C,_]})),_:1})]),Object(n["g"])("li",G,[Object(n["j"])($,{to:"/users",class:"nav-link"},{default:Object(n["G"])((function(){return[M,S]})),_:1})])])])]),Object(n["g"])("main",D,[Object(n["z"])(t.$slots,"default",{},void 0,!0)])])])])}var A={name:"LayoutMain"},$=(a("ecf7"),a("6b0d")),z=a.n($);const I=z()(A,[["render",U],["__scopeId","data-v-66c8f5d3"]]);e["a"]=I},a2f5:function(t,e,a){},b0c0:function(t,e,a){var n=a("83ab"),c=a("5e77").EXISTS,l=a("e330"),s=a("9bf2").f,r=Function.prototype,i=l(r.toString),o=/^\s*function ([^ (]*)/,u=l(o.exec),d="name";n&&!c&&s(r,d,{configurable:!0,get:function(){try{return u(o,i(this))[1]}catch(t){return""}}})},ecf7:function(t,e,a){"use strict";a("a2f5")}}]);
//# sourceMappingURL=chunk-19e08bf6.617fbc9f.js.map