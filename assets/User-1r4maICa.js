import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-SF99PU52.js";import{d as a,q as t,e as l,H as i,F as o,r,Q as s,a as n,o as d,c as u,w as m,f as p,t as c,J as v,B as f,P as _,i as h,V as g,O as y,k as j,R as x}from"./index-SLBLGd9V.js";import{_ as b}from"./Table.vue_vue_type_script_lang-YZQgKV1q.js";import{E as w}from"./el-tree-0cPDuv_Q.js";import"./el-checkbox-xSKL3mKa.js";import{E as D}from"./el-divider-qu7TnNkw.js";import{g as k,b as S,c as C,e as P}from"./index-lDnk7fuM.js";import{u as T}from"./useTable-SaJLlwxX.js";import{_ as E}from"./Search.vue_vue_type_script_setup_true_lang-3Kg_rVVM.js";import{_ as R}from"./Write.vue_vue_type_script_setup_true_lang-qtkijg5x.js";import{_ as V}from"./Detail.vue_vue_type_script_setup_true_lang-0XH_msKN.js";import{_ as z}from"./Dialog.vue_vue_type_style_index_0_lang-JZ8xq9WJ.js";import{g as N}from"./index-uZVx714O.js";import{u as I}from"./useCrudSchemas-Hi44Ny1L.js";import"./el-card-sKcKiu2J.js";import"./el-popper-bilUBKzH.js";import"./el-tag-tB5qNfCm.js";import"./el-pagination-zu8i6FbG.js";import"./isEqual-nyivIzMj.js";import"./debounce-LO_gwpwV.js";import"./el-image-viewer-x8VCr3p3.js";import"./tsxHelper-bs_iKASh.js";import"./el-dropdown-item-ehHOgPyI.js";import"./refs-jbNI9cBj.js";import"./index-ya17nE91.js";import"./index--GBQOReU.js";import"./Form-DFiLZ-eA.js";import"./el-col-woFoQPkF.js";import"./el-input-number-pG6hKs_1.js";import"./InputPassword-scsbb5uG.js";import"./style.css_vue_type_style_index_0_src_true_lang-U1HHlOIA.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DNiZFS8h.js";import"./IconPicker-VplWRTVs.js";import"./useForm-P-62QDa8.js";import"./useIcon-s10fj0bc.js";import"./useValidator-1DdjF_MS.js";import"./Descriptions-FYRisCfG.js";import"./use-dialog-bBCRCf1y.js";import"./tree-1FtpebiE.js";const U={class:"flex w-100% h-100%"},A={class:"flex justify-center items-center"},L={class:"flex-1"},O=["title"],q={class:"mb-10px"};function F(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!y(e)}const K=a({__name:"User",setup(a){const{t:y}=j(),{tableRegister:K,tableState:B,tableMethods:H}=T({fetchDataApi:async()=>{const{pageSize:e,currentPage:a}=B,t=await S({id:n(ie),pageIndex:n(a),pageSize:n(e),...n(ae)});return{list:t.data.list||[],total:t.data.total||0}},fetchDelApi:async()=>!!(await C(n(fe)))}),{total:J,loading:M,dataList:Q,pageSize:W,currentPage:X}=B,{getList:Y,getElTableExpose:G,delList:Z}=H,$=t([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:y("userDemo.index"),form:{hidden:!0},search:{hidden:!0},detail:{hidden:!0},table:{type:"index"}},{field:"username",label:y("userDemo.username")},{field:"account",label:y("userDemo.account")},{field:"department.id",label:y("userDemo.department"),detail:{hidden:!0},search:{hidden:!0},form:{component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"departmentName"}},optionApi:async()=>(await k()).data.list},table:{hidden:!0}},{field:"role",label:y("userDemo.role"),search:{hidden:!0},form:{component:"Select",value:[],componentProps:{multiple:!0,collapseTags:!0,maxCollapseTags:1},optionApi:async()=>{var e,a;return null==(a=null==(e=(await N()).data)?void 0:e.list)?void 0:a.map((e=>({label:e.roleName,value:e.id})))}}},{field:"email",label:y("userDemo.email"),form:{component:"Input"},search:{hidden:!0}},{field:"createTime",label:y("userDemo.createTime"),form:{component:"Input"},search:{hidden:!0}},{field:"action",label:y("userDemo.action"),form:{hidden:!0},detail:{hidden:!0},search:{hidden:!0},table:{width:240,slots:{default:e=>{let a,t,r;const s=e.row;return l(o,null,[l(i,{type:"primary",onClick:()=>he(s,"edit")},F(a=y("exampleDemo.edit"))?a:{default:()=>[a]}),l(i,{type:"success",onClick:()=>he(s,"detail")},F(t=y("exampleDemo.detail"))?t:{default:()=>[t]}),l(i,{type:"danger",onClick:()=>_e(s)},F(r=y("exampleDemo.del"))?r:{default:()=>[r]})])}}}}]),{allSchemas:ee}=I($),ae=r({}),te=e=>{X.value=1,ae.value=e,Y()},le=r(),ie=r(""),oe=r([]);(async()=>{var e,a;const t=await k();oe.value=t.data.list,ie.value=t.data.list[0]&&(null==(e=t.data.list[0])?void 0:e.children)&&t.data.list[0].children[0].id||"",await x(),null==(a=n(le))||a.setCurrentKey(ie.value)})();const re=r("");s((()=>re.value),(e=>{n(le).filter(e)}));const se=e=>{ie.value=e.id,X.value=1,Y()},ne=(e,a)=>!e||a.departmentName.includes(e),de=r(!1),ue=r(""),me=r(),pe=r(""),ce=()=>{ue.value=y("exampleDemo.add"),me.value=void 0,de.value=!0,pe.value=""},ve=r(!1),fe=r([]),_e=async e=>{const a=await G();fe.value=e?[e.id]:(null==a?void 0:a.getSelectionRows().map((e=>e.id)))||[],ve.value=!0,await Z(n(fe).length).finally((()=>{ve.value=!1}))},he=(e,a)=>{var t;ue.value=y("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),pe.value=a,me.value={...e,department:(null==(t=n(le))?void 0:t.getCurrentNode())||{}},de.value=!0},ge=r(),ye=r(!1),je=async()=>{const e=n(ge),a=await(null==e?void 0:e.submit());if(a){ye.value=!0;try{await P(a)&&(X.value=1,Y())}catch(t){}finally{ye.value=!1,de.value=!1}}};return(a,t)=>(d(),u("div",U,[l(n(e),{class:"w-250px"},{default:m((()=>[p("div",A,[p("div",L,c(n(y)("userDemo.departmentList")),1),l(n(v),{modelValue:re.value,"onUpdate:modelValue":t[0]||(t[0]=e=>re.value=e),class:"flex-[2]",placeholder:n(y)("userDemo.searchDepartment"),clearable:""},null,8,["modelValue","placeholder"])]),l(n(D)),l(n(w),{ref_key:"treeEl",ref:le,data:oe.value,"default-expand-all":"","expand-on-click-node":!1,"node-key":"id","current-node-key":ie.value,props:{label:"departmentName"},"filter-node-method":ne,onCurrentChange:se},{default:m((({data:e})=>[p("div",{title:e.departmentName,class:"whitespace-nowrap overflow-ellipsis overflow-hidden"},c(e.departmentName),9,O)])),_:1},8,["data","current-node-key"])])),_:1}),l(n(e),{class:"flex-[3] ml-20px"},{default:m((()=>[l(n(E),{schema:n(ee).searchSchema,onReset:te,onSearch:te},null,8,["schema"]),p("div",q,[l(n(i),{type:"primary",onClick:ce},{default:m((()=>[f(c(n(y)("exampleDemo.add")),1)])),_:1}),l(n(i),{loading:ve.value,type:"danger",onClick:t[1]||(t[1]=e=>_e())},{default:m((()=>[f(c(n(y)("exampleDemo.del")),1)])),_:1},8,["loading"])]),l(n(b),{"current-page":n(X),"onUpdate:currentPage":t[2]||(t[2]=e=>_(X)?X.value=e:null),"page-size":n(W),"onUpdate:pageSize":t[3]||(t[3]=e=>_(W)?W.value=e:null),columns:n(ee).tableColumns,data:n(Q),loading:n(M),onRegister:n(K),pagination:{total:n(J)}},null,8,["current-page","page-size","columns","data","loading","onRegister","pagination"])])),_:1}),l(n(z),{modelValue:de.value,"onUpdate:modelValue":t[5]||(t[5]=e=>de.value=e),title:ue.value},{footer:m((()=>["detail"!==pe.value?(d(),h(n(i),{key:0,type:"primary",loading:ye.value,onClick:je},{default:m((()=>[f(c(n(y)("exampleDemo.save")),1)])),_:1},8,["loading"])):g("",!0),l(n(i),{onClick:t[4]||(t[4]=e=>de.value=!1)},{default:m((()=>[f(c(n(y)("dialogDemo.close")),1)])),_:1})])),default:m((()=>["detail"!==pe.value?(d(),h(R,{key:0,ref_key:"writeRef",ref:ge,"form-schema":n(ee).formSchema,"current-row":me.value},null,8,["form-schema","current-row"])):g("",!0),"detail"===pe.value?(d(),h(V,{key:1,"detail-schema":n(ee).detailSchema,"current-row":me.value},null,8,["detail-schema","current-row"])):g("",!0)])),_:1},8,["modelValue","title"])]))}});export{K as default};
