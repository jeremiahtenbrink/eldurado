(this.webpackJsonpeldurado=this.webpackJsonpeldurado||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(31),i=c.n(r),o=(c(40),c(3)),u=c(11),l=(c(41),c.p+"static/media/Header.4a77c5c9.png"),j=c(15),d=c(12),m=function(e){var t=e.name,c=e.menu,a=e.subMenu,s=e.setSubMenu;return Object(n.jsxs)("li",{onClick:function(){return s(t)},children:[t,Object(n.jsx)(j.a,{className:"chevron",icon:a===t?d.b:d.a}),a===t&&Object(n.jsx)("ul",{children:c})]})},b=function(e){var t=e.to,c=e.name,a=e.handleClick,s=void 0===a?null:a;return Object(n.jsx)("li",{onClick:function(){s&&s(c)},children:Object(n.jsx)(u.b,{activeClassName:"selected",to:t,children:c})},c)},O=function(e){return{accountSummary:[Object(n.jsx)(b,{handleClick:e,to:"/summary/overview",name:"Overview"},"Overview"),Object(n.jsx)(b,{handleClick:e,to:"/summary/invoice",name:"Invoice History"},"Invoice History"),Object(n.jsx)(b,{handleClick:e,to:"/summary/payment",name:"Payment History"},"Payment History"),Object(n.jsx)(b,{handleClick:e,to:"/summary/statement",name:"Statement History"},"Statement History"),Object(n.jsx)(b,{handleClick:e,to:"/summary/payment",name:"Make a Payment"},"Make a Payment")],standingOrder:[Object(n.jsx)(b,{handleClick:e,to:"/order/summary",name:"Summary"}),Object(n.jsx)(b,{handleClick:e,to:"/order/calendar",name:"Print Calendar"})],nextDelivery:[Object(n.jsx)(b,{handleClick:e,to:"/delivery/summary",name:"Summary"}),Object(n.jsx)(b,{handleClick:e,to:"/delivery/summary",name:"Print Calendar"})]}},h=function(e){var t=e.logout,c=Object(a.useState)("mobile-menu"),s=Object(o.a)(c,2),r=s[0],i=s[1],u=Object(a.useState)("menu"),j=Object(o.a)(u,2),d=j[0],h=j[1],x=Object(a.useState)(""),f=Object(o.a)(x,2),v=f[0],g=f[1],p=function(e){g(v===e?"":e)},y=function(){h("menu"),setTimeout((function(){i("mobile-menu")}),500)},C=O(y),N=C.accountSummary,S=C.nextDelivery,k=C.standingOrder;return Object(n.jsxs)("div",{className:"header",style:{backgroundImage:"url(".concat(l,")")},children:[Object(n.jsxs)("div",{onClick:function(){i("mobile-menu open"),setTimeout((function(){h("menu open")}),50)},className:"hamburger",children:[Object(n.jsx)("div",{className:"line"}),Object(n.jsx)("div",{className:"line"}),Object(n.jsx)("div",{className:"line"})]}),Object(n.jsx)("div",{onClick:function(e){return e.preventDefault()},className:r,children:Object(n.jsxs)("div",{className:d,children:[Object(n.jsxs)("div",{onClick:y,className:"close",children:[Object(n.jsx)("div",{className:"line"}),Object(n.jsx)("div",{className:"line"})]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)(b,{handleClick:y,name:"Home",to:"/summary/overview"}),Object(n.jsx)(m,{name:"Account Summary",menu:N,subMenu:v,setSubMenu:p}),Object(n.jsx)(m,{name:"Standing Order",menu:k,subMenu:v,setSubMenu:p}),Object(n.jsx)(m,{name:"Next Delivery",menu:S,subMenu:v,setSubMenu:p}),Object(n.jsx)(b,{handleClick:y,name:"FAQ",to:"/faq"}),Object(n.jsx)(b,{name:"Settings",handleClick:y,to:"/settings"}),Object(n.jsx)("li",{onClick:function(){y(),t()},children:"Logout"})]})]})})]})},x=c(18),f=c(33),v=function(e){var t=e.label,c=e.name,a=e.onChange,s=e.value,r=e.inputRef,i=e.type,o=void 0===i?"text":i;return Object(n.jsxs)("div",{className:"form-input",children:[t&&Object(n.jsx)("label",{htmlFor:c,children:t}),Object(n.jsx)("input",{ref:r,type:o,value:s,name:c,onChange:function(e){return a(c,e.target.value)}})]})},g=function(e){var t=e.setLogin,c=Object(a.useState)({}),s=Object(o.a)(c,2),r=s[0],i=s[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),j=l[0],d=l[1],m=Object(a.useRef)(null),b=Object(a.useRef)(null),O=function(e,t){i(Object(f.a)({},e,t))};return Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("div",{className:"login-form",children:[Object(n.jsx)("h2",{children:"Please login to continue to the portal."}),Object(n.jsxs)("form",{children:[Object(n.jsx)(v,{label:"Username",inputRef:m,name:"username",onChange:O}),Object(n.jsx)(v,{label:"Password",inputRef:b,name:"password",onChange:O,type:"password"}),Object(n.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var c=r;if(!r.username){if(!m.current||!m.current.value)return void d("Username is required");c.username=m.current.value}if(!r.password){if(!b.current||!b.current.value)return void d("Password field is required");c.password=b.current.value}t(c)},children:"Login"}),j&&Object(n.jsx)("h4",{className:"form-error",children:j})]})]})})},p=function(e){var t=e.name,c=e.list,s=e.click,r=Object(a.useState)(!1),i=Object(o.a)(r,2),u=i[0],l=i[1];return Object(n.jsxs)("div",{onClick:function(){return l((function(e){return!e}))},className:"dropdown",children:[Object(n.jsxs)("div",{className:"dropdown-text",children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)(j.a,{className:"chevron",icon:u?d.b:d.a})]}),u&&Object(n.jsx)("div",{className:"dropdown-items",children:c.map((function(e){return Object(n.jsx)("h4",{className:"accounts-numbers",onClick:function(){return s(e)},children:e},e)}))})]})},y=function(e){var t=e.clientInformation,c=e.setActiveAccount;return Object(n.jsxs)("div",{className:"accounts",children:[Object(n.jsxs)("h2",{children:["Welcome ",t.clientName]}),Object(n.jsx)("h3",{className:"email",children:t.email}),t.accounts.length>0&&Object(n.jsx)(p,{name:"My Accounts",click:c,list:t.accounts})]})},C=function(e){var t=e.addClass;return Object(n.jsxs)("div",{className:"actions ".concat(t),children:[Object(n.jsx)("div",{className:"top",children:Object(n.jsx)("h3",{children:"I would like to:"})}),Object(n.jsxs)("div",{className:"bottom",children:[Object(n.jsx)("h4",{children:"Place an equipment work order"}),Object(n.jsx)("h4",{children:"Place an emergency order"}),Object(n.jsx)("h4",{children:"View Product listing"}),Object(n.jsx)("h4",{children:"Upgrade my equipment"}),Object(n.jsx)("h4",{children:"Contact us"}),Object(n.jsx)("h4",{children:"Account Settings"})]})]})},N=function(e){var t=e.clientInformation,c=e.setActiveAccount;return Object(n.jsxs)("div",{className:"left-column",children:[Object(n.jsx)(y,{clientInformation:t,setActiveAccount:c}),Object(n.jsx)(C,{addClass:"desktop"})]})},S=c(4),k=function(e){var t=e.account,c=e.accountInfo;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Account Summary"}),Object(n.jsxs)("h1",{children:["Account: ",t]}),Object(n.jsxs)("h2",{children:["Balance: ",c.balance,"$"]}),Object(n.jsxs)("h2",{children:["Due: ",c.dueDate]})]})},M=function(e){var t=e.order,c=e.prod;return Object(n.jsxs)("div",{className:"order",children:[Object(n.jsx)("img",{src:c.PROD_IMG}),Object(n.jsxs)("div",{className:"name-des",children:[Object(n.jsx)("h4",{children:c.PROD_TITLE}),Object(n.jsx)("p",{children:c.PROD_QTYDESC})]}),Object(n.jsx)("h4",{children:t.number})]})},D=function(e){var t=e.account,c=e.products,s=(e.categories,Object(a.useState)([])),r=Object(o.a)(s,2),i=r[0],u=r[1];return Object(a.useEffect)((function(){console.log("getting next order"),u([{product_id:126,number:10},{product_id:30,number:2},{product_id:22,number:6},{product_id:112,number:10},{product_id:100,number:2},{product_id:2,number:6}])}),[t]),Object(n.jsxs)("div",{className:"orders",children:[Object(n.jsxs)("div",{className:"orders-header",children:[Object(n.jsx)("h5",{children:"Product"}),Object(n.jsx)("h5",{children:"Quantity"})]}),c.map((function(e){var t=i.find((function(t){return t.product_id===e.PROD_ID}));if(t)return Object(n.jsx)(M,{order:t,prod:e})})),Object(n.jsxs)("div",{className:"bottom-text",children:[Object(n.jsx)("h4",{children:"Add/Change Items"}),Object(n.jsx)("h4",{children:"Skip Delivery"})]})]})},I=function(e){var t=e.menu;return Object(n.jsx)("div",{className:"sub-header",children:Object(n.jsx)("ul",{children:t})})},P=function(){var e=O(),t={"Account Summary":e.accountSummary,"Standing Order":e.standingOrder,"Next Delivery":e.nextDelivery},c=Object(S.g)(),s=Object(a.useState)(t.summary),r=Object(o.a)(s,2),i=r[0],u=r[1];Object(a.useEffect)((function(){var e=c.pathname;e.includes("summary")?u(t["Account Summary"]):e.includes("order")?u(t["Standing Order"]):e.includes("delivery")?u(t["Next Delivery"]):e.includes("faq")?u(t.faq):e.includes("settings")&&u(t.settins)}),[]);var l=function(e){u(t[e])};return Object(n.jsx)("div",{className:"portal-header",children:Object(n.jsxs)("nav",{children:[Object(n.jsxs)("ul",{className:"portal-nav",children:[Object(n.jsx)(b,{to:"/summary/overview",name:"Account Summary",handleClick:l}),Object(n.jsx)(b,{to:"/order",name:"Standing Order",handleClick:l}),Object(n.jsx)(b,{to:"/delivery",name:"Next Delivery",handleClick:l}),Object(n.jsx)(b,{to:"/faq",name:"FAQ",handleClick:l}),Object(n.jsx)(b,{to:"/settings",name:"Settings",handleClick:l})]}),Object(n.jsx)(I,{menu:i})]})})},w=function(e){var t=e.account,c=e.products,s=e.categories,r=e.logout,i=Object(a.useState)({}),u=Object(o.a)(i,2),l=u[0],j=u[1],d=Object(S.f)();return Object(a.useEffect)((function(){console.log("Getting account information"),j({account:t,balance:Math.floor(20*Math.random()),dueDate:"December 20th 2020"}),"/"===d.location.pathname&&d.push("/summary")}),[t]),Object(n.jsxs)("div",{className:"portal",children:[Object(n.jsx)("h4",{onClick:r,className:"logout",children:Object(n.jsx)("a",{children:"Logout"})}),Object(n.jsx)(P,{}),Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{path:"/summary",children:Object(n.jsx)(k,{account:t,accountInfo:l})}),Object(n.jsx)(S.a,{path:"/order",children:Object(n.jsx)(D,{products:c,categories:s,account:t})})]}),Object(n.jsx)(C,{addClass:"phone"})]})},A=c(34),_=c.n(A),E=function(e){var t=e.logout,c=Object(a.useState)({accounts:[]}),s=Object(o.a)(c,2),r=s[0],i=s[1],u=Object(a.useState)(0),l=Object(o.a)(u,2),j=l[0],d=l[1],m=Object(a.useState)([]),b=Object(o.a)(m,2),O=b[0],h=b[1],x=Object(a.useState)([]),f=Object(o.a)(x,2),v=f[0],g=f[1],p=function e(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach((function(t){t.prods&&t.prods.forEach((function(e){e.cat_id=t.cat_id,t.sub_id&&(e.sub_id=t.sub_id),c.push(e)})),t.subcats&&(t.subcats.forEach((function(e){e.cat_id=t.cat_id})),e(t.subcats,c))})),c};return Object(a.useEffect)((function(){console.log("Getting client information");var e={clientName:"30dps",email:"admin@30pps.com",clientId:Math.ceil(1400*Math.random()),accounts:[Math.ceil(1400*Math.random()),Math.ceil(1400*Math.random()),Math.ceil(1400*Math.random())]};console.log("Getting product information."),_.a.get("https://plans.eldoradosprings.com/api/getProds.cfm?home=0").then((function(e){var t=p(e.data);h(t),g(e.data)})).catch((function(e){console.log(e)})),i(e),d(e.accounts[0])}),[]),Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsx)(N,{clientInformation:r,setActiveAccount:d}),Object(n.jsx)(w,{logout:t,products:O,categories:v,account:j})]})},L=function(e){var t=e.clientInfo,c=e.logout,a=e.setLogin;return t?Object(n.jsx)(E,{logout:c,clientInfo:t}):Object(n.jsx)(g,{setLogin:a})};var R=function(){var e=Object(x.useSession)("Eldurado"),t=e.session,c=e.save,s=e.clear,r=Object(a.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1];Object(a.useEffect)((function(){t&&j(t)}),[]);var d=function(){s(),j(!1)};return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(h,{logout:d}),Object(n.jsx)(L,{logout:d,setLogin:function(e){j(e),c(e)},clientInfo:l})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),q()}},[[74,1,2]]]);
//# sourceMappingURL=main.6bc3eeb4.chunk.js.map