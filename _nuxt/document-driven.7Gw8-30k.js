import h from"./DocumentDrivenEmpty.o98jOd8Q.js";import L from"./ContentRenderer.38dWVdjP.js";import b from"./DocumentDrivenNotFound.zmntz7rT.js";import{k,d as p,G as g,P as R,v as C,H as x,I as S,r as B,J as c,K as N,L as T,M as m,T as j,N as u,O as A,Q as O,S as w,R as D,U as E,m as H,V as $,b as f,c as q,g as y,w as _,W as v}from"./entry.tjvt9mgr.js";import{u as I}from"./head.RsUfu8xL.js";import"./ContentRendererMarkdown.vue.wZSI9r-k.js";const M=p({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await c[t.name]().then(o=>o.default||o);return()=>m(e,t.layoutProps,n.slots)}}),V=p({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=k(),o=g(R),s=o===C()?x():o,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in c)&&t.fallback&&(a=u(t.fallback)),a}),l=B();n.expose({layoutRef:l});const d=e.deferHydration();return()=>{const a=r.value&&r.value in c,i=s.meta.layoutTransition??N;return T(j,a&&i,{default:()=>m(w,{suspensible:!0,onResolve:()=>{O(d)}},{default:()=>m(F,{layoutProps:A(n.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!i},n.slots)})}).default()}}}),F=p({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&D(E,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in c)?(s=(o=n.slots).default)==null?void 0:s.call(o):m(M,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),G={class:"document-driven-page"},X=p({__name:"document-driven",setup(t){const{contentHead:n}=H().public.content,{page:e,layout:o}=$();return e.value,n&&I(e),(s,r)=>{const l=h,d=L,a=b,i=V;return f(),q("div",G,[y(i,{name:u(o)||"default"},{default:_(()=>[u(e)?(f(),v(d,{key:u(e)._id,value:u(e)},{empty:_(({value:P})=>[y(l,{value:P},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{X as default};
