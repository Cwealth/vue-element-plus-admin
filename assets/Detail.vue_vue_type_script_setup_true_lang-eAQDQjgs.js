import{D as e}from"./Descriptions-3ASyXCbW.js";import{d as l,r as a,o as t,i as s,a as r,R as i,e as o,F as n,O as u,c7 as d}from"./index-eSpxw_vp.js";import{E as c}from"./el-tag-Do1-nv_E.js";import{E as p}from"./el-tree-Z0yalS8H.js";import"./el-checkbox-oRJQwT1M.js";import{g as m}from"./index-FkSHP8c5.js";const f=l({__name:"Detail",props:{currentRow:{type:Object,default:()=>{}}},setup(l){const f=a(),v=a(),b=e=>{v.value=e},j=a([]);(async()=>{const e=await m();e&&(j.value=e.data.list,await i())})();const h=a([{field:"roleName",label:"角色名称"},{field:"status",label:"状态",slots:{default:e=>{return l=e.status,o(c,{type:l?"success":"danger"},{default:()=>[l?"启用":"禁用"]});var l}}},{field:"remark",label:"备注",span:24},{field:"permissionList",label:"菜单分配",span:24,slots:{default:()=>{var e,l,a;return o(n,null,[o("div",{class:"flex w-full"},[o("div",{class:"flex-1"},[o(p,{ref:f,"node-key":"id",props:{children:"children",label:"title"},"highlight-current":!0,"expand-on-click-node":!1,data:j.value,"onNode-click":b},{default:e=>{var l;return o("span",null,[null==(l=null==e?void 0:e.data)?void 0:l.title])}})]),o("div",{class:"flex-1"},[r(v)?null==(a=null==(l=null==(e=r(v))?void 0:e.meta)?void 0:l.permission)?void 0:a.map((e=>{let l;return o(c,{class:"ml-2 mt-2"},(a=l=(e=>{var l,a;const t=d((null==(l=r(v))?void 0:l.permissionList)||[],(l=>l.value===e));return((null==(a=r(v))?void 0:a.permissionList)||[])[t].label??""})(e),"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!u(a)?l:{default:()=>[l]}));var a})):null])])])}}}]);return(a,i)=>(t(),s(r(e),{schema:h.value,data:l.currentRow||{}},null,8,["schema","data"]))}});export{f as _};
