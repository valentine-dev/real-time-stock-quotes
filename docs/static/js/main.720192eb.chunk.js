(this["webpackJsonpreal-time-stock-quotes-ui"]=this["webpackJsonpreal-time-stock-quotes-ui"]||[]).push([[0],{63:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),s=a.n(r),l=a(6),c=a(46),i=a(9),m=a(10),u=a(12),h=a(11),g=a(23),d=a(28),p=a(30),b=a(40),f=a(62),w=a(57),k=a.n(w),E=a(26),y=a(100),S=a(58),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggleShowDate=function(e){e?n.setState({showDate:!1}):n.setState({showDate:!0})},n.toggleShowRange=function(e){e?n.setState({showRange:!1}):n.setState({showRange:!0})},n.toggleShowDiff=function(e){e?n.setState({showDiff:!1}):n.setState({showDiff:!0})},n.state={showDate:!1,showRange:!1,showDiff:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm"},o.a.createElement(C,{showStates:this.state,handleToggleShowDate:this.toggleShowDate,handleToggleShowRange:this.toggleShowRange,handleToggleShowDiff:this.toggleShowDiff}),o.a.createElement(D,{rows:this.props.data,showStates:this.state,handleSubmit:this.props.handleSubmit}))}}]),a}(n.Component),C=function(e){return o.a.createElement("thead",null,o.a.createElement("tr",{className:"text-right"},o.a.createElement("th",{className:"text-left",style:{width:"25%"}},o.a.createElement(E.a,{style:{border:"none",background:"none",padding:0},disabled:!0},o.a.createElement("span",{role:"img","aria-label":"Symbol"},"\ud83d\udcc8"))),o.a.createElement("th",{style:{width:"25%"}},e.showStates.showDate?o.a.createElement(E.a,{className:"shadow-none",style:{border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},o.a.createElement("span",{role:"img","aria-label":"Date"},"\ud83d\udcc6")):o.a.createElement(E.a,{className:"shadow-none",style:{border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},o.a.createElement("span",{role:"img","aria-label":"Time"},"\u23f2"))),o.a.createElement("th",{style:{width:"25%"}},e.showStates.showRange?o.a.createElement(E.a,{className:"shadow-none",style:{border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showStates.showRange)}},o.a.createElement("span",{role:"img","aria-label":"Range"},"\ud83d\udcca")):o.a.createElement(E.a,{className:"shadow-none",style:{border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showStates.showRange)}},o.a.createElement("span",{role:"img","aria-label":"Price"},"\ud83d\udcb0"))),o.a.createElement("th",{style:{width:"25%"}},e.showStates.showDiff?o.a.createElement(E.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},o.a.createElement("span",null,"\xb1")):o.a.createElement(E.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},o.a.createElement("span",null,"%")))))},D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleRowSubmit=function(t,a){e.props.handleSubmit(a.toLowerCase(),t.toLowerCase(),!1)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.rows.map((function(t,a){var n=t.regularMarketDayLow.fmt,r=t.regularMarketDayHigh.fmt,s=t.symbol.indexOf("."),l=s>-1?t.symbol.slice(0,s):t.symbol,c="CAD"===t.currency.toUpperCase()?"C$":"$",i=s>-1?"to"===t.symbol.slice(s+1).toLowerCase()?"primary":"cn"===t.symbol.slice(s+1).toLowerCase()?"danger":"v"===t.symbol.slice(s+1).toLowerCase()?"dark":"warning":"success",m=s>-1?"to"===t.symbol.slice(s+1).toLowerCase()?"tsx":"cn"===t.symbol.slice(s+1).toLowerCase()?"cse":"v"===t.symbol.slice(s+1).toLowerCase()?"tsxv":"neo":"us",u=t.regularMarketTime.raw,h=t.regularMarketChangePercent.fmt,g=t.regularMarketChange.fmt,d=t.regularMarketChange.raw,p=t.regularMarketPrice.fmt;"POST"===t.marketState&&t.postMarketTime&&(u=t.postMarketTime.raw,h=t.postMarketChangePercent.fmt,g=t.postMarketChange.fmt,d=t.postMarketChange.raw,p=t.regularMarketPrice.fmt);var b=new Date(1e3*u).toLocaleDateString("en-CA",{month:"numeric",day:"numeric"}),f=new Date(1e3*u).toLocaleTimeString("en-CA",{hour12:!1}),w=0===d?"text-dark":d>0?"text-success":"text-danger";return o.a.createElement("tr",{key:m+"-"+l,className:"text-right",onClick:function(){return e.handleRowSubmit(m,l)}},o.a.createElement("td",{className:"text-"+i+" text-left font-weight-bold"},l),o.a.createElement("td",null,e.props.showStates.showDate?o.a.createElement("span",null,b):o.a.createElement("span",null,f)),o.a.createElement("td",{className:"align-middle"},e.props.showStates.showRange?o.a.createElement(y.a,{variant:i,min:n,now:p,max:r}):o.a.createElement("span",null,c,p)),o.a.createElement("td",{className:w},e.props.showStates.showDiff?o.a.createElement("span",null,g):o.a.createElement("span",null,h)))}));return o.a.createElement("tbody",null,t)}}]),a}(n.Component),M=v,j=a(38),x=a(45),O=function(e){var t=e.msg,a=Object(n.useState)(!0),r=Object(j.a)(a,2),s=r[0],l=r[1];return o.a.createElement(x.a,{delay:3e3,autohide:!0,show:s,onClose:function(){return l(!1)}},o.a.createElement(x.a.Body,null,t))},T=a(29),N=a(7),I=a(36),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getQuote=function(){n.props.handleSubmit(n.state.symbol.toLowerCase(),n.state.exchange.toLowerCase(),!0)},n.handleSymbolUpdate=function(e){n.setState({symbol:e.target.value.trim()}),n.props.handleInputChange()},n.handleExchangeUpdate=function(e){n.setState({exchange:e.target.value.trim()}),n.props.handleInputChange()},n.state={exchange:"TSX",symbol:null,date:new Date},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=!0;void 0!==this.state.symbol&&null!==this.state.symbol&&this.state.symbol.length>0&&(e=!1);var t=this.state.date.toLocaleTimeString("en-CA",{hour12:!1});return o.a.createElement(g.a,{className:"mt-3 md-3"},o.a.createElement(T.a,{autoComplete:"on",onSubmit:function(e){return e.preventDefault()}},o.a.createElement(T.a.Group,{as:I.a},o.a.createElement(N.a,{xs:"4"},o.a.createElement(T.a.Control,{as:"select",onChange:this.handleExchangeUpdate,placeholder:"Exchange",defaultValue:"TSX",size:"sm"},o.a.createElement("option",{value:"US",className:"text-success font-weight-bold"},"US"),o.a.createElement("option",{value:"TSX",className:"text-primary font-weight-bold"},"TSX"),o.a.createElement("option",{value:"TSXV",className:"text-dark font-weight-bold"},"TSXV"),o.a.createElement("option",{value:"CSE",className:"text-danger font-weight-bold"},"CSE"),o.a.createElement("option",{value:"NEO",className:"text-warning font-weight-bold"},"NEO"))),o.a.createElement(N.a,{xs:"6"},o.a.createElement(T.a.Control,{type:"text",autoCorrect:"off",autoCapitalize:"off",onChange:this.handleSymbolUpdate,placeholder:"symbol-"+t,size:"sm"})),e?o.a.createElement(N.a,{xs:"2"},o.a.createElement(E.a,{title:"enter symbol to enable clicking",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote,disabled:!0},o.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))):o.a.createElement(N.a,{xs:"2"},o.a.createElement(E.a,{title:"click to get quote",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote},o.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))))))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.props.onClick()},n.state={date:new Date},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.date.toLocaleTimeString("en-CA",{hour12:!1});return o.a.createElement(g.a,{className:"mt-3 md-3"},o.a.createElement(I.a,null,o.a.createElement(N.a,{className:"my-auto"},e),o.a.createElement(N.a,{className:"text-right"},o.a.createElement(E.a,{title:"show symbol and excahnge input",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.handleClick},o.a.createElement("span",{role:"img","aria-label":"eye"},"\ud83d\udc41")))))}}]),a}(n.Component),R=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),a=t[0],r=t[1];return a?o.a.createElement(d.a,{variant:"primary",dismissible:!0,onClose:function(){return r(!1)}},o.a.createElement(d.a.Heading,null,"FREE Real-Time Quotes for North American Stocks"),o.a.createElement("p",null,"For non-common stocks, Yahoo! Finance convention is used.")):o.a.createElement(o.a.Fragment,null)};a(94).config();var Q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).removeMessage=function(){n.setState({errorMessage:null,message:null})},n.updateQuotes=function(e){for(var t=Object(c.a)(n.state.latestQuotes),a=n.state.latestQuotes.length,o=!1,r=0;r<a;r++){var s=t[r];if(s.symbol===e.symbol){o=!0,s.marketState=e.marketState,s.regularMarketDayHigh=Object(l.a)({},e.regularMarketDayHigh),s.regularMarketDayLow=Object(l.a)({},e.regularMarketDayLow),s.regularMarketChangePercent=Object(l.a)({},e.regularMarketChangePercent),s.regularMarketChange=Object(l.a)({},e.regularMarketChange),s.regularMarketPrice=Object(l.a)({},e.regularMarketPrice),s.regularMarketTime=Object(l.a)({},e.regularMarketTime),"POST"===e.marketState&&e.postMarketTime&&(s.postMarketPrice=Object(l.a)({},e.postMarketPrice),s.postMarketTime=Object(l.a)({},e.postMarketTime),s.postMarketChangePercent=Object(l.a)({},e.postMarketChangePercent),s.postMarketChange=Object(l.a)({},e.postMarketChange));break}}o||(t=[e].concat(Object(c.a)(t))),n.setState({latestQuotes:t})},n.getQuote=function(e,t,a){n.setState({showSymbolExchangeInput:a});var o="tsx"===t?e+".to":"cse"===t?e+".cn":"tsxv"===t?e+".v":"neo"===t?e+".ne":e;k.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols="+o).then((function(e){var t=e.data.quoteResponse.result;if(t&&t.length>0){var a=t[0].longName||t[0].shortName?t[0].longName+" on "+t[0].fullExchangeName:null;a?(n.setState({errorMessage:null,message:a}),n.updateQuotes(t[0])):n.setState({errorMessage:"Sorry, no data found."})}else n.setState({errorMessage:"Sorry, no data found."})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState({errorMessage:t})):(t=e.name+" ("+e.code+"): "+e.message,n.setState({errorMessage:t}))}))},n.toggleSymbolExchangeInputShow=function(){n.setState((function(e){return{showSymbolExchangeInput:!e.showSymbolExchangeInput}}))},n.state={latestQuotes:[],errorMessage:null,message:null,showSymbolExchangeInput:!0},n}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement(p.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm"},o.a.createElement(p.a.Brand,null,o.a.createElement("span",{role:"img","aria-label":"Stock"},"\ud83d\udcc8")," ",o.a.createElement("a",{href:"https://enjoyit.ca",title:"go to enjoyit.ca"},"enjoyit.ca")," ",o.a.createElement(f.a,{variant:"light"},"v","0.5.1")),o.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},o.a.createElement(b.a,null,o.a.createElement(b.a.Link,{href:"mailto:feedback@enjoyit.ca",title:"provide feedback to feedback@enjoyit.ca"},"Feedback"),o.a.createElement(b.a.Link,{href:"mailto:donations@enjoyit.ca",title:"eTransfer less than $10 to donations@enjoyit.ca"},"Donations")))),o.a.createElement(R,null),this.state.showSymbolExchangeInput?o.a.createElement(L,{handleSubmit:this.getQuote,handleInputChange:this.removeMessage}):o.a.createElement(P,{onClick:this.toggleSymbolExchangeInputShow}),this.state.message&&o.a.createElement(O,{msg:this.state.message}),this.state.errorMessage&&o.a.createElement(d.a,{variant:"warning"},this.state.errorMessage),this.state.latestQuotes.length>0&&o.a.createElement(M,{data:this.state.latestQuotes,handleSubmit:this.getQuote}))}}]),a}(n.Component);s.a.render(o.a.createElement(Q,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.720192eb.chunk.js.map