import{al as e,bK as s,d as a,as as n,x as i,o as l,c as t,i as o,w as d,a3 as r,a as c,M as f,V as u,n as p,ax as k,ay as y,aK as m}from"./index-SLBLGd9V.js";const b=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:s}}),v={click:e=>e instanceof MouseEvent},h=["href"],g=a({name:"ElLink"});const x=m(y(a({...g,props:b,emits:v,setup(e,{emit:s}){const a=e,y=n("link"),m=i((()=>[y.b(),y.m(a.type),y.is("disabled",a.disabled),y.is("underline",a.underline&&!a.disabled)]));function b(e){a.disabled||s("click",e)}return(e,s)=>(l(),t("a",{class:p(c(m)),href:e.disabled||!e.href?void 0:e.href,onClick:b},[e.icon?(l(),o(c(f),{key:0},{default:d((()=>[(l(),o(r(e.icon)))])),_:1})):u("v-if",!0),e.$slots.default?(l(),t("span",{key:1,class:p(c(y).e("inner"))},[k(e.$slots,"default")],2)):u("v-if",!0),e.$slots.icon?k(e.$slots,"icon",{key:2}):u("v-if",!0)],10,h))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{x as E};
