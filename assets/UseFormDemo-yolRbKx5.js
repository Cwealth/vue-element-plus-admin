import{F as e}from"./Form-qHN5jLzI.js";import{_ as l}from"./ContentWrap.vue_vue_type_script_setup_true_lang-C8OqzOo4.js";import{d as o,q as t,r as a,A as i,o as m,c as r,e as n,w as s,B as d,t as f,a as p,F as u,k as c,_ as v}from"./index-eSpxw_vp.js";import{u as b}from"./useForm-e10k02TE.js";import{u as _}from"./useValidator-TXxFGpxA.js";import{g as D}from"./index-_FuFodq-.js";import"./el-col-LZQDlIpP.js";import"./el-popper-91frVHb8.js";import"./el-tag-Do1-nv_E.js";import"./el-checkbox-oRJQwT1M.js";import"./isEqual-Bxp9iv1k.js";import"./el-input-number-nwqu7hfo.js";import"./el-pagination-mBAFjqHV.js";import"./debounce-K6Jkat9n.js";import"./el-divider-oi0jSUC0.js";import"./el-tree-Z0yalS8H.js";import"./index-DlTB2MLl.js";import"./InputPassword-Tu548cez.js";import"./style.css_vue_type_style_index_0_src_true_lang-L8D3BiAP.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-N5uTE9Er.js";import"./IconPicker-t4J9CNDM.js";import"./tsxHelper-gjhabaev.js";import"./el-card-K3AWCymr.js";const h=v(o({__name:"UseFormDemo",setup(o){const{required:v}=_(),{t:h}=c(),k=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],j=t([{field:"field1",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[v()]}},{field:"field2",label:h("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]},formItemProps:{rules:[v()]}},{field:"field3",label:h("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:h("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:h("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:h("formDemo.timeSelect")},{field:"field7",label:`${h("formDemo.treeSelect")}`,component:"TreeSelect",optionApi:async()=>await new Promise((e=>{setTimeout((()=>{e(k)}),3e3)}))}]),{formRegister:C,formMethods:g}=b(),{setProps:w,delSchema:y,addSchema:$,setValues:P,setSchema:x,getComponentExpose:L,getFormItemExpose:F,getElFormExpose:I}=g,S=e=>{w({labelWidth:e})},E=e=>{w({size:e})},V=e=>{w({disabled:e})},R=e=>{e?y("field2"):e||"field2"===j[1].field||$({field:"field2",label:h("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},q=async e=>{const l=await I();e?null==l||l.resetFields():P({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},z=a(7),W=()=>{x([{field:"field2",path:"label",value:`${h("formDemo.select")} ${z.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),z.value++},B=()=>{p(z)%2==0?$({field:`field${p(z)}`,label:`${h("formDemo.input")}${p(z)}`,component:"Input"}):$({field:`field${p(z)}`,label:`${h("formDemo.input")}${p(z)}`,component:"Input"},p(z)),z.value++},T=async()=>{const e=await I();null==e||e.validate((e=>{}))},U=async()=>{const e=await I();null==e||e.resetFields()},A=async()=>{const e=await D();e&&x([{field:"field2",path:"componentProps.options",value:e.data}])},G=async()=>{const e=await L("field1");null==e||e.focus()},H=async()=>{const e=await F("field1"),l=await L("field1");null==l||l.focus(),null==e||e.validate("focus",(e=>{}))},J=(e,l,o)=>{};return(o,t)=>{const a=i("BaseButton");return m(),r(u,null,[n(p(l),{title:`UseForm ${p(h)("formDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:s((()=>[n(a,{onClick:t[0]||(t[0]=e=>S(150))},{default:s((()=>[d(f(p(h)("formDemo.change"))+" labelWidth",1)])),_:1}),n(a,{onClick:t[1]||(t[1]=e=>S("auto"))},{default:s((()=>[d(f(p(h)("formDemo.restore"))+" labelWidth",1)])),_:1}),n(a,{onClick:t[2]||(t[2]=e=>E("large"))},{default:s((()=>[d(f(p(h)("formDemo.change"))+" size",1)])),_:1}),n(a,{onClick:t[3]||(t[3]=e=>E("default"))},{default:s((()=>[d(f(p(h)("formDemo.restore"))+" size",1)])),_:1}),n(a,{onClick:t[4]||(t[4]=e=>V(!0))},{default:s((()=>[d(f(p(h)("formDemo.disabled")),1)])),_:1}),n(a,{onClick:t[5]||(t[5]=e=>V(!1))},{default:s((()=>[d(f(p(h)("formDemo.disablement")),1)])),_:1}),n(a,{onClick:t[6]||(t[6]=e=>R(!0))},{default:s((()=>[d(f(p(h)("formDemo.delete"))+" "+f(p(h)("formDemo.select")),1)])),_:1}),n(a,{onClick:t[7]||(t[7]=e=>R(!1))},{default:s((()=>[d(f(p(h)("formDemo.add"))+" "+f(p(h)("formDemo.select")),1)])),_:1}),n(a,{onClick:t[8]||(t[8]=e=>q(!1))},{default:s((()=>[d(f(p(h)("formDemo.setValue")),1)])),_:1}),n(a,{onClick:t[9]||(t[9]=e=>q(!0))},{default:s((()=>[d(f(p(h)("formDemo.resetValue")),1)])),_:1}),n(a,{onClick:W},{default:s((()=>[d(f(p(h)("formDemo.set"))+" "+f(p(h)("formDemo.select"))+" label ",1)])),_:1}),n(a,{onClick:B},{default:s((()=>[d(f(p(h)("formDemo.add"))+" "+f(p(h)("formDemo.subitem")),1)])),_:1}),n(a,{onClick:T},{default:s((()=>[d(f(p(h)("formDemo.formValidation")),1)])),_:1}),n(a,{onClick:U},{default:s((()=>[d(f(p(h)("formDemo.verifyReset")),1)])),_:1}),n(a,{onClick:A},{default:s((()=>[d(f(`${p(h)("formDemo.select")} ${p(h)("searchDemo.dynamicOptions")}`),1)])),_:1}),n(a,{onClick:G},{default:s((()=>[d(f(`${p(h)("formDemo.input")} ${p(h)("formDemo.focus")}`),1)])),_:1}),n(a,{onClick:H},{default:s((()=>[d(f(`${p(h)("formDemo.input")} ${p(h)("formDemo.formValidation")}`),1)])),_:1})])),_:1},8,["title"]),n(p(l),{title:`UseForm ${p(h)("formDemo.example")}`},{default:s((()=>[n(p(e),{schema:j,onRegister:p(C),onValidate:J},null,8,["schema","onRegister"])])),_:1},8,["title"])],64)}}}),[["__scopeId","data-v-b5d68509"]]);export{h as default};
