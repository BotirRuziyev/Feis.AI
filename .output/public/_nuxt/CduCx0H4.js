import{a5 as se,r as d,z as U,a6 as T,Y as N,Q as De,a9 as Oe,aa as Ve,g as F,ab as ye,ac as V,F as O,ad as D,$ as je,_ as Te,o as y,c as w,a as t,x as Pe,b as _,w as k,d as c,T as be,v as Ue,q as X,O as we,a4 as Se,S as xe,t as _e}from"./Bs-UNA1x.js";import{_ as Re,a as Be}from"./DwvQXqvr.js";import{_ as Ge}from"./BBxhO2Ot.js";/* empty css        *//* empty css        *//**
 * Vue 3 Carousel 0.4.0
 * (c) 2024
 * @license MIT
 */const f={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ke={itemsToShow:{default:f.itemsToShow,type:Number},itemsToScroll:{default:f.itemsToScroll,type:Number},wrapAround:{default:f.wrapAround,type:Boolean},throttle:{default:f.throttle,type:Number},snapAlign:{default:f.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:f.transition,type:Number},breakpoints:{default:f.breakpoints,type:Object},autoplay:{default:f.autoplay,type:Number},pauseAutoplayOnHover:{default:f.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:f.mouseDrag,type:Boolean},touchDrag:{default:f.touchDrag,type:Boolean},dir:{default:f.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:f.i18n,type:Object},settings:{default(){return{}},type:Object}};function qe({config:n,slidesCount:e}){const{snapAlign:i,wrapAround:o,itemsToShow:a=1}=n;if(o)return Math.max(e-1,0);let r;switch(i){case"start":r=e-a;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((a-.5)/2);break;case"center-even":r=e-Math.ceil(a/2);break;default:r=0;break}return Math.max(r,0)}function Ye({config:n,slidesCount:e}){const{wrapAround:i,snapAlign:o,itemsToShow:a=1}=n;let r=0;if(i||a>e)return r;switch(o){case"start":r=0;break;case"end":r=a-1;break;case"center":case"center-odd":r=Math.floor((a-1)/2);break;case"center-even":r=Math.floor((a-2)/2);break;default:r=0;break}return r}function oe({val:n,max:e,min:i}){return e<i?n:Math.min(Math.max(n,i),e)}function ze({config:n,currentSlide:e,slidesCount:i}){const{snapAlign:o,wrapAround:a,itemsToShow:r=1}=n;let p=e;switch(o){case"center":case"center-odd":p-=(r-1)/2;break;case"center-even":p-=(r-2)/2;break;case"end":p-=r-1;break}return a?p:oe({val:p,max:i-r,min:0})}function Ce(n){return n?n.reduce((e,i)=>{var o;return i.type===O?[...e,...Ce(i.children)]:((o=i.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?[...e,i]:e},[]):[]}function ie({val:n,max:e,min:i=0}){return n>e?ie({val:n-(e+1),max:e,min:i}):n<i?ie({val:n+(e+1),max:e,min:i}):n}function He(n,e){let i;return e?function(...o){const a=this;i||(n.apply(a,o),i=!0,setTimeout(()=>i=!1,e))}:n}function Xe(n,e){let i;return function(...o){i&&clearTimeout(i),i=setTimeout(()=>{n(...o),i=null},e)}}function Fe(n="",e={}){return Object.entries(e).reduce((i,[o,a])=>i.replace(`{${o}}`,String(a)),n)}var We=se({name:"ARIA",setup(){const n=D("config",U(Object.assign({},f))),e=D("currentSlide",d(0)),i=D("slidesCount",d(0));return()=>V("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Fe(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:i.value}))}}),$e=se({name:"Carousel",props:ke,setup(n,{slots:e,emit:i,expose:o}){var a;const r=d(null),p=d([]),b=d(0),g=d(0),l=U(Object.assign({},f)),u=d((a=n.modelValue)!==null&&a!==void 0?a:0),m=d(0),R=d(0),C=d(0),x=d(0);let I=null,W=null;T("config",l),T("slidesCount",g),T("currentSlide",u),T("maxSlide",C),T("minSlide",x),T("slideWidth",b);const le=N(()=>Object.assign({},n.breakpoints)),Ie=N(()=>Object.assign(Object.assign(Object.assign({},f),n),{i18n:Object.assign(Object.assign({},f.i18n),n.i18n),breakpoints:void 0}));function B(){const s=Object.keys(le.value||{}).map(v=>Number(v)).sort((v,A)=>+A-+v);let h=Object.assign({},Ie.value);s.some(v=>{const A=window.matchMedia(`(min-width: ${v}px)`).matches;return A&&(h=Object.assign(Object.assign({},h),le.value[v])),A}),Ne(h)}function Ne(s){Object.entries(s).forEach(([h,v])=>l[h]=v)}const re=Xe(()=>{B(),G(),j()},16);function j(){if(!r.value)return;const s=r.value.getBoundingClientRect();b.value=s.width/l.itemsToShow}function G(){g.value<=0||(R.value=Math.ceil((g.value-1)/2),C.value=qe({config:l,slidesCount:g.value}),x.value=Ye({config:l,slidesCount:g.value}),l.wrapAround||(u.value=oe({val:u.value,max:C.value,min:x.value})))}De(()=>{Oe(()=>j()),setTimeout(()=>j(),1e3),B(),de(),window.addEventListener("resize",re,{passive:!0}),i("init")}),Ve(()=>{W&&clearTimeout(W),I&&clearInterval(I),window.removeEventListener("resize",re,{passive:!0})});let S=!1;const q={x:0,y:0},Y={x:0,y:0},M=U({x:0,y:0}),z=d(!1),$=d(!1),Me=()=>{z.value=!0},Ee=()=>{z.value=!1};function ae(s){["INPUT","TEXTAREA","SELECT"].includes(s.target.tagName)||(S=s.type==="touchstart",S||s.preventDefault(),!(!S&&s.button!==0||E.value)&&(q.x=S?s.touches[0].clientX:s.clientX,q.y=S?s.touches[0].clientY:s.clientY,document.addEventListener(S?"touchmove":"mousemove",ue),document.addEventListener(S?"touchend":"mouseup",ce)))}const ue=He(s=>{$.value=!0,Y.x=S?s.touches[0].clientX:s.clientX,Y.y=S?s.touches[0].clientY:s.clientY;const h=Y.x-q.x,v=Y.y-q.y;M.y=v,M.x=h},l.throttle);function ce(){const s=l.dir==="rtl"?-1:1,h=Math.sign(M.x)*.4,v=Math.round(M.x/b.value+h)*s;if(v&&!S){const A=Z=>{Z.preventDefault(),window.removeEventListener("click",A)};window.addEventListener("click",A)}L(u.value-v),M.x=0,M.y=0,$.value=!1,document.removeEventListener(S?"touchmove":"mousemove",ue),document.removeEventListener(S?"touchend":"mouseup",ce)}function de(){!l.autoplay||l.autoplay<=0||(I=setInterval(()=>{l.pauseAutoplayOnHover&&z.value||H()},l.autoplay))}function pe(){I&&(clearInterval(I),I=null),de()}const E=d(!1);function L(s){const h=l.wrapAround?s:oe({val:s,max:C.value,min:x.value});u.value===h||E.value||(i("slide-start",{slidingToIndex:s,currentSlideIndex:u.value,prevSlideIndex:m.value,slidesCount:g.value}),E.value=!0,m.value=u.value,u.value=h,W=setTimeout(()=>{if(l.wrapAround){const v=ie({val:h,max:C.value,min:0});v!==u.value&&(u.value=v,i("loop",{currentSlideIndex:u.value,slidingToIndex:s}))}i("update:modelValue",u.value),i("slide-end",{currentSlideIndex:u.value,prevSlideIndex:m.value,slidesCount:g.value}),E.value=!1,pe()},l.transition))}function H(){L(u.value+l.itemsToScroll)}function J(){L(u.value-l.itemsToScroll)}const ge={slideTo:L,next:H,prev:J};T("nav",ge),T("isSliding",E);const me=N(()=>ze({config:l,currentSlide:u.value,slidesCount:g.value}));T("slidesToScroll",me);const Le=N(()=>{const s=l.dir==="rtl"?-1:1,h=me.value*b.value*s;return{transform:`translateX(${M.x-h}px)`,transition:`${E.value?l.transition:0}ms`,margin:l.wrapAround?`0 -${g.value*b.value}px`:"",width:"100%"}});function ve(){B(),G(),j(),pe()}Object.keys(ke).forEach(s=>{["modelValue"].includes(s)||F(()=>n[s],ve)}),F(()=>n.modelValue,s=>{s!==u.value&&L(Number(s))}),F(g,G),i("before-init");const fe={config:l,slidesCount:g,slideWidth:b,next:H,prev:J,slideTo:L,currentSlide:u,maxSlide:C,minSlide:x,middleSlide:R};o({updateBreakpointsConfigs:B,updateSlidesData:G,updateSlideWidth:j,restartCarousel:ve,slideTo:L,next:H,prev:J,nav:ge,data:fe});const Q=e.default||e.slides,K=e.addons,he=U(fe);return()=>{const s=Ce(Q==null?void 0:Q(he)),h=(K==null?void 0:K(he))||[];s.forEach((ee,te)=>ee.props.index=te);let v=s;if(l.wrapAround){const ee=s.map((ne,P)=>ye(ne,{index:-s.length+P,isClone:!0,key:`clone-before-${P}`})),te=s.map((ne,P)=>ye(ne,{index:s.length+P,isClone:!0,key:`clone-after-${P}`}));v=[...ee,...s,...te]}p.value=s,g.value=Math.max(s.length,1);const A=V("ol",{class:"carousel__track",style:Le.value,onMousedownCapture:l.mouseDrag?ae:null,onTouchstartPassiveCapture:l.touchDrag?ae:null},v),Z=V("div",{class:"carousel__viewport"},A);return V("section",{ref:r,class:{carousel:!0,"is-sliding":E.value,"is-dragging":$.value,"is-hover":z.value,"carousel--rtl":l.dir==="rtl"},dir:l.dir,"aria-label":l.i18n.ariaGallery,tabindex:"0",onMouseenter:Me,onMouseleave:Ee},[Z,h,V(We)])}}}),Ae;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(Ae||(Ae={}));var Je=se({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const i=D("config",U(Object.assign({},f))),o=D("currentSlide",d(0)),a=D("slidesToScroll",d(0)),r=D("isSliding",d(!1)),p=N(()=>n.index===o.value),b=N(()=>n.index===o.value-1),g=N(()=>n.index===o.value+1),l=N(()=>{const u=Math.floor(a.value),m=Math.ceil(a.value+i.itemsToShow-1);return n.index>=u&&n.index<=m});return()=>{var u;return V("li",{style:{width:`${100/i.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":l.value,"carousel__slide--active":p.value,"carousel__slide--prev":b.value,"carousel__slide--next":g.value,"carousel__slide--sliding":r.value},"aria-hidden":!l.value},(u=e.default)===null||u===void 0?void 0:u.call(e,{isActive:p.value,isClone:n.isClone,isPrev:b.value,isNext:g.value,isSliding:r.value,isVisible:l.value}))}}});const Qe={name:"app-button-apple-and-google",props:[],emit:["clickGoogle","clickApple"],setup(n,{emit:e}){const i=je(),{googleAuthUrl:o,appleAuthUrl:a}=i.public;return{clickGoogle:()=>{},clickApple:()=>{},googleAuthUrl:o,appleAuthUrl:a}}},Ke={class:"app-button-apple-and-google"},Ze=["href"],et=["href"];function tt(n,e,i,o,a,r){return y(),w("div",Ke,[t("a",{href:o.googleAuthUrl,class:"google",onClick:e[0]||(e[0]=(...p)=>o.clickApple&&o.clickApple(...p))},e[2]||(e[2]=[t("img",{src:Re},null,-1),t("span",null,"Continue with Google",-1)]),8,Ze),t("a",{href:o.appleAuthUrl,class:"apple",onClick:e[1]||(e[1]=(...p)=>o.clickGoogle&&o.clickGoogle(...p))},e[3]||(e[3]=[t("img",{src:Be},null,-1),t("span",null,"Continue with Apple ID",-1)]),8,et)])}const nt=Te(Qe,[["render",tt]]),ot={setup(){const n=Pe(),e=d(!1),i=d(!1);n.query.acrive==="signup"&&(e.value=!0),n.query.active==="newuser"&&(i.value=!0),F(n,l=>{l.query.acrive==="signup"&&(e.value=!0),n.query.acrive==="newuser"&&(i.value=!0),console.log({"route.query":n.query,"value.query":l.query})},{deep:!0,immediate:!0});const o=d(),a=d(0);return{carouselRef:o,currentSlide:a,change:l=>{a.value=l},next:()=>o.value.next(),prev:()=>o.value.prev(),carouselItems:[{img:"/img/sign-up/img-1.png",title:"Create Unique AI Photos With your Face",text:"Upload photos of yourself and generate one-of-a-kind images <br> with your face, that you won't find anywhere else"},{img:"/img/sign-up/img-1.png",title:"Generate Images  from Text Prompts",text:"Describe your vision and  watch our AI turn <br> your words  into reality"},{img:"/img/sign-up/img-1.png",title:"Generate  Realistic AI Photos",text:"No more need to hire a professional photographer. Just upload <br> your face, enter a desired prompt and wait 30 seconds"},{img:"/img/sign-up/img-1.png",title:"Generate Funny  Photos and Memes",text:"Do you want to prank your friends or generate a meme with your <br> own face? Now you can do this with help of AIs"},{img:"/img/sign-up/img-1.png",title:"Discover creative possibilities with AI",text:"Explore prompts, get inspired, and see how AI can transform ideas into <br> unique visuals. Dive into a world where imagination meets technology."},{img:"/img/sign-up/img-1.png",title:"Easy Steps to Get Started",text:"Upload 10-20 selfies and wait for  AI to learn your face. <br> Enter any text prompt and see the results"}],mobileShowSignup:e,mobileShowNewUser:i}}},it={class:"signup-section"},st={class:"signup-section-body"},lt={class:"signup-section-carousel-block"},rt={class:"signup-section-item-carousel-item-text"},at={class:"signup-section-item-carousel-navigation"},ut=["onClick"],ct=["innerHTML"],dt={key:0,class:"signup-section-login-block"},pt={class:"sign-up-section-item-sign-up"},gt={class:"text-center"},mt={key:1,class:"signup-section-login-block"},vt={class:"text-center"},ft={class:"signup-section-mobile"},ht={key:0,class:"signup-section-mobile-carousel-block"},yt={class:"signup-section-mobile-carousel-login"},bt={class:"signup-section-mobile-carousel-item1"},wt={class:"signup-section-mobile-carousel-item-text text-center",style:{height:"55vh"}},St={class:""},xt={class:"text-center",style:{"margin-top":"30px"}},_t={key:1,class:"signup-section-login-block"},kt={class:"text-center"},At={key:2,class:"signup-section-mobile-carousel-block"},Tt={class:"signup-section-mobile-carousel-item"},Ct={class:"signup-section-mobile-carousel-item-text"},It=["innerHTML"],Nt={class:"signup-section-mobile-item-carousel-navigation"},Mt=["onClick"];function Et(n,e,i,o,a,r){const p=Je,b=$e,g=nt,l=Ge,u=Ue;return y(),w(O,null,[t("div",it,[t("div",st,[t("div",lt,[_(b,{ref:"carouselRef",modelValue:o.currentSlide,"onUpdate:modelValue":e[0]||(e[0]=m=>o.currentSlide=m),autoplay:"2500"},{default:k(()=>[(y(!0),w(O,null,X(o.carouselItems,(m,R)=>(y(),we(p,{key:m.img},{default:k(()=>[t("div",{class:"signup-section-item-carousel-item",style:Se({background:"url("+m.img+")"})},[t("div",rt,[t("div",at,[(y(!0),w(O,null,X(o.carouselItems,(C,x)=>(y(),w("span",{onClick:I=>o.change(x+1),class:xe({active:o.currentSlide===x})},null,10,ut))),256))]),t("h2",null,_e(m.title),1),t("p",{innerHTML:m.text},null,8,ct)])],4)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),o.mobileShowNewUser?be("",!0):(y(),w("div",dt,[e[7]||(e[7]=t("div",{class:"signup-section-login-logo"}," Feis.AI ",-1)),t("div",pt,[t("div",gt,[e[2]||(e[2]=t("h1",null,[c("Sign up and create your "),t("br"),c(" first AI photos")],-1)),e[3]||(e[3]=t("span",null,"Already registered? ",-1)),e[4]||(e[4]=t("p",{class:"app-orange-text"}," Log in here",-1)),e[5]||(e[5]=t("p",{class:"app-light-gray-color"},[c(" Generate stunning photos, explore endless creative "),t("br"),c(" possibilities, and unlock a world of imagination! ")],-1)),_(g),e[6]||(e[6]=t("p",{class:"app-light-gray font-size-12"},[c(" By signing up, you agree to our Terms of Service "),t("br"),c(" and acknowledge that you have read our Privacy Policy. ")],-1))])])])),o.mobileShowNewUser?(y(),w("div",mt,[t("div",vt,[e[9]||(e[9]=t("h1",null,[c("Your account "),t("br"),c(" has been created")],-1)),e[10]||(e[10]=t("span",null,[c("Already registered? "),t("span",{class:"app-orange-text"},"Log in here")],-1)),e[11]||(e[11]=t("p",null,[c("Your account has been successfully "),t("br"),c(" registered! Let’s go ahead and set it up.")],-1)),_(u,{type:"primary",size:"large"},{default:k(()=>[_(l,{to:{name:"subscription"}},{default:k(()=>e[8]||(e[8]=[c(" Let’s setup your account ")])),_:1})]),_:1})])])):be("",!0)])]),t("div",ft,[o.mobileShowSignup?(y(),w("div",ht,[t("div",yt,[e[18]||(e[18]=t("div",{class:"signup-section-mobile-carousel-item-img",style:{height:"45vh",background:"url('/img/sign-up/sign-up.png')"}},null,-1)),t("div",bt,[t("div",wt,[e[17]||(e[17]=t("div",{class:"signup-section-login-logo"}," Feis.AI ",-1)),t("div",St,[t("div",xt,[e[12]||(e[12]=t("h1",{style:{margin:"0"}},[c("Sign up and create your "),t("br"),c(" first AI photos")],-1)),e[13]||(e[13]=t("span",null,"Already registered? ",-1)),e[14]||(e[14]=t("p",{class:"app-orange-text"}," Log in here",-1)),e[15]||(e[15]=t("p",{class:"app-light-gray-color"},[c(" Generate stunning photos, explore endless creative "),t("br"),c(" possibilities, and unlock a world of imagination! ")],-1)),_(g),e[16]||(e[16]=t("p",{class:"app-light-gray font-size-12"},[c(" By signing up, you agree to our Terms of Service "),t("br"),c(" and acknowledge that you have read our Privacy Policy. ")],-1))])])])])])])):o.mobileShowNewUser?(y(),w("div",_t,[t("div",kt,[e[20]||(e[20]=t("h1",null,[c("Your account "),t("br"),c(" has been created")],-1)),e[21]||(e[21]=t("span",null,[c("Already registered? "),t("span",{class:"app-orange-text"},"Log in here")],-1)),e[22]||(e[22]=t("p",null,[c("Your account has been successfully "),t("br"),c(" registered! Let’s go ahead and set it up.")],-1)),_(u,{type:"primary",size:"large"},{default:k(()=>[_(l,{to:{name:"subscription"}},{default:k(()=>e[19]||(e[19]=[c(" Let’s setup your account ")])),_:1})]),_:1})])])):(y(),w("div",At,[_(b,{ref:"mobileCarouselRef",modelValue:o.currentSlide,"onUpdate:modelValue":e[1]||(e[1]=m=>o.currentSlide=m),autoplay:"2500"},{default:k(()=>[(y(!0),w(O,null,X(o.carouselItems,(m,R)=>(y(),we(p,{key:m.img},{default:k(()=>[t("div",Tt,[t("div",{class:"signup-section-mobile-carousel-item-img",style:Se({background:"url("+m.img+")"})},null,4),t("div",Ct,[e[24]||(e[24]=t("div",{class:"signup-section-login-logo"},"Feis.AI",-1)),t("h2",null,_e(m.title),1),t("p",{innerHTML:m.text.replace("<br>","")},null,8,It),t("div",Nt,[(y(!0),w(O,null,X(o.carouselItems,(C,x)=>(y(),w("span",{onClick:I=>o.change(x+1),class:xe({active:o.currentSlide===x})},null,10,Mt))),256))]),_(u,{type:"primary",size:"large"},{default:k(()=>[_(l,{to:{name:"signup",query:{acrive:"signup"}}},{default:k(()=>e[23]||(e[23]=[c(" Sign up now ")])),_:1})]),_:1})])])]),_:2},1024))),128))]),_:1},8,["modelValue"])]))])],64)}const Pt=Te(ot,[["render",Et],["__scopeId","data-v-73e086f2"]]);export{Pt as default};