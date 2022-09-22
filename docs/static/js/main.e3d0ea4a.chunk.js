(this["webpackJsonpreal-time-stock-quotes-ui"]=this["webpackJsonpreal-time-stock-quotes-ui"]||[]).push([[0],{63:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(36),l=a(62),r=a(18),o=a(19),s=a(23),c=a(21),i=a(0),m=a.n(i),u=a(15),h=a.n(u),g=a(43),f=a(55),E=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).toggleShowDate=function(e){e?n.setState({showDate:!1}):n.setState({showDate:!0})},n.toggleShowVolume=function(e){e?n.setState({showVolume:!1}):n.setState({showVolume:!0})},n.toggleShowDiff=function(e){e?n.setState({showDiff:!1}):n.setState({showDiff:!0})},n.state={showDate:!1,showVolume:!1,showDiff:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data;return m.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm"},m.a.createElement(d,{showStates:this.state,handleToggleShowDate:this.toggleShowDate,handleToggleShowVolume:this.toggleShowVolume,handleToggleShowDiff:this.toggleShowDiff}),m.a.createElement(b,{rows:e,showStates:this.state}))}}]),a}(i.Component),d=function(e){return m.a.createElement("thead",null,m.a.createElement("tr",{className:"text-right"},m.a.createElement("th",{className:"text-left"},m.a.createElement(g.a,{variant:"light",disabled:!0},m.a.createElement("span",{role:"img","aria-label":"Symbol"},"\ud83d\udcc8"))),m.a.createElement("th",null,e.showStates.showDate?m.a.createElement(g.a,{variant:"light",onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},m.a.createElement("span",{role:"img","aria-label":"Date"},"\ud83d\udcc6")):m.a.createElement(g.a,{variant:"light",onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},m.a.createElement("span",{role:"img","aria-label":"Time"},"\u23f2"))),m.a.createElement("th",null,e.showStates.showVolume?m.a.createElement(g.a,{variant:"light",onClick:function(){return e.handleToggleShowVolume(e.showStates.showVolume)}},m.a.createElement("span",{role:"img","aria-label":"Volume"},"\ud83d\udcca")):m.a.createElement(g.a,{variant:"light",onClick:function(){return e.handleToggleShowVolume(e.showStates.showVolume)}},m.a.createElement("span",{role:"img","aria-label":"Price"},"\ud83d\udcb0"))),m.a.createElement("th",null,e.showStates.showDiff?m.a.createElement(g.a,{variant:"light",onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},m.a.createElement("span",null,"\xb1")):m.a.createElement(g.a,{variant:"light",onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},m.a.createElement("span",null,"%")))))},b=function(e){var t=e.rows.map((function(t,a){var n=new Date(1e3*t.regularMarketTime.raw).toLocaleDateString("en-CA",{month:"numeric",day:"numeric"}),l=new Date(1e3*t.regularMarketTime.raw).toLocaleTimeString("en-CA",{hour12:!1}),r=t.regularMarketChangePercent.fmt,o=t.regularMarketChange.fmt,s=0===t.regularMarketChange.raw?"text-dark":t.regularMarketChange.raw>0?"text-success":"text-danger",c=t.symbol.indexOf("."),i=t.regularMarketPrice.fmt,u=t.regularMarketVolume.fmt,h=c>-1?"to"===t.symbol.slice(c+1).toLowerCase()?"text-primary":"cn"===t.symbol.slice(c+1).toLowerCase()?"text-danger":"text-dark":"text-success",g=c>-1?t.symbol.slice(0,c):t.symbol,f=t.currency;return m.a.createElement("tr",{key:a,className:"text-right"},m.a.createElement("td",{className:h+" text-left"},g),m.a.createElement("td",null,e.showStates.showDate?m.a.createElement("span",null,n):m.a.createElement("span",null,l)),m.a.createElement("td",null,e.showStates.showVolume?m.a.createElement("span",null,u):m.a.createElement("span",null,f,i)),m.a.createElement("td",{className:s},e.showStates.showDiff?m.a.createElement("span",null,o):m.a.createElement("span",null,r)))}));return m.a.createElement("tbody",null,t)},p=E,w=a(6),S=a(32),v=a(24),y=a(27),k=a(16),j=a(59),C=a(56),O=a.n(C),D=a(44),x=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getQuote=function(){var e="TSX"===n.state.exchange?n.state.symbol.toLowerCase()+".to":"CSE"===n.state.exchange?n.state.symbol.toLowerCase()+".cn":"TSXV"===n.state.exchange?n.state.symbol.toLowerCase()+".v":"NEO"===n.state.exchange?n.state.symbol.toLowerCase()+".ne":n.state.symbol;O.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols="+e).then((function(e){var t=e.data.quoteResponse.result;if(t&&t.length>0){var a=t[0].longName||t[0].shortName?t[0].longName+" on "+t[0].fullExchangeName:null;a?(n.setState(Object(w.a)(Object(w.a)({},n.state),{},{errorMessage:null,message:a})),n.props.handleSubmit(t[0])):n.setState(Object(w.a)(Object(w.a)({},n.state),{},{errorMessage:"Sorry, no data found."}))}else n.setState(Object(w.a)(Object(w.a)({},n.state),{},{errorMessage:"Sorry, no data found."}))})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState(Object(w.a)(Object(w.a)({},n.state),{},{errorMessage:t}))):(t=e.name+" ("+e.code+"): "+e.message,n.setState(Object(w.a)(Object(w.a)({},n.state),{},{errorMessage:t})))}))},n.handleSymbolUpdate=function(e){n.setState(Object(w.a)(Object(w.a)({},n.state),{},{symbol:e.target.value.trim(),errorMessage:null,message:null}))},n.handleExchangeUpdate=function(e){n.setState(Object(w.a)(Object(w.a)({},n.state),{},{exchange:e.target.value,errorMessage:null,message:null}))},n.state={exchange:null,symbol:null,errorMessage:null,message:null},n}return Object(o.a)(a,[{key:"render",value:function(){var e=!0;void 0!==this.state.symbol&&null!==this.state.symbol&&this.state.symbol.length>0&&(e=!1);var t=null!==this.state.errorMessage,a=null!==this.state.message;return m.a.createElement(S.a,null,m.a.createElement(v.a,{variant:"info"},m.a.createElement(y.a,{autoComplete:"on",onSubmit:function(e){return e.preventDefault()}},m.a.createElement(y.a.Group,{as:j.a},m.a.createElement(k.a,{xs:"4"},m.a.createElement(y.a.Control,{as:"select",onChange:this.handleExchangeUpdate,placeholder:"Exchange"},m.a.createElement("option",{value:"US"},"US"),m.a.createElement("option",{value:"TSX"},"TSX"),m.a.createElement("option",{value:"TSXV"},"TSV"),m.a.createElement("option",{value:"CSE"},"CSE"),m.a.createElement("option",{value:"NEO"},"NEO"))),m.a.createElement(k.a,{xs:"5"},m.a.createElement(y.a.Control,{type:"text",autoCorrect:"off",autoCapitalize:"off",onChange:this.handleSymbolUpdate,placeholder:"Symbol"})),e?m.a.createElement(k.a,{xs:"2"},m.a.createElement(g.a,{variant:"info",onClick:this.getQuote,disabled:!0},m.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))):m.a.createElement(k.a,{xs:"2"},m.a.createElement(g.a,{onClick:this.getQuote},m.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40")))))),a?m.a.createElement("div",{className:"pb-3"},m.a.createElement(T,{msg:this.state.message})):null,t?m.a.createElement(v.a,{variant:"warning"},this.state.errorMessage):null)}}]),a}(i.Component),T=function(e){var t=e.msg,a=Object(i.useState)(!0),l=Object(n.a)(a,2),r=l[0],o=l[1];return m.a.createElement(D.a,{delay:3e3,autohide:!0,show:r,onClose:function(){return o(!1)}},m.a.createElement(D.a.Body,null,t))},M=x,V=a(28),N=a(38),Q=a(61);a(94).config();var L=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getQuote=function(e){n.setState({latestQuotes:[e].concat(Object(l.a)(n.state.latestQuotes))})},n.state={latestQuotes:[]},n}return Object(o.a)(a,[{key:"render",value:function(){return m.a.createElement(S.a,null,m.a.createElement(V.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm"},m.a.createElement(V.a.Brand,null,m.a.createElement("span",{role:"img","aria-label":"Stock"},"\ud83d\udcc8")," ",m.a.createElement("a",{href:"https://enjoyit.ca",title:"go to enjoyit.ca"},"enjoyit.ca")," ",m.a.createElement(Q.a,{variant:"light"},"v","0.3.4")),m.a.createElement(V.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),m.a.createElement(V.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},m.a.createElement(N.a,null,m.a.createElement(N.a.Link,{href:"mailto:feedback@enjoyit.ca",title:"provide feedback to feedback@enjoyit.ca"},"Feedback"),m.a.createElement(N.a.Link,{href:"mailto:donations@enjoyit.ca",title:"eTransfer less than $10 to donations@enjoyit.ca"},"Donations")))),m.a.createElement(q,null),m.a.createElement(M,{handleSubmit:this.getQuote,token:"f37b9b0e53740ea44c387c024025e30b84573d4893c2f051455ba2258e5604c4"}),this.state.latestQuotes.length>0?m.a.createElement(p,{data:this.state.latestQuotes}):null)}}]),a}(i.Component),q=function(){var e=Object(i.useState)(!0),t=Object(n.a)(e,2),a=t[0],l=t[1];return a?m.a.createElement(v.a,{variant:"primary",dismissible:!0,onClose:function(){return l(!1)}},m.a.createElement(v.a.Heading,null,"FREE Real-Time Quotes for North American Stocks"),m.a.createElement("p",null,"For non-common stocks, Yahoo! Finance convention is used.")):m.a.createElement(m.a.Fragment,null)};h.a.render(m.a.createElement(L,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e3d0ea4a.chunk.js.map