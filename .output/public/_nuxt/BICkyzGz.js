import{_ as z}from"./Bqcmp63l.js";import{_ as G,o as p,c as f,d as m,t as C,Y as O,u as Y,r as b,X as Z,m as j,z as R,Z as J,p as V,$ as A,R as d,a as e,b as o,w as t,N as D,O as H,S as M,T as W,K,a0 as X,P as Q,F as $,q as ee,D as se,H as ae,a1 as te,v as oe,I as ie,J as le}from"./DIh6hySJ.js";/* empty css        *//* empty css        */import{n as re,u as ne,a as ce,f as de}from"./YV2JFk1H.js";/* empty css        *//* empty css        *//* empty css        */import{s as pe,_ as me}from"./CrgnJ4mv.js";import{_ as ue}from"./CF1NWXEt.js";const ge={name:"app-button",props:["text","disabled"],setup(){return{}}},fe=["disabled"];function _e(w,s,_,a,u,S){return p(),f("button",{type:"button",class:"app-button",disabled:_.disabled},[m(C(_.text)+" ",1),O(w.$slots,"default")],8,fe)}const he=G(ge,[["render",_e]]),ye={components:{},async setup(){const w=Y(),s=J(),{apiUrl:_}=s.public,a=b(!1),u=b({secs:0,mins:0}),S=Z(()=>(100-(u.value.mins*60+u.value.secs)/3e3*100).toFixed()),k=await j("/face/progressItem");if(k.estimatedSec){a.value=!0;const r=k.estimatedSec;(y=>{let I,T;function B(){let v=I;v>0?I--:clearInterval(T);let N=Math.floor(v/60);v%=60;let q=N+":"+v;u.value.secs=v,u.value.mins=N,console.log({pretty:q})}I=y,B(),T=pe(()=>B(),1e3)})(r)}const h=b(!1),c=b(!1),P=_+"/face/uploadFile",x=(r,n,y)=>{c.value=!1,l.images.push(r.file)},g=(r,n,y)=>{c.value=!0},L=(r,n,y)=>{c.value=!1,re.error()},U=r=>{l.images.splice(l.images.findIndex(n=>n===r),1)},E=R({faceName:[ce],images:[de]}),F=b(),l=R({id:null,faceName:null,images:[],key:null});return l.key=(Date.now()+Math.random()).toFixed(0).toString(),{store:w,loading:h,formRules:E,form:l,formRuleRef:F,submitForm:async()=>{if(await ne(F.value)){if(h.value=!0,l.id){const{data:r,error:n}=await V(`/face/${l.id}`,"PATCH",{...l});n.value||await A({name:"myFaces-id",params:{id:r.value.id}})}if(!l.id){const{data:r,error:n}=await V("/face","POST",{...l});n.value||await A({name:"myFaces-id",params:{id:r.value.id}})}h.value=!1}},updateUrl:P,updateLoading:c,on_success:x,on_progress:g,on_error:L,deleteImage:U,progressShow:a,progressPrettyTimer:u,progressPercent:S}}},ve=d("/icon/info.svg"),be=d("/icon/upload-icon.png"),Ce=d("/icon/aiGenerator-white.svg"),we=d("/img/face/c1.png"),ke=d("/img/face/c2.png"),xe=d("/img/face/c3.png"),Le=d("/img/face/n1.png"),Fe=d("/img/face/n2.png"),Se=d("/img/face/n3.png"),Pe={class:"myfaces-create"},Ue={key:0,"element-loading-text":"Loading..."},Ee={class:"page-head"},Ie={class:"bg-grey app-base-padding app-base-border-radius myfaces-create__form__left"},Te={class:"my-faces-create-el-upload-label"},Be={style:{width:"100%"}},Ne={class:"my-faces-create-el-upload-images"},Re={class:"upload-images"},Ve=["src"],Ae={class:"bg-grey app-base-padding app-base-border-radius myfaces-create__form__right"},De={key:1,class:"myFaces-create-progress-block"},He={class:"myFaces-create-progress-block-body app-base-border-radius app-base-padding"},Me={class:"myFaces-create-progress-block-body-progress"},Ge={class:"loading-percentage"},qe={class:"loading-time"},ze={class:"myFaces-create-progress-block-body-info"};function Oe(w,s,_,a,u,S){const k=z,h=se,c=ae,P=te,x=oe,g=ie,L=le,U=K,E=X,F=he,l=Q;return p(),f("div",Pe,[a.progressShow?M("",!0):(p(),f("div",Ue,[e("div",Ee,[o(k,{class:"back-btn"},{default:t(()=>s[1]||(s[1]=[e("img",{src:ue,alt:""},null,-1),m(" HOME")])),_:1}),s[2]||(s[2]=e("h1",{class:"page-title"},"Upload your photos to create a new face",-1)),s[3]||(s[3]=e("p",{class:"page-description"}," To get the best results, please upload 5 to 20 high-quality photos and wait for AI to learn your face ",-1)),s[4]||(s[4]=e("div",{class:"photo-pload__guidelines"},[e("img",{src:ve,alt:""}),m(" Photo Upload Guidelines ")],-1))]),D((p(),H(U,{"label-position":"top",ref:"formRuleRef",model:a.form,rules:a.formRules,class:"myfaces-create__form"},{default:t(()=>[o(L,{gutter:15},{default:t(()=>[o(g,{span:12,xs:24},{default:t(()=>[e("div",Ie,[o(c,{prop:"faceName",label:"Enter a name"},{default:t(()=>[o(h,{modelValue:a.form.faceName,"onUpdate:modelValue":s[0]||(s[0]=i=>a.form.faceName=i),placeholder:"Mark",size:"large"},null,8,["modelValue"])]),_:1}),o(c,{prop:"images",label:""},{default:t(()=>[e("label",Te,[s[5]||(s[5]=e("span",null,"Upload photos",-1)),e("span",null,C(a.form.images.length)+"/20",1)]),e("div",Be,[D((p(),H(P,{ref:"uploadRef",drag:"",accept:"image/png, image/jpeg, image/jpg",limit:20,"on-success":a.on_success,"on-progress":a.on_progress,"on-error":a.on_error,"auto-upload":!0,action:a.updateUrl,headers:{Authorization:"Bearer "+a.store.accessToken},data:{key:a.form.key},multiple:!0,"show-file-list":!1},{default:t(()=>s[6]||(s[6]=[e("div",{class:"my-faces-create-el-upload-body"},[e("div",{class:"upload-body__img"},[e("img",{src:be})]),e("div",{class:"my-faces-create-el-upload-body-text"},[e("span",{class:"app-orange-text my-faces-create-el-upload-body-text-choose-a-file"},"Choose a file"),e("span",{class:"app-grey-text"},"or drag it here"),e("span",{class:"app-grey-text"},"PNG, JPG, WEBP or HEIC (max. 3MB)")])],-1)])),_:1},8,["on-success","on-progress","on-error","action","headers","data"])),[[l,a.updateLoading]])]),e("div",Ne,[(p(!0),f($,null,ee(a.form.images,i=>(p(),f("div",{class:"my-faces-create-el-upload-image",key:i},[e("div",Re,[e("img",{src:i||"/img/face/c1.png"},null,8,Ve)])]))),128))])]),_:1}),o(c,null,{default:t(()=>{var i;return[o(x,{type:"primary",size:"large",onClick:a.submitForm,disabled:!((i=a.store.getUser)!=null&&i.facesCount)},{default:t(()=>s[7]||(s[7]=[e("img",{src:Ce,style:{width:"18px",height:"18px","margin-top":"3px"}},null,-1),m(" Generate new face ")])),_:1},8,["onClick","disabled"])]}),_:1})])]),_:1}),o(g,{span:12,xs:24},{default:t(()=>[e("div",Ae,[s[11]||(s[11]=e("div",{class:"block-head"},[e("h2",{class:"title"},[e("span",null,"Photo Upload Guidelines and Requirements"),e("span",null,"Upload 5 to 20 high-quality photos")]),e("p",{class:"description"}," To get the best results, please upload 5 to 20 high-quality photos ")],-1)),s[12]||(s[12]=e("div",{class:"step-list"},[e("div",{class:"list-item"},[e("span",{class:"step-num"},"STEP 1"),e("span",{class:"step-content"},"Upload your photos")]),e("div",{class:"list-item"},[e("span",{class:"step-num"},"STEP 1"),e("span",{class:"step-content"},[m("Wait ~30 min for the AI to learn your face "),e("span",{class:"step-content__warning"},"*You will receive an email when your face is ready")])]),e("div",{class:"list-item"},[e("span",{class:"step-num"},"STEP 1"),e("span",{class:"step-content"},"Start generating your AI photos!")])],-1)),o(L,{gutter:15},{default:t(()=>[o(g,{span:12,xs:24,class:"myfaces-create__form-right-card-item"},{default:t(()=>s[8]||(s[8]=[e("div",{class:"bg-black app-base-padding app-base-border-radius"},[e("div",{class:"my-faces-create-example-images"},[e("div",null,[e("img",{src:we})]),e("div",null,[e("img",{src:ke})]),e("div",null,[e("img",{src:xe})])]),e("div",{class:"my-faces-create-example-info"},[e("p",{class:"card-item__title"},"✅ Good Photos"),e("span",{class:"card-item__description"}," Use bright natural lighting, capture multiple angles (front, side, three-quarter), show various expressions, and avoid heavy editing for accuracy. ")])],-1)])),_:1}),o(g,{span:12,xs:24,class:"myfaces-create__form-right-card-item"},{default:t(()=>s[9]||(s[9]=[e("div",{class:"bg-black app-base-padding app-base-border-radius"},[e("div",{class:"my-faces-create-example-images"},[e("div",null,[e("img",{src:Le})]),e("div",null,[e("img",{src:Fe})]),e("div",null,[e("img",{src:Se})])]),e("div",{class:"my-faces-create-example-info"},[e("p",{class:"card-item__title"},"🚫 Bad Photos"),e("span",{class:"card-item__description"}," Avoid group photos. Ensure images are sharp, well-lit without shadows, and keep angles natural and straightforward. ")])],-1)])),_:1})]),_:1}),o(c,null,{default:t(()=>{var i;return[o(x,{type:"primary",size:"large",onClick:a.submitForm,disabled:!((i=a.store.getUser)!=null&&i.facesCount)},{default:t(()=>s[10]||(s[10]=[e("svg",{width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("mask",{id:"mask0_2087_2538",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"18",height:"19"},[e("rect",{y:"0.5",width:"18",height:"18",fill:"#D9D9D9"})]),e("g",{mask:"url(#mask0_2087_2538)"},[e("path",{d:"M8.25 10.1375L7.575 10.7938C7.4375 10.9313 7.26563 11 7.05938 11C6.85313 11 6.675 10.925 6.525 10.775C6.3875 10.6375 6.31875 10.4625 6.31875 10.25C6.31875 10.0375 6.3875 9.8625 6.525 9.725L8.475 7.775C8.625 7.625 8.8 7.55 9 7.55C9.2 7.55 9.375 7.625 9.525 7.775L11.475 9.725C11.6125 9.8625 11.6844 10.0344 11.6906 10.2406C11.6969 10.4469 11.625 10.625 11.475 10.775C11.3375 10.9125 11.1656 10.9844 10.9594 10.9906C10.7531 10.9969 10.575 10.9313 10.425 10.7938L9.75 10.1375V14H13.875C14.4 14 14.8438 13.8188 15.2062 13.4563C15.5687 13.0938 15.75 12.65 15.75 12.125C15.75 11.6 15.5687 11.1563 15.2062 10.7938C14.8438 10.4313 14.4 10.25 13.875 10.25H12.75V8.75C12.75 7.7125 12.3844 6.82812 11.6531 6.09688C10.9219 5.36563 10.0375 5 9 5C7.9625 5 7.07812 5.36563 6.34688 6.09688C5.61562 6.82812 5.25 7.7125 5.25 8.75H4.875C4.15 8.75 3.53125 9.00625 3.01875 9.51875C2.50625 10.0313 2.25 10.65 2.25 11.375C2.25 12.1 2.50625 12.7188 3.01875 13.2313C3.53125 13.7438 4.15 14 4.875 14H6C6.2125 14 6.39062 14.0719 6.53438 14.2156C6.67812 14.3594 6.75 14.5375 6.75 14.75C6.75 14.9625 6.67812 15.1406 6.53438 15.2844C6.39062 15.4281 6.2125 15.5 6 15.5H4.875C3.7375 15.5 2.76562 15.1062 1.95938 14.3188C1.15313 13.5312 0.75 12.5688 0.75 11.4312C0.75 10.4562 1.04375 9.5875 1.63125 8.825C2.21875 8.0625 2.9875 7.575 3.9375 7.3625C4.25 6.2125 4.875 5.28125 5.8125 4.56875C6.75 3.85625 7.8125 3.5 9 3.5C10.4625 3.5 11.7031 4.00938 12.7219 5.02813C13.7406 6.04688 14.25 7.2875 14.25 8.75C15.1125 8.85 15.8281 9.22188 16.3969 9.86563C16.9656 10.5094 17.25 11.2625 17.25 12.125C17.25 13.0625 16.9219 13.8594 16.2656 14.5156C15.6094 15.1719 14.8125 15.5 13.875 15.5H9.75C9.3375 15.5 8.98438 15.3531 8.69063 15.0594C8.39688 14.7656 8.25 14.4125 8.25 14V10.1375Z",fill:"white"})])],-1),m(" Back to upload ")])),_:1},8,["onClick","disabled"])]}),_:1})])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[l,a.loading]])])),a.progressShow?(p(),f("div",De,[e("div",He,[e("div",Me,[o(E,{type:"circle",percentage:a.progressPercent,"stroke-width":12,width:280,indeterminate:!0},{default:t(({percentage:i})=>[e("div",Ge,[m(C(i)+" ",1),s[13]||(s[13]=e("span",null,"%",-1))]),s[14]||(s[14]=e("div",{class:"loading-time"},"Estimated time",-1)),e("div",qe,C(a.progressPrettyTimer.secs)+" s / "+C(a.progressPrettyTimer.mins)+" min ",1)]),_:1},8,["percentage"])]),e("div",ze,[s[16]||(s[16]=W('<button class="close-btn"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_375_10374" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23"><rect width="23" height="23" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_375_10374)"><path d="M4.22398 20.212L2.78906 18.7771L10.4147 11.1514L2.78906 3.52574L4.22398 2.09082L11.8497 9.7165L19.4753 2.09082L20.9103 3.52574L13.2846 11.1514L20.9103 18.7771L19.4753 20.212L11.8497 12.5863L4.22398 20.212Z" fill="#818181"></path></g></svg></button><h1 class="title">AI Model is generating</h1><p class="description"> You can dismiss this screen while processing is in progress </p>',3)),o(F,null,{default:t(()=>s[15]||(s[15]=[e("span",{class:"icon"},[e("img",{src:me,alt:""})],-1),m(" Notify me when ready")])),_:1})])])])):M("",!0)])}const ss=G(ye,[["render",Oe]]);export{ss as default};