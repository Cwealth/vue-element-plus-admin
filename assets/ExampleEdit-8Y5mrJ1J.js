import{_ as e}from"./Write.vue_vue_type_script_setup_true_lang-uiVfmvNl.js";import{_ as t}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-3_Bze1dd.js";import{d as s,u as r,dH as a,r as i,A as o,o as p,i as l,w as m,e as u,B as n,t as _,a as c,k as d}from"./index-SLBLGd9V.js";import{c as j,s as v}from"./index-DbFa88V8.js";import{u as f}from"./useEmitt-TFPRKdA_.js";import"./Form-DFiLZ-eA.js";import"./el-col-woFoQPkF.js";import"./el-popper-bilUBKzH.js";import"./el-tag-tB5qNfCm.js";import"./el-checkbox-xSKL3mKa.js";import"./isEqual-nyivIzMj.js";import"./el-input-number-pG6hKs_1.js";import"./el-pagination-zu8i6FbG.js";import"./debounce-LO_gwpwV.js";import"./el-divider-qu7TnNkw.js";import"./el-tree-0cPDuv_Q.js";import"./index--GBQOReU.js";import"./InputPassword-scsbb5uG.js";import"./style.css_vue_type_style_index_0_src_true_lang-U1HHlOIA.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DNiZFS8h.js";import"./IconPicker-VplWRTVs.js";import"./tsxHelper-bs_iKASh.js";import"./useForm-P-62QDa8.js";import"./useValidator-1DdjF_MS.js";import"./el-card-sKcKiu2J.js";const x=s({__name:"ExampleEdit",setup(s){const{emitter:x}=f(),{push:y,go:g}=r(),{query:k}=a(),{t:w}=d(),E=i(null);(async()=>{const e=await j(k.id);e&&(E.value=e.data)})();const b=i(),h=i(!1),B=async()=>{const e=c(b),t=await(null==e?void 0:e.submit());if(t){h.value=!0;await v(t).catch((()=>{})).finally((()=>{h.value=!1}))&&(x.emit("getList","editor"),y("/example/example-page"))}};return(s,r)=>{const a=o("BaseButton");return p(),l(c(t),{title:c(w)("exampleDemo.edit"),onBack:r[1]||(r[1]=e=>c(y)("/example/example-page"))},{header:m((()=>[u(a,{onClick:r[0]||(r[0]=e=>c(g)(-1))},{default:m((()=>[n(_(c(w)("common.back")),1)])),_:1}),u(a,{type:"primary",loading:h.value,onClick:B},{default:m((()=>[n(_(c(w)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:m((()=>[u(e,{ref_key:"writeRef",ref:b,"current-row":E.value},null,8,["current-row"])])),_:1},8,["title"])}}});export{x as default};
