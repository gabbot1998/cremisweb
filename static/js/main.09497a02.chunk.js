(this.webpackJsonpcremisweb=this.webpackJsonpcremisweb||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},23:function(e,t,a){e.exports=a(48)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),s=a.n(r);a(28),a(21),a(29);var c=a(2),l=a(3),i=a(5),u=a(4),m=a(1),d=a(6),h=(o.a.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={signature:"Gabriel",message:"Borglund"},a.changeMessage=a.changeMessage.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.changeName=a.changeName.bind(Object(m.a)(a)),a.postToApi=a.postToApi.bind(Object(m.a)(a)),a.render=a.render.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"changeMessage",value:function(e){this.setState({message:e.target.value})}},{key:"changeName",value:function(e){this.setState({signature:e.target.value}),console.log(this.state.signature)}},{key:"postToApi",value:function(){console.log();var e='{"name":"'+this.state.signature+'","message":"'+this.state.message+'"}';fetch("http://localhost:4000/note/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:e})}},{key:"handleSubmit",value:function(e){this.postToApi(),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Name :",o.a.createElement("input",{type:"text",defaultValue:this.state.signature||"name",onChange:this.changeName})),o.a.createElement("label",null,"message :",o.a.createElement("input",{type:"text",defaultValue:this.state.message,onChange:this.changeMessage})),o.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(o.a.Component)),p=(a(30),function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"quote"},o.a.createElement("div",{class:"message"},'"',this.props.message,'"'),o.a.createElement("div",{class:"name"},"-",this.props.name))}}]),t}(o.a.Component)),b=(a(31),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={array:new Array},a.updateNoteBoard=a.updateNoteBoard.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateNoteBoard",value:function(e){this.setState({array:e})}},{key:"componentDidMount",value:function(){this.fetchAllMessages()}},{key:"fetchAllMessages",value:function(){var e=this;fetch("http://localhost:4000/note/all",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.displayAllMessages(t)}))}},{key:"displayAllMessages",value:function(e){console.log(e.length);for(var t=new Array,a=0;a<e.length;a+=2)t.push(o.a.createElement(p,{name:e[a],message:e[a+1]}));this.updateNoteBoard(t),console.log(Array.isArray(this.state.array))}},{key:"render",value:function(){return o.a.createElement("div",{class:"noteBoard"},this.state.array)}}]),t}(o.a.Component)),v=(n.Component,a(16)),f=a.n(v),g=a(22),O=a(7),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={padding:e.padding},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.padding)}},{key:"render",value:function(){return o.a.createElement("div",{style:{marginTop:this.state.padding}})}}]),t}(o.a.Component),j=(a(43),function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"stickyTopBar",style:this.props.currentColor},this.props.text))}}]),t}(o.a.Component)),E=(a(44),"CREMIS"),S="nameBoxRed",k=["nameBoxRed","nameBoxOrange","nameBoxYellow","nameBoxGreen","nameBoxBlue","nameBoxPurple"],C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:E,nameBox:S,index:0},a.updateNameBox=a.updateNameBox.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateNameBox",value:function(e){this.setState({nameBox:k[this.state.index]})}},{key:"componentDidMount",value:function(){this.setState({name:E})}},{key:"render",value:function(){return o.a.createElement("div",{class:this.state.nameBox,style:this.props.currentColor}," ",this.state.name)}}]),t}(o.a.Component),B=(a(45),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={text:e.text},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"styledButton"},this.props.text)}}]),t}(o.a.Component)),w=(a(46),a(47),[{backgroundColor:"rgba(234, 62, 55, 0.9)"},{backgroundColor:"rgba(246, 143, 31, 0.9)"},{backgroundColor:"rgba(246, 213, 9, 0.9)"},{backgroundColor:"rgba(168, 203, 56, 0.9)"},{backgroundColor:"rgba(32, 154, 207, 0.9)"},{backgroundColor:"rgba(170, 82, 160, 0.9)"}]),T=(clearInterval(),function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(i.a)(this,Object(u.a)(t).call(this,e)),document.body.style.overflow="hidden",a.state={colorIndex:0,currentColor:{},updateColor:!0,topBarText:"",menuItems:[],hasRenderedTopBar:!1,currentPage:o.a.createElement("div",null,"This is the current page")},a.updateColor=a.updateColor.bind(Object(m.a)(a)),a.handleScroll=a.handleScroll.bind(Object(m.a)(a)),a.mouseOverTopBar=a.mouseOverTopBar.bind(Object(m.a)(a)),a.mouseNotOnTopBar=a.mouseNotOnTopBar.bind(Object(m.a)(a)),a.switchScreen=a.switchScreen.bind(Object(m.a)(a)),a.sleep=a.sleep.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){O.animateScroll.scrollToTop()}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),this.interval=setInterval((function(){e.state.updateColor&&e.setState({colorIndex:(e.state.colorIndex+1)%w.length}),e.updateColor()}),1e3)}},{key:"componentWillUnmount",value:function(){console.log("unmountes"),window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){window.pageYOffset>167?this.state.hasRenderedTopBar||(this.setState({updateColor:!1}),this.setState({topBarText:"CREMIS"}),this.setState({hasRenderedTopBar:!0})):(this.setState({updateColor:!0}),this.setState({topBarText:""}),this.setState({menuItems:[]}),this.setState({hasRenderedTopBar:!1}))}},{key:"updateColor",value:function(){this.setState({currentColor:w[this.state.colorIndex]})}},{key:"mouseOverTopBar",value:function(){this.setState({updateColor:!0}),this.setState({menuItems:["HOME","PROJECTS","ABOUT"]})}},{key:"mouseNotOnTopBar",value:function(){this.setState({updateColor:!1}),this.setState({menuItems:[]})}},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"renderNewScreen",value:function(e){switch(e){case"about":this.setState({currentPage:o.a.createElement("div",null,"I have successfully switched to the about page. My name is Gabriel what is yours?")});break;case"projects":this.setState({currentPage:o.a.createElement("div",null,"Now I am actually at the freaking projects page, but low and behold I have no Projects...")})}}},{key:"switchScreen",value:function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.animateScroll.scrollToBottom(),e.next=3,this.sleep(600);case 3:console.log(t),this.renderNewScreen(t),O.animateScroll.scrollTo(850);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement("body",{id:"topOfBody"},o.a.createElement("div",{onMouseOver:this.mouseOverTopBar,onMouseLeave:this.mouseNotOnTopBar},o.a.createElement(j,{currentColor:this.state.currentColor,text:this.state.topBarText,onClick:O.animateScroll.scrollToTop}),o.a.createElement("div",{class:"menuItem",style:{left:"70px"},onClick:O.animateScroll.scrollToTop},this.state.menuItems[0]),o.a.createElement("div",{class:"menuItem",style:{left:"150px"},newScreen:"projects",onClick:function(){return e.switchScreen("projects")}},this.state.menuItems[1]),o.a.createElement("div",{class:"menuItem",style:{left:"230px"},newScreen:"about",onClick:function(){return e.switchScreen("about")}},this.state.menuItems[2])),o.a.createElement("div",null,o.a.createElement(C,{currentColor:this.state.currentColor}),o.a.createElement("div",{class:"title"},"Welcome to my personal page. Let's see what we can achieve together!",o.a.createElement(y,{padding:200})),o.a.createElement("div",null,o.a.createElement("div",{class:"buttonField"},o.a.createElement(O.Link,{activeClass:"active",className:"test1",to:"view",spy:!1,smooth:!0,duration:800,offset:-75},o.a.createElement(B,{text:"ENTER"})))),o.a.createElement("div",{class:"title"},o.a.createElement(y,{padding:400}),o.a.createElement(O.Element,{name:"view",className:"element"},"Navigation")),o.a.createElement("div",null,o.a.createElement(y,{padding:30})),o.a.createElement("div",{class:"body"},this.state.currentPage)),o.a.createElement("div",null,o.a.createElement(y,{padding:1500})))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement("html",null,o.a.createElement("body",null,o.a.createElement("div",{id:"app"},o.a.createElement("div",{id:"scroll-container",style:{overflow:"hidden"}},o.a.createElement(T,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.09497a02.chunk.js.map