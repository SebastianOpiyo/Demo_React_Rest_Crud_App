(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(20),s=c.n(a),o=(c(50),c.p,c(51),c(33)),r=c(88),j=c(84),u=c(86),h=c(85),l=c(87),d=c(82),b=c(17),p=c(40),O=c.n(p),x=c(41),g=c.n(x),f=c(2),m=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(o.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function v(){var e=m();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(r.a,{position:"static",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(f.jsx)(O.a,{})}),Object(f.jsx)(h.a,{className:e.title,variant:"h6",noWrap:!0,children:"Chucknorris Jokes"}),Object(f.jsxs)("div",{className:e.search,children:[Object(f.jsx)("div",{className:e.searchIcon,children:Object(f.jsx)(g.a,{})}),Object(f.jsx)(l.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var k=c(18),w=function(e){var t=e.match.params.category;console.log(t);var c=Object(n.useState)(null),i=Object(k.a)(c,2),a=i[0],s=i[1],o=Object(n.useState)(!1),r=Object(k.a)(o,2),j=r[0],u=r[1],h=Object(n.useState)([]),l=Object(k.a)(h,2),d=l[0],b=l[1];return Object(n.useEffect)((function(){fetch("https://api.chucknorris.io/jokes/random?category=".concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e),b(e),u(!0)}),(function(e){u(!0),s(e)}))}),[]),a?Object(f.jsxs)("div",{children:["Error: ",a.message]}):j?d?Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:["Joke ID: ",d.id]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:d.icon_url,alt:"Joke Image"}),Object(f.jsx)("small",{children:"Icon: Chuck Norris "})]}),Object(f.jsxs)("div",{children:["Joke: ",d.value]})]}):void 0:Object(f.jsx)("div",{children:"Loading..."})},I=c(31),S=function(){var e=Object(n.useState)(null),t=Object(k.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!1),s=Object(k.a)(a,2),o=s[0],r=s[1],j=Object(n.useState)([]),u=Object(k.a)(j,2),h=u[0],l=u[1];return Object(n.useEffect)((function(){fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(e){r(!0),l(e)}),(function(e){r(!0),i(e)}))}),[]),c?Object(f.jsxs)("div",{children:["Error: ",c.message]}):o?Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:h.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(I.b,{to:"/categories/".concat(e),children:e})})}))})}):Object(f.jsx)("div",{children:"Loading..."})},y=c(5),C=function(){return Object(f.jsxs)(I.a,{children:[Object(f.jsx)(y.a,{exact:!0,path:"/",component:v}),Object(f.jsx)(y.a,{exact:!0,path:"/",component:S}),Object(f.jsx)(y.a,{exact:!0,path:"/categories/:category",component:w}),Object(f.jsx)(y.a,{path:"/joke",component:w})]})};var L=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(C,{})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),N()}},[[60,1,2]]]);
//# sourceMappingURL=main.ea177696.chunk.js.map