(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c,s=n(7),o=n.n(s),i=n(3),l=n(8),a=n(1),r=n(5),u=n.n(r),j=(n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function d(e,t,n,s){var o=Object(l.a)(e).filter((function(e){return e.length>s}));return o.sort((function(e,n){switch(t){case c.NONE:return 0;case c.ALPABET:return e.localeCompare(n);case c.LENGTH:return e.length-n.length;default:throw new Error("invalid sorting type")}})),n&&o.reverse(),o}!function(e){e[e.NONE=0]="NONE",e[e.ALPABET=1]="ALPABET",e[e.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),r=l[0],h=l[1],O=Object(a.useState)(c.NONE),p=Object(i.a)(O,2),v=p[0],N=p[1],x=Object(a.useState)(0),m=Object(i.a)(x,2),f=m[0],E=m[1];return Object(j.jsx)("div",{className:"App",children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:u()("button",{"is-active":v===c.ALPABET}),onClick:function(){N(c.ALPABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:u()("button",{"is-active":v===c.LENGTH}),onClick:function(){N(c.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:u()("button",{"is-active":r}),onClick:function(){h((function(e){return!e}))},children:"Reverse"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){N(c.NONE),h(!1),E(0)},children:"Reset"})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{name:"select",className:"select",value:f,onChange:function(e){E(+e.target.value)},children:[Object(j.jsx)("option",{value:"0",hidden:!0,selected:!0,children:"select"}),Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"}),Object(j.jsx)("option",{value:"7",children:"7"}),Object(j.jsx)("option",{value:"8",children:"8"}),Object(j.jsx)("option",{value:"9",children:"9"}),Object(j.jsx)("option",{value:"10",children:"10"})]})}),Object(j.jsx)("ul",{className:"Goods",children:d(b,v,r,f).map((function(e){return Object(j.jsx)("li",{className:"Goods__item",children:e})}))})]}):Object(j.jsx)("div",{className:"buttons",children:Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){s(!0)},children:"Start"})})})};o.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.886b1cc9.chunk.js.map