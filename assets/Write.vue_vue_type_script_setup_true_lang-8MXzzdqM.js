import{F as e}from"./Form-qHN5jLzI.js";import{u as t}from"./useForm-e10k02TE.js";import{u as a}from"./useValidator-TXxFGpxA.js";import{d as r,q as s,Q as o,o as i,i as m,a as u}from"./index-eSpxw_vp.js";const n=r({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(r,{expose:n}){const{required:l}=a(),p=r,c=s({title:[l()],author:[l()],importance:[l()],pageviews:[l()],display_time:[l()],content:[l()]}),{formRegister:d,formMethods:f}=t(),{setValues:g,getFormData:h,getElFormExpose:w}=f;return o((()=>p.currentRow),(e=>{e&&g(e)}),{deep:!0,immediate:!0}),n({submit:async()=>{const e=await w();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await h()}}}),(t,a)=>(i(),m(u(e),{rules:c,onRegister:u(d),schema:r.formSchema},null,8,["rules","onRegister","schema"]))}});export{n as _};
