(this.webpackJsonpcremisweb=this.webpackJsonpcremisweb||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),s=a.n(r);a(26),a(20),a(27);var c=a(2),l=a(3),i=a(5),u=a(4),m=a(1),d=a(6),h=(o.a.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={signature:"Gabriel",message:"Borglund"},a.changeMessage=a.changeMessage.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.changeName=a.changeName.bind(Object(m.a)(a)),a.postToApi=a.postToApi.bind(Object(m.a)(a)),a.render=a.render.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"changeMessage",value:function(e){this.setState({message:e.target.value})}},{key:"changeName",value:function(e){this.setState({signature:e.target.value}),console.log(this.state.signature)}},{key:"postToApi",value:function(){console.log();var e='{"name":"'+this.state.signature+'","message":"'+this.state.message+'"}';fetch("http://localhost:4000/note/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:e})}},{key:"handleSubmit",value:function(e){this.postToApi(),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Name :",o.a.createElement("input",{type:"text",defaultValue:this.state.signature||"name",onChange:this.changeName})),o.a.createElement("label",null,"message :",o.a.createElement("input",{type:"text",defaultValue:this.state.message,onChange:this.changeMessage})),o.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(o.a.Component)),p=(a(28),function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"quote"},o.a.createElement("div",{class:"message"},'"',this.props.message,'"'),o.a.createElement("div",{class:"name"},"-",this.props.name))}}]),t}(o.a.Component)),b=(a(29),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={array:new Array},a.updateNoteBoard=a.updateNoteBoard.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateNoteBoard",value:function(e){this.setState({array:e})}},{key:"componentDidMount",value:function(){this.fetchAllMessages()}},{key:"fetchAllMessages",value:function(){var e=this;fetch("http://localhost:4000/note/all",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.displayAllMessages(t)}))}},{key:"displayAllMessages",value:function(e){console.log(e.length);for(var t=new Array,a=0;a<e.length;a+=2)t.push(o.a.createElement(p,{name:e[a],message:e[a+1]}));this.updateNoteBoard(t),console.log(Array.isArray(this.state.array))}},{key:"render",value:function(){return o.a.createElement("div",{class:"noteBoard"},this.state.array)}}]),t}(o.a.Component)),g=(n.Component,a(7)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={padding:e.padding},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.padding)}},{key:"render",value:function(){return o.a.createElement("div",{style:{marginTop:this.state.padding}})}}]),t}(o.a.Component),f=(a(40),function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"stickyTopBar",style:this.props.currentColor},this.props.text))}}]),t}(o.a.Component)),O=(a(41),"CREMIS"),y="nameBoxRed",E=["nameBoxRed","nameBoxOrange","nameBoxYellow","nameBoxGreen","nameBoxBlue","nameBoxPurple"],S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:O,nameBox:y,index:0},a.updateNameBox=a.updateNameBox.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateNameBox",value:function(e){this.setState({nameBox:E[this.state.index]})}},{key:"componentDidMount",value:function(){this.setState({name:O})}},{key:"render",value:function(){return o.a.createElement("div",{class:this.state.nameBox,style:this.props.currentColor}," ",this.state.name)}}]),t}(o.a.Component),T=(a(42),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={text:e.text},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"styledButton"},this.props.text)}}]),t}(o.a.Component)),j=(a(43),a(44),[{backgroundColor:"rgba(234, 62, 55, 0.9)"},{backgroundColor:"rgba(246, 143, 31, 0.9)"},{backgroundColor:"rgba(246, 213, 9, 0.9)"},{backgroundColor:"rgba(168, 203, 56, 0.9)"},{backgroundColor:"rgba(32, 154, 207, 0.9)"},{backgroundColor:"rgba(170, 82, 160, 0.9)"}]),B=(clearInterval(),function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(i.a)(this,Object(u.a)(t).call(this,e)),document.body.style.overflow="hidden",a.state={colorIndex:0,currentColor:{},updateColor:!0,topBarText:"",menuItems:[],hasRenderedTopBar:!1,displayingTopScreen:!0,currentScreen:"HOME",topPage:o.a.createElement("div",null,"This is the top page "),bottomPage:o.a.createElement("div",null,"This is the bottom page ")},a.updateColor=a.updateColor.bind(Object(m.a)(a)),a.handleScroll=a.handleScroll.bind(Object(m.a)(a)),a.mouseOverTopBar=a.mouseOverTopBar.bind(Object(m.a)(a)),a.mouseNotOnTopBar=a.mouseNotOnTopBar.bind(Object(m.a)(a)),a.switchScreen=a.switchScreen.bind(Object(m.a)(a)),a.sleep=a.sleep.bind(Object(m.a)(a)),a.renderPage=a.renderPage.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){g.animateScroll.scrollToTop()}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),this.interval=setInterval((function(){e.state.updateColor&&e.setState({colorIndex:(e.state.colorIndex+1)%j.length}),e.updateColor()}),1e3)}},{key:"componentWillUnmount",value:function(){console.log("unmountes"),window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){window.pageYOffset>167?this.state.hasRenderedTopBar||(this.setState({updateColor:!1}),this.setState({topBarText:"CREMIS"}),this.setState({hasRenderedTopBar:!0})):(this.setState({updateColor:!0}),this.setState({topBarText:""}),this.setState({menuItems:[]}),this.setState({hasRenderedTopBar:!1}))}},{key:"updateColor",value:function(){this.setState({currentColor:j[this.state.colorIndex]})}},{key:"mouseOverTopBar",value:function(){this.setState({updateColor:!0}),this.setState({menuItems:["HOME","PROJECTS","ABOUT","BLOG"]})}},{key:"mouseNotOnTopBar",value:function(){this.setState({updateColor:!1}),this.setState({menuItems:[]})}},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"renderPage",value:function(e){switch(e){case"ABOUT":return o.a.createElement("div",null,"This is the screen showing stuff about me");case"PROJECTS":return o.a.createElement("div",null,"Welcome to my projects. There are no projekts here at the moment...");case"BLOG":return o.a.createElement("div",null,"This is suppose to be the blog part of the page... Tja, tja bloggen! osv")}}},{key:"renderScreen",value:function(e,t){switch(t){case"TOP":var a=this.renderPage(e);this.setState({topPage:a});break;case"BOTTOM":var n=this.renderPage(e);this.setState({bottomPage:n})}}},{key:"switchScreen",value:function(e){e===this.state.currentScreen||(this.state.displayingTopScreen?(this.setState({bottomPage:e}),this.renderScreen(e,"BOTTOM"),this.setState({displayingTopScreen:!1}),g.scroller.scrollTo("bottomPage",{duration:600,delay:0,smooth:"easeInOutQuart"})):(this.setState({currentTopPage:e}),this.setState({displayingTopScreen:!0}),this.renderScreen(e,"TOP"),g.scroller.scrollTo("topPage",{duration:600,delay:0,smooth:"easeInOutQuart"})))}},{key:"render",value:function(){var e=this;return o.a.createElement("body",{id:"topOfBody"},o.a.createElement("div",{onMouseOver:this.mouseOverTopBar,onMouseLeave:this.mouseNotOnTopBar},o.a.createElement(f,{currentColor:this.state.currentColor,text:this.state.topBarText,onClick:g.animateScroll.scrollToTop}),o.a.createElement("div",{class:"menuItem",style:{left:"70px"},onClick:g.animateScroll.scrollToTop},this.state.menuItems[0]),o.a.createElement("div",{class:"menuItem",style:{left:"150px"},newScreen:"PROJECTS",onClick:function(){return e.switchScreen("PROJECTS")}},this.state.menuItems[1]),o.a.createElement("div",{class:"menuItem",style:{left:"230px"},newScreen:"ABOUT",onClick:function(){return e.switchScreen("ABOUT")}},this.state.menuItems[2]),o.a.createElement("div",{class:"menuItem",style:{left:"300px"},newScreen:"BLOG",onClick:function(){return e.switchScreen("BLOG")}},this.state.menuItems[3])),o.a.createElement("div",null,o.a.createElement(S,{currentColor:this.state.currentColor}),o.a.createElement("div",{class:"title"},"Welcome to my personal page. Let's see what we can achieve together!",o.a.createElement(v,{padding:200})),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(g.Link,{activeClass:"active",className:"test1",to:"topPage",spy:!1,smooth:!0,duration:600,offset:-75},o.a.createElement(T,{text:"ENTER",onClick:function(){return e.switchScreen("ABOUT")}})))),o.a.createElement("div",{class:"title"},o.a.createElement(v,{padding:400}),o.a.createElement(g.Element,{name:"topPage",className:"element"},"Navigation")),o.a.createElement("div",null,o.a.createElement(v,{padding:30})),o.a.createElement("div",{class:"body"},this.state.topPage)),o.a.createElement("div",{class:"title"},o.a.createElement(v,{padding:800}),o.a.createElement(g.Element,{name:"bottomPage",className:"element"},"Navigation")),o.a.createElement("div",null,o.a.createElement(v,{padding:30})),o.a.createElement("div",{class:"body"},this.state.bottomPage,o.a.createElement(v,{padding:800})))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement("html",null,o.a.createElement("body",null,o.a.createElement("div",{id:"app"},o.a.createElement("div",{id:"scroll-container",style:{overflow:"hidden"}},o.a.createElement(B,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.e16075df.chunk.js.map