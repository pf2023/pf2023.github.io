(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(11),a=n.n(o),c=n(3),l=n(2),u=n(13),d=n(14),f=n(19),s=n(15),E=n(18),m=0,O="SHOW_ALL",p="SHOW_COMPLETED",v="SHOW_ACTIVE",b=Object(l.b)()(function(e){var t,n=e.dispatch;return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:function(e){var r;e.preventDefault(),t.value.trim()&&(n((r=t.value,{type:"ADD_TODO",id:m++,text:r})),t.value="")}},i.a.createElement("input",{ref:function(e){return t=e}}),i.a.createElement("button",{type:"submit"},"addTodo")))}),_=function(e){var t=e.todos,n=e.toggleTodo;return i.a.createElement("ul",null,t.map(function(e){return i.a.createElement("li",{key:e.id,style:{textDecoration:e.completed?"line-through":"none"},onClick:function(){return n(e.id)}},e.text)}))},h=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_ACTIVE":return e.filter(function(e){return!e.completed});case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});default:throw new Error("no such filter")}},T=Object(l.b)(function(e){return{todos:h(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(_),w=n(1),y=n.n(w),L=(n(30),function(e){var t=e.active,n=e.children,r=e.onClick;return i.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"10px"}},n)});L.propsTypes={active:y.a.bool.isRequired,children:y.a.node.isRequired,onClick:y.a.func.isRequired};var S=L,D=Object(l.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(S),I=function(){return i.a.createElement("div",null,i.a.createElement("span",null,"Show:"),i.a.createElement(D,{filter:O},"All"),i.a.createElement(D,{filter:v},"aCTIVE"),i.a.createElement(D,{filter:p},"Completed"))},g=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(T,null),i.a.createElement(I,null))}}]),t}(r.Component),j=n(20),C=n(17),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(C.a)(e),[{text:t.text,id:t.id,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(j.a)({},e,{completed:!e.completed}):e});default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},A=Object(c.c)({todos:k,visibilityFilter:W}),x=n(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=Object(c.e)(A,Object(c.d)(Object(c.a)(x.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(i.a.createElement(l.a,{store:H},i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.17d1ea53.chunk.js.map