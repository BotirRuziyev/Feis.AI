import{u as y,r as f,Y as b,m as I,_ as w,c as r,a as t,F as x,q as F,o as i}from"./Bs-UNA1x.js";import{P,S as k}from"./e_-O8CN2.js";import{c as R}from"./CRcsOwsB.js";const B={components:{},setup(){const l=y(),s=f(new P),a=f(new k),n=async e=>{a.value=e,s.value=await I("/faceImageGeneration/exampleList",a.value)};n(a.value);const m=b(()=>{const e=[];return s.value.items.forEach(o=>{var p,d,u;const c={id:((p=o==null?void 0:o.face)==null?void 0:p.id)||null,faceName:((d=o==null?void 0:o.face)==null?void 0:d.faceName)||null,coverImageUrl:((u=o==null?void 0:o.face)==null?void 0:u.coverImageUrl)||null};o.images.forEach(h=>{const g={aspectRatio:o.aspectRatio,prompt:o.prompt,img:h,face:c};e.push(g)})}),e});return{store:l,searchForm:a,searchResult:s,getList:n,images:m,copyPrompt:e=>{R(e,void 0,(o,c)=>{o?console.log(o):console.log(e,c)})}}}},C={class:"masonry"},E={class:"mItem"},L={class:"mItem-body"},N=["src"],S={class:"mItem-body-info"},$=["href"],G=["onClick"];function U(l,s,a,n,m,_){return i(),r("div",null,[s[0]||(s[0]=t("h1",null,"Inspiration",-1)),s[1]||(s[1]=t("div",{class:"app-base-border-radius app-base-margin-top-bottom",style:{width:"100%"}},null,-1)),t("div",C,[(i(!0),r(x,null,F(n.images,e=>(i(),r("div",E,[t("div",L,[t("img",{src:e.img,alt:""},null,8,N),t("div",S,[t("a",{href:e.img,download:""},"Download",8,$),t("span",{onClick:o=>n.copyPrompt(e.prompt)},"Copy prompt",8,G)])])]))),256))])])}const D=w(B,[["render",U]]);export{D as default};
