(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(51)},45:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(8),s=n.n(l),i=n(16),u=n(2),h=n(3),m=n(5),d=n(4),p=n(6),b=n(17),f=n.n(b),g=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},v=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(g,{key:n,id:t[n].id,name:t[n].firstName,email:t[n].email})}))},w=function(e){e.searchField;var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("form",null,r.a.createElement("input",{className:"pa3 b b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})))},E=function(e){var t=e.onSearchChange;return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Robo Friends Cards"),r.a.createElement(w,{onSearchChange:t}))},y=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"500px"}},e.children)},C=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. We're checking out what's wrong!"):this.props.children}}]),t}(a.Component),k=(n(45),n(47),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={robots:[],searchField:""},n.onSearchChange=function(e){n.setState({searchField:e.target.value})},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.hatchways.io/api/assessment/students");case 2:t=e.sent,this.setState({robots:t.data.students});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter(function(e){return e.firstName.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement(E,{onSearchChange:this.onSearchChange}),r.a.createElement(y,null,r.a.createElement(C,null,r.a.createElement(v,{robots:a})))):r.a.createElement("h1",null,"Loading...")}}]),t}(a.Component));n(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.3a7dc834.chunk.js.map