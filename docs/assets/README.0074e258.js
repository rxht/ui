import{d as v,m as d,r as i,o as p,c as _,b as u,f as s,t as V,k as F,w as c,a as m}from"./index.eb3faab0.js";const b=v({__name:"basis",setup(f){const l=d(0),n=d(20),a=d(0);return(o,e)=>{const r=i("r-slider");return p(),_("div",null,[u(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t)},null,8,["modelValue"]),s(" (\u9ED8\u8BA4) - "+V(l.value)+" ",1),u(r,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t)},null,8,["modelValue"]),s(" (\u5177\u6709\u521D\u59CB\u503C20) - "+V(n.value)+" ",1),u(r,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),disabled:""},null,8,["modelValue"]),s(" (\u7981\u7528) - "+V(a.value),1)])}}}),B=v({__name:"color",setup(f){const l=d(0),n=d(20),a=d(0);return(o,e)=>{const r=i("r-slider");return p(),_("div",null,[u(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),color:"#00f0f0"},null,8,["modelValue"]),u(r,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),color:"#ff00ff"},null,8,["modelValue"]),u(r,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),color:"#ffff00"},null,8,["modelValue"])])}}}),E=v({__name:"vertical",setup(f){const l=d(0);return(n,a)=>{const o=i("r-slider");return p(),_("div",null,[u(o,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),vertical:""},null,8,["modelValue"]),s(" "+V(l.value),1)])}}}),C=v({__name:"minAndMax",setup(f){const l=d(20),n=d(20),a=d(20);return(o,e)=>{const r=i("r-slider");return p(),_("div",null,[u(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),min:20},null,8,["modelValue"]),s(" (\u53EF\u79FB\u52A8\u8303\u56F4 20 - 100) "),u(r,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),max:60},null,8,["modelValue"]),s(" (\u53EF\u79FB\u52A8\u8303\u56F4 0 - 60) "),u(r,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),min:20,max:60},null,8,["modelValue"]),s(" (\u53EF\u79FB\u52A8\u8303\u56F4 20 - 60) ")])}}}),g=v({__name:"format",setup(f){const l=d(0),n=d(20),a=d(0);return(o,e)=>{const r=i("r-slider");return p(),_("div",null,[u(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),format:t=>t/100},null,8,["modelValue","format"]),s(" (\u683C\u5F0F: \u503C/100) - "+V(l.value)+" ",1),u(r,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),format:t=>`${t}\xB0`},null,8,["modelValue","format"]),s(" (\u683C\u5F0F: \u503C\xB0) - "+V(n.value)+" ",1),u(r,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),format:t=>`${t} ml`},null,8,["modelValue","format"]),s(" (\u683C\u5F0F: \u503C ml) - "+V(a.value),1)])}}}),x=v({__name:"tooltipEffect",setup(f){const l=d(0);return(n,a)=>{const o=i("r-slider");return p(),_("div",null,[u(o,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),showTooltip:!1},null,8,["modelValue"]),s(" \u9690\u85CF\u6587\u5B57\u63D0\u793A "),u(o,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),tooltipEffect:"dark"},null,8,["modelValue"]),s(" dark\u4E3B\u9898 "),u(o,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value=e),tooltipEffect:"light"},null,8,["modelValue"]),s(" light\u4E3B\u9898 ")])}}}),A=v({__name:"step",setup(f){const l=d(0),n=d(20);return(a,o)=>{const e=i("r-slider");return p(),_("div",null,[u(e,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value=r),step:10},null,8,["modelValue"]),s(" (\u6B65\u957F\u4E3A 10) "),u(e,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=r=>n.value=r),step:20,showStops:""},null,8,["modelValue"]),s(" (\u6B65\u957F\u4E3A 20) ")])}}}),U=v({__name:"attributes",setup(f){const l=F([{field:"attribute",label:"\u5C5E\u6027"},{field:"type",label:"\u7C7B\u578B"},{field:"range",label:"\u53EF\u9009\u503C"},{field:"default",label:"\u9ED8\u8BA4\u503C",width:80},{field:"description",label:"\u63CF\u8FF0"}]),n=F([{attribute:"modelValue/v-model",description:"\u7ED1\u5B9A\u503C",type:"number",range:" - ",default:" - "},{attribute:"min",description:"\u6700\u5C0F\u503C",type:"number",range:" - ",default:"0"},{attribute:"max",description:"\u6700\u5927\u503C",type:"number",range:" - ",default:"100"},{attribute:"height",description:"\u9AD8\u5EA6\uFF08vertical\u8BBE\u7F6E\u4E3Atrue\u65F6\u751F\u6548\uFF09",type:"string",range:" - ",default:"150px"},{attribute:"disabled",description:"\u662F\u5426\u7981\u7528",type:"Boolean",range:"true/false",default:"false"},{attribute:"vertical",description:"\u662F\u5426\u7AD6\u76F4\u65B9\u5411",type:"Boolean",range:"true/false",default:"false"},{attribute:"step",description:"\u6B65\u957F",type:"Number",range:"[1 - 100]",default:"1"},{attribute:"showStops",description:"\u662F\u5426\u663E\u793A\u6B65\u957F\u70B9",type:"Boolean",range:"true/false",default:"false"},{attribute:"color",description:"\u6ED1\u5757\u989C\u8272",type:"String",range:" - ",default:"#409eff"},{attribute:"format",description:"\u6587\u5B57\u63D0\u793A\u683C\u5F0F\u5316\u51FD\u6570",type:"Function as PropType<(val: number) => number | string>",range:" - ",default:" - "},{attribute:"showTooltip",description:"\u662F\u5426\u663E\u793A\u6587\u5B57\u63D0\u793A",type:"Boolean",range:"true/false",default:"true"},{attribute:"tooltipEffect",description:"\u6587\u5B57\u63D0\u793A\u4E3B\u9898",type:"String",range:"dark/light",default:"dark"}]);return(a,o)=>{const e=i("r-table");return p(),_("div",null,[u(e,{fileds:l,datas:n,stripe:"",border:""},null,8,["fileds","datas"])])}}}),y={class:"markdown-body"},D=m("h1",null,"\u6ED1\u5757",-1),S=m("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6ED1\u5757",-1),w=m("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),$=m("h2",null,"\u989C\u8272",-1),k=m("h2",null,"\u5782\u76F4",-1),h=m("h2",null,"\u6700\u5927\u503C\u6700\u5C0F\u503C",-1),N=m("h2",null,"\u683C\u5F0F\u5316\u663E\u793A",-1),T=m("h2",null,"\u63D0\u793A\u6846\u4E3B\u9898",-1),M=m("h2",null,"\u6B65\u957F",-1),P=m("h2",null,"\u6ED1\u5757\u5C5E\u6027",-1),j={},q={__name:"README",setup(f,{expose:l}){return l({frontmatter:{}}),(n,a)=>{const o=i("Preview");return p(),_("div",y,[D,S,w,u(o,{"comp-name":"Slider","demo-name":"basis"},{default:c(()=>[u(b)]),_:1}),$,u(o,{"comp-name":"Slider","demo-name":"color"},{default:c(()=>[u(B)]),_:1}),k,u(o,{"comp-name":"Slider","demo-name":"vertical"},{default:c(()=>[u(E)]),_:1}),h,u(o,{"comp-name":"Slider","demo-name":"minAndMax"},{default:c(()=>[u(C)]),_:1}),N,u(o,{"comp-name":"Slider","demo-name":"format"},{default:c(()=>[u(g)]),_:1}),T,u(o,{"comp-name":"Slider","demo-name":"tooltipEffect"},{default:c(()=>[u(x)]),_:1}),M,u(o,{"comp-name":"Slider","demo-name":"step"},{default:c(()=>[u(A)]),_:1}),P,u(U)])}}};export{q as default,j as frontmatter};