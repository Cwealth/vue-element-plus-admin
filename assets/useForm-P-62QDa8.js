import{r as e,cd as a,ce as t,a as s,R as n}from"./index-SLBLGd9V.js";const o=()=>{const o=e(),c=e(),l=async()=>{await n();const e=s(o);return e};return{formRegister:(e,a)=>{o.value=e,c.value=a},formMethods:{setProps:async(e={})=>{const a=await l();null==a||a.setProps(e),e.model&&(null==a||a.setValues(e.model))},setValues:async e=>{const a=await l();null==a||a.setValues(e)},setSchema:async e=>{const a=await l();null==a||a.setSchema(e)},addSchema:async(e,a)=>{const t=await l();null==t||t.addSchema(e,a)},delSchema:async e=>{const a=await l();null==a||a.delSchema(e)},getFormData:async(e=!0)=>{const s=await l(),n=null==s?void 0:s.formModel;return e?Object.keys(n).reduce(((e,s)=>{const o=n[s];return a(o)||(t(o)?Object.keys(o).length>0&&(e[s]=o):e[s]=o),e}),{}):n},getComponentExpose:async e=>{const a=await l();return null==a?void 0:a.getComponentExpose(e)},getFormItemExpose:async e=>{const a=await l();return null==a?void 0:a.getFormItemExpose(e)},getElFormExpose:async()=>(await l(),s(c)),getFormExpose:async()=>(await l(),s(o))}}};export{o as u};
