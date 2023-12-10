import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-C8OqzOo4.js";import{_ as o}from"./Dialog.vue_vue_type_style_index_0_lang-QM8zbDFQ.js";import{d as l,r as t,q as a,A as i,o as s,i as r,w as m,e as p,B as n,t as u,a as d,c,C as f,f as _,F as g,k as j}from"./index-eSpxw_vp.js";import{F as v}from"./Form-qHN5jLzI.js";import{u as D}from"./useValidator-TXxFGpxA.js";import{g as y}from"./index-_FuFodq-.js";import{u as b}from"./useForm-e10k02TE.js";import"./el-card-K3AWCymr.js";import"./el-popper-91frVHb8.js";import"./use-dialog-IH6ocHdA.js";import"./refs-vldc4Rdn.js";import"./el-col-LZQDlIpP.js";import"./el-tag-Do1-nv_E.js";import"./el-checkbox-oRJQwT1M.js";import"./isEqual-Bxp9iv1k.js";import"./el-input-number-nwqu7hfo.js";import"./el-pagination-mBAFjqHV.js";import"./debounce-K6Jkat9n.js";import"./el-divider-oi0jSUC0.js";import"./el-tree-Z0yalS8H.js";import"./index-DlTB2MLl.js";import"./InputPassword-Tu548cez.js";import"./style.css_vue_type_style_index_0_src_true_lang-L8D3BiAP.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-N5uTE9Er.js";import"./IconPicker-t4J9CNDM.js";import"./tsxHelper-gjhabaev.js";const k=l({__name:"Dialog",setup(l){const{required:k}=D(),{t:x}=j(),C=t(!1),h=t(!1),{formRegister:P,formMethods:V}=b(),{getElFormExpose:F}=V,w=a([{field:"field1",label:x("formDemo.input"),component:"Input",formItemProps:{rules:[k()]}},{field:"field2",label:x("formDemo.select"),component:"Select",optionApi:async()=>(await y()).data},{field:"field3",label:x("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:x("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:x("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:x("formDemo.timeSelect")}]),E=async()=>{const e=await F();null==e||e.validate((e=>{}))};return(l,t)=>{const a=i("BaseButton");return s(),r(d(e),{title:d(x)("dialogDemo.dialog"),message:d(x)("dialogDemo.dialogDes")},{default:m((()=>[p(a,{type:"primary",onClick:t[0]||(t[0]=e=>C.value=!C.value)},{default:m((()=>[n(u(d(x)("dialogDemo.open")),1)])),_:1}),p(a,{type:"primary",onClick:t[1]||(t[1]=e=>h.value=!h.value)},{default:m((()=>[n(u(d(x)("dialogDemo.combineWithForm")),1)])),_:1}),p(d(o),{modelValue:C.value,"onUpdate:modelValue":t[3]||(t[3]=e=>C.value=e),title:d(x)("dialogDemo.dialog")},{footer:m((()=>[p(a,{onClick:t[2]||(t[2]=e=>C.value=!1)},{default:m((()=>[n(u(d(x)("dialogDemo.close")),1)])),_:1})])),default:m((()=>[(s(),c(g,null,f(1e4,(e=>_("div",{key:e},u(e),1))),64))])),_:1},8,["modelValue","title"]),p(d(o),{modelValue:h.value,"onUpdate:modelValue":t[5]||(t[5]=e=>h.value=e),title:d(x)("dialogDemo.dialog")},{footer:m((()=>[p(a,{type:"primary",onClick:E},{default:m((()=>[n(u(d(x)("dialogDemo.submit")),1)])),_:1}),p(a,{onClick:t[4]||(t[4]=e=>h.value=!1)},{default:m((()=>[n(u(d(x)("dialogDemo.close")),1)])),_:1})])),default:m((()=>[p(d(v),{schema:w,onRegister:d(P)},null,8,["schema","onRegister"])])),_:1},8,["modelValue","title"])])),_:1},8,["title","message"])}}});export{k as default};
