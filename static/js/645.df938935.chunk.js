"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[645],{6645:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r,i,c=n(9439),s=n(2791),l=["title","titleId"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function a(e,t){var n=e.title,c=e.titleId,a=u(e,l);return s.createElement("svg",o({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),n?s.createElement("title",{id:c},n):null,r||(r=s.createElement("g",{clipPath:"url(#clip0_264_756)"},s.createElement("path",{d:"M6.99935 12.8334C10.221 12.8334 12.8327 10.2217 12.8327 7.00002C12.8327 3.77836 10.221 1.16669 6.99935 1.16669C3.77769 1.16669 1.16602 3.77836 1.16602 7.00002C1.16602 10.2217 3.77769 12.8334 6.99935 12.8334Z",stroke:"#23262A",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M7 3.5V7L9.33333 8.16667",stroke:"#23262A",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),i||(i=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_264_756"},s.createElement("rect",{width:14,height:14,fill:"white"})))))}var d=s.forwardRef(a),p=(n.p,n(184)),h=function(e){var t=e.recipe,n=t.title,r=t.description,i=t.time;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:n}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("button",{type:"button",children:"Add to favorite recipes"}),(0,p.jsxs)("div",{children:[(0,p.jsx)(d,{}),(0,p.jsx)("p",{children:i})]})]})},f=function(e){var t=e.image,n=e.title,r=e.weight,i=e.description;return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:t,alt:"".concat(n," ingredient"),width:40,height:30}),(0,p.jsx)("p",{children:n}),(0,p.jsx)("p",{children:i})]}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("input",{type:"checkbox"})]})},j=function(e){var t=e.ingredients;return(0,p.jsx)("ul",{children:t.map((function(e){return(0,p.jsx)(f,{image:e.thb,title:e.ttl,weight:e.t?e.t:"",description:e.desc},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())}))})},x=function(){return(0,p.jsx)("div",{children:(0,p.jsx)("h3",{children:"Recipe Preparation"})})},g=n(5861),m=n(4687),v=n.n(m),w=n(1243);w.Z.defaults.baseURL="https://determined-ruby-nematode.cyclic.app",w.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ5YjIxMTllZWNlNGVkNDgwNTcyOCIsImlhdCI6MTY4MDc5ODE0NSwiZXhwIjoxNjgwODcwMTQ1fQ.OeW8xobzII1pRe-duqQZAFitoUcElcF5tYcjHxWSzqE";var y=function(){var e=(0,g.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Z.get("/recipes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=n(7689),I=function(){var e=(0,s.useState)(null),t=(0,c.Z)(e,2),n=t[0],r=t[1],i=(0,b.UO)().recipeId;return console.log(i),(0,s.useEffect)((function(){y(i).then(r)}),[i]),console.log(n),null!==n&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{recipe:n}),(0,p.jsxs)("div",{children:[(0,p.jsx)(j,{ingredients:n.ingredients}),(0,p.jsx)(x,{instructions:n.instructions})]})]})}}}]);
//# sourceMappingURL=645.df938935.chunk.js.map