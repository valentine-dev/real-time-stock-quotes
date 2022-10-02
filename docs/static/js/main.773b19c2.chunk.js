(this["webpackJsonpreal-time-stock-quotes-ui"]=this["webpackJsonpreal-time-stock-quotes-ui"]||[]).push([[0],{241:function(e,t,a){e.exports=a(399)},268:function(e,t,a){},395:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),l=a(31),c=a(168),i=a(32),h=a(33),u=a(34),m=a(35),g=a(70),d=a(106),p=a(114),b=a(94),f=a(232),k=a(167),E=a(233),y=a(145),S=a(165),w=a.n(S),C=(a(268),a(102)),v=a(414),M=a(406),x=a(407),D=a(214),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggleShowDate=function(e){e?n.setState({showDate:!1}):n.setState({showDate:!0})},n.toggleShowRange=function(e){e?n.setState({showRange:!1}):n.setState({showRange:!0})},n.toggleShowDiff=function(e){e?n.setState({showDiff:!1}):n.setState({showDiff:!0})},n.state={showDate:!1,showRange:!1,showDiff:!1},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(D.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm"},r.a.createElement(j,{showStates:this.state,handleToggleShowDate:this.toggleShowDate,handleToggleShowRange:this.toggleShowRange,handleToggleShowDiff:this.toggleShowDiff}),r.a.createElement(O,{rows:this.props.data,showStates:this.state,handleSubmit:this.props.handleSubmit}))}}]),a}(n.Component),j=function(e){return r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-right"},r.a.createElement("th",{className:"text-left",style:{width:"25%"}}),r.a.createElement("th",{style:{width:"25%"}},e.showStates.showDate?r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},r.a.createElement("span",{role:"img","aria-label":"Date"},"\ud83d\udcc6")):r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},r.a.createElement("span",{role:"img","aria-label":"Time"},"\u23f2"))),r.a.createElement("th",{style:{width:"25%"}},e.showStates.showRange?r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showStates.showRange)}},r.a.createElement("span",{role:"img","aria-label":"Range"},"\ud83d\udcca")):r.a.createElement(C.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showStates.showRange)}},r.a.createElement("span",{role:"img","aria-label":"Price"},"\ud83d\udcb0"))),r.a.createElement("th",{style:{width:"25%"}},e.showStates.showDiff?r.a.createElement(C.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},r.a.createElement("span",null,"\xb1")):r.a.createElement(C.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},r.a.createElement("span",null,"%")))))},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).refreshQuote=function(t,a){e.props.handleSubmit(a.toLowerCase(),t.toLowerCase(),!1,!1)},e.refreshChart=function(t,a){e.props.handleSubmit(a.toLowerCase(),t.toLowerCase(),!1,!0)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.rows.map((function(t,a){var n=t.regularMarketDayLow.fmt,o=t.regularMarketDayHigh.fmt,s=t.regularMarketPrice.fmt,l=t.symbol.indexOf("."),c=l>-1?t.symbol.slice(0,l):t.symbol,i="CAD"===t.currency.toUpperCase()?"C$":"$",h=l>-1?"to"===t.symbol.slice(l+1).toLowerCase()?"primary":"cn"===t.symbol.slice(l+1).toLowerCase()?"danger":"v"===t.symbol.slice(l+1).toLowerCase()?"dark":"warning":"success",u=l>-1?"to"===t.symbol.slice(l+1).toLowerCase()?"tsx":"cn"===t.symbol.slice(l+1).toLowerCase()?"cse":"v"===t.symbol.slice(l+1).toLowerCase()?"tsxv":"neo":"us",m=t.regularMarketTime.raw,g=t.regularMarketChangePercent.fmt,d=t.regularMarketChange.fmt,p=t.regularMarketChange.raw,b=t.regularMarketPrice.fmt;"POST"!==t.marketState&&"POSTPOST"!==t.marketState&&"PREPRE"!==t.marketState||!t.postMarketTime?"PRE"===t.marketState&&t.preMarketTime&&(m=t.preMarketTime.raw,g=t.preMarketChangePercent.fmt,d=t.preMarketChange.fmt,p=t.preMarketChange.raw,b=t.preMarketPrice.fmt):(m=t.postMarketTime.raw,g=t.postMarketChangePercent.fmt,d=t.postMarketChange.fmt,p=t.postMarketChange.raw,b=t.postMarketPrice.fmt);var f=new Date(1e3*m).toLocaleDateString("en-CA",{month:"numeric",day:"numeric"}),k=new Date(1e3*m).toLocaleTimeString("en-CA",{hour12:!1}),E=p>0?"text-success":p<0?"text-danger":"text-dark";return r.a.createElement("tr",{key:u+"-"+c,className:"text-right"},r.a.createElement("td",{className:"text-left"},r.a.createElement(C.a,{className:"text-"+h+" font-weight-bold",style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.refreshChart(u,c)}},r.a.createElement("span",{role:"img","aria-label":"Chart"},"\ud83d\udcc8"))," ",r.a.createElement(C.a,{className:"text-"+h+" font-weight-bold",style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.refreshQuote(u,c)}},c)),r.a.createElement("td",null,e.props.showStates.showDate?r.a.createElement("span",null,f):r.a.createElement("span",null,k)),r.a.createElement("td",null,e.props.showStates.showRange?r.a.createElement(v.a,{overlay:r.a.createElement(M.a,{id:u+"-"+c},n+"-"+o)},r.a.createElement(x.a,{key:1,variant:h,min:n,now:b,max:o,label:s})):r.a.createElement("span",null,i,b)),r.a.createElement("td",{className:E},e.props.showStates.showDiff?r.a.createElement("span",null,d):r.a.createElement("span",null,g)))}));return r.a.createElement("tbody",null,t)}}]),a}(n.Component),P=T,N=a(19),L=a(169),I=function(e){var t=e.msg,a=Object(n.useState)(!0),o=Object(N.a)(a,2),s=o[0],l=o[1];return r.a.createElement(L.a,{delay:3e3,autohide:!0,show:s,onClose:function(){return l(!1)}},r.a.createElement(L.a.Body,null,t))},R=a(113),Q=a(52),U=a(133),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getQuote=function(){n.props.handleInputChange(null,"Quote for "+n.state.symbol.toUpperCase()+" on "+n.state.exchange.toUpperCase()+" exchange requested ..."),n.props.handleSubmit(n.state.symbol.toLowerCase(),n.state.exchange.toLowerCase(),!0)},n.handleSymbolUpdate=function(e){var t=new RegExp("^[a-zA-Z0-9]{1,32}$"),a=e.target.value.trim();t.test(a)?(n.setState({symbol:a}),n.props.handleInputChange(null,null)):(n.setState({symbol:""}),n.props.handleInputChange("Invalid symbol.",null))},n.handleExchangeUpdate=function(e){n.setState({exchange:e.target.value.trim()}),n.props.handleInputChange(null,null)},n.handleSymbolInputKeyDown=function(e){"Enter"===e.key&&n.getQuote()},n.state={exchange:"TSX",symbol:"",date:new Date},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=!0;void 0!==this.state.symbol&&null!==this.state.symbol&&this.state.symbol.length>0&&(e=!1);var t=this.state.date.toLocaleTimeString("en-CA",{hour12:!1});return r.a.createElement(g.a,{className:"mt-3 md-3"},r.a.createElement(R.a,{autoComplete:"on",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(R.a.Group,{as:U.a},r.a.createElement(Q.a,{xs:"4"},r.a.createElement(R.a.Control,{as:"select",onChange:this.handleExchangeUpdate,placeholder:"Exchange",defaultValue:"TSX",size:"sm"},r.a.createElement("option",{value:"US",className:"text-success font-weight-bold"},"US"),r.a.createElement("option",{value:"TSX",className:"text-primary font-weight-bold"},"TSX"),r.a.createElement("option",{value:"TSXV",className:"text-dark font-weight-bold"},"TSXV"),r.a.createElement("option",{value:"CSE",className:"text-danger font-weight-bold"},"CSE"),r.a.createElement("option",{value:"NEO",className:"text-warning font-weight-bold"},"NEO"))),r.a.createElement(Q.a,{xs:"6"},r.a.createElement(R.a.Control,{type:"text",autoCorrect:"off",autoCapitalize:"off",placeholder:"symbol-"+t,size:"sm",value:this.state.symbol,onChange:this.handleSymbolUpdate,onKeyDown:this.handleSymbolInputKeyDown})),e?r.a.createElement(Q.a,{xs:"2"},r.a.createElement(C.a,{title:"enter symbol to enable clicking",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote,disabled:!0},r.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))):r.a.createElement(Q.a,{xs:"2"},r.a.createElement(C.a,{title:"click to get quote",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote},r.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))))))}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.props.onClick()},n.state={date:new Date},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.date.toLocaleTimeString("en-CA",{hour12:!1});return r.a.createElement(g.a,{className:"mt-3 md-3"},r.a.createElement(U.a,null,r.a.createElement(Q.a,{className:"my-auto"},e),r.a.createElement(Q.a,{className:"text-right"},r.a.createElement(C.a,{title:"show symbol and excahnge input",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.handleClick},r.a.createElement("span",{role:"img","aria-label":"eye"},"\ud83d\udc41")))))}}]),a}(n.Component),z=function(){var e=Object(n.useState)(!0),t=Object(N.a)(e,2),a=t[0],o=t[1];return a?r.a.createElement(d.a,{variant:"primary",dismissible:!0,onClose:function(){return o(!1)}},r.a.createElement(d.a.Heading,null,"FREE Real-Time Quotes for North American Stocks"),r.a.createElement("p",null,"Enjoy exploring all available features ",r.a.createElement("span",{role:"img","aria-label":"Seedling"},"\ud83c\udf31")," ",r.a.createElement("span",{role:"img","aria-label":"Chart"},"\ud83d\udcc8"))):r.a.createElement(r.a.Fragment,null)},K=a(408),H=a(409),X=a(413),B=a(230),F=a(231),$=a(115),G=a(222),V=a(44),W=a(235),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.chart.y.filter((function(e){return null!==e})).map((function(t,a){return{time:new Date(1e3*e.props.chart.x[a]).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}),quote:Math.round(100*t)/100}})),a=this.props.chart.chartPreviousClose;return r.a.createElement(K.a,{width:"90%",height:300},r.a.createElement(H.a,{width:500,height:400,data:t,className:"my-3 mx-3"},r.a.createElement(X.a,{strokeDasharray:"3 3"}),r.a.createElement(B.a,{dataKey:"time",tickLine:!1,tickSize:8,axisLine:!1,tick:{fontSize:"0.8rem"}})," ",r.a.createElement(F.a,{type:"number",domain:["auto","auto"],orientation:"right",tickLine:!1,tickSize:0,axisLine:!1,tick:{fontSize:"0.8rem"}}),r.a.createElement($.a,{formatter:function(e,t,a){return[e,""]},separator:"",contentStyle:{fontSize:"0.8rem"},content:function(e){var t=e.active,a=e.payload,n=e.label;return t&&a&&a.length?r.a.createElement("div",{className:"custom-tooltip",style:{backgroundColor:"#ddd",fontSize:"0.8rem",padding:"0 0.5rem"}},r.a.createElement("p",{className:"label"},"".concat(n," - ").concat(a[0].value))):r.a.createElement(r.a.Fragment,null)}}),r.a.createElement(G.a,{y:a,stroke:"black",strokeDasharray:"3 3",alwaysShow:!0},r.a.createElement(V.a,{value:a,position:"bottom",fontSize:"0.8rem",fontWeight:"bold"})),r.a.createElement(W.a,{type:"monotone",dataKey:"quote",stroke:"#8884d8",fill:Math.round(100*this.props.chart.y.at(-1))/100>a?"green":"red"})))}}]),a}(n.Component);a(395);a(396).config();var Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateMessage=function(e,t){n.setState({errorMessage:e,message:t})},n.handleTabUpdate=function(e){n.getQuoteChart(n.state.chart.symbol,n.state.chart.exchange,!1,!0,e),n.setState({chartTab:e})},n.updateQuotes=function(e){for(var t=Object(c.a)(n.state.latestQuotes),a=n.state.latestQuotes.length,r=!1,o=0;o<a;o++){var s=t[o];if(s.symbol===e.symbol){r=!0,s.marketState=e.marketState,s.regularMarketDayHigh=Object(l.a)({},e.regularMarketDayHigh),s.regularMarketDayLow=Object(l.a)({},e.regularMarketDayLow),s.regularMarketChangePercent=Object(l.a)({},e.regularMarketChangePercent),s.regularMarketChange=Object(l.a)({},e.regularMarketChange),s.regularMarketPrice=Object(l.a)({},e.regularMarketPrice),s.regularMarketTime=Object(l.a)({},e.regularMarketTime),"POST"!==e.marketState&&"POSTPOST"!==e.marketState&&"PREPRE"!==e.marketState||!e.postMarketTime?"PRE"===e.marketState&&e.preMarketTime&&(s.preMarketPrice=Object(l.a)({},e.preMarketPrice),s.preMarketTime=Object(l.a)({},e.preMarketTime),s.preMarketChangePercent=Object(l.a)({},e.preMarketChangePercent),s.preMarketChange=Object(l.a)({},e.preMarketChange)):(s.postMarketPrice=Object(l.a)({},e.postMarketPrice),s.postMarketTime=Object(l.a)({},e.postMarketTime),s.postMarketChangePercent=Object(l.a)({},e.postMarketChangePercent),s.postMarketChange=Object(l.a)({},e.postMarketChange));break}}r||(t=[e].concat(Object(c.a)(t))),n.setState({latestQuotes:t})},n.getQuoteChart=function(e,t,a,r,o){var s="tsx"===t?e+".to":"cse"===t?e+".cn":"tsxv"===t?e+".v":"neo"===t?e+".ne":e,l=o||"1d";r?(n.setState({showSymbolExchangeInput:a,showChart:r}),w.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v8/finance/chart/"+s+"?includePrePost=false&interval=2m&useYfid=true&range="+l).then((function(a){var r=a.data.chart.result;if(r&&r.length>0){var o=r[0].timestamp;o&&o.length>0?n.setState({chart:{exchange:t,symbol:e,x:o,y:r[0].indicators.quote[0].close,chartPreviousClose:r[0].meta.chartPreviousClose},errorMessage:null}):n.setState({chart:null,errorMessage:"Sorry, no data found."})}else if(a.data.chart.error){var s=a.data.chart.error.code,l=a.data.chart.error.description;n.setState({chart:null,errorMessage:s+": "+l})}else n.setState({chart:null,errorMessage:"Sorry, no data found."})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState({chart:null,errorMessage:t})):(t=e.name+" ("+e.code+"): "+e.message,n.setState({chart:null,errorMessage:t}))}))):(n.setState({showSymbolExchangeInput:a,showChart:!1}),w.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols="+s).then((function(e){var t=e.data.quoteResponse.result;if(t&&t.length>0){var a=t[0].longName?t[0].longName+" on "+t[0].fullExchangeName:t[0].shortName?t[0].shortName+" on "+t[0].fullExchangeName:null;a?(n.setState({errorMessage:null,message:a,chart:null}),n.updateQuotes(t[0])):n.setState({errorMessage:"Sorry, no data found.",chart:null})}else n.setState({errorMessage:"Sorry, no data found.",chart:null})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,n.setState({errorMessage:t,chart:null})):(t=e.name+" ("+e.code+"): "+e.message,n.setState({errorMessage:t,chart:null}))})))},n.toggleSymbolExchangeInputShow=function(){n.setState((function(e){return{showSymbolExchangeInput:!e.showSymbolExchangeInput}}))},n.handleCloseChart=function(){n.setState({showChart:!1,chart:null})},n.state={errorMessage:null,message:null,showSymbolExchangeInput:!0,showChart:!1,chart:null,chartTab:"1d",latestQuotes:[]},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,null,r.a.createElement(p.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm"},r.a.createElement(p.a.Brand,null,r.a.createElement("span",{role:"img","aria-label":"Stock"},"\ud83d\udcc8")," ",r.a.createElement("a",{href:"https://enjoyit.ca",title:"go to enjoyit.ca"},"enjoyit.ca")," ",r.a.createElement(f.a,{variant:"light"},"v","0.7.0")),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},r.a.createElement(b.a,null,r.a.createElement(b.a.Link,{href:"mailto:feedback@enjoyit.ca",title:"provide feedback to feedback@enjoyit.ca"},"Feedback"),r.a.createElement(b.a.Link,{href:"mailto:donations@enjoyit.ca",title:"eTransfer less than $10 to donations@enjoyit.ca"},"Donations")))),r.a.createElement(z,null),this.state.showSymbolExchangeInput?r.a.createElement(A,{handleSubmit:this.getQuoteChart,handleInputChange:this.updateMessage}):r.a.createElement(q,{onClick:this.toggleSymbolExchangeInputShow}),this.state.message&&r.a.createElement(I,{msg:this.state.message}),this.state.errorMessage&&r.a.createElement(d.a,{variant:"warning"},this.state.errorMessage),this.state.latestQuotes.length>0&&r.a.createElement(P,{data:this.state.latestQuotes,handleSubmit:this.getQuoteChart}),this.state.chart&&r.a.createElement(k.a,{show:this.state.showChart,onHide:this.handleCloseChart},r.a.createElement(k.a.Body,null,r.a.createElement("p",{className:"text-center"},this.state.chart.symbol.toUpperCase()," on ",this.state.chart.exchange.toUpperCase()," Exchange ",r.a.createElement("br",null),r.a.createElement("small",null,new Date(1e3*this.state.chart.x[0]).toLocaleDateString("en-CA")," ",new Date(1e3*this.state.chart.x[0]).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"})," - ",new Date(1e3*this.state.chart.x.at(-1)).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}))),r.a.createElement(g.a,{className:"mt-3 md-3"},r.a.createElement(E.a,{id:"chart-tab",activeKey:this.state.chartTab,onSelect:function(t){return e.handleTabUpdate(t)}},r.a.createElement(y.a,{eventKey:"1d",title:"1D"},r.a.createElement(J,{chart:this.state.chart})),r.a.createElement(y.a,{eventKey:"5d",title:"5D"},r.a.createElement(J,{chart:this.state.chart})),r.a.createElement(y.a,{eventKey:"1mo",title:"1M"},r.a.createElement(J,{chart:this.state.chart})))))))}}]),a}(n.Component);s.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.773b19c2.chunk.js.map