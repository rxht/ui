import{_,r as u,o as r,c as o,b as e,d as p,k as c,w as m,a as n}from"./index.e53e209c.js";const f={},b={class:"row"};function h(s,a){const t=u("r-icon");return r(),o("div",b,[e(t,{name:"rxh-up-circle"}),e(t,{name:"\uE7C2",type:"unicode"}),e(t,{name:"rxh-user",size:30}),e(t,{name:"rxh-codelibrary",size:55,color:"#8822aa"}),e(t,{name:"rxh-codelibrary",size:45,color:"#88aa00",loading:""}),e(t,{name:"rxh-codelibrary",size:45,color:"#88aa00",loading:"",time:5})])}var E=_(f,[["render",h]]);const F=p({__name:"attributes",setup(s){const a=c([{field:"attribute",label:"\u5C5E\u6027"},{field:"type",label:"\u7C7B\u578B"},{field:"range",label:"\u53EF\u9009\u503C"},{field:"default",label:"\u9ED8\u8BA4\u503C",width:100},{field:"description",label:"\u63CF\u8FF0"}]),t=c([{attribute:"name",description:"\u56FE\u6807\u540D\u79F0",type:"String",range:" - ",default:" - "},{attribute:"type",description:"\u56FE\u6807\u7C7B\u578B",type:"String",range:"font-class/unicode",default:"font-class"},{attribute:"size",description:"\u56FE\u6807\u5927\u5C0F",type:"Number",range:" - ",default:"16"},{attribute:"color",description:"\u56FE\u6807\u989C\u8272",type:"String",range:" - ",default:"#000000"},{attribute:"loading",description:"\u56FE\u6807\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001",type:"Boolean",range:"false/true",default:"false"},{attribute:"time",description:"\u56FE\u6807\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001\u65F6\u52A8\u753B\u901F\u5EA6",type:"Number",range:" - ",default:"2"}]);return(l,i)=>{const d=u("r-table");return r(),o("div",null,[e(d,{fileds:a,datas:t,stripe:"",border:""},null,8,["fileds","datas"])])}}}),g={class:"markdown-body"},y=n("h1",null,"\u56FE\u6807",-1),x=n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u56FE\u6807",-1),B=n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),C=n("h2",null,"Icon \u5C5E\u6027",-1),A={},w={__name:"README",setup(s,{expose:a}){return a({frontmatter:{}}),(t,l)=>{const i=u("Preview");return r(),o("div",g,[y,x,B,e(i,{"comp-name":"Icon","demo-name":"basis"},{default:m(()=>[e(E)]),_:1}),C,e(F)])}}};export{w as default,A as frontmatter};