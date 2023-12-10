import{cS as e,aZ as t,a_ as n,d as o,S as r,x as l,o as a,i as c,a as i}from"./index-SLBLGd9V.js";var u,d={exports:{}};const s=n(d.exports=(u=e,function(){var e={789:function(e){e.exports=u}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}function r(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(o),n.d(o,{default:function(){return w}});var a=n(789),c=(0,a.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,a.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),i=(0,a.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,a.computed)((function(){return e.isMultiple?"checkbox":"radio"})),model:(0,a.computed)({get:function(){return e.checked},set:function(e){return n("update:modelValue",e)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,a.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(e){return e.stopPropagation()}},[(0,a.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,a.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),u=(0,a.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n="objectStart"===e||"arrayStart"===e;return n||"objectCollapsed"===e||"arrayCollapsed"===e?(0,a.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,a.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=(arguments.length>3?arguments[3]:void 0)||{},r=o.key,l=o.index,a=o.type,c=void 0===a?"content":a,i=o.showComma,u=void 0!==i&&i,d=o.length,f=void 0===d?1:d,y=s(e);if("array"===y){var b=p(e.map((function(e,o,r){return h(e,"".concat(t,"[").concat(o,"]"),n+1,{index:o,showComma:o!==r.length-1,length:f,type:c})})));return[h("[",t,n,{showComma:!1,key:r,length:e.length,type:"arrayStart"})[0]].concat(b,h("]",t,n,{showComma:u,length:e.length,type:"arrayEnd"})[0])}if("object"===y){var v=Object.keys(e),g=p(v.map((function(o,r,l){return h(e[o],/^[a-zA-Z_]\w*$/.test(o)?"".concat(t,".").concat(o):"".concat(t,'["').concat(o,'"]'),n+1,{key:o,showComma:r!==l.length-1,length:f,type:c})})));return[h("{",t,n,{showComma:!1,key:r,index:l,length:v.length,type:"objectStart"})[0]].concat(g,h("}",t,n,{showComma:u,length:v.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:r,index:l,path:t,showComma:u,length:f,type:c}]}function p(e){if("function"==typeof Array.prototype.flat)return e.flat();for(var t=r(e),n=[];t.length;){var o=t.shift();Array.isArray(o)?t.unshift.apply(t,r(o)):n.push(o)}return n}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null==e)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if("object"!==d(e))return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map((function(e){return f(e,t)}));return t.set(e,n),n}var o={};for(var r in e)o[r]=f(e[r],t);return t.set(e,o),o}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}},g=(0,a.defineComponent)({name:"TreeNode",props:b(b({},v),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,o=(0,a.computed)((function(){return s(e.node.content)})),r=(0,a.computed)((function(){return"vjs-value vjs-value-".concat(o.value)})),l=(0,a.computed)((function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key})),d=(0,a.computed)((function(){return"multiple"===e.selectableType})),h=(0,a.computed)((function(){return"single"===e.selectableType})),p=(0,a.computed)((function(){return e.nodeSelectable(e.node)&&(d.value||h.value)})),f=(0,a.reactive)({editing:!1}),y=function(t){var o,r,l="null"===(r=null===(o=t.target)||void 0===o?void 0:o.value)?null:"undefined"===r?void 0:"true"===r||"false"!==r&&(r[0]+r[r.length-1]==='""'||r[0]+r[r.length-1]==="''"?r.slice(1,-1):"number"==typeof Number(r)&&!isNaN(Number(r))||"NaN"===r?Number(r):r);n("valueChange",l,e.node.path)},b=(0,a.computed)((function(){var t,n=null===(t=e.node)||void 0===t?void 0:t.content;return null===n?n="null":void 0===n&&(n="undefined"),"string"===o.value?'"'.concat(n,'"'):n+""})),v=function(){var t=e.renderNodeValue;return t?t({node:e.node,defaultValue:b.value}):b.value},g=function(){n("bracketsClick",!e.collapsed,e.node.path)},m=function(){n("iconClick",!e.collapsed,e.node.path)},k=function(){n("selectedChange",e.node)},w=function(){n("nodeClick",e.node),p.value&&e.selectOnClickNode&&n("selectedChange",e.node)},C=function(t){if(e.editable&&!f.editing){f.editing=!0;var n=function e(n){var o;n.target!==t.target&&(null===(o=n.target)||void 0===o?void 0:o.parentElement)!==t.target&&(f.editing=!1,document.removeEventListener("click",e))};document.removeEventListener("click",n),document.addEventListener("click",n)}};return function(){var t,n=e.node;return(0,a.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked},onClick:w,style:e.style},[e.showLineNumber&&(0,a.createVNode)("span",{class:"vjs-node-index"},[n.id+1]),e.showSelectController&&p.value&&"objectEnd"!==n.type&&"arrayEnd"!==n.type&&(0,a.createVNode)(i,{isMultiple:d.value,checked:e.checked,onChange:k},null),(0,a.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(n.level)).map((function(t,n){return(0,a.createVNode)("div",{key:n,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)})),e.showIcon&&(0,a.createVNode)(u,{nodeType:n.type,onClick:m},null)]),n.key&&(0,a.createVNode)("span",{class:"vjs-key"},[(t=e.renderNodeKey,t?t({node:e.node,defaultKey:l.value||""}):l.value),(0,a.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,a.createVNode)("span",null,["content"!==n.type&&n.content?(0,a.createVNode)(c,{data:n.content.toString(),onClick:g},null):(0,a.createVNode)("span",{class:r.value,onClick:!e.editable||e.editableTrigger&&"click"!==e.editableTrigger?void 0:C,onDblclick:e.editable&&"dblclick"===e.editableTrigger?C:void 0},[e.editable&&f.editing?(0,a.createVNode)("input",{value:b.value,onChange:y,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):v()]),n.showComma&&(0,a.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,a.createVNode)("span",{class:"vjs-comment"},[(0,a.createTextVNode)(" // "),n.length,(0,a.createTextVNode)(" items ")])])])}}});function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=(0,a.defineComponent)({name:"Tree",props:k(k({},v),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,n){var o=n.emit,c=n.slots,i=(0,a.ref)(),u=(0,a.computed)((function(){return h(e.data,e.rootPath)})),d=function(t){return u.value.reduce((function(n,o){var r,a=o.level>=t,c=null===(r=e.pathCollapsible)||void 0===r?void 0:r.call(e,o);return"objectStart"!==o.type&&"arrayStart"!==o.type||!a&&!c?n:k(k({},n),{},l({},o.path,1))}),{})},s=(0,a.reactive)({translateY:0,visibleData:null,hiddenPaths:d(e.deep)}),p=(0,a.computed)((function(){for(var e=null,t=[],n=u.value.length,o=0;o<n;o++){var r=k(k({},u.value[o]),{},{id:o}),l=s.hiddenPaths[r.path];if(e&&e.path===r.path){var a="objectStart"===e.type,c=k(k(k({},r),e),{},{showComma:r.showComma,content:a?"{...}":"[...]",type:a?"objectCollapsed":"arrayCollapsed"});e=null,t.push(c)}else{if(l&&!e){e=r;continue}if(e)continue;t.push(r)}}return t})),y=(0,a.computed)((function(){var t=e.selectedValue;return t&&"multiple"===e.selectableType&&Array.isArray(t)?t:[t]})),b=(0,a.computed)((function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."})),v=function(){var t=p.value;if(e.virtual){var n,o=e.height/e.itemHeight,r=(null===(n=i.value)||void 0===n?void 0:n.scrollTop)||0,l=Math.floor(r/e.itemHeight),a=l<0?0:l+o>t.length?t.length-o:l;a<0&&(a=0);var c=a+o;s.translateY=a*e.itemHeight,s.visibleData=t.filter((function(e,t){return t>=a&&t<c}))}else s.visibleData=t},m=function(){v()},w=function(n){var l,a,c=n.path,i=e.selectableType;if("multiple"===i){var u=y.value.findIndex((function(e){return e===c})),d=r(y.value);-1!==u?d.splice(u,1):d.push(c),o("update:selectedValue",d),o("selectedChange",d,r(y.value))}else if("single"===i&&y.value[0]!==c){var s=(l=y.value,a=1,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(l.push(o.value),!t||l.length!==t);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return l}}(l,a)||t(l,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],h=c;o("update:selectedValue",h),o("selectedChange",h,s)}},C=function(e){o("nodeClick",e)},N=function(e,t){if(e)s.hiddenPaths=k(k({},s.hiddenPaths),{},l({},t,1));else{var n=k({},s.hiddenPaths);delete n[t],s.hiddenPaths=n}},S=function(t,n){e.collapsedOnClickBrackets&&N(t,n),o("bracketsClick",t)},j=function(e,t){N(e,t),o("iconClick",e)},O=function(t,n){var r=f(e.data),l=e.rootPath;new Function("data","val","data".concat(n.slice(l.length),"=val"))(r,t),o("update:data",r)};return(0,a.watchEffect)((function(){b.value&&function(e){throw new Error("[VueJSONPretty] ".concat(e))}(b.value)})),(0,a.watchEffect)((function(){p.value&&v()})),(0,a.watch)((function(){return e.deep}),(function(e){e&&(s.hiddenPaths=d(e))})),function(){var t,n,o=null!==(t=e.renderNodeKey)&&void 0!==t?t:c.renderNodeKey,r=null!==(n=e.renderNodeValue)&&void 0!==n?n:c.renderNodeValue,l=s.visibleData&&s.visibleData.map((function(t){return(0,a.createVNode)(g,{key:t.id,node:t,collapsed:!!s.hiddenPaths[t.path],showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:y.value.includes(t.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:o,renderNodeValue:r,onNodeClick:C,onBracketsClick:S,onIconClick:j,onSelectedChange:w,onValueChange:O,style:e.itemHeight&&20!==e.itemHeight?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)}));return(0,a.createVNode)("div",{ref:i,class:{"vjs-tree":!0,"is-virtual":e.virtual},onScroll:e.virtual?m:void 0,style:e.showLineNumber?k({paddingLeft:"".concat(12*Number(u.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,a.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,a.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(p.value.length*e.itemHeight,"px")}},[(0,a.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(s.translateY,"px)")}},[l])])]):l])}}})}(),o}())),h=o({__name:"JsonEditor",props:{modelValue:{type:Object,default:()=>({})},deep:r.number.def(5),showLength:r.bool.def(!0),showLineNumbers:r.bool.def(!0),showLineNumber:r.bool.def(!0),showIcon:r.bool.def(!0),showDoubleQuotes:r.bool.def(!0),virtual:r.bool.def(!1),height:r.number.def(400),itemHeight:r.number.def(20),rootPath:r.string.def("root"),nodeSelectable:r.func.def(),selectableType:r.oneOf(["multiple","single"]).def(),showSelectController:r.bool.def(!1),selectOnClickNode:r.bool.def(!0),highlightSelectedNode:r.bool.def(!0),collapsedOnClickBrackets:r.bool.def(!0),renderNodeKey:r.func.def(),renderNodeValue:r.func.def(),editable:r.bool.def(!0),editableTrigger:r.oneOf(["click","dblclick"]).def("click")},emits:["update:modelValue","node-click","brackets-click","icon-click","selected-value"],setup(e,{emit:t}){const n=t,o=e,r=l((()=>o.modelValue)),u=l({get:()=>r.value,set:e=>{n("update:modelValue",e)}}),d=e=>{n("node-click",e)},h=e=>{n("brackets-click",e)},p=e=>{n("icon-click",e)},f=(e,t)=>{n("selected-value",e,t)};return(t,n)=>(a(),c(i(s),{data:u.value,"onUpdate:data":n[0]||(n[0]=e=>u.value=e),deep:e.deep,"show-length":e.showLength,"show-line-numbers":e.showLineNumbers,"show-line-number":e.showLineNumber,"show-icon":e.showIcon,"show-double-quotes":e.showDoubleQuotes,virtual:e.virtual,height:e.height,"item-height":e.itemHeight,"root-path":e.rootPath,"node-selectable":e.nodeSelectable,"selectable-type":e.selectableType,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"highlight-selected-node":e.highlightSelectedNode,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,"render-node-key":e.renderNodeKey,"render-node-value":e.renderNodeValue,editable:e.editable,"editable-trigger":e.editableTrigger,onNodeClick:d,onBracketsClick:h,onIconClick:p,onSelectedChange:f},null,8,["data","deep","show-length","show-line-numbers","show-line-number","show-icon","show-double-quotes","virtual","height","item-height","root-path","node-selectable","selectable-type","show-select-controller","select-on-click-node","highlight-selected-node","collapsed-on-click-brackets","render-node-key","render-node-value","editable","editable-trigger"]))}});export{h as _};
