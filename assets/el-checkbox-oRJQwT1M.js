import{c8 as e,c9 as a,ca as l,cb as n,b2 as o,aN as t,ap as s,bc as i,aq as u,aA as d,x as r,bb as c,aT as b,b4 as v,bh as m,Q as h,at as p,R as k,r as x,ao as f,aQ as g,bS as C,ar as y,bu as L,be as B,d as S,aF as E,as as I,o as F,i as w,w as z,a as V,n as N,P as D,aW as _,c as O,cc as $,a2 as G,f as R,ax as U,F as j,t as A,B as q,V as K,a3 as P,ay as Q,$ as M,al as T,an as W,au as H,av as J,aK as X,aL as Y}from"./index-eSpxw_vp.js";import{h as Z,i as ee}from"./isEqual-Bxp9iv1k.js";function ae(n,o){return function(n,o,t){for(var s=-1,i=o.length,u={};++s<i;){var d=o[s],r=e(n,d);t(r,d)&&a(u,l(d,n),r)}return u}(n,o,(function(e,a){return Z(n,a)}))}const le=n((function(e,a){return null==e?{}:ae(e,a)})),ne={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:o,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},oe={[t]:e=>s(e)||i(e)||u(e),change:e=>s(e)||i(e)||u(e)},te=Symbol("checkboxGroupContextKey"),se=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:o,isLabeledByFormItem:t})=>{const s=d(te,void 0),{formItem:i}=v(),{emit:u}=m();function c(a){var l,n;return a===e.trueLabel||!0===a?null==(l=e.trueLabel)||l:null!=(n=e.falseLabel)&&n}const b=r((()=>(null==s?void 0:s.validateEvent)||e.validateEvent));return h((()=>e.modelValue),(()=>{b.value&&(null==i||i.validate("change").catch((e=>p())))})),{handleChange:function(e){if(l.value)return;const a=e.target;u("change",c(a.checked),e)},onClickRoot:async function(s){if(!l.value&&!n.value&&!o.value&&t.value){s.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=c([!1,e.falseLabel].includes(a.value)),await k(),function(e,a){u("change",c(e),a)}(a.value,s))}}}},ie=(e,a)=>{const{formItem:l}=v(),{model:n,isGroup:o,isLimitExceeded:s}=(e=>{const a=x(!1),{emit:l}=m(),n=d(te,void 0),o=r((()=>!1===c(n))),s=x(!1);return{model:r({get(){var l,t;return o.value?null==(l=null==n?void 0:n.modelValue)?void 0:l.value:null!=(t=e.modelValue)?t:a.value},set(e){var i,u;o.value&&f(e)?(s.value=void 0!==(null==(i=null==n?void 0:n.max)?void 0:i.value)&&e.length>(null==n?void 0:n.max.value),!1===s.value&&(null==(u=null==n?void 0:n.changeEvent)||u.call(n,e))):(l(t,e),a.value=e)}}),isGroup:o,isLimitExceeded:s}})(e),{isFocused:i,isChecked:h,checkboxButtonSize:p,checkboxSize:k,hasOwnLabel:S}=((e,a,{model:l})=>{const n=d(te,void 0),o=x(!1),t=r((()=>{const a=l.value;return u(a)?a:f(a)?g(e.label)?a.map(C).some((a=>ee(a,e.label))):a.map(C).includes(e.label):null!=a?a===e.trueLabel:!!a}));return{checkboxButtonSize:y(r((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:t,isFocused:o,checkboxSize:y(r((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:r((()=>!!a.default||!L(e.label)))}})(e,a,{model:n}),{isDisabled:E}=(({model:e,isChecked:a})=>{const l=d(te,void 0),n=r((()=>{var n,o;const t=null==(n=null==l?void 0:l.max)?void 0:n.value,s=null==(o=null==l?void 0:l.min)?void 0:o.value;return!c(t)&&e.value.length>=t&&!a.value||!c(s)&&e.value.length<=s&&a.value}));return{isDisabled:b(r((()=>(null==l?void 0:l.disabled.value)||n.value))),isLimitDisabled:n}})({model:n,isChecked:h}),{inputId:I,isLabeledByFormItem:F}=B(e,{formItemContext:l,disableIdGeneration:S,disableIdManagement:o}),{handleChange:w,onClickRoot:z}=se(e,{model:n,isLimitExceeded:s,hasOwnLabel:S,isDisabled:E,isLabeledByFormItem:F});return((e,{model:a})=>{e.checked&&(f(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:n}),{inputId:I,isLabeledByFormItem:F,isChecked:h,isDisabled:E,isFocused:i,checkboxButtonSize:p,checkboxSize:k,hasOwnLabel:S,model:n,handleChange:w,onClickRoot:z}},ue=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],de=["id","indeterminate","disabled","value","name","tabindex"],re=S({name:"ElCheckbox"});var ce=Q(S({...re,props:ne,emits:oe,setup(e){const a=e,l=E(),{inputId:n,isLabeledByFormItem:o,isChecked:t,isDisabled:s,isFocused:i,checkboxSize:u,hasOwnLabel:d,model:c,handleChange:b,onClickRoot:v}=ie(a,l),m=I("checkbox"),h=r((()=>[m.b(),m.m(u.value),m.is("disabled",s.value),m.is("bordered",a.border),m.is("checked",t.value)])),p=r((()=>[m.e("input"),m.is("disabled",s.value),m.is("checked",t.value),m.is("indeterminate",a.indeterminate),m.is("focus",i.value)]));return(e,a)=>(F(),w(P(!V(d)&&V(o)?"span":"label"),{class:N(V(h)),"aria-controls":e.indeterminate?e.controls:null,onClick:V(v)},{default:z((()=>[R("span",{class:N(V(p))},[e.trueLabel||e.falseLabel?G((F(),O("input",{key:0,id:V(n),"onUpdate:modelValue":a[0]||(a[0]=e=>D(c)?c.value=e:null),class:N(V(m).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:V(s),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>V(b)&&V(b)(...e)),onFocus:a[2]||(a[2]=e=>i.value=!0),onBlur:a[3]||(a[3]=e=>i.value=!1),onClick:a[4]||(a[4]=_((()=>{}),["stop"]))},null,42,ue)),[[$,V(c)]]):G((F(),O("input",{key:1,id:V(n),"onUpdate:modelValue":a[5]||(a[5]=e=>D(c)?c.value=e:null),class:N(V(m).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:V(s),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[6]||(a[6]=(...e)=>V(b)&&V(b)(...e)),onFocus:a[7]||(a[7]=e=>i.value=!0),onBlur:a[8]||(a[8]=e=>i.value=!1),onClick:a[9]||(a[9]=_((()=>{}),["stop"]))},null,42,de)),[[$,V(c)]]),R("span",{class:N(V(m).e("inner"))},null,2)],2),V(d)?(F(),O("span",{key:0,class:N(V(m).e("label"))},[U(e.$slots,"default"),e.$slots.default?K("v-if",!0):(F(),O(j,{key:0},[q(A(e.label),1)],64))],2)):K("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const be=["name","tabindex","disabled","true-value","false-value"],ve=["name","tabindex","disabled","value"],me=S({name:"ElCheckboxButton"});var he=Q(S({...me,props:ne,emits:oe,setup(e){const a=e,l=E(),{isFocused:n,isChecked:o,isDisabled:t,checkboxButtonSize:s,model:i,handleChange:u}=ie(a,l),c=d(te,void 0),b=I("checkbox"),v=r((()=>{var e,a,l,n;const o=null!=(a=null==(e=null==c?void 0:c.fill)?void 0:e.value)?a:"";return{backgroundColor:o,borderColor:o,color:null!=(n=null==(l=null==c?void 0:c.textColor)?void 0:l.value)?n:"",boxShadow:o?`-1px 0 0 0 ${o}`:void 0}})),m=r((()=>[b.b("button"),b.bm("button",s.value),b.is("disabled",t.value),b.is("checked",o.value),b.is("focus",n.value)]));return(e,a)=>(F(),O("label",{class:N(V(m))},[e.trueLabel||e.falseLabel?G((F(),O("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>D(i)?i.value=e:null),class:N(V(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:V(t),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>V(u)&&V(u)(...e)),onFocus:a[2]||(a[2]=e=>n.value=!0),onBlur:a[3]||(a[3]=e=>n.value=!1),onClick:a[4]||(a[4]=_((()=>{}),["stop"]))},null,42,be)),[[$,V(i)]]):G((F(),O("input",{key:1,"onUpdate:modelValue":a[5]||(a[5]=e=>D(i)?i.value=e:null),class:N(V(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:V(t),value:e.label,onChange:a[6]||(a[6]=(...e)=>V(u)&&V(u)(...e)),onFocus:a[7]||(a[7]=e=>n.value=!0),onBlur:a[8]||(a[8]=e=>n.value=!1),onClick:a[9]||(a[9]=_((()=>{}),["stop"]))},null,42,ve)),[[$,V(i)]]),e.$slots.default||e.label?(F(),O("span",{key:2,class:N(V(b).be("button","inner")),style:M(V(o)?V(v):void 0)},[U(e.$slots,"default",{},(()=>[q(A(e.label),1)]))],6)):K("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const pe=T({modelValue:{type:W(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:o,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ke={[t]:e=>f(e),change:e=>f(e)},xe=S({name:"ElCheckboxGroup"});var fe=Q(S({...xe,props:pe,emits:ke,setup(e,{emit:a}){const l=e,n=I("checkbox"),{formItem:o}=v(),{inputId:s,isLabeledByFormItem:i}=B(l,{formItemContext:o}),u=async e=>{a(t,e),await k(),a("change",e)},d=r({get:()=>l.modelValue,set(e){u(e)}});return H(te,{...le(J(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:d,changeEvent:u}),h((()=>l.modelValue),(()=>{l.validateEvent&&(null==o||o.validate("change").catch((e=>p())))})),(e,a)=>{var l;return F(),w(P(e.tag),{id:V(s),class:N(V(n).b("group")),role:"group","aria-label":V(i)?void 0:e.label||"checkbox-group","aria-labelledby":V(i)?null==(l=V(o))?void 0:l.labelId:void 0},{default:z((()=>[U(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const ge=X(ce,{CheckboxButton:he,CheckboxGroup:fe}),Ce=Y(he),ye=Y(fe);export{ge as E,Ce as a,ye as b,le as p};
