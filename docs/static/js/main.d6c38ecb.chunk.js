(this["webpackJsonpreal-time-stock-quotes-ui"]=this["webpackJsonpreal-time-stock-quotes-ui"]||[]).push([[0],{241:function(e,t,a){e.exports=a(399)},268:function(e,t,a){},395:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),l=a(168),c=a(24),i=a(51),u=a(52),h=a(53),m=a(55),g=a(83),d=a(106),p=a(114),b=a(94),f=a(232),y=a(167),E=a(233),k=a(146),S=a(144),w=a.n(S),v=a(16),C=(a(268),a(102)),x=a(414),M=a(406),T=a(407),D=a(214);function j(e){return r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-right"},r.a.createElement("th",{className:"text-left",style:{width:"25%"}},r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleSubmit(null,null,!1)}},r.a.createElement("span",{role:"img","aria-label":"Refresh"},"\ud83d\udd04"))),r.a.createElement("th",{style:{width:"25%"}},e.showDate?r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showDate)}},r.a.createElement("span",{role:"img","aria-label":"Date"},"\ud83d\udcc6")):r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showDate)}},r.a.createElement("span",{role:"img","aria-label":"Time"},"\u23f2"))),r.a.createElement("th",{style:{width:"25%"}},e.showRange?r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showRange)}},r.a.createElement("span",{role:"img","aria-label":"Range"},"\ud83d\udcca")):r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showRange)}},r.a.createElement("span",{role:"img","aria-label":"Price"},"\ud83d\udcb0"))),r.a.createElement("th",{style:{width:"25%"}},e.showDiff?r.a.createElement(C.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showDiff)}},r.a.createElement("span",null,"\xb1")):r.a.createElement(C.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showDiff)}},r.a.createElement("span",null,"%")))))}function O(e){var t=e.rows.map((function(t,a){var n=t.regularMarketDayLow.fmt,o=t.regularMarketDayHigh.fmt,s=t.regularMarketPrice.fmt,l=t.symbol.indexOf("."),c=l>-1?t.symbol.slice(0,l):t.symbol,i="CAD"===t.currency.toUpperCase()?"C$":"$",u=l>-1?"to"===t.symbol.slice(l+1).toLowerCase()?"primary":"cn"===t.symbol.slice(l+1).toLowerCase()?"danger":"v"===t.symbol.slice(l+1).toLowerCase()?"dark":"warning":"success",h=l>-1?"to"===t.symbol.slice(l+1).toLowerCase()?"tsx":"cn"===t.symbol.slice(l+1).toLowerCase()?"cse":"v"===t.symbol.slice(l+1).toLowerCase()?"tsxv":"neo":"us",m=t.regularMarketTime.raw,g=t.regularMarketChangePercent.fmt,d=t.regularMarketChange.fmt,p=t.regularMarketChange.raw,b=t.regularMarketPrice.fmt;"POST"!==t.marketState&&"POSTPOST"!==t.marketState&&"PREPRE"!==t.marketState||!t.postMarketTime?"PRE"===t.marketState&&t.preMarketTime&&(m=t.preMarketTime.raw,g=t.preMarketChangePercent.fmt,d=t.preMarketChange.fmt,p=t.preMarketChange.raw,b=t.preMarketPrice.fmt):(m=t.postMarketTime.raw,g=t.postMarketChangePercent.fmt,d=t.postMarketChange.fmt,p=t.postMarketChange.raw,b=t.postMarketPrice.fmt);var f=new Date(1e3*m).toLocaleDateString("en-CA",{month:"numeric",day:"numeric"}),y=new Date(1e3*m).toLocaleTimeString("en-CA",{hour12:!1}),E=p>0?"text-success":p<0?"text-danger":"text-dark";return r.a.createElement("tr",{key:h+"-"+c,className:"text-right"},r.a.createElement("td",{className:"text-left"},r.a.createElement(C.a,{className:"text-"+u+" font-weight-bold",style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return function(t,a){e.handleSubmit(a.toLowerCase(),t.toLowerCase(),!1,!0)}(h,c)}},r.a.createElement("span",{role:"img","aria-label":"Chart"},"\ud83d\udcc8"))," ",r.a.createElement(C.a,{className:"text-"+u+" font-weight-bold",style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return function(t,a){e.handleSubmit(a.toLowerCase(),t.toLowerCase(),!1,!1)}(h,c)}},c)),r.a.createElement("td",null,e.showDate?r.a.createElement("span",null,f):r.a.createElement("span",null,y)),r.a.createElement("td",null,e.showRange?r.a.createElement(x.a,{overlay:r.a.createElement(M.a,{id:h+"-"+c},n+"-"+o)},r.a.createElement(T.a,{key:1,variant:u,min:n,now:s,max:o,label:s})):r.a.createElement("span",null,i,b)),r.a.createElement("td",{className:E},e.showDiff?r.a.createElement("span",null,d):r.a.createElement("span",null,g)))}));return r.a.createElement("tbody",null,t)}var P=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(!1),c=Object(v.a)(l,2),i=c[0],u=c[1],h=Object(n.useState)(!1),m=Object(v.a)(h,2),g=m[0],d=m[1];return r.a.createElement(D.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm"},r.a.createElement(j,{showDate:o,showRange:i,showDiff:g,handleToggleShowDate:function(e){return s(!e)},handleToggleShowRange:function(e){return u(!e)},handleToggleShowDiff:function(e){return d(!e)},handleSubmit:e.handleSubmit}),r.a.createElement(O,{rows:e.data,showDate:o,showRange:i,showDiff:g,handleSubmit:e.handleSubmit}))},L=a(169),N=function(e){var t=e.msg,a=Object(n.useState)(!0),o=Object(v.a)(a,2),s=o[0],l=o[1];return r.a.createElement(L.a,{delay:3e3,autohide:!0,show:s,onClose:function(){return l(!1)}},r.a.createElement(L.a.Body,null,t))},I=a(113),A=a(48),Q=a(133),R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getQuote=function(){n.props.handleInputChange(null,"Quote for "+n.state.symbol.toUpperCase()+" on "+n.state.exchange.toUpperCase()+" exchange requested ..."),n.props.handleSubmit(n.state.symbol.toLowerCase(),n.state.exchange.toLowerCase(),!0)},n.handleSymbolUpdate=function(e){var t=new RegExp("^[a-zA-Z0-9]{1,32}$"),a=e.target.value.trim();t.test(a)?(n.setState({symbol:a}),n.props.handleInputChange(null,null)):(n.setState({symbol:""}),n.props.handleInputChange("Invalid symbol.",null))},n.handleExchangeUpdate=function(e){n.setState({exchange:e.target.value.trim()}),n.props.handleInputChange(null,null)},n.handleSymbolInputKeyDown=function(e){"Enter"===e.key&&n.getQuote()},n.state={exchange:"TSX",symbol:"",date:new Date},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=!0;void 0!==this.state.symbol&&null!==this.state.symbol&&this.state.symbol.length>0&&(e=!1);var t=this.state.date.toLocaleTimeString("en-CA",{hour12:!1});return r.a.createElement(g.a,{className:"mt-3 md-3"},r.a.createElement(I.a,{autoComplete:"on",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(I.a.Group,{as:Q.a},r.a.createElement(A.a,{xs:"4"},r.a.createElement(I.a.Control,{as:"select",onChange:this.handleExchangeUpdate,placeholder:"Exchange",defaultValue:"TSX",size:"sm"},r.a.createElement("option",{value:"US",className:"text-success font-weight-bold"},"US"),r.a.createElement("option",{value:"TSX",className:"text-primary font-weight-bold"},"TSX"),r.a.createElement("option",{value:"TSXV",className:"text-dark font-weight-bold"},"TSXV"),r.a.createElement("option",{value:"CSE",className:"text-danger font-weight-bold"},"CSE"),r.a.createElement("option",{value:"NEO",className:"text-warning font-weight-bold"},"NEO"))),r.a.createElement(A.a,{xs:"6"},r.a.createElement(I.a.Control,{type:"text",autoCorrect:"off",autoCapitalize:"off",placeholder:"symbol-"+t,size:"sm",value:this.state.symbol,onChange:this.handleSymbolUpdate,onKeyDown:this.handleSymbolInputKeyDown})),e?r.a.createElement(A.a,{xs:"2"},r.a.createElement(C.a,{title:"enter symbol to enable clicking",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote,disabled:!0},r.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))):r.a.createElement(A.a,{xs:"2"},r.a.createElement(C.a,{title:"click to get quote",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote},r.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))))))}}]),a}(n.Component);var q=function(e){var t=Object(n.useState)(new Date),a=Object(v.a)(t,2),o=a[0],s=a[1];Object(n.useEffect)((function(){var e=setInterval((function(){s(new Date)}),1e3);return function(){return clearInterval(e)}}),[]);var l=o.toLocaleTimeString("en-CA",{hour12:!1});return r.a.createElement(g.a,{className:"mt-3 md-3"},r.a.createElement(Q.a,null,r.a.createElement(A.a,{className:"my-auto"},l),r.a.createElement(A.a,{className:"text-right"},r.a.createElement(C.a,{title:"show symbol and excahnge input",className:"shadow-none",style:{border:"none",background:"none"},onClick:function(){e.onClick()}},r.a.createElement("span",{role:"img","aria-label":"eye"},"\ud83d\udc41")))))},U=function(){var e=Object(n.useState)(!0),t=Object(v.a)(e,2),a=t[0],o=t[1];return a?r.a.createElement(d.a,{variant:"primary",dismissible:!0,onClose:function(){return o(!1)}},r.a.createElement(d.a.Heading,null,"FREE Real-Time Quotes for North American Stocks"),r.a.createElement("p",null,"Enjoy exploring all available features ",r.a.createElement("span",{role:"img","aria-label":"Seedling"},"\ud83c\udf31")," ",r.a.createElement("span",{role:"img","aria-label":"Chart"},"\ud83d\udcc8"))):r.a.createElement(r.a.Fragment,null)},z=a(408),K=a(409),H=a(413),X=a(230),F=a(231),B=a(115),G=a(222),$=a(40),V=a(235),J=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getTicks=function(e){var t=[];if("1d"===e.range)t.push(e.x[0]+1800),t.push(e.x[0]+1800+7200),t.push(e.x[0]+1800+14400),t.push(e.x[0]+1800+21600);else if("5d"===e.range){t.push(e.x[0]);for(var a=1,n=e.x[0];a<5&&(n+=86400,e.x.includes(n)&&(t.push(n),a++),!(n>e.x.at(-1))););}else{t.push(e.x[0]);for(var r=1,o=e.x[0];r<4&&(o+=864e3,e.x.includes(o)&&(t.push(o),r++),!(o>e.x.at(-1))););}return t},e.getTooltip=function(t,a){return"1d"===e.props.chart.range?new Date(1e3*t).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"})+" - "+a:"5d"===e.props.chart.range?new Date(1e3*t).toLocaleDateString("en-CA",{weekday:"short",month:"short",day:"numeric"})+", "+new Date(1e3*t).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"})+" - "+a:new Date(1e3*t).toLocaleDateString("en-CA",{month:"short",day:"numeric"})+", "+new Date(1e3*t).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"})+" - "+a},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.chart.y.filter((function(e){return null!==e})).map((function(t,a){return{time:e.props.chart.x[a],quote:Math.round(100*t)/100}})),a=this.props.chart.chartPreviousClose,n=this.getTicks(this.props.chart);return r.a.createElement(z.a,{width:"100%",height:300},r.a.createElement(K.a,{width:500,height:400,data:t,className:"my-3"},r.a.createElement(H.a,{strokeDasharray:"3 3"}),r.a.createElement(X.a,{dataKey:"time",tickLine:!1,tickSize:8,axisLine:!1,tick:{fontSize:"0.8rem"},ticks:n,interval:"preserveStartEnd",tickFormatter:function(t){return"1d"===e.props.chart.range?new Date(1e3*t).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}):"5d"===e.props.chart.range?new Date(1e3*t).toLocaleDateString("en-CA",{weekday:"short"}):new Date(1e3*t).toLocaleDateString("en-CA",{month:"short",day:"numeric"})},type:"category"}),r.a.createElement(F.a,{type:"number",domain:["auto","auto"],orientation:"right",tickLine:!1,tickSize:0,axisLine:!1,tick:{fontSize:"0.8rem"}}),r.a.createElement(B.a,{formatter:function(e,t,a){return[e,""]},separator:"",contentStyle:{fontSize:"0.8rem"},content:function(t){var a=t.active,n=t.payload,o=t.label;return a&&n&&n.length?r.a.createElement("div",{className:"custom-tooltip",style:{backgroundColor:"#ddd",fontSize:"0.8rem",padding:"0 0.5rem"}},r.a.createElement("p",{className:"label"},e.getTooltip(o,n[0].value))):r.a.createElement(r.a.Fragment,null)}}),r.a.createElement(G.a,{y:a,stroke:"black",strokeDasharray:"3 3",alwaysShow:!0},r.a.createElement($.a,{value:a,position:"bottom",fontSize:"0.8rem",fontWeight:"bold"})),r.a.createElement(V.a,{type:"monotone",dataKey:"quote",stroke:"#8884d8",fill:Math.round(100*this.props.chart.y.at(-1))/100>a?"green":"red"})))}}]),a}(n.Component);a(395);a(396).config();var W=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateMessage=function(e,t){n.setState({errorMessage:e,message:t})},n.handleTabUpdate=function(e){n.getQuoteChart(n.state.chart.symbol,n.state.chart.exchange,!1,!0,e),n.setState((function(t){return{chart:Object(c.a)(Object(c.a)({},t.chart),{},{range:e})}}))},n.updateQuotes=function(e){for(var t=Object(l.a)(n.state.latestQuotes),a=n.state.latestQuotes.length,r=!1,o=0;o<a;o++){var s=t[o];if(s.symbol===e.symbol){r=!0,s.marketState=e.marketState,s.regularMarketDayHigh=Object(c.a)({},e.regularMarketDayHigh),s.regularMarketDayLow=Object(c.a)({},e.regularMarketDayLow),s.regularMarketChangePercent=Object(c.a)({},e.regularMarketChangePercent),s.regularMarketChange=Object(c.a)({},e.regularMarketChange),s.regularMarketPrice=Object(c.a)({},e.regularMarketPrice),s.regularMarketTime=Object(c.a)({},e.regularMarketTime),"POST"!==e.marketState&&"POSTPOST"!==e.marketState&&"PREPRE"!==e.marketState||!e.postMarketTime?"PRE"===e.marketState&&e.preMarketTime&&(s.preMarketPrice=Object(c.a)({},e.preMarketPrice),s.preMarketTime=Object(c.a)({},e.preMarketTime),s.preMarketChangePercent=Object(c.a)({},e.preMarketChangePercent),s.preMarketChange=Object(c.a)({},e.preMarketChange)):(s.postMarketPrice=Object(c.a)({},e.postMarketPrice),s.postMarketTime=Object(c.a)({},e.postMarketTime),s.postMarketChangePercent=Object(c.a)({},e.postMarketChangePercent),s.postMarketChange=Object(c.a)({},e.postMarketChange));break}}r||(t=[e].concat(Object(l.a)(t))),n.setState({latestQuotes:t})},n.getQuoteChart=function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"1d",s="tsx"===t?e+".to":"cse"===t?e+".cn":"tsxv"===t?e+".v":"neo"===t?e+".ne":e,l="1d"===o?"2m":"5d"===o?"15m":"30m";if(r)n.setState({showSymbolExchangeInput:a,showChart:r}),w.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v8/finance/chart/"+s+"?includePrePost=false&interval="+l+"&useYfid=true&range="+o).then((function(a){var r=a.data.chart.result;if(r&&r.length>0){var s=r[0].timestamp;s&&s.length>0?n.setState({chart:{range:o,exchange:t,symbol:e,x:s,y:r[0].indicators.quote[0].close,chartPreviousClose:r[0].meta.chartPreviousClose},errorMessage:null}):n.setState({chart:null,errorMessage:"Sorry, no data found."})}else if(a.data.chart.error){var l=a.data.chart.error.code,c=a.data.chart.error.description;n.setState({chart:null,errorMessage:l+": "+c})}else n.setState({chart:null,errorMessage:"Sorry, no data found."})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState({chart:null,errorMessage:t})):(t=e.name+" ("+e.code+"): "+e.message,n.setState({chart:null,errorMessage:t}))}));else if(n.setState({showSymbolExchangeInput:a,showChart:!1}),e)w.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols="+s).then((function(e){var t=e.data.quoteResponse.result;if(t&&t.length>0){var a=t[0].longName?t[0].longName+" on "+t[0].fullExchangeName:t[0].shortName?t[0].shortName+" on "+t[0].fullExchangeName:null;a?(n.setState({errorMessage:null,message:a,chart:null}),n.updateQuotes(t[0])):n.setState({errorMessage:"Sorry, no data found.",chart:null})}else n.setState({errorMessage:"Sorry, no data found.",chart:null})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState({errorMessage:t,chart:null})):(t=e.name+" ("+e.code+"): "+e.message,n.setState({errorMessage:t,chart:null}))}));else if(n.state.latestQuotes&&n.state.latestQuotes.length>0){var c=n.state.latestQuotes.map((function(e){return e.symbol})).join();w.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols="+c).then((function(e){var t=e.data.quoteResponse.result;if(t&&t.length>0){var a="All "+t.length+" quotes updated.";a?n.setState({latestQuotes:t,errorMessage:null,message:a,chart:null}):n.setState({errorMessage:"Sorry, no data found.",chart:null})}else n.setState({errorMessage:"Sorry, no data found.",chart:null})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState({errorMessage:t,chart:null})):(t=e.name+" ("+e.code+"): "+e.message,n.setState({errorMessage:t,chart:null}))}))}},n.toggleSymbolExchangeInputShow=function(){n.setState((function(e){return{showSymbolExchangeInput:!e.showSymbolExchangeInput}}))},n.handleCloseChart=function(){n.setState({showChart:!1,chart:null})},n.state={errorMessage:null,message:null,showSymbolExchangeInput:!0,showChart:!1,chart:null,latestQuotes:[]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,null,r.a.createElement(p.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm"},r.a.createElement(p.a.Brand,null,r.a.createElement("span",{role:"img","aria-label":"Stock"},"\ud83d\udcc8")," ",r.a.createElement("a",{href:"https://enjoyit.ca",title:"go to enjoyit.ca"},"enjoyit.ca")," ",r.a.createElement(f.a,{variant:"light"},"v","0.8.0")),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},r.a.createElement(b.a,null,r.a.createElement(b.a.Link,{href:"mailto:feedback@enjoyit.ca",title:"provide feedback to feedback@enjoyit.ca"},"Feedback"),r.a.createElement(b.a.Link,{href:"mailto:donations@enjoyit.ca",title:"eTransfer less than $10 to donations@enjoyit.ca"},"Donations")))),r.a.createElement(U,null),this.state.showSymbolExchangeInput?r.a.createElement(R,{handleSubmit:this.getQuoteChart,handleInputChange:this.updateMessage}):r.a.createElement(q,{onClick:this.toggleSymbolExchangeInputShow}),this.state.message&&r.a.createElement(N,{msg:this.state.message}),this.state.errorMessage&&r.a.createElement(d.a,{variant:"warning"},this.state.errorMessage),this.state.latestQuotes.length>0&&r.a.createElement(P,{data:this.state.latestQuotes,handleSubmit:this.getQuoteChart}),this.state.chart&&r.a.createElement(y.a,{show:this.state.showChart,onHide:this.handleCloseChart},r.a.createElement(y.a.Body,null,r.a.createElement("p",{className:"text-center"},this.state.chart.symbol.toUpperCase()," on ",this.state.chart.exchange.toUpperCase()," Exchange ",r.a.createElement("br",null),r.a.createElement("small",null,new Date(1e3*this.state.chart.x[0]).toLocaleDateString("en-CA")," ",new Date(1e3*this.state.chart.x[0]).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"})," - ",new Date(1e3*this.state.chart.x.at(-1)).toLocaleDateString("en-CA")," ",new Date(1e3*this.state.chart.x.at(-1)).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}))),r.a.createElement(E.a,{id:"chart-tab",activeKey:this.state.chart.range,onSelect:function(t){return e.handleTabUpdate(t)}},r.a.createElement(k.a,{eventKey:"1d",title:"1D"},r.a.createElement(J,{chart:this.state.chart})),r.a.createElement(k.a,{eventKey:"5d",title:"5D"},r.a.createElement(J,{chart:this.state.chart})),r.a.createElement(k.a,{eventKey:"1mo",title:"1M"},r.a.createElement(J,{chart:this.state.chart}))))))}}]),a}(n.Component);s.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.d6c38ecb.chunk.js.map