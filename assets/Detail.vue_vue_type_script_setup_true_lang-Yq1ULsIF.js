import{D as e}from"./Descriptions-3ASyXCbW.js";import{d as l,r as a,o as t,i as s,a as n,e as d,F as i,I as o}from"./index-eSpxw_vp.js";import{E as u}from"./el-tag-Do1-nv_E.js";const f=l({__name:"Detail",props:{currentRow:{type:Object,default:()=>{}}},setup(l){const f=e=>d(u,{type:e?"success":"danger"},{default:()=>[e?"启用":"禁用"]}),r=a([{field:"type",label:"菜单类型",span:24,slots:{default:e=>{const l=e.type;return d(i,null,[1===l?"菜单":"目录"])}}},{field:"parentName",label:"父级菜单"},{field:"meta.title",label:"菜单名称"},{field:"component",label:"组件",slots:{default:e=>{const l=e.component;return d(i,null,["#"===l?"顶级目录":"##"===l?"子目录":l])}}},{field:"name",label:"组件名称"},{field:"meta.icon",label:"图标",slots:{default:e=>{const l=e.icon;return l?d(i,null,[d(o,{icon:l},null)]):null}}},{field:"path",label:"路径"},{field:"meta.activeMenu",label:"高亮菜单"},{field:"permissionList",label:"按钮权限",span:24,slots:{default:e=>{var l;return d(i,null,[null==(l=null==e?void 0:e.permissionList)?void 0:l.map((e=>d(u,{class:"mr-1",key:e.value},{default:()=>[e.label]})))])}}},{field:"menuState",label:"菜单状态",slots:{default:e=>f(e.menuState)}},{field:"meta.hidden",label:"是否隐藏",slots:{default:e=>f(e.enableHidden)}},{field:"meta.alwaysShow",label:"是否一直显示",slots:{default:e=>f(e.enableDisplay)}},{field:"meta.noCache",label:"是否清除缓存",slots:{default:e=>f(e.enableCleanCache)}},{field:"meta.breadcrumb",label:"是否显示面包屑",slots:{default:e=>f(e.enableShowCrumb)}},{field:"meta.affix",label:"是否固定标签页",slots:{default:e=>f(e.enablePinnedTab)}},{field:"meta.noTagsView",label:"是否隐藏标签页",slots:{default:e=>f(e.enableHiddenTab)}},{field:"meta.canTo",label:"是否可跳转",slots:{default:e=>f(e.enableSkip)}}]);return(a,d)=>(t(),s(n(e),{schema:r.value,data:l.currentRow||{}},null,8,["schema","data"]))}});export{f as _};
