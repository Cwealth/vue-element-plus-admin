import{Y as n}from"./index-SLBLGd9V.js";const e={all:t=t||new Map,on:function(n,e){var a=t.get(n);a?a.push(e):t.set(n,[e])},off:function(n,e){var a=t.get(n);a&&(e?a.splice(a.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var a=t.get(n);a&&a.slice().map((function(n){n(e)})),(a=t.get("*"))&&a.slice().map((function(t){t(n,e)}))}};var t;const a=t=>(t&&(e.on(t.name,t.callback),n((()=>{e.off(t.name)}))),{emitter:e});export{a as u};
