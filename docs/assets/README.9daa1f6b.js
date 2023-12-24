import{d as D,r as d,o as i,c as p,b as e,w as t,f as s,_ as F,s as n,v as l,k as g,a as c}from"./index.eb3faab0.js";const b={class:"row around"},A=D({__name:"basis",setup(m){const o=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A"})},a=()=>{n({text:l("p",null,{default:()=>[l("span",null,{default:()=>["Message can be "]}),l("i",{style:"color: teal"},{default:()=>["VNode"]})]})})};return(r,_)=>{const u=d("r-button");return i(),p("div",b,[e(u,{onClick:o},{default:t(()=>[s("\u6D88\u606F\u63D0\u793A")]),_:1}),e(u,{onClick:a},{default:t(()=>[s("\u6D88\u606F\u63D0\u793A(VNode)")]),_:1})])}}});var v=F(A,[["__scopeId","data-v-1bf787a4"]]);const C={class:"row around"},h=D({__name:"messageType",setup(m){const o=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A"})},a=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",type:"success"})},r=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",type:"warning"})},_=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",type:"error"})},u=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",type:"custom",icon:"rxh-message",color:"red",bgcolor:"blue"})};return(j,q)=>{const f=d("r-button");return i(),p("div",C,[e(f,{onClick:o},{default:t(()=>[s("info")]),_:1}),e(f,{onClick:a},{default:t(()=>[s("success")]),_:1}),e(f,{onClick:r},{default:t(()=>[s("warning")]),_:1}),e(f,{onClick:_},{default:t(()=>[s("error")]),_:1}),e(f,{onClick:u},{default:t(()=>[s("custom")]),_:1})])}}});var x=F(h,[["__scopeId","data-v-92c578d8"]]);const y={class:"row around"},B=D({__name:"timeout",setup(m){const o=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",timeout:1e3})},a=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",timeout:2e3})};return(r,_)=>{const u=d("r-button");return i(),p("div",y,[e(u,{onClick:o},{default:t(()=>[s("1s")]),_:1}),e(u,{onClick:a},{default:t(()=>[s("2s")]),_:1})])}}});var E=F(B,[["__scopeId","data-v-a6f28eba"]]);const k={class:"row around"},w=D({__name:"close",setup(m){const o=()=>{n({text:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",close:!0})},a=()=>{n({text:l("p",null,{default:()=>[l("span",null,{default:()=>["Message can be "]}),l("i",{style:"color: teal"},{default:()=>["VNode"]})]}),close:!0})};return(r,_)=>{const u=d("r-button");return i(),p("div",k,[e(u,{onClick:o},{default:t(()=>[s("\u6D88\u606F\u63D0\u793A")]),_:1}),e(u,{onClick:a},{default:t(()=>[s("\u6D88\u606F\u63D0\u793A(VNode)")]),_:1})])}}});var M=F(w,[["__scopeId","data-v-74f0234c"]]);const N=D({__name:"attributes",setup(m){const o=g([{field:"attribute",label:"\u5C5E\u6027"},{field:"type",label:"\u7C7B\u578B"},{field:"range",label:"\u53EF\u9009\u503C"},{field:"default",label:"\u9ED8\u8BA4\u503C",width:80},{field:"description",label:"\u63CF\u8FF0"}]),a=g([{attribute:"type",description:"\u6D88\u606F\u63D0\u793A\u7C7B\u578B",type:"String",range:"info/success/warning/error/custom",default:"info"},{attribute:"text",description:"\u6D88\u606F\u63D0\u793A\u5185\u5BB9",type:"String/VNode",range:" - ",default:" - "},{attribute:"icon",description:"\u6D88\u606F\u63D0\u793A\u56FE\u6807\uFF08\u4EC5\u5728\u7C7B\u578B\u4E3Acustom\u65F6\u6709\u6548\uFF09",type:"String",range:" - ",default:" - "},{attribute:"bgcolor",description:"\u6D88\u606F\u63D0\u793A\u80CC\u666F\u989C\u8272\uFF08\u4EC5\u5728\u7C7B\u578B\u4E3Acustom\u65F6\u6709\u6548\uFF09",type:"String",range:" - ",default:"#333333"},{attribute:"color",description:"\u6D88\u606F\u63D0\u793A\u989C\u8272\uFF08\u4EC5\u5728\u7C7B\u578B\u4E3Acustom\u65F6\u6709\u6548\uFF09",type:"String",range:" - ",default:"#dddddd"},{attribute:"close",description:"\u6D88\u606F\u63D0\u793A\u4E3B\u52A8\u5173\u95ED",type:"Boolean",range:"true/false",default:"false"}]);return(r,_)=>{const u=d("r-table");return i(),p("div",null,[e(u,{fileds:o,datas:a,stripe:"",border:""},null,8,["fileds","datas"])])}}}),V={class:"markdown-body"},$=c("h1",null,"\u6D88\u606F\u63D0\u793A",-1),S=c("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u63D0\u793A",-1),I=c("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),T=c("h2",null,"\u6D88\u606F\u63D0\u793A\u7C7B\u578B",-1),P=c("h2",null,"\u6D88\u606F\u63D0\u793A\u8D85\u65F6\u65F6\u95F4",-1),R=c("h2",null,"\u6D88\u606F\u63D0\u793A\u53EF\u5173\u95ED",-1),W=c("h2",null,"\u5C5E\u6027",-1),G={},H={__name:"README",setup(m,{expose:o}){return o({frontmatter:{}}),(a,r)=>{const _=d("Preview");return i(),p("div",V,[$,S,I,e(_,{"comp-name":"Message","demo-name":"basis"},{default:t(()=>[e(v)]),_:1}),T,e(_,{"comp-name":"Message","demo-name":"messageType"},{default:t(()=>[e(x)]),_:1}),P,e(_,{"comp-name":"Message","demo-name":"timeout"},{default:t(()=>[e(E)]),_:1}),R,e(_,{"comp-name":"Message","demo-name":"close"},{default:t(()=>[e(M)]),_:1}),W,e(N)])}}};export{H as default,G as frontmatter};