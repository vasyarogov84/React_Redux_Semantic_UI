(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{254:function(e,t,a){e.exports=a(444)},286:function(e,t,a){},441:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(62),c=a.n(s),i=a(34),l=a(46),o=a(458),u=a(460),m=a(461),p=a(29),d=a.n(p),h=a(94),f=a(54),b=a(95),_=a(31),g=a(32),E=a(35),v=a(33),O=a(36),y=a(453),j=a(454),k=a(220),w=a.n(k),x=a(221),C=a.n(x).a.create({baseURL:"https://circle-users.herokuapp.com/users"}),S=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={first_name:"",last_name:"",isSignedIn:null},a.googleAuth=Object(f.a)(d.a.mark(function e(){var t,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.isSignedIn){e.next=5;break}a.auth.signOut(),a.props.redirect(a.state),e.next=9;break;case 5:return e.next=7,a.auth.signIn();case 7:t=a.auth.currentUser.get().w3,n=t.ofa,r=t.wea,a.props.redirect({first_name:n,last_name:r});case 9:case"end":return e.stop()}},e,this)})),a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"135244684637-6irrdc7qkt7ufpf9tdpev5inifaqjnal.apps.googleusercontent.com",scope:"email"}).then(function(){if(e.auth=window.gapi.auth2.getAuthInstance(),e.auth.isSignedIn.get()){var t=e.auth.currentUser.get().w3,a=t.ofa,n=t.wea;e.setState(function(){return{first_name:a,last_name:n,isSignedIn:!0}})}})})}},{key:"render",value:function(){return r.a.createElement("button",{onClick:this.googleAuth,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")}}]),t}(n.Component),N=(a(286),function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={first_name:"",last_name:"",id:w()(),best_time:0,attempts:0},a.setValues=function(e){var t=e.target.name,n=e.target.value.trim();a.setState(Object(b.a)({},t,n))},a.checkButton=function(){var e=a.state,t=e.first_name,n=e.last_name;return t&&n?"":"disabled"},a.redirect=function(){var e=Object(f.a)(d.a.mark(function e(t){var n,r,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.first_name,r=t.last_name,e.next=3,C.get("/");case 3:return s=e.sent,e.next=6,s.data.find(function(e){return e.first_name===n&&e.last_name===r});case 6:if(!e.sent){e.next=13;break}return e.next=10,a.props.addUser({first_name:n,last_name:r});case 10:a.props.history.push("./pregame"),e.next=16;break;case 13:return e.next=15,a.props.addUser(Object(h.a)({},a.state,{first_name:n,last_name:r}));case 15:a.props.history.push("./pregame");case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui raised very padded text container segment form"},r.a.createElement(j.a,null,r.a.createElement(j.a.Field,null,r.a.createElement("label",null,"First Name"),r.a.createElement("input",{placeholder:"First Name",name:"first_name",value:this.state.first_name,onChange:this.setValues})),r.a.createElement(j.a.Field,null,r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{placeholder:"Last Name",name:"last_name",value:this.state.last_name,onChange:this.setValues})),r.a.createElement(y.a,{className:"ui primary button ".concat(this.checkButton()),to:"/pregame",onClick:function(){e.redirect(e.state)}},"Submit"),r.a.createElement(S,{redirect:this.redirect})))}}]),t}(n.Component)),U=Object(i.b)(null,{addUser:function(e){return function(){var t=Object(f.a)(d.a.mark(function t(a){var n,r,s,c,i,l;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(2!==Object.keys(e).length){t.next=21;break}return console.log("I'm here"),t.next=4,C.get("/");case 4:return n=t.sent,t.next=7,n.data.find(function(t){var a=t.first_name,n=t.last_name;return a===e.first_name&&n===e.last_name});case 7:return r=t.sent,t.next=10,C.delete("/".concat(r.id));case 10:return t.next=12,C.post("/",r);case 12:return t.next=14,C.get("/");case 14:return s=t.sent,t.next=17,s.data.filter(function(t){return 0===t.attempts&&t.id!==e.id&&C.delete("/".concat(t.id)),0!==t.attempts||t.id===e.id});case 17:c=t.sent,a({type:"ADD_USER",payload:c}),t.next=30;break;case 21:return t.next=23,C.post("/",e);case 23:return t.next=25,C.get("/");case 25:return i=t.sent,t.next=28,i.data.filter(function(t){return 0===t.attempts&&t.id!==e.id&&C.delete("/".concat(t.id)),0!==t.attempts||t.id===e.id});case 28:l=t.sent,a({type:"ADD_USER",payload:l});case 30:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(N),A=a(185),D=a(455),R=a(459),M=a(218),I=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!0},a.handleOpen=function(){return a.setState({modalOpen:!0})},a.handleClose=function(){return a.setState({modalOpen:!1})},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{open:this.state.modalOpen,onClose:this.handleClose,basic:!0,size:"small"},r.a.createElement(R.a,{icon:"hotjar",content:"Position:"}),r.a.createElement(D.a.Content,null,r.a.createElement("h3",null,"Best Result for ".concat(this.props.user.first_name,": ").concat(this.props.user.best_time/1e3," seconds, after ").concat(this.props.user.attempts," ").concat(1===this.props.user.attempts?"attempt":"attempts"))),r.a.createElement(D.a.Actions,null,r.a.createElement(y.a,{className:"positive ui button",to:"/",onClick:this.handleClose},r.a.createElement(M.a,{className:"checkmark"})," New Player"),r.a.createElement(y.a,{className:"positive ui button",to:"/pregame",color:"green",onClick:this.handleClose},r.a.createElement(M.a,{className:"checkmark"})," Play again")))}}]),t}(n.Component);var T=Object(i.b)(function(e){return{user:e.users[e.users.length-1]}})(I),F=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={clicks:0,results:[],start_time:0,curent_time:0,best_time:0,modal:!1},a.setResult=function(){if(a.state.clicks<6){var e=(new Date).getTime(),t=a.state.start_time,n=e-(a.state.results.length?a.state.results.reduce(function(e,t){return e+t}):0)-t,r=a.state.results.sort(function(e,t){return e-t});a.setState({clicks:a.state.clicks+1,results:Object(A.a)(a.state.results).concat([n]),curent_time:n,best_time:r[0]})}else a.setState({modal:!0}),a.props.updateUser(a.state)},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(e){var t=this.props.curent_user,a=t.first_name,n=t.last_name,r=t.attempts,s=t.id,c="".concat(a," ").concat(n);this.setState({first_name:a,last_name:n,start_time:(new Date).getTime(),name:c,attempts:r+1,id:s,clicks:0,modal:!1})}},{key:"render",value:function(){var e=function(){return Math.floor(30*Math.random()+30)},t={width:e(),height:e(),backgroundColor:function(){for(var e="#",t=0;t<6;t++)e+="ABCDEF1234567890"[Math.floor(16*Math.random())];return e}(),marginTop:e()+Math.floor(600*Math.random()),marginLeft:e()+Math.floor(600*Math.random()),borderRadius:e()-10};return r.a.createElement("div",null,r.a.createElement("div",{className:"ui horizontal segments"},r.a.createElement("h3",{style:{color:"red"},className:"ui segment"},this.props.curent_user.first_name," ",this.props.curent_user.last_name),r.a.createElement("h3",{className:"ui segment"},"Best Time: ",r.a.createElement("span",{style:{color:"green"}},(this.state.best_time/1e3).toFixed(2),"  (seconds)")),r.a.createElement("h3",{className:"ui segment"},"Time: ",r.a.createElement("span",{style:{color:"red"}},(this.state.curent_time/1e3).toFixed(2)," (seconds)"))),r.a.createElement("div",{style:t,onClick:this.setResult}),this.state.modal?r.a.createElement(T,null):"")}}]),t}(n.Component);var B=Object(i.b)(function(e){return{curent_user:e.users[e.users.length-1]}},{updateUser:function(e){var t=e.id,a=e.first_name,n=e.last_name,r=e.results,s=e.attempts,c=e.best_time;return function(){var e=Object(f.a)(d.a.mark(function e(i){var l,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/".concat(t));case 2:return l=e.sent,c>l.data.best_time&&0!==l.data.best_time&&(c=l.data.best_time),e.next=6,C.patch("/".concat(t),{first_name:a,last_name:n,results:r,attempts:s,best_time:c});case 6:o=e.sent,i({type:"UPDATE_USER",payload:o.data});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(F),P=a(456),L=(a(441),function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).renderUsers=function(e){return a.props.users.map(function(e,t){return r.a.createElement(P.a.Row,{key:t,style:{backgroundColor:t===a.props.users.length-1?"lightgreen":"white"}},r.a.createElement(P.a.Cell,null,e.first_name," ",e.last_name),r.a.createElement(P.a.Cell,null,e.attempts?e.attempts:0),r.a.createElement(P.a.Cell,null,(e.best_time/1e3).toFixed(3)))})},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(P.a,{celled:!0},r.a.createElement(P.a.Header,null,r.a.createElement(P.a.Row,null,r.a.createElement(P.a.HeaderCell,null,"Name"),r.a.createElement(P.a.HeaderCell,null,"Attempts"),r.a.createElement(P.a.HeaderCell,null,"Best Result (seconds)"))),r.a.createElement(P.a.Body,null,this.renderUsers())),r.a.createElement(y.a,{className:"ui primary button",to:"/game"},"Start Game"))}}]),t}(n.Component));var H=Object(i.b)(function(e){return{users:e.users}})(L),V=Object(l.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return Object(A.a)(t.payload);case"UPDATE_USER":return e.map(function(e){if(e.id===t.payload.id){var a=t.payload,n=a.best_time,r=a.attempts;return 0!==e.best_time&&e.best_time<n&&(n=e.best_time),Object(h.a)({},e,{best_time:n,attempts:r})}return e});default:return e}}}),q=a(242),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d;c.a.render(r.a.createElement(i.a,{store:Object(l.e)(V,z(Object(l.a)(q.a)))},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(m.a,{path:"/",component:U,exact:!0}),r.a.createElement(m.a,{path:"/game",component:B}),r.a.createElement(m.a,{path:"/pregame",component:H}))))),document.querySelector("#root"))}},[[254,2,1]]]);
//# sourceMappingURL=main.3dc1fddc.chunk.js.map