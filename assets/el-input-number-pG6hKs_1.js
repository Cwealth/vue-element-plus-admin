import{az as e,al as a,b2 as t,bc as n,aP as l,aO as r,bu as u,aN as s,d as i,b3 as o,as as d,r as m,q as c,b4 as b,x as p,bb as v,ar as N,aT as f,Q as y,G as h,aD as I,o as V,c as g,a2 as x,a as S,n as w,aX as E,e as A,w as F,ba as k,i as K,cM as M,M as T,V as _,b9 as B,cN as O,aW as z,J as C,ay as P,aC as $,ap as D,at as G,aK as L}from"./index-SLBLGd9V.js";const W=100,Y=600,j={beforeMount(a,t){const n=t.value,{interval:l=W,delay:r=Y}=e(n)?{}:n;let u,s;const i=()=>e(n)?n():n.handler(),o=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(o(),i(),document.addEventListener("mouseup",(()=>o()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{i()}),l)}),r))}))}},q=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:t,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||n(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),J={[l]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[r]:e=>n(e)||u(e),[s]:e=>n(e)||u(e)},Q=["aria-label","onKeydown"],X=["aria-label","onKeydown"],H=i({name:"ElInputNumber"});const R=L(P(i({...H,props:q,emits:J,setup(e,{expose:a,emit:t}){const i=e,{t:P}=o(),L=d("input-number"),W=m(),Y=c({currentValue:i.modelValue,userInput:null}),{formItem:q}=b(),J=p((()=>n(i.modelValue)&&i.modelValue<=i.min)),H=p((()=>n(i.modelValue)&&i.modelValue>=i.max)),R=p((()=>{const e=ne(i.step);return v(i.precision)?Math.max(ne(i.modelValue),e):(i.precision,i.precision)})),U=p((()=>i.controls&&"right"===i.controlsPosition)),Z=N(),ee=f(),ae=p((()=>{if(null!==Y.userInput)return Y.userInput;let e=Y.currentValue;if(u(e))return"";if(n(e)){if(Number.isNaN(e))return"";v(i.precision)||(e=e.toFixed(i.precision))}return e})),te=(e,a)=>{if(v(a)&&(a=R.value),0===a)return Math.round(e);let t=String(e);const n=t.indexOf(".");if(-1===n)return e;if(!t.replace(".","").split("")[n+a])return e;const l=t.length;return"5"===t.charAt(l-1)&&(t=`${t.slice(0,Math.max(0,l-1))}6`),Number.parseFloat(Number(t).toFixed(a))},ne=e=>{if(u(e))return 0;const a=e.toString(),t=a.indexOf(".");let n=0;return-1!==t&&(n=a.length-t-1),n},le=(e,a=1)=>n(e)?te(e+i.step*a):Y.currentValue,re=()=>{if(i.readonly||ee.value||H.value)return;const e=Number(ae.value)||0,a=le(e);ie(a),t(r,Y.currentValue)},ue=()=>{if(i.readonly||ee.value||J.value)return;const e=Number(ae.value)||0,a=le(e,-1);ie(a),t(r,Y.currentValue)},se=(e,a)=>{const{max:n,min:l,step:r,precision:o,stepStrictly:d,valueOnClear:m}=i;n<l&&$("InputNumber","min should not be greater than max.");let c=Number(e);if(u(e)||Number.isNaN(c))return null;if(""===e){if(null===m)return null;c=D(m)?{min:l,max:n}[m]:m}return d&&(c=te(Math.round(c/r)*r,o)),v(o)||(c=te(c,o)),(c>n||c<l)&&(c=c>n?n:l,a&&t(s,c)),c},ie=(e,a=!0)=>{var n;const r=Y.currentValue,u=se(e);a?r!==u&&(Y.userInput=null,t(s,u),t(l,u,r),i.validateEvent&&(null==(n=null==q?void 0:q.validate)||n.call(q,"change").catch((e=>G()))),Y.currentValue=u):t(s,u)},oe=e=>{Y.userInput=e;const a=""===e?null:Number(e);t(r,a),ie(a,!1)},de=e=>{const a=""!==e?Number(e):"";(n(a)&&!Number.isNaN(a)||""===e)&&ie(a),Y.userInput=null},me=e=>{t("focus",e)},ce=e=>{var a;t("blur",e),i.validateEvent&&(null==(a=null==q?void 0:q.validate)||a.call(q,"blur").catch((e=>G())))};return y((()=>i.modelValue),(e=>{const a=se(Y.userInput),t=se(e,!0);n(a)||a&&a===t||(Y.currentValue=t,Y.userInput=null)}),{immediate:!0}),h((()=>{var e;const{min:a,max:l,modelValue:r}=i,u=null==(e=W.value)?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(l)?u.setAttribute("aria-valuemax",String(l)):u.removeAttribute("aria-valuemax"),Number.isFinite(a)?u.setAttribute("aria-valuemin",String(a)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",Y.currentValue||0===Y.currentValue?String(Y.currentValue):""),u.setAttribute("aria-disabled",String(ee.value)),!n(r)&&null!=r){let e=Number(r);Number.isNaN(e)&&(e=null),t(s,e)}})),I((()=>{var e,a;const t=null==(e=W.value)?void 0:e.input;null==t||t.setAttribute("aria-valuenow",`${null!=(a=Y.currentValue)?a:""}`)})),a({focus:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(V(),g("div",{class:w([S(L).b(),S(L).m(S(Z)),S(L).is("disabled",S(ee)),S(L).is("without-controls",!e.controls),S(L).is("controls-right",S(U))]),onDragstart:a[1]||(a[1]=z((()=>{}),["prevent"]))},[e.controls?x((V(),g("span",{key:0,role:"button","aria-label":S(P)("el.inputNumber.decrease"),class:w([S(L).e("decrease"),S(L).is("disabled",S(J))]),onKeydown:E(ue,["enter"])},[A(S(T),null,{default:F((()=>[S(U)?(V(),K(S(k),{key:0})):(V(),K(S(M),{key:1}))])),_:1})],42,Q)),[[S(j),ue]]):_("v-if",!0),e.controls?x((V(),g("span",{key:1,role:"button","aria-label":S(P)("el.inputNumber.increase"),class:w([S(L).e("increase"),S(L).is("disabled",S(H))]),onKeydown:E(re,["enter"])},[A(S(T),null,{default:F((()=>[S(U)?(V(),K(S(B),{key:0})):(V(),K(S(O),{key:1}))])),_:1})],42,X)),[[S(j),re]]):_("v-if",!0),A(S(C),{id:e.id,ref_key:"input",ref:W,type:"number",step:e.step,"model-value":S(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:S(ee),size:S(Z),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=z((()=>{}),["prevent"])),onKeydown:[E(z(re,["prevent"]),["up"]),E(z(ue,["prevent"]),["down"])],onBlur:ce,onFocus:me,onInput:oe,onChange:de},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{R as E,j as v};
