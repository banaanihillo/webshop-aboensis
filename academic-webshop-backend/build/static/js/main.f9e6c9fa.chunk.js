(this["webpackJsonpacademic-webshop"]=this["webpackJsonpacademic-webshop"]||[]).push([[0],{36:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(29),i=n.n(s),o=(n(36),n(3)),u=n(2),l=n.n(u),j=n(4),b=n(6),d=n(7),p=n.n(d),m="/users",h=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(m,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(m,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("".concat(m,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(m,"/populate"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(m,"/username/").concat(t[0]));case 2:return n=e.sent,e.next=5,p.a.get("".concat(m,"/username/").concat(t[1]));case 5:return r=e.sent,e.next=8,p.a.get("".concat(m,"/username/").concat(t[2]));case 8:return a=e.sent,c={1:n.data[0],2:r.data[0],3:a.data[0]},e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(m,"/populated-items"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(m,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I="/items",y="",S=function(e){y="Bearer ".concat(e)},N=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(I,"/for-sale"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:y}},e.next=3,p.a.post(I,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(I,"/populate"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("".concat(I,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(e){var t=e.termsAccepted,n=e.acceptTerms,c=e.itemsForSale,s=e.setLoggedIn,i=e.setToken,u=e.setItemsForSale,d=Object(a.useState)(!1),p=Object(o.a)(d,2),m=p[0],h=p[1],f=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,r,a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("currentlyLoggedIn"),s({userName:null,_id:null}),i(null),(t=[1,2,3,4,5,6]).forEach((function(e,n){return t[n]={userName:"testuser".concat(e),password:"pass".concat(e),electronicMail:"testuser".concat(e,"@shop.aa")}})),e.next=7,x(t);case 7:return e.next=9,v(["testuser1","testuser2","testuser3"]);case 9:for(n=e.sent,r=[],a=1;a<=3;a++)for(c=1;c<=10;c++)r.push({name:"seller".concat(a,"-item").concat(c),price:a+c,forSale:!0,seller:{userName:"testuser".concat(a),_id:n[a]._id},date:new Date});return e.next=14,C(r);case 14:return e.next=16,N();case 16:return o=e.sent,e.next=19,g(o);case 19:h(!0),u(o);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"landing-page-container",children:[Object(r.jsxs)("section",{children:["Items currently for sale: ",c.length]}),m?Object(r.jsx)("section",{children:" Database successfully populated. "}):Object(r.jsxs)("section",{children:["Click on the button below to populate the database",Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){return f()},children:"Populate"})]}),Object(r.jsxs)("section",{children:["By clicking on the button below, you agree to our",Object(r.jsx)("em",{children:" intentionally ambiguous "}),"terms and conditions.",Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){n(!0)},children:"Agree"}),t?Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/shop",children:"Items for sale"})}):Object(r.jsx)("div",{children:"You must accept the terms and conditions."})]})]})},P=function(e){var t=e.termsAccepted,n=e.acceptTerms,c=e.setItemsInCart,s=e.loggedIn,i=e.itemsInCart,u=e.filteredItems,l=e.showNotification,j=Object(a.useState)([]),d=Object(o.a)(j,2),p=d[0],m=d[1],h=Object(a.useState)(1),f=Object(o.a)(h,2),O=f[0],x=f[1],v=Object(a.useState)([]),g=Object(o.a)(v,2),w=g[0],I=g[1];Object(a.useEffect)((function(){u?m(u):N().then((function(e){var t=e.filter((function(e){return e.seller!==s._id}));t.sort((function(e,t){return Date.parse(t.date)-Date.parse(e.date)})),m(t)}))}),[s,u]);var y=4*O,S=y-4,k=[];Object(a.useEffect)((function(){p.length>0&&I(p.slice(S,y))}),[p,S,y]);var C=function(e){x(e.target.value)};return t?p.length<1?Object(r.jsx)("div",{children:"Nothing to see here."}):Object(r.jsxs)("div",{children:[s._id?Object(r.jsxs)("span",{children:[" Logged in: ",s.userName," "]}):Object(r.jsxs)("span",{children:["You are not logged in. ",Object(r.jsx)("br",{}),"Sales and purchases are reserved for registered users only. ",Object(r.jsx)("br",{}),Object(r.jsx)(b.b,{to:"/login",children:" Log in here "})]}),Object(r.jsx)("ul",{className:"item-list-container",children:w.map((function(e){return Object(r.jsxs)("li",{children:["Item: ",e.name," ",Object(r.jsx)("br",{}),"Price: ",e.price," ",Object(r.jsx)("br",{}),e.description," ",Object(r.jsx)("br",{}),"Posted on ",e.date," ",Object(r.jsx)("br",{}),s._id?Object(r.jsx)("button",{onClick:function(){var t;t=e,i.find((function(e){return e._id===t._id}))?l("Already in your cart.","errorMessage",2e3):c(i.concat(t))},children:"Add to cart"}):null]},e._id)}))}),function(){for(var e=1;e<=Math.ceil(p.length/4);e++)k.push(e);return Object(r.jsx)("ul",{className:"pagination",children:k.map((function(e){return Object(r.jsx)("li",{value:e,onClick:C,children:e},e)}))})}()]}):Object(r.jsxs)("div",{children:["Looks like you have not accepted the legal agreement.",Object(r.jsx)("br",{}),"By clicking below, you agree to the terms and conditions.",Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){n(!0)},children:"Agree"})]})},A=n(5),D=function(e){var t=e.showNotification,n=Object(A.f)(),c=Object(a.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),b=j[0],d=j[1],p=Object(a.useState)(""),m=Object(o.a)(p,2),f=m[0],O=m[1],x=Object(a.useState)(""),v=Object(o.a)(x,2),g=v[0],w=v[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:" Sign up "}),Object(r.jsxs)("form",{className:"signup-form",children:[Object(r.jsx)("label",{htmlFor:"electronicMailInput",children:"Electronic mail"}),Object(r.jsx)("input",{type:"email",id:"electronicMailInput",value:i,required:!0,onChange:function(e){var t=e.target;return u(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"userNameInput",children:" User name "}),Object(r.jsx)("input",{type:"text",id:"userNameInput",autoComplete:"username",value:b,required:!0,onChange:function(e){var t=e.target;return d(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"passwordInput",children:" Password "}),Object(r.jsx)("input",{type:"password",id:"passwordInput",autoComplete:"new-password",value:f,required:!0,onChange:function(e){var t=e.target;return O(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"passwordInputAgain",children:"Password again"}),Object(r.jsx)("input",{type:"password",id:"passwordInputAgain",autoComplete:"new-password",value:g,required:!0,onChange:function(e){var t=e.target;return w(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),f!==g?t("The passwords inputs do not match.","errorMessage"):(h({electronicMail:i,userName:b,password:f}),n.push("/login"),t("You have successfully signed up.\n                A nonexistent confirmation mail has been sent.\n                Make sure you check that out, or don't."))},children:"Sign up"})]})]})},L=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.setLoggedIn,n=e.showNotification,c=Object(A.f)(),s=Object(a.useState)(""),i=Object(o.a)(s,2),u=i[0],b=i[1],d=Object(a.useState)(""),p=Object(o.a)(d,2),m=p[0],h=p[1],f=function(){var e=Object(j.a)(l.a.mark((function e(r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,L({userName:u,password:m});case 4:(a=e.sent)?(t(a),S(a.token),window.localStorage.setItem("currentlyLoggedIn",JSON.stringify(a)),c.push("/"),n("Welcome, ".concat(a.userName,"."))):n("The user ".concat(u," could not be found."),"errorMessage"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n("Incorrect log-in credentials.","errorMessage");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:" Log in "}),Object(r.jsxs)("form",{className:"login-form",children:[Object(r.jsx)("label",{htmlFor:"logInUserName",children:" User name "}),Object(r.jsx)("input",{type:"text",id:"logInUserName",value:u,required:!0,onChange:function(e){var t=e.target;b(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"logInPassword",children:" Password "}),Object(r.jsx)("input",{type:"password",id:"logInPassword",autoComplete:"on",value:m,required:!0,onChange:function(e){var t=e.target;h(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:f,type:"submit",children:"Log in"})]})]})},T=function(e){var t=e.toggleItemForm,n=e.itemsForSale,c=e.setItemsForSale,s=e.showNotification,i=Object(a.useState)(""),u=Object(o.a)(i,2),b=u[0],d=u[1],p=Object(a.useState)(0),m=Object(o.a)(p,2),h=m[0],f=m[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),v=x[0],g=x[1],w=function(){var e=Object(j.a)(l.a.mark((function e(r){var a,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),a={name:b,price:h,description:v},e.next=4,k(a);case 4:i=e.sent,o=n.concat(i),c(o),s("Successfully added ".concat(a.name,".")),t(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{className:"add-item-form",children:[Object(r.jsx)("label",{htmlFor:"newItemName",children:" Name: "}),Object(r.jsx)("input",{type:"text",id:"newItemName",value:b,required:!0,placeholder:"Item name",onChange:function(e){var t=e.target;d(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"newItemPrice",children:" Price: "}),Object(r.jsx)("input",{type:"number",min:1,max:9e3,id:"newItemPrice",value:h,required:!0,onChange:function(e){var t=e.target;f(Number(t.value))}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"newItemDescription",children:"Description:"}),Object(r.jsx)("textarea",{rows:5,id:"newItemDescription",value:v,placeholder:"Optional description",onChange:function(e){var t=e.target;g(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",onClick:w,children:"Submit"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"button",onClick:function(){return t(!1)},className:"button-cancel",children:"Cancel"})]})},q=function(e){var t=e.userid,n=e.itemsForSale,c=e.setItemsForSale,s=e.showNotification,i=Object(a.useState)({"Items for sale":[],"Items sold":[],"Items bought":[]}),u=Object(o.a)(i,2),l=u[0],j=u[1],d=Object(a.useState)(!1),p=Object(o.a)(d,2),m=p[0],h=p[1];if(Object(a.useEffect)((function(){if(!t)return"No data to fetch yet";f(t).then((function(e){j({"Items for sale":e.itemsForSale,"Items sold":e.itemsSold,"Items bought":e.itemsBought})}))}),[t,n]),!t)return Object(r.jsx)("div",{children:" What are you doing here "});return Object(r.jsxs)("div",{children:[m?Object(r.jsx)(T,{toggleItemForm:h,itemsForSale:n,setItemsForSale:c,showNotification:s}):Object(r.jsx)("button",{onClick:function(){return h(!0)},children:"Add an item"}),Object(r.jsx)("ul",{className:"my-items-container",children:function(){for(var e=[],t=function(){var t=Object(o.a)(a[n],2),c=t[0],s=t[1];e.push(Object(r.jsxs)("span",{children:[Object(r.jsxs)("h2",{children:[" ",c," "]}),s.map((function(e){return Object(r.jsxs)("li",{children:["Item: ",e.name," ",Object(r.jsx)("br",{}),"Price: ",e.price," ",Object(r.jsx)("br",{}),e.description," ",Object(r.jsx)("br",{}),"Items for sale"!==c?null:Object(r.jsx)(b.b,{to:"/my-items/".concat(e._id),children:"Edit"})]},e._id)}))]},c))},n=0,a=Object.entries(l);n<a.length;n++)t();return e}()})]})},E=n(15),B=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={loggedIn:t,itemNames:n},e.next=3,p.a.post("/electronic-mail",r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(e){var t=e.itemsInCart,n=e.setItemsInCart,c=e.loggedIn,s=e.setItemsForSale,i=e.itemsForSale,o=e.showNotification;Object(a.useEffect)((function(){N().then((function(e){s(e)}))}),[s]);var u=function(){var e=Object(j.a)(l.a.mark((function e(){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return r=e.sent,a=t.every((function(e){var a=r.some((function(t){return t._id===e._id}));if(!a){var c=Object(E.a)(Object(E.a)({},e),{},{forSale:!1}),s=t.map((function(e){return e._id===c._id?c:e})).filter((function(e){return!0===e.forSale}));n(s)}return a})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=!1;return t.some((function(r){var a=i.find((function(e){return e._id===r._id}));if(a.price!==r.price){var c=Object(E.a)(Object(E.a)({},r),{},{price:a.price}),s=t.map((function(e){return e._id===a._id?c:e}));return n(s),e=!0}return e}))},d=function(){var e=Object(j.a)(l.a.mark((function e(r){var a,i,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,u();case 3:if(e.sent){e.next=7;break}return o("An item in your cart is no longer in stock.\n                The item has now been removed from your cart.","errorMessage"),e.abrupt("return");case 7:return e.next=9,b();case 9:if(!e.sent){e.next=13;break}return o("The price of an item in your cart has changed.\n                The updated price is now shown in your cart.","errorMessage"),e.abrupt("return");case 13:return e.next=15,O(c._id,t);case 15:return e.next=17,N();case 17:return a=e.sent,s(a),i=t.map((function(e){return e.name})),e.next=22,B(c,i);case 22:j=e.sent,n([]),o("Transaction successful.\n            You may preview the confirmation mail at:\n            ".concat(j.mailPreview),"success",1e4);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t.length<1?Object(r.jsx)("div",{children:"Your cart is empty."}):Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{className:"cart-container",children:t.map((function(e){return Object(r.jsxs)("li",{children:["Item: ",e.name,Object(r.jsx)("br",{}),"Price: ",e.price,Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){return function(e){var r=t.filter((function(t){return t._id!==e}));n(r)}(e._id)},className:"button-cancel",children:"Remove from cart"})]},e._id)}))}),Object(r.jsx)("h3",{children:" Total "}),t.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)," \u20ac",Object(r.jsx)("br",{}),Object(r.jsxs)("p",{className:"cart-buttons",children:[Object(r.jsx)("button",{type:"submit",onClick:d,children:"Check out"}),Object(r.jsx)("button",{type:"button",className:"button-cancel",onClick:function(){return n([])},children:"Remove all items"})]})]})},Y=function(e){var t=e.itemsForSale,n=e.setFilteredItems;return Object(r.jsxs)("span",{className:"App-header-search-bar",children:["Search:",Object(r.jsx)("input",{onChange:function(e){var r=t.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));r.sort((function(e,t){return Date.parse(t.date)-Date.parse(e.date)})),n(r)}})]})},J=function(e){var t=e.userid,n=e.showNotification,c=Object(a.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1],b=Object(a.useState)(""),d=Object(o.a)(b,2),p=d[0],m=d[1],h=Object(a.useState)(""),f=Object(o.a)(h,2),O=f[0],x=f[1],v=function(){var e=Object(j.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),p){e.next=5;break}n("The password should not be empty.","errorMessage"),e.next=12;break;case 5:if(p!==O){e.next=11;break}return e.next=8,w(t,{password:p});case 8:n("Password successfully changed."),e.next=12;break;case 11:n("The passwords do not match.","errorMessage");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"my-account",children:Object(r.jsxs)("form",{className:"my-account-form",children:[Object(r.jsx)("label",{htmlFor:"hiddenUserName"}),Object(r.jsx)("input",{type:"text",hidden:!0,autoComplete:"username",readOnly:!0,id:"hiddenUserName"}),Object(r.jsx)("label",{htmlFor:"oldPasswordInput",children:"Old password"}),Object(r.jsx)("input",{type:"password",required:!0,autoComplete:"current-password",id:"oldPasswordInput",value:i,onChange:function(e){var t=e.target;u(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"newPasswordInput",children:"New password"}),Object(r.jsx)("input",{type:"password",required:!0,autoComplete:"new-password",id:"newPasswordInput",value:p,onChange:function(e){var t=e.target;m(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"newPasswordAgain",children:"New password again"}),Object(r.jsx)("input",{type:"password",required:!0,autoComplete:"new-password",id:"newPasswordAgain",value:O,onChange:function(e){var t=e.target;x(t.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",onClick:v,children:"Submit"})]})})},W=function(e){var t=e.itemsForSale,n=e.setItemsForSale,c=e.individualItem,s=e.showNotification,i=Object(A.g)().id,u=Object(a.useState)(c.price),b=Object(o.a)(u,2),d=b[0],p=b[1],m=Object(A.f)(),h=function(){var e=Object(j.a)(l.a.mark((function e(r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,F(i,{price:d});case 3:a=e.sent,n(t.filter((function(e){return e._id!==a._id?e:a}))),m.push("/my-items"),s("Price successfully modified.");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{className:"edit-item-form",children:[Object(r.jsx)("label",{htmlFor:"oldItemName",children:"Name"}),Object(r.jsx)("input",{disabled:!0,id:"oldItemName",value:c.name}),Object(r.jsx)("label",{htmlFor:"editedPrice",children:"New price"}),Object(r.jsx)("input",{type:"number",id:"editedPrice",min:0,max:9e3,value:d,onChange:function(e){var t=e.target;p(t.value)}}),Object(r.jsx)("label",{htmlFor:"oldItemDescription",children:"Description"}),Object(r.jsx)("input",{disabled:!0,id:"oldItemDescription",value:c.description}),Object(r.jsx)("button",{type:"submit",onClick:h,children:"Submit"}),Object(r.jsx)("button",{type:"button",onClick:function(){return m.push("/my-items")},className:"button-cancel",children:"Cancel"})]})},R=function(e){var t=e.message,n=e.errorMessage;return t||n?n?Object(r.jsx)("span",{className:"notification-error-message",children:n}):Object(r.jsx)("span",{className:"notification-message",children:t}):Object(r.jsx)("span",{className:"notification-empty"})},z=(n(59),n.p+"static/media/cart-96x96.b15320a4.svg"),G=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(a.useState)({_id:null}),d=Object(o.a)(j,2),p=d[0],m=d[1],h=Object(a.useState)([]),f=Object(o.a)(h,2),O=f[0],x=f[1],v=Object(a.useState)(null),g=Object(o.a)(v,2),w=g[0],I=g[1],y=Object(a.useState)(null),k=Object(o.a)(y,2),C=k[0],F=k[1],L=Object(a.useState)(null),T=Object(o.a)(L,2),E=T[0],B=T[1];Object(a.useEffect)((function(){N().then((function(e){l(e)}))}),[p,w]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("currentlyLoggedIn");if(e){var t=JSON.parse(e);m(t),S(t.token)}}),[]);var G=Object(A.h)("/my-items/:id"),H=G?u.find((function(e){return e._id===G.params.id})):null,K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"message",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;console.log(t),"errorMessage"===t?(B(e),setTimeout((function(){B(null)}),n)):(F(e),setTimeout((function(){F(null)}),n))},Q=function(){return p._id?Object(r.jsxs)("span",{className:"App-header-links",children:[Object(r.jsx)(b.b,{to:"/shop",children:" Shop "}),Object(r.jsx)(b.b,{to:"/my-items",children:" My items "}),Object(r.jsx)(b.b,{to:"/account",children:" Account "}),Object(r.jsx)(b.b,{to:"/",onClick:function(){window.localStorage.removeItem("currentlyLoggedIn"),m({userName:null,_id:null}),S(null),K("You have logged out.")},children:"Log out"}),Object(r.jsx)(b.b,{to:"/shop/cart",children:Object(r.jsx)("img",{src:z,alt:"Cart",style:{height:"32px",width:"32px"}})})]}):Object(r.jsxs)("span",{className:"App-header-links",children:[Object(r.jsx)(b.b,{to:"/shop",children:" Shop "}),Object(r.jsx)(b.b,{to:"/login",children:" Log in "}),Object(r.jsx)(b.b,{to:"/signup",children:" Sign up "})]})};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("h1",{children:" Academic Webshop "}),Object(r.jsx)(Y,{itemsForSale:u,setFilteredItems:I}),Object(r.jsx)(Q,{})]}),Object(r.jsx)("main",{className:"App-main",children:Object(r.jsxs)(A.c,{children:[Object(r.jsx)(A.a,{path:"/account",children:Object(r.jsx)(J,{userid:p._id,showNotification:K})}),Object(r.jsx)(A.a,{path:"/my-items/:id",children:Object(r.jsx)(W,{itemsForSale:u,setItemsForSale:l,individualItem:H,showNotification:K})}),Object(r.jsx)(A.a,{path:"/my-items",children:Object(r.jsx)(q,{userid:p._id,itemsForSale:u,setItemsForSale:l,showNotification:K})}),Object(r.jsx)(A.a,{path:"/shop/cart",children:Object(r.jsx)(U,{itemsInCart:O,setItemsInCart:x,loggedIn:p,setItemsForSale:l,itemsForSale:u,showNotification:K})}),Object(r.jsx)(A.a,{path:"/shop",children:Object(r.jsx)(P,{termsAccepted:n,acceptTerms:c,loggedIn:p,itemsInCart:O,setItemsInCart:x,filteredItems:w,showNotification:K})}),Object(r.jsx)(A.a,{path:"/login",children:Object(r.jsx)(M,{setLoggedIn:m,showNotification:K})}),Object(r.jsx)(A.a,{path:"/signup",children:Object(r.jsx)(D,{showNotification:K})}),Object(r.jsx)(A.a,{path:"/",children:Object(r.jsx)(_,{termsAccepted:n,acceptTerms:c,itemsForSale:u,setLoggedIn:m,setToken:S,setItemsForSale:l})})]})}),Object(r.jsx)("footer",{className:"App-footer",children:Object(r.jsx)(R,{message:C,errorMessage:E})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b.a,{children:Object(r.jsx)(G,{})})}),document.getElementById("root")),H()}},[[60,1,2]]]);
//# sourceMappingURL=main.f9e6c9fa.chunk.js.map