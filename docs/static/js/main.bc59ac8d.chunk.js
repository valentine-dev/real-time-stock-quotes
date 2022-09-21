(this["webpackJsonpreal-time-stock-quotes-ui"]=this["webpackJsonpreal-time-stock-quotes-ui"]||[]).push([[0],{60:function(e,t,a){e.exports=a(94)},94:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a(59),l=a(18),s=a(19),o=a(23),c=a(21),m=a(0),i=a.n(m),u=a(15),b=a.n(u),g=a(55),h=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return i.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm"},i.a.createElement(E,null),i.a.createElement(d,{rows:e}))}}]),a}(m.Component),E=function(){return i.a.createElement("thead",null,i.a.createElement("tr",{className:"text-right"},i.a.createElement("th",{className:"text-left"},i.a.createElement("span",{role:"img","aria-label":"Date"},"\ud83d\udcc6")," ",i.a.createElement("span",{role:"img","aria-label":"Time"},"\u23f2")),i.a.createElement("th",null,i.a.createElement("span",{role:"img","aria-label":"Symbol"},"\ud83d\udcc8")),i.a.createElement("th",null,i.a.createElement("span",{role:"img","aria-label":"Price"},"\ud83d\udcb0")," ",i.a.createElement("span",{role:"img","aria-label":"Volume"},"\ud83d\udcca")),i.a.createElement("th",null,"\xb1 %")))},d=function(e){var t=e.rows.map((function(e,t){var a=new Date(1e3*e.regularMarketTime.raw).toLocaleDateString("en-CA",{month:"numeric",day:"numeric"}),n=new Date(1e3*e.regularMarketTime.raw).toLocaleTimeString("en-CA",{hour12:!1}),r=e.regularMarketChangePercent.fmt,l=e.regularMarketChange.fmt,s=0===e.regularMarketChange.raw?"text-dark":e.regularMarketChange.raw>0?"text-success":"text-danger",o=e.symbol.indexOf("."),c=e.regularMarketPrice.fmt,m=e.regularMarketVolume.fmt,u=o>-1?"to"===e.symbol.slice(o+1).toLowerCase()?"text-primary":"cn"===e.symbol.slice(o+1).toLowerCase()?"text-danger":"text-dark":"text-success",b=o>-1?e.symbol.slice(0,o):e.symbol,g=e.currency;return i.a.createElement("tr",{key:t,className:"text-right"},i.a.createElement("td",{className:"text-left"},a," ",i.a.createElement("span",{className:"font-weight-bold"},n)),i.a.createElement("td",{className:u},b),i.a.createElement("td",null,g,i.a.createElement("span",{className:"font-weight-bold"},c)," ",m),i.a.createElement("td",{className:s},i.a.createElement("span",{className:"font-weight-bold"},l)," ",r))}));return i.a.createElement("tbody",null,t)},p=h,f=a(6),v=a(32),y=a(24),j=a(43),k=a(27),O=a(16),S=a(57),C=a(56),x=a.n(C),w=a(44),N=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getQuote=function(){var e="TSX"===n.state.exchange?n.state.symbol.toLowerCase()+".to":"CSE"===n.state.exchange?n.state.symbol.toLowerCase()+".cn":"TSXV"===n.state.exchange?n.state.symbol.toLowerCase()+".v":"NEO"===n.state.exchange?n.state.symbol.toLowerCase()+".ne":n.state.symbol;x.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols="+e).then((function(e){var t=e.data.quoteResponse.result;if(t&&t.length>0){var a=t[0].longName||t[0].shortName?t[0].longName+" on "+t[0].fullExchangeName:null;a?(n.setState(Object(f.a)(Object(f.a)({},n.state),{},{errorMessage:null,message:a})),n.props.handleSubmit(t[0])):n.setState(Object(f.a)(Object(f.a)({},n.state),{},{errorMessage:"Sorry, no data found."}))}else n.setState(Object(f.a)(Object(f.a)({},n.state),{},{errorMessage:"Sorry, no data found."}))})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState(Object(f.a)(Object(f.a)({},n.state),{},{errorMessage:t}))):(t=e.name+" ("+e.code+"): "+e.message,n.setState(Object(f.a)(Object(f.a)({},n.state),{},{errorMessage:t})))}))},n.handleSymbolUpdate=function(e){n.setState(Object(f.a)(Object(f.a)({},n.state),{},{symbol:e.target.value.trim(),errorMessage:null,message:null}))},n.handleExchangeUpdate=function(e){n.setState(Object(f.a)(Object(f.a)({},n.state),{},{exchange:e.target.value,errorMessage:null,message:null}))},n.state={exchange:null,symbol:null,errorMessage:null,message:null},n}return Object(s.a)(a,[{key:"render",value:function(){var e=!0;void 0!==this.state.symbol&&null!==this.state.symbol&&this.state.symbol.length>0&&(e=!1);var t=null!==this.state.errorMessage,a=null!==this.state.message;return i.a.createElement(v.a,null,i.a.createElement(y.a,{variant:"info"},i.a.createElement(k.a,{autoComplete:"on",onSubmit:function(e){return e.preventDefault()}},i.a.createElement(k.a.Group,{as:S.a},i.a.createElement(O.a,{xs:"4"},i.a.createElement(k.a.Control,{as:"select",onChange:this.handleExchangeUpdate,placeholder:"Exchange"},i.a.createElement("option",{value:"US"},"US"),i.a.createElement("option",{value:"TSX"},"TSX"),i.a.createElement("option",{value:"TSXV"},"TSV"),i.a.createElement("option",{value:"CSE"},"CSE"),i.a.createElement("option",{value:"NEO"},"NEO"))),i.a.createElement(O.a,{xs:"5"},i.a.createElement(k.a.Control,{type:"text",autoCorrect:"off",autoCapitalize:"off",onChange:this.handleSymbolUpdate,placeholder:"Symbol"})),e?i.a.createElement(O.a,{xs:"2"},i.a.createElement(j.a,{variant:"info",onClick:this.getQuote,disabled:!0},i.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))):i.a.createElement(O.a,{xs:"2"},i.a.createElement(j.a,{onClick:this.getQuote},i.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40")))))),a?i.a.createElement("div",{className:"pb-3"},i.a.createElement(M,{msg:this.state.message})):null,t?i.a.createElement(y.a,{variant:"warning"},this.state.errorMessage):null)}}]),a}(m.Component),M=function(e){var t=e.msg,a=Object(m.useState)(!0),r=Object(n.a)(a,2),l=r[0],s=r[1];return i.a.createElement(w.a,{delay:3e3,autohide:!0,show:l,onClose:function(){return s(!1)}},i.a.createElement(w.a.Body,null,t))},T=N,Q=a(28),L=a(38),q=a(58);a(91).config();var D=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getQuote=function(e){n.setState({latestQuotes:[e].concat(Object(r.a)(n.state.latestQuotes))})},n.state={latestQuotes:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(v.a,null,i.a.createElement(Q.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm"},i.a.createElement(Q.a.Brand,null,i.a.createElement("span",{role:"img","aria-label":"Stock"},"\ud83d\udcc8")," ",i.a.createElement("a",{href:"https://enjoyit.ca",title:"go to enjoyit.ca"},"enjoyit.ca")," ",i.a.createElement("small",null,"\xa9 2022")," ",i.a.createElement(q.a,{variant:"light"},"v","0.3.3")),i.a.createElement(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(Q.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},i.a.createElement(L.a,null,i.a.createElement(L.a.Link,{href:"mailto:feedback@enjoyit.ca",title:"provide feedback to feedback@enjoyit.ca"},"Feedback"),i.a.createElement(L.a.Link,{href:"mailto:donations@enjoyit.ca",title:"eTransfer less than $10 to donations@enjoyit.ca"},"Donations")))),i.a.createElement(P,null),i.a.createElement(T,{handleSubmit:this.getQuote,token:"f37b9b0e53740ea44c387c024025e30b84573d4893c2f051455ba2258e5604c4"}),this.state.latestQuotes.length>0?i.a.createElement(p,{data:this.state.latestQuotes}):null)}}]),a}(m.Component),P=function(){var e=Object(m.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1];return a?i.a.createElement(y.a,{variant:"primary",dismissible:!0,onClose:function(){return r(!1)}},i.a.createElement(y.a.Heading,null,"FREE Real-Time Quotes for North American Stocks"),i.a.createElement("p",null,"For non-common stocks, Yahoo! Finance convention is used.")):i.a.createElement(i.a.Fragment,null)};b.a.render(i.a.createElement(D,null),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.bc59ac8d.chunk.js.map