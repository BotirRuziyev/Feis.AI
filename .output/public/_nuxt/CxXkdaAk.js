/* empty css        */import{a8 as s}from"./Bs-UNA1x.js";const u={validator:(e,t)=>(t&&String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),!0),message:"Email",trigger:["blur","change"]},l={required:!0,message:"Required field",trigger:["blur","change"]},c={validator:(e,t)=>t.length>5,message:"Min image count 5",trigger:["blur","change"]};function f(e){e&&e.resetFields()}async function p(e){return e?await e.validate(t=>t):!1}const r=10,o="bottom-right",g={success:(e="",t=null)=>{s({title:t,message:e,type:"success",offset:r,position:o})},warning:(e="",t=null)=>{s({title:t,message:e,type:"warning",offset:r,position:o})},info:(e="",t=null)=>{s({title:t,message:e,type:"info",offset:r,position:o})},error:(e="Ошибка",t=null)=>{s({title:t,message:e,type:"error",offset:r,position:o})},created:(e="Добавлено",t=null)=>{s({title:t,message:e,type:"success",offset:r,position:o})},restore:(e="restore",t=null)=>{s({title:t,message:e,type:"success",offset:r,position:o})},updated:(e="Обновлено",t=null)=>{s({title:t,message:e,type:"success",offset:r,position:o})},deleted:(e="Удалено",t=null)=>{s({title:t,message:e,type:"success",offset:r,position:o})}};export{l as a,u as e,c as f,g as n,f as r,p as u};
