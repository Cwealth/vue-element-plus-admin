import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-C8OqzOo4.js";import{z as t,d as a,r as u,A as r,o as s,i as l,w as i,f as c,t as q,e as n,B as d,a as o,k as v}from"./index-eSpxw_vp.js";import{E as p}from"./el-divider-oi0jSUC0.js";import"./el-card-K3AWCymr.js";import"./el-popper-91frVHb8.js";const y=a({__name:"Request",setup(a){const{t:y}=v(),f=u(new Set),m=async()=>{if(!f.value.has("/request/1"))try{f.value.add("/request/1");await t.get({url:"/mock/request/1"})}catch(e){}finally{f.value.delete("/request/1")}},_=async()=>{if(!f.value.has("/request/2"))try{f.value.add("/request/2");await t.get({url:"/mock/request/2"})}catch(e){}finally{f.value.delete("/request/2")}},h=async()=>{if(!f.value.has("/request/3"))try{f.value.add("/request/3");await t.get({url:"/mock/request/3"})}catch(e){}finally{f.value.delete("/request/3")}},k=async()=>{if(!f.value.has("/request/4"))try{f.value.add("/request/4");await t.get({url:"/mock/request/4"})}catch(e){}finally{f.value.delete("/request/4")}},C=async()=>{if(!f.value.has("/request/5"))try{f.value.add("/request/5");await t.get({url:"/mock/request/5"})}catch(e){}finally{f.value.delete("/request/5")}},g=()=>{m(),_(),h(),k(),C()},w=()=>{t.cancelAllRequest(),f.value.clear()},R=e=>{const t=[];return e.forEach((e=>{t.push(e)})),t},j=()=>{if(f.value.has("/request/1"))return t.cancelRequest("/request/1"),void f.value.delete("/request/1");m()},x=()=>{if(f.value.has("/request/2"))return t.cancelRequest("/request/2"),void f.value.delete("/request/2");_()},B=()=>{if(f.value.has("/request/3"))return t.cancelRequest("/request/3"),void f.value.delete("/request/3");h()},E=()=>{if(f.value.has("/request/4"))return t.cancelRequest("/request/4"),void f.value.delete("/request/4");k()},A=()=>{if(f.value.has("/request/5"))return t.cancelRequest("/request/5"),void f.value.delete("/request/5");C()},z=()=>{t.get({url:"/mock/request/expired"})};return(t,a)=>{const u=r("BaseButton");return s(),l(o(e),{title:o(y)("router.request")},{default:i((()=>[c("p",null,"正在请求的接口："+q(R(f.value)),1),n(u,{type:"primary",onClick:j},{default:i((()=>[d("请求/取消request1")])),_:1}),n(u,{type:"primary",onClick:x},{default:i((()=>[d("请求/取消request2")])),_:1}),n(u,{type:"primary",onClick:B},{default:i((()=>[d("请求/取消request3")])),_:1}),n(u,{type:"primary",onClick:E},{default:i((()=>[d("请求/取消request4")])),_:1}),n(u,{type:"primary",onClick:A},{default:i((()=>[d("请求/取消request5")])),_:1}),n(u,{type:"primary",onClick:g},{default:i((()=>[d("发送五个请求")])),_:1}),n(u,{type:"primary",onClick:w},{default:i((()=>[d("关闭所有请求")])),_:1}),n(o(p)),n(u,{type:"primary",onClick:z},{default:i((()=>[d("token过期")])),_:1})])),_:1},8,["title"])}}});export{y as default};
