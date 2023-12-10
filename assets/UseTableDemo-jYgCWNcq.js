import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-SF99PU52.js";import{d as t,q as a,e as l,B as o,H as i,r as n,o as s,c as d,w as r,a as m,t as u,P as p,F as c,O as b,k as f,_ as g}from"./index-SLBLGd9V.js";import{_ as D}from"./Table.vue_vue_type_script_lang-YZQgKV1q.js";import{g as _}from"./index-DbFa88V8.js";import{E as h}from"./el-tag-tB5qNfCm.js";import{u as v}from"./useTable-SaJLlwxX.js";import"./el-card-sKcKiu2J.js";import"./el-popper-bilUBKzH.js";import"./el-checkbox-xSKL3mKa.js";import"./isEqual-nyivIzMj.js";import"./el-pagination-zu8i6FbG.js";import"./debounce-LO_gwpwV.js";import"./el-image-viewer-x8VCr3p3.js";import"./tsxHelper-bs_iKASh.js";import"./el-dropdown-item-ehHOgPyI.js";import"./refs-jbNI9cBj.js";import"./index-ya17nE91.js";function x(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!b(e)}const j=g(t({__name:"UseTableDemo",setup(t){const{tableRegister:b,tableMethods:g,tableState:j}=v({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=j,a=await _({pageIndex:m(e),pageSize:m(t)});return{list:a.data.list,total:a.data.total}}}),{loading:y,dataList:C,total:k,currentPage:w,pageSize:S}=j,{setProps:T,setColumn:P,getElTableExpose:R,addColumn:A,delColumn:E,refresh:O}=g,{t:z}=f(),I=a([{field:"expand",type:"expand",slots:{default:e=>{const{row:t}=e;return l("div",{class:"ml-30px"},[l("div",null,[z("tableDemo.title"),o("："),t.title]),l("div",null,[z("tableDemo.author"),o("："),t.author]),l("div",null,[z("tableDemo.displayTime"),o("："),t.display_time])])}}},{field:"selection",type:"selection"},{field:"index",label:z("tableDemo.index"),type:"index"},{field:"content",label:z("tableDemo.header"),children:[{field:"title",label:z("tableDemo.title")},{field:"author",label:z("tableDemo.author")},{field:"display_time",label:z("tableDemo.displayTime")},{field:"importance",label:z("tableDemo.importance"),formatter:(e,t,a)=>l(h,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[z(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:z("tableDemo.pageviews")}]},{field:"action",label:z("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>U(e)},x(t=z("tableDemo.action"))?t:{default:()=>[t]})}}}]),U=e=>{},H=n(!0),$=e=>{H.value=e},q=e=>{T({reserveIndex:e})},B=e=>{P([{field:"selection",path:"hidden",value:!e}])},M=n(1),N=()=>{P([{field:"title",path:"label",value:`${z("tableDemo.title")}${m(M)}`}]),M.value++},F=e=>{P([{field:"expand",path:"hidden",value:!e}])},K=async()=>{const e=await R();null==e||e.toggleAllSelection()},L=n(!0),Q=()=>{m(L)?(E("action"),L.value=!1):(A({field:"action",label:z("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>U(e)},x(t=z("tableDemo.action"))?t:{default:()=>[t]})}}}),L.value=!0)},W=n(!1),G=()=>{T({stripe:!m(W)}),W.value=!m(W)},J=n("auto"),V=()=>{"auto"===m(J)?(T({height:300}),J.value=300):(T({height:"auto"}),J.value="auto")},X=async()=>{const e=await R();null==e||e.getSelectionRows()};return(t,a)=>(s(),d(c,null,[l(m(e),{title:`UseTable ${m(z)("tableDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:r((()=>[l(m(i),{onClick:a[0]||(a[0]=e=>$(!0))},{default:r((()=>[o(u(m(z)("tableDemo.show"))+" "+u(m(z)("tableDemo.pagination")),1)])),_:1}),l(m(i),{onClick:a[1]||(a[1]=e=>$(!1))},{default:r((()=>[o(u(m(z)("tableDemo.hidden"))+" "+u(m(z)("tableDemo.pagination")),1)])),_:1}),l(m(i),{onClick:a[2]||(a[2]=e=>q(!0))},{default:r((()=>[o(u(m(z)("tableDemo.reserveIndex")),1)])),_:1}),l(m(i),{onClick:a[3]||(a[3]=e=>q(!1))},{default:r((()=>[o(u(m(z)("tableDemo.restoreIndex")),1)])),_:1}),l(m(i),{onClick:a[4]||(a[4]=e=>B(!0))},{default:r((()=>[o(u(m(z)("tableDemo.showSelections")),1)])),_:1}),l(m(i),{onClick:a[5]||(a[5]=e=>B(!1))},{default:r((()=>[o(u(m(z)("tableDemo.hiddenSelections")),1)])),_:1}),l(m(i),{onClick:N},{default:r((()=>[o(u(m(z)("tableDemo.changeTitle")),1)])),_:1}),l(m(i),{onClick:a[6]||(a[6]=e=>F(!0))},{default:r((()=>[o(u(m(z)("tableDemo.showExpandedRows")),1)])),_:1}),l(m(i),{onClick:a[7]||(a[7]=e=>F(!1))},{default:r((()=>[o(u(m(z)("tableDemo.hiddenExpandedRows")),1)])),_:1}),l(m(i),{onClick:K},{default:r((()=>[o(u(m(z)("tableDemo.selectAllNone")),1)])),_:1}),l(m(i),{onClick:Q},{default:r((()=>[o(u(m(z)("tableDemo.delOrAddAction")),1)])),_:1}),l(m(i),{onClick:G},{default:r((()=>[o(u(m(z)("tableDemo.showOrHiddenStripe")),1)])),_:1}),l(m(i),{onClick:V},{default:r((()=>[o(u(m(z)("tableDemo.fixedHeaderOrAuto")),1)])),_:1}),l(m(i),{onClick:X},{default:r((()=>[o(u(m(z)("tableDemo.getSelections")),1)])),_:1})])),_:1},8,["title"]),l(m(e),{title:`UseTable ${m(z)("tableDemo.example")}`},{default:r((()=>[l(m(D),{pageSize:m(S),"onUpdate:pageSize":a[8]||(a[8]=e=>p(S)?S.value=e:null),currentPage:m(w),"onUpdate:currentPage":a[9]||(a[9]=e=>p(w)?w.value=e:null),showAction:"",columns:I,data:m(C),loading:m(y),pagination:H.value?{total:m(k)}:void 0,onRegister:m(b),onRefresh:m(O)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister","onRefresh"])])),_:1},8,["title"])],64))}}),[["__scopeId","data-v-836bcfb9"]]);export{j as default};
