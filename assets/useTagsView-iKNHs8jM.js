import{dI as e,u as l,x as t,a as s,R as a}from"./index-SLBLGd9V.js";const r=()=>{const r=e(),{replace:i,currentRoute:n}=l(),u=t((()=>r.getSelectedTag));return{closeAll:e=>{r.delAllViews(),null==e||e()},closeLeft:e=>{r.delLeftViews(s(u)),null==e||e()},closeRight:e=>{r.delRightViews(s(u)),null==e||e()},closeOther:e=>{r.delOthersViews(s(u)),null==e||e()},closeCurrent:(e,l)=>{var t;(null==(t=null==e?void 0:e.meta)?void 0:t.affix)||(r.delView(e||s(n)),null==l||l())},refreshPage:async(e,l)=>{r.delCachedView();const{path:t,query:u}=e||s(n);await a(),i({path:"/redirect"+t,query:u}),null==l||l()},setTitle:(e,l)=>{r.setTitle(e,l)}}};export{r as u};
