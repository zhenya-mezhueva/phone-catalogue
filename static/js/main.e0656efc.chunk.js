(this["webpackJsonpphone-catalogue"]=this["webpackJsonpphone-catalogue"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(4),i=t.n(a),j=(t(9),t(2)),r=(t(10),t(0)),l=s.a.memo((function(e){var c=e.phones;return console.log(c),Object(r.jsx)("div",{className:"col-md-10",children:Object(r.jsx)("ul",{className:"phones",children:c.map((function(e){return Object(r.jsxs)("li",{className:"thumbnail",children:[Object(r.jsx)("a",{href:"#!/phones/".concat(e.id),className:"thumb",children:Object(r.jsx)("img",{alt:"Motorola XOOM\u2122 with Wi-Fi",src:e.imageUrl})}),Object(r.jsx)("div",{className:"phones__btn-buy-wrapper",children:Object(r.jsx)("a",{className:"btn btn-success",href:"#buy",children:"Add"})}),Object(r.jsx)("a",{href:"#!/phones/".concat(e.id),children:e.name}),Object(r.jsx)("p",{children:e.snippet})]},e.id)}))})})}));var o=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),o=i[0],h=i[1],b=Object(n.useState)("alphabetical"),d=Object(j.a)(b,2);d[0],d[1],Object(n.useEffect)((function(){fetch("/api/phones.json").then((function(e){return e.json()})).then(s)}),[]);var u=Object(n.useMemo)((function(){var e=function(e){return e.toLowerCase()};return t.filter((function(c){return e(c.name).includes(e(o))}))}),[t,o]);return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-2",children:[Object(r.jsxs)("section",{children:[Object(r.jsxs)("p",{children:["Search:",Object(r.jsx)("input",{placeholder:"Type phone name",type:"text",value:o,onChange:function(e){h(e.target.value)}})]}),Object(r.jsxs)("p",{children:["Sort by:",Object(r.jsxs)("select",{children:[Object(r.jsx)("option",{value:"name",children:"Alphabetical"}),Object(r.jsx)("option",{value:"age",children:"Newest"})]})]})]}),Object(r.jsxs)("section",{children:[Object(r.jsx)("p",{children:"Shopping Cart"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Phone 1"}),Object(r.jsx)("li",{children:"Phone 2"}),Object(r.jsx)("li",{children:"Phone 3"})]})]})]}),Object(r.jsx)(l,{phones:u})]})})})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.e0656efc.chunk.js.map