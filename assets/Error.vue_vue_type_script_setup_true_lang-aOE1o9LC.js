import{d as r,S as e,A as s,o as t,c as o,f as a,t as n,e as i,w as l,k as u,B as c}from"./index-SLBLGd9V.js";const m={class:"flex justify-center"},p={class:"text-center"},x=["src"],d={class:"text-14px text-[var(--el-color-info)]"},g={class:"mt-20px"},v=r({__name:"Error",props:{type:e.string.validate((r=>["404","500","403"].includes(r))).def("404")},emits:["errorClick"],setup(r,{emit:e}){const{t:v}=u(),y={404:{url:"/assets/404-dycj3xGl.svg",message:v("error.pageError"),buttonText:v("error.returnToHome")},500:{url:"/assets/500-ARrvH3Ug.svg",message:v("error.networkError"),buttonText:v("error.returnToHome")},403:{url:"/assets/403-EanqjtfQ.svg",message:v("error.noPermission"),buttonText:v("error.returnToHome")}},f=r,T=e,k=()=>{T("errorClick",f.type)};return(e,u)=>{const v=s("BaseButton");return t(),o("div",m,[a("div",p,[a("img",{width:"350",src:y[r.type].url,alt:""},null,8,x),a("div",d,n(y[r.type].message),1),a("div",g,[i(v,{type:"primary",onClick:k},{default:l((()=>[c(n(y[r.type].buttonText),1)])),_:1})])])])}}});export{v as _};
