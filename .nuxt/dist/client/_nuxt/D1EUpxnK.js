import{u as v,p as S,R as o,_ as N,c as i,a as t,F as b,q as _,T as P,o as e,t as p,d as f,b as g,w as d,ad as h,O as L,S as w,v as A}from"./8Lr_yPf5.js";/* empty css        *//* empty css        */const C={setup(){const c=v();return{store:c,cancelSubscription:async()=>{const{data:r,error:u}=await S("/subscription/stripe/cancelSubscription","POST",{});u.value||await c.getUserApi()},items:[{paymentLink:"https://buy.stripe.com/test_6oE2c0gTV2CW81OeUU",title:"Starter Plan",price:"$9.00",stripeProductId:"prod_RDvLKWHEurGKof",tariffs:[{id:1,possible:!0,tarifName:"Generate up to 25 images per week"},{id:2,possible:!0,tarifName:"Add 1 face per week"},{id:3,possible:!0,tarifName:"Access Quick Training"},{id:4,possible:!0,tarifName:"Personal License"}]},{paymentLink:"https://buy.stripe.com/test_6oE2c0gTV2CW81OeUU",title:"Pro Plan",price:"$29.00",stripeProductId:"prod_RFchTKZlLsJyqF",tariffs:[{id:1,possible:!0,tarifName:"Generate up to 25 images per week"},{id:2,possible:!0,tarifName:"Add 1 face per week"},{id:3,possible:!0,tarifName:"Access Quick Training"},{id:4,possible:!0,tarifName:"Personal License"}]},{paymentLink:"#",isFree:!0,title:"Free Plan",price:"$9.00",stripeProductId:"",tariffs:[{id:1,possible:!1,tarifName:"Generate up to 25 images per week"},{id:2,possible:!1,tarifName:"Add 1 face per week"},{id:3,possible:!1,tarifName:"Access Quick Training"},{id:4,possible:!1,tarifName:"Personal License"}]}]}}},F=o("/icon/check_small.svg"),T=o("/icon/close_small.svg"),V=o("/img/apple_pay.svg"),k=o("/img/google_Pay.svg"),x=o("/img/PayPal.svg"),U=o("/img/Visa.svg"),B=o("/img/express.svg"),E=o("/img/master.svg"),I={class:"subscription"},G={class:"subscription-items"},O={class:"subscription-item__head"},R={class:"card-item__title"},K={class:"card-item__price"},Q=["href"],W={class:"tariffs-list"},Y={class:"icon"},q={key:0},D={key:1},z={class:"tarif-name"},H=["href"];function J(c,s,y,r,u,Z){const l=A;return e(),i("div",I,[s[6]||(s[6]=t("div",{class:"page-head"},[t("h1",{class:"page-title"},"Choose Your Subscription Plan"),t("p",{class:"page-description"}," You can upgrade or cancel subsription plan at any time. ")],-1)),t("div",G,[(e(!0),i(b,null,_(r.items,a=>{var m;return e(),i("div",{class:"subscription-item",key:a.price},[t("div",null,[t("div",O,[t("div",R,p(a.title),1),t("div",K,[t("div",null,[f(p(a.price)+" ",1),s[2]||(s[2]=t("span",null,"/week",-1))]),g(l,{class:"subscribe",type:"primary"},{default:d(()=>[a.isFree?(e(),i("a",{key:0,onClick:s[0]||(s[0]=(...n)=>r.cancelSubscription&&r.cancelSubscription(...n))}," Subscribe ")):(e(),i("a",{key:1,href:a.paymentLink}," Subscribe ",8,Q))]),_:2},1024)])]),t("div",W,[(e(!0),i(b,null,_(a.tariffs,n=>(e(),i("div",{class:"list-item",key:n.id},[t("div",Y,[n.possible?(e(),i("span",q,s[3]||(s[3]=[t("img",{src:F,alt:""},null,-1)]))):(e(),i("span",D,s[4]||(s[4]=[t("img",{src:T,alt:""},null,-1)])))]),t("p",z,p(n.tarifName),1)]))),128))])]),g(l,{type:"primary",class:h(["subscribe-btn",a.isFree?"":"active"])},{default:d(()=>[a.isFree?(e(),i("a",{key:0,onClick:s[1]||(s[1]=(...n)=>r.cancelSubscription&&r.cancelSubscription(...n))}," Subscribe ")):(e(),i("a",{key:1,href:a.paymentLink}," Subscribe ",8,H))]),_:2},1032,["class"]),((m=r.store.getUser)==null?void 0:m.stripeProductId)===a.stripeProductId?(e(),L(l,{key:0,type:"danger",onClick:r.cancelSubscription},{default:d(()=>s[5]||(s[5]=[f(" Cancel or to free ")])),_:1},8,["onClick"])):w("",!0)])}),128))]),s[7]||(s[7]=P('<div class="subscription-payments__methods"><div class="title">Accepted payments methods</div><div class="subscription-payments-methods-list"><button class="list-item"><img src="'+V+'" alt=""></button><button class="list-item"><img src="'+k+'" alt=""></button><button class="list-item"><img src="'+k+'" alt=""></button><button class="list-item"><img src="'+x+'" alt=""></button><button class="list-item"><img src="'+U+'" alt=""></button><button class="list-item"><img src="'+B+'" alt=""></button><button class="list-item"><img src="'+E+'" alt=""></button></div></div><p class="page-mobile-description"> You can upgrade or cancel subsription plan at any time. </p>',2))])}const $=N(C,[["render",J]]);export{$ as default};
