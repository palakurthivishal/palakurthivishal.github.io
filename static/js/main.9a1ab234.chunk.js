(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(42)},33:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(33),n(13)),l=n.n(i),s=n(20),u=n(7),p=n(8),f=n(11),m=n(10),h=n(12),d=n(3),v=(n(40),n(22));function b(){var e=Object(v.a)(["\n    padding: 3px;\n    background: #CCC;\n"]);return b=function(){return e},e}var j=n(23).a.div(b()),E={height:"100px",width:"100px"},O=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement("img",{style:E,src:this.props.profileImg}))}}]),t}(r.a.Component),w=Object(d.b)(function(e){return{profileImg:e.profileData&&e.profileData.personal.img}},void 0)(O);function g(){return r.a.createElement("div",null,r.a.createElement(w,null))}function y(){return"main container"}function C(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(g,null)),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(y,null)))}var D=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).fetchUserData(),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"fetchUserData",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/profile.json",e.next=3,fetch("/profile.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.props.loadProfileData(n);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))}}]),t}(a.Component),k=Object(d.b)(void 0,function(e){return{loadProfileData:function(t){e({type:"FETCH_PROFILE_DATA_SUCCESS",payload:t})}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROFILE_DATA_SUCCESS":return Object.assign({},e,{profileData:t.payload})}return e},S=n(5),_=n(26),A=Object(S.createStore)(x,Object(_.composeWithDevTools)());c.a.render(r.a.createElement(d.a,{store:A},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.9a1ab234.chunk.js.map