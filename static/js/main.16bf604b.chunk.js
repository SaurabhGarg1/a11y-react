(this["webpackJsonpa11y-react"]=this["webpackJsonpa11y-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),i=n.n(r),o=(n(9),n(10),n(3)),a=(n(11),n(0)),u=function(e){var t=e.onClose,n=e.domNodeFn,r=Object(c.useRef)(null),o=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=r.current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex="0"], [contenteditable]'),n=e[0],c=e[e.length-1];n.focus();var i=l(r.current),a=function(e){9===e.keyCode?e.shiftKey&&i.activeElement===n?(e.preventDefault(),c.focus()):e.shiftKey||i.activeElement!==c||(e.preventDefault(),n.focus()):27===e.keyCode&&t()};return i.addEventListener("keydown",a,!0),function(){i.removeEventListener("keydown",a,!0),o.current&&o.current.focus()}}),[t]),Object(c.useMemo)((function(){o.current=l(n()).activeElement}),[n]),i.a.createPortal(Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"dialog-window",ref:r,role:"dialog","aria-labelledby":"dialog_title",children:[Object(a.jsx)("h3",{id:"dialog_title",children:"This is my dialog"}),Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Enter your name"}),Object(a.jsx)("button",{id:"searchbutton",type:"submit",onClick:t,children:"Ok"})]}),Object(a.jsx)("div",{className:"dialog-mask"})]}),s(n))},s=function(e){return e="function"===typeof e?e():e,i.a.findDOMNode(e)};function l(e){return e&&e.ownerDocument||document}var d=function(e){var t=e.domNodeFn,n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],s=r[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return s(!0)},className:"show-dialog",children:"Show dialog"}),i&&Object(a.jsx)(u,{onClose:function(){return s(!1)},domNodeFn:t})]})},j=(n(13),n(14),function(e){var t=e.item,n=e.isSelected,r=e.onMouseEnter,i=e.onMouseLeave,o=Object(c.useRef)(null);return Object(c.useEffect)((function(){n&&o.current.focus()}),[n]),Object(a.jsx)("li",{role:"menuitem",tabIndex:n?0:-1,ref:o,onMouseEnter:r,onMouseLeave:i,children:t})}),b=["Inbox","Draft","Sent Items","Junk"];function f(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(0),u=Object(o.a)(i,2),s=u[0],l=u[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){r(!n)},"aria-expanded":n,className:"mail",children:"Mail"}),n&&Object(a.jsx)("ul",{role:"menu",className:"menu","aria-label":"Open menu",onKeyDown:function(e){return function(e){switch(e.keyCode){case 37:case 38:l(s>0?s-1:b.length-1);break;case 39:case 40:s<b.length-1?l(s+1):l(0)}}(e)},children:b.map((function(e,t){return Object(a.jsx)(j,{item:e,isSelected:s===t,onMouseEnter:function(){return l(t)},onMouseLeave:function(){return l(-1)}},t)}))})]})}var h=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Select a maintenance drone:"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"huey",name:"drone",value:"huey"}),Object(a.jsx)("label",{htmlFor:"huey",children:"Huey"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"dewey",name:"drone",value:"dewey"}),Object(a.jsx)("label",{htmlFor:"dewey",children:"Dewey"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"louie",name:"drone",value:"louie"}),Object(a.jsx)("label",{htmlFor:"louie",children:"Louie"})]})]})};var O=function(){var e=Object(c.useRef)(null);return Object(a.jsxs)("div",{ref:e,children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("h1",{children:"Accessible components"})}),Object(a.jsxs)("main",{children:[Object(a.jsx)("h2",{children:"Menu"}),Object(a.jsx)(f,{}),Object(a.jsx)("h2",{children:"Radio (Native)"}),Object(a.jsx)(h,{}),Object(a.jsx)(d,{domNodeFn:function(){return e.current}})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};i.a.render(Object(a.jsx)(O,{}),document.getElementById("root")),m()}],[[15,1,2]]]);
//# sourceMappingURL=main.16bf604b.chunk.js.map