(this.webpackJsonpreactsite01=this.webpackJsonpreactsite01||[]).push([[0],{134:function(e,t,n){},136:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(3),s=n.n(c),r=n(30),i=n.n(r),o=(n(54),n(17)),d=n(18),h=n(20),u=n(19),l=n(8),j=n.n(l),p=n(21),b=n(11),f=n(46),g=n.n(f),v=n(47),x=(n(134),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).md=new v.a,a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleChange2=a.handleChange2.bind(Object(b.a)(a)),a.state={loading:!0,response:[],cardsToShow:"5",cardTextLength:600},a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({loading:!0,cardsToShow:e.target.value})}},{key:"handleChange2",value:function(e){this.setState({cardTextLength:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.myFunction();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.myFunction();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"myFunction",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.reddit.com/r/webdev.json",e.next=3,fetch("https://www.reddit.com/r/webdev.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.data.children,this.setState({response:a.slice(0,this.state.cardsToShow)}),this.setState({loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"inputGroup",children:[Object(a.jsx)("label",{children:"Cards:"}),Object(a.jsx)("input",{type:"number",id:"markdown-content",onChange:this.handleChange,defaultValue:this.state.cardsToShow}),Object(a.jsx)("label",{children:"Length:"}),Object(a.jsx)("input",{type:"number",id:"markdown-content",onChange:this.handleChange2,defaultValue:this.state.cardTextLength}),Object(a.jsx)("label",{children:this.state.loading?"Loading...":""})]}),this.state.response.map((function(t,n){return Object(a.jsxs)("div",{className:"card-component",children:[Object(a.jsx)("div",{className:"title",children:t.data.title}),Object(a.jsxs)("div",{className:"message",children:[Object(a.jsx)(g.a,{children:t.data.selftext.substr(0,e.state.cardTextLength)}),e.state.cardTextLength<t.data.selftext.length?"...":""]})]})}))]})}}]),n}(s.a.Component)),O=n(48),m=n.n(O),w=(n(135),n(136),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(m.a,{children:[Object(a.jsx)("title",{children:"Reactive Reading App v.1"}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("h1",{children:"Reactive Reading App v.1"}),Object(a.jsx)("p",{children:"\u2705Set cards amount \u2705Set text length \u2705No annoying images"})]}),Object(a.jsx)(x,{})]})}}]),n}(s.a.Component)),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),y()},54:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.4729ca6e.chunk.js.map