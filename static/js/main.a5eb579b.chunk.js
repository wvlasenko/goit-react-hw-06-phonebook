(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{11:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__2AIMV",input:"Filter_input__1If3g"}},12:function(t,e,n){t.exports={container:"App_container__39fTT",heading:"App_heading__26Re3"}},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),o=n.n(a),r=n(9),i=n.n(r),s=n(3),l=n(18),u=n(39),b=n(4),m=Object(b.b)("contact/Add",(function(t,e){return{payload:{id:Object(u.a)(),name:t,number:e}}})),j=Object(b.b)("contact/Remove"),d=Object(b.b)("contact/Filter"),f=n(6),O=n.n(f);var p=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onAddContact:function(e,n){return t(m(e,n))}}}))((function(t){var e=t.contacts,n=t.onAddContact,o=Object(a.useState)(""),r=Object(l.a)(o,2),i=r[0],s=r[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),m=b[0],j=b[1],d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"contactName":s(c);break;case"contactNumber":j(c)}};return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.some((function(t){return t.name===i}))?alert("".concat(i," is already in Contacts")):(n(i,m),s(""),j(""))},className:O.a.ContactForm,children:[Object(c.jsxs)("label",{className:O.a.label,children:["Name",Object(c.jsx)("input",{type:"text",value:i,onChange:d,name:"contactName",className:O.a.input})]}),Object(c.jsxs)("label",{className:O.a.label,children:["Phone Number",Object(c.jsx)("input",{type:"text",value:m,onChange:d,name:"contactNumber",className:O.a.input})]}),Object(c.jsx)("button",{type:"submit",className:O.a.buttonSubmit,children:"Add contact"})]})})),h=n(7),x=n.n(h);var _=function(t){var e=t.contact,n=t.onRemove,a=e.name,o=e.number;return Object(c.jsxs)("li",{className:x.a.container,children:[Object(c.jsxs)("div",{className:x.a.contactInfo,children:[a," : ",o]}),Object(c.jsx)("section",{className:x.a.action,children:Object(c.jsx)("button",{type:"button",onClick:n,children:"Delete"})})]})};var v=Object(s.b)((function(t){var e=t.contacts;return{visibleContacts:function(t,e){return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))}(e.items,e.filter)}}),(function(t){return{onRemoveItem:function(e){return t(j(e))}}}))((function(t){var e=t.visibleContacts,n=t.onRemoveItem;return Object(c.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){return Object(c.jsx)(_,{contact:t,onRemove:function(){return n(t.id)}},t.id)}))})})),C=n(11),N=n.n(C);var g=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(d(e.target.value))}}}))((function(t){var e=t.filter,n=t.onChangeFilter;return Object(c.jsx)("div",{className:N.a.filterContainer,children:Object(c.jsxs)("label",{className:N.a.label,children:["Find contact by name:",Object(c.jsx)("input",{type:"text",value:e,onChange:n,name:"filter",className:N.a.input})]})})})),y=n(12),F=n.n(y);var A,I=Object(s.b)((function(t){return{contacts:t.contacts.items}}),null)((function(t){var e=t.contacts;return Object(c.jsxs)("div",{className:F.a.container,children:[Object(c.jsx)("h2",{className:F.a.heading,children:"PhoneBook"}),Object(c.jsx)(p,{}),Object(c.jsx)("h2",{className:F.a.heading,children:"Contacts"}),e.length>1&&Object(c.jsx)(g,{}),e.length>0&&Object(c.jsx)(v,{})]})})),S=n(20),k=n(2),L=n(5),R=n(21),w=n.n(R),K=n(13),T=n(22),B=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(A={},Object(K.a)(A,m,(function(t,e){return[].concat(Object(T.a)(t),[e.payload])})),Object(K.a)(A,j,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),A)),z=Object(b.c)("",Object(K.a)({},d,(function(t,e){return e.payload}))),D=Object(k.c)({items:B,filter:z}),J={key:"contacts",storage:w.a,blacklist:["filter"]},M=Object(k.c)({contacts:Object(L.g)(J,D)}),P=Object(b.a)({reducer:M,devTools:!1,middleware:Object(b.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}})}),W={store:P,persistor:Object(L.h)(P)};n(36);i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(s.a,{store:W.store,children:Object(c.jsx)(S.a,{loading:null,persistor:W.persistor,children:Object(c.jsx)(I,{})})})}),document.querySelector("#root"))},6:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__BWWu-",label:"ContactForm_label__3Kxiz",input:"ContactForm_input__3nNOR",buttonSubmit:"ContactForm_buttonSubmit__2yKKF"}},7:function(t,e,n){t.exports={container:"ContactListItem_container__1K0XA",contactInfo:"ContactListItem_contactInfo__2ZTTB",action:"ContactListItem_action__1ow8v"}}},[[37,1,2]]]);
//# sourceMappingURL=main.a5eb579b.chunk.js.map