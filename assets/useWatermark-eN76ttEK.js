import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-C8OqzOo4.js";import{d as t,b as a,x as n,Y as r,A as o,o as s,i as l,w as i,e as m,B as d,t as c,a as u,k as p}from"./index-eSpxw_vp.js";import"./el-card-K3AWCymr.js";import"./el-popper-91frVHb8.js";const k=Symbol("watermark-dom");const y=t({__name:"useWatermark",setup(t){const y=a(),g=n((()=>y.getTitle)),{setWatermark:f,clear:h}=function(e=document.body){let t=()=>{};const a=k.toString(),n=()=>{const n=document.getElementById(a);n&&e&&e.removeChild(n),window.removeEventListener("resize",t)},r=t=>{n();const r=document.createElement("canvas");r.width=300,r.height=240;const o=r.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r.width/20,r.height));const s=document.createElement("div");return s.id=a,s.style.pointerEvents="none",s.style.top="0px",s.style.left="0px",s.style.position="absolute",s.style.zIndex="100000000",s.style.width=document.documentElement.clientWidth+"px",s.style.height=document.documentElement.clientHeight+"px",s.style.background="url("+r.toDataURL("image/png")+") left top repeat",e&&e.appendChild(s),a};return{setWatermark:function(e){r(e),t=()=>{r(e)},window.addEventListener("resize",t)},clear:n}}(),{t:w}=p();return r((()=>{h()})),(t,a)=>{const n=o("BaseButton");return s(),l(u(e),{title:"useWatermark"},{default:i((()=>[m(n,{type:"primary",onClick:a[0]||(a[0]=e=>u(f)(g.value))},{default:i((()=>[d(c(u(w)("watermarkDemo.createdWatermark")),1)])),_:1}),m(n,{type:"danger",onClick:u(h)},{default:i((()=>[d(c(u(w)("watermarkDemo.clearWatermark")),1)])),_:1},8,["onClick"]),m(n,{type:"warning",onClick:a[1]||(a[1]=e=>u(f)(`New${g.value}`))},{default:i((()=>[d(c(u(w)("watermarkDemo.resetWatermark")),1)])),_:1})])),_:1})}}});export{y as default};
