(this["webpackJsonpreal-time-stock-quotes-ui"]=this["webpackJsonpreal-time-stock-quotes-ui"]||[]).push([[0],{230:function(e,t,a){e.exports=a(389)},257:function(e,t,a){},262:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(27),s=a.n(o),l=a(30),i=a(159),c=a(35),m=a(36),h=a(37),u=a(38),g=a(82),d=a(103),f=a(111),w=a(136),p=a(205),k=a(158),y=a(156),b=a.n(y),S=(a(257),a(99)),E=a(403),C=a(396),v=a(405),M=a(204),D=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).toggleShowDate=function(e){e?r.setState({showDate:!1}):r.setState({showDate:!0})},r.toggleShowRange=function(e){e?r.setState({showRange:!1}):r.setState({showRange:!0})},r.toggleShowDiff=function(e){e?r.setState({showDiff:!1}):r.setState({showDiff:!0})},r.state={showDate:!1,showRange:!1,showDiff:!1},r}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm"},n.a.createElement(T,{showStates:this.state,handleToggleShowDate:this.toggleShowDate,handleToggleShowRange:this.toggleShowRange,handleToggleShowDiff:this.toggleShowDiff}),n.a.createElement(x,{rows:this.props.data,showStates:this.state,handleSubmit:this.props.handleSubmit}))}}]),a}(r.Component),T=function(e){return n.a.createElement("thead",null,n.a.createElement("tr",{className:"text-right"},n.a.createElement("th",{className:"text-left",style:{width:"25%"}}),n.a.createElement("th",{style:{width:"25%"}},e.showStates.showDate?n.a.createElement(S.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},n.a.createElement("span",{role:"img","aria-label":"Date"},"\ud83d\udcc6")):n.a.createElement(S.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowDate(e.showStates.showDate)}},n.a.createElement("span",{role:"img","aria-label":"Time"},"\u23f2"))),n.a.createElement("th",{style:{width:"25%"}},e.showStates.showRange?n.a.createElement(S.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showStates.showRange)}},n.a.createElement("span",{role:"img","aria-label":"Range"},"\ud83d\udcca")):n.a.createElement(S.a,{style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.handleToggleShowRange(e.showStates.showRange)}},n.a.createElement("span",{role:"img","aria-label":"Price"},"\ud83d\udcb0"))),n.a.createElement("th",{style:{width:"25%"}},e.showStates.showDiff?n.a.createElement(S.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},n.a.createElement("span",null,"\xb1")):n.a.createElement(S.a,{className:"shadow-none",style:{border:"none",background:"none",color:"black",padding:0},onClick:function(){return e.handleToggleShowDiff(e.showStates.showDiff)}},n.a.createElement("span",null,"%")))))},x=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).refreshQuote=function(t,a){e.props.handleSubmit(a.toLowerCase(),t.toLowerCase(),!1,!1)},e.refreshChart=function(t,a){e.props.handleSubmit(a.toLowerCase(),t.toLowerCase(),!1,!0)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.rows.map((function(t,a){var r=t.regularMarketDayLow.fmt,o=t.regularMarketDayHigh.fmt,s=t.symbol.indexOf("."),l=s>-1?t.symbol.slice(0,s):t.symbol,i="CAD"===t.currency.toUpperCase()?"C$":"$",c=s>-1?"to"===t.symbol.slice(s+1).toLowerCase()?"primary":"cn"===t.symbol.slice(s+1).toLowerCase()?"danger":"v"===t.symbol.slice(s+1).toLowerCase()?"dark":"warning":"success",m=s>-1?"to"===t.symbol.slice(s+1).toLowerCase()?"tsx":"cn"===t.symbol.slice(s+1).toLowerCase()?"cse":"v"===t.symbol.slice(s+1).toLowerCase()?"tsxv":"neo":"us",h=t.regularMarketTime.raw,u=t.regularMarketChangePercent.fmt,g=t.regularMarketChange.fmt,d=t.regularMarketChange.raw,f=t.regularMarketPrice.fmt;"POST"!==t.marketState&&"POSTPOST"!==t.marketState&&"PREPRE"!==t.marketState||!t.postMarketTime?"PRE"===t.marketState&&t.preMarketTime&&(h=t.preMarketTime.raw,u=t.preMarketChangePercent.fmt,g=t.preMarketChange.fmt,d=t.preMarketChange.raw,f=t.preMarketPrice.fmt):(h=t.postMarketTime.raw,u=t.postMarketChangePercent.fmt,g=t.postMarketChange.fmt,d=t.postMarketChange.raw,f=t.postMarketPrice.fmt);var w=new Date(1e3*h).toLocaleDateString("en-CA",{month:"numeric",day:"numeric"}),p=new Date(1e3*h).toLocaleTimeString("en-CA",{hour12:!1}),k=d>0?"text-success":d<0?"text-danger":"text-dark";return n.a.createElement("tr",{key:m+"-"+l,className:"text-right"},n.a.createElement("td",{className:"text-left"},n.a.createElement(S.a,{className:"text-"+c+" font-weight-bold",style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.refreshChart(m,l)}},n.a.createElement("span",{role:"img","aria-label":"Chart"},"\ud83d\udcc8"))," ",n.a.createElement(S.a,{className:"text-"+c+" font-weight-bold",style:{boxShadow:"none",border:"none",background:"none",padding:0},onClick:function(){return e.refreshQuote(m,l)}},l)),n.a.createElement("td",null,e.props.showStates.showDate?n.a.createElement("span",null,w):n.a.createElement("span",null,p)),n.a.createElement("td",null,e.props.showStates.showRange?n.a.createElement(E.a,{overlay:n.a.createElement(C.a,{id:m+"-"+l},r+"-"+o)},n.a.createElement(v.a,{key:1,variant:c,min:r,now:f,max:o,label:f})):n.a.createElement("span",null,i,f)),n.a.createElement("td",{className:k},e.props.showStates.showDiff?n.a.createElement("span",null,g):n.a.createElement("span",null,u)))}));return n.a.createElement("tbody",null,t)}}]),a}(r.Component),P=D,N=a(19),O=a(160),j=function(e){var t=e.msg,a=Object(r.useState)(!0),o=Object(N.a)(a,2),s=o[0],l=o[1];return n.a.createElement(O.a,{delay:3e3,autohide:!0,show:s,onClose:function(){return l(!1)}},n.a.createElement(O.a.Body,null,t))},L=a(110),R=a(50),A=a(130),Q=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).getQuote=function(){r.props.handleInputChange(null,"Quote for "+r.state.symbol.toUpperCase()+" on "+r.state.exchange.toUpperCase()+" exchange requested ..."),r.props.handleSubmit(r.state.symbol.toLowerCase(),r.state.exchange.toLowerCase(),!0)},r.handleSymbolUpdate=function(e){var t=new RegExp("^[a-zA-Z0-9]{1,32}$"),a=e.target.value.trim();t.test(a)?(r.setState({symbol:a}),r.props.handleInputChange(null,null)):(r.setState({symbol:""}),r.props.handleInputChange("Invalid symbol.",null))},r.handleExchangeUpdate=function(e){r.setState({exchange:e.target.value.trim()}),r.props.handleInputChange(null,null)},r.state={exchange:"TSX",symbol:"",date:new Date},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=!0;void 0!==this.state.symbol&&null!==this.state.symbol&&this.state.symbol.length>0&&(e=!1);var t=this.state.date.toLocaleTimeString("en-CA",{hour12:!1});return n.a.createElement(g.a,{className:"mt-3 md-3"},n.a.createElement(L.a,{autoComplete:"on",onSubmit:function(e){return e.preventDefault()}},n.a.createElement(L.a.Group,{as:A.a},n.a.createElement(R.a,{xs:"4"},n.a.createElement(L.a.Control,{as:"select",onChange:this.handleExchangeUpdate,placeholder:"Exchange",defaultValue:"TSX",size:"sm"},n.a.createElement("option",{value:"US",className:"text-success font-weight-bold"},"US"),n.a.createElement("option",{value:"TSX",className:"text-primary font-weight-bold"},"TSX"),n.a.createElement("option",{value:"TSXV",className:"text-dark font-weight-bold"},"TSXV"),n.a.createElement("option",{value:"CSE",className:"text-danger font-weight-bold"},"CSE"),n.a.createElement("option",{value:"NEO",className:"text-warning font-weight-bold"},"NEO"))),n.a.createElement(R.a,{xs:"6"},n.a.createElement(L.a.Control,{type:"text",autoCorrect:"off",autoCapitalize:"off",onChange:this.handleSymbolUpdate,placeholder:"symbol-"+t,size:"sm",value:this.state.symbol})),e?n.a.createElement(R.a,{xs:"2"},n.a.createElement(S.a,{title:"enter symbol to enable clicking",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote,disabled:!0},n.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))):n.a.createElement(R.a,{xs:"2"},n.a.createElement(S.a,{title:"click to get quote",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.getQuote},n.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"))))))}}]),a}(r.Component),I=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleClick=function(){r.props.onClick()},r.state={date:new Date},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.date.toLocaleTimeString("en-CA",{hour12:!1});return n.a.createElement(g.a,{className:"mt-3 md-3"},n.a.createElement(A.a,null,n.a.createElement(R.a,{className:"my-auto"},e),n.a.createElement(R.a,{className:"text-right"},n.a.createElement(S.a,{title:"show symbol and excahnge input",className:"shadow-none",style:{border:"none",background:"none"},onClick:this.handleClick},n.a.createElement("span",{role:"img","aria-label":"eye"},"\ud83d\udc41")))))}}]),a}(r.Component),H=function(){var e=Object(r.useState)(!0),t=Object(N.a)(e,2),a=t[0],o=t[1];return a?n.a.createElement(d.a,{variant:"primary",dismissible:!0,onClose:function(){return o(!1)}},n.a.createElement(d.a.Heading,null,"FREE Real-Time Quotes for North American Stocks"),n.a.createElement("p",null,"Enjoy exploring all available features ",n.a.createElement("span",{role:"img","aria-label":"Seedling"},"\ud83c\udf31")," ",n.a.createElement("span",{role:"img","aria-label":"Chart"},"\ud83d\udcc8"))):n.a.createElement(n.a.Fragment,null)},U=(a(262),a(397)),q=a(398),z=a(402),F=a(221),W=a(222),G=a(112),V=a(213),B=a(40),X=a(224);a(263).config();var _=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).updateMessage=function(e,t){r.setState({errorMessage:e,message:t})},r.updateQuotes=function(e){for(var t=Object(i.a)(r.state.latestQuotes),a=r.state.latestQuotes.length,n=!1,o=0;o<a;o++){var s=t[o];if(s.symbol===e.symbol){n=!0,s.marketState=e.marketState,s.regularMarketDayHigh=Object(l.a)({},e.regularMarketDayHigh),s.regularMarketDayLow=Object(l.a)({},e.regularMarketDayLow),s.regularMarketChangePercent=Object(l.a)({},e.regularMarketChangePercent),s.regularMarketChange=Object(l.a)({},e.regularMarketChange),s.regularMarketPrice=Object(l.a)({},e.regularMarketPrice),s.regularMarketTime=Object(l.a)({},e.regularMarketTime),"POST"!==e.marketState&&"POSTPOST"!==e.marketState&&"PREPRE"!==e.marketState||!e.postMarketTime?"PRE"===e.marketState&&e.preMarketTime&&(s.preMarketPrice=Object(l.a)({},e.preMarketPrice),s.preMarketTime=Object(l.a)({},e.preMarketTime),s.preMarketChangePercent=Object(l.a)({},e.preMarketChangePercent),s.preMarketChange=Object(l.a)({},e.preMarketChange)):(s.postMarketPrice=Object(l.a)({},e.postMarketPrice),s.postMarketTime=Object(l.a)({},e.postMarketTime),s.postMarketChangePercent=Object(l.a)({},e.postMarketChangePercent),s.postMarketChange=Object(l.a)({},e.postMarketChange));break}}n||(t=[e].concat(Object(i.a)(t))),r.setState({latestQuotes:t})},r.getQuoteChart=function(e,t,a,n){var o="tsx"===t?e+".to":"cse"===t?e+".cn":"tsxv"===t?e+".v":"neo"===t?e+".ne":e;n?(r.setState({showSymbolExchangeInput:a,showChart:n}),b.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v8/finance/chart/"+o+"?includePrePost=false&interval=2m&useYfid=true&range=1d").then((function(a){var n=a.data.chart.result;if(n&&n.length>0){var o=n[0].timestamp;o&&o.length>0?r.setState({chart:{exchange:t,symbol:e,x:o,y:n[0].indicators.quote[0].close,previousClose:n[0].meta.previousClose},errorMessage:null}):r.setState({chart:null,errorMessage:"Sorry, no data found."})}else if(a.data.chart.error){var s=a.data.chart.error.code,l=a.data.chart.error.description;r.setState({chart:null,errorMessage:s+": "+l})}else r.setState({chart:null,errorMessage:"Sorry, no data found."})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,r.setState({chart:null,errorMessage:t})):(t=e.name+" ("+e.code+"): "+e.message,r.setState({chart:null,errorMessage:t}))}))):(r.setState({showSymbolExchangeInput:a,showChart:!1}),b.a.get("https://enjoyit-cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols="+o).then((function(e){var t=e.data.quoteResponse.result;if(t&&t.length>0){var a=t[0].longName?t[0].longName+" on "+t[0].fullExchangeName:t[0].shortName?t[0].shortName+" on "+t[0].fullExchangeName:null;a?(r.setState({errorMessage:null,message:a,chart:null}),r.updateQuotes(t[0])):r.setState({errorMessage:"Sorry, no data found.",chart:null})}else r.setState({errorMessage:"Sorry, no data found.",chart:null})})).catch((function(e){var t;e.response&&e.response.data?(t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:e.response.data.name+": "+e.response.data.message,r.setState({errorMessage:t,chart:null})):(t=e.name+" ("+e.code+"): "+e.message,r.setState({errorMessage:t,chart:null}))})))},r.toggleSymbolExchangeInputShow=function(){r.setState((function(e){return{showSymbolExchangeInput:!e.showSymbolExchangeInput}}))},r.handleCloseChart=function(){r.setState({showChart:!1,chart:null})},r.state={errorMessage:null,message:null,showSymbolExchangeInput:!0,showChart:!1,chart:null,latestQuotes:[{symbol:"TQQQ",twoHundredDayAverageChangePercent:{raw:-.50584614,fmt:"-50.58%"},dividendDate:{raw:1427932800,fmt:"2015-04-01",longFmt:"2015-04-01T20:00"},trailingThreeMonthNavReturns:{raw:12.46576,fmt:"12.47%"},fiftyTwoWeekLowChangePercent:{raw:.046022568,fmt:"4.60%"},language:"en-US",regularMarketDayRange:{raw:"22.22 - 23.095",fmt:"22.22 - 23.09"},regularMarketDayHigh:{raw:23.095,fmt:"23.09"},twoHundredDayAverageChange:{raw:-22.828873,fmt:"-22.83"},twoHundredDayAverage:{raw:45.130074,fmt:"45.13"},askSize:{raw:14,fmt:"14",longFmt:"14"},fiftyTwoWeekHighChange:{raw:-69.3788,fmt:"-69.38"},fiftyTwoWeekRange:"21.32 - 91.68",fiftyDayAverageChange:{raw:-8.3958,fmt:"-8.40"},exchangeDataDelayedBy:0,firstTradeDateMilliseconds:12658986e5,averageDailyVolume3Month:{raw:157968342,fmt:"157.968M",longFmt:"157,968,342"},fiftyTwoWeekLow:{raw:21.32,fmt:"21.32"},regularMarketVolume:{raw:89695488,fmt:"89.695M",longFmt:"89,695,488"},market:"us_market",quoteSourceName:"Nasdaq Real Time Price",messageBoardId:"finmb_98126597",priceHint:2,regularMarketDayLow:{raw:22.22,fmt:"22.22"},ytdReturn:{raw:-70.28212,fmt:"-70.28%"},exchange:"NGM",sourceInterval:15,region:"US",shortName:"ProShares UltraPro QQQ",fiftyDayAverageChangePercent:{raw:-.27350554,fmt:"-27.35%"},fullExchangeName:"NasdaqGM",gmtOffSetMilliseconds:-144e5,regularMarketOpen:{raw:22.85,fmt:"22.85"},regularMarketTime:{raw:1663859588,fmt:"11:13AM EDT"},regularMarketChangePercent:{raw:-4.0395823,fmt:"-4.04%"},quoteType:"ETF",averageDailyVolume10Day:{raw:183992480,fmt:"183.992M",longFmt:"183,992,480"},fiftyTwoWeekLowChange:{raw:.9812012,fmt:"0.98"},fiftyTwoWeekHighChangePercent:{raw:-.7567496,fmt:"-75.67%"},typeDisp:"ETF",tradeable:!1,currency:"USD",fiftyTwoWeekHigh:{raw:91.68,fmt:"91.68"},regularMarketPreviousClose:{raw:23.24,fmt:"23.24"},exchangeTimezoneName:"America/New_York",trailingThreeMonthReturns:{raw:12.46576,fmt:"12.47%"},bidSize:{raw:9,fmt:"9",longFmt:"9"},regularMarketChange:{raw:-.9387989,fmt:"-0.94"},cryptoTradeable:!1,fiftyDayAverage:{raw:30.697,fmt:"30.70"},exchangeTimezoneShortName:"EDT",regularMarketPrice:{raw:22.3012,fmt:"22.30"},customPriceAlertConfidence:"HIGH",marketState:"REGULAR",ask:{raw:22.37,fmt:"22.37"},bid:{raw:22.36,fmt:"22.36"},triggerable:!0,longName:"ProShares UltraPro QQQ"},{symbol:"SQQQ",trailingThreeMonthNavReturns:{raw:-26.05479,fmt:"-26.05%"},twoHundredDayAverageChangePercent:{raw:.25533658,fmt:"25.53%"},dividendDate:{raw:1530057600,fmt:"2018-06-26",longFmt:"2018-06-26T20:00"},fiftyTwoWeekLowChangePercent:{raw:.9193606,fmt:"91.94%"},language:"en-US",regularMarketDayRange:{raw:"52.08 - 54.12",fmt:"52.08 - 54.12"},regularMarketDayHigh:{raw:54.12,fmt:"54.12"},twoHundredDayAverageChange:{raw:10.98975,fmt:"10.99"},askSize:{raw:18,fmt:"18",longFmt:"18"},twoHundredDayAverage:{raw:43.04025,fmt:"43.04"},fiftyTwoWeekHighChange:{raw:-13.660004,fmt:"-13.66"},fiftyTwoWeekRange:{raw:"28.15 - 67.69",fmt:"28.15 - 67.69"},fiftyDayAverageChange:{raw:11.025799,fmt:"11.03"},firstTradeDateMilliseconds:12658986e5,exchangeDataDelayedBy:0,averageDailyVolume3Month:{raw:120583504,fmt:"120.584M",longFmt:"120,583,504"},fiftyTwoWeekLow:{raw:28.15,fmt:"28.15"},regularMarketVolume:{raw:68671952,fmt:"68.672M",longFmt:"68,671,952"},market:"us_market",quoteSourceName:"Nasdaq Real Time Price",messageBoardId:"finmb_98126590",priceHint:2,exchange:"NGM",sourceInterval:15,ytdReturn:{raw:65.09176,fmt:"65.09%"},regularMarketDayLow:{raw:52.08,fmt:"52.08"},region:"US",shortName:"ProShares UltraPro Short QQQ",fiftyDayAverageChangePercent:{raw:.25638887,fmt:"25.64%"},fullExchangeName:"NasdaqGM",gmtOffSetMilliseconds:-144e5,regularMarketOpen:{raw:52.63,fmt:"52.63"},regularMarketTime:{raw:1663859957,fmt:"11:19AM EDT"},regularMarketChangePercent:{raw:4.3453074,fmt:"4.35%"},quoteType:"ETF",fiftyTwoWeekLowChange:{raw:25.88,fmt:"25.88"},averageDailyVolume10Day:{raw:149580660,fmt:"149.581M",longFmt:"149,580,660"},fiftyTwoWeekHighChangePercent:{raw:-.20180239,fmt:"-20.18%"},typeDisp:"ETF",tradeable:!1,currency:"USD",fiftyTwoWeekHigh:{raw:67.69,fmt:"67.69"},regularMarketPreviousClose:{raw:51.78,fmt:"51.78"},exchangeTimezoneName:"America/New_York",trailingThreeMonthReturns:{raw:-26.05479,fmt:"-26.05%"},bidSize:{raw:11,fmt:"11",longFmt:"11"},regularMarketChange:{raw:2.25,fmt:"2.25"},cryptoTradeable:!1,fiftyDayAverage:{raw:43.0042,fmt:"43.00"},exchangeTimezoneShortName:"EDT",regularMarketPrice:{raw:54.03,fmt:"54.03"},marketState:"REGULAR",customPriceAlertConfidence:"HIGH",ask:{raw:54.01,fmt:"54.01"},bid:{raw:53.99,fmt:"53.99"},triggerable:!0,longName:"ProShares UltraPro Short QQQ"}]},r}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.chart&&this.state.chart.y.filter((function(e){return null!==e})).map((function(t,a){return{time:new Date(1e3*e.state.chart.x[a]).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}),quote:Math.round(100*t)/100}})),a=this.state.chart&&this.state.chart.previousClose,r=this.state.chart&&new Date(1e3*(this.state.chart.x[0]+1800)).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}),o=this.state.chart&&new Date(1e3*(this.state.chart.x[0]+1800+7200)).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}),s=this.state.chart&&new Date(1e3*(this.state.chart.x[0]+1800+14400)).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}),l=this.state.chart&&new Date(1e3*(this.state.chart.x[0]+1800+21600)).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"});return n.a.createElement(g.a,null,n.a.createElement(f.a,{bg:"dark",variant:"dark",sticky:"top",expand:"sm"},n.a.createElement(f.a.Brand,null,n.a.createElement("span",{role:"img","aria-label":"Stock"},"\ud83d\udcc8")," ",n.a.createElement("a",{href:"https://enjoyit.ca",title:"go to enjoyit.ca"},"enjoyit.ca")," ",n.a.createElement(p.a,{variant:"light"},"v","0.7.0")),n.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},n.a.createElement(w.a,null,n.a.createElement(w.a.Link,{href:"mailto:feedback@enjoyit.ca",title:"provide feedback to feedback@enjoyit.ca"},"Feedback"),n.a.createElement(w.a.Link,{href:"mailto:donations@enjoyit.ca",title:"eTransfer less than $10 to donations@enjoyit.ca"},"Donations")))),n.a.createElement(H,null),this.state.showSymbolExchangeInput?n.a.createElement(Q,{handleSubmit:this.getQuoteChart,handleInputChange:this.updateMessage}):n.a.createElement(I,{onClick:this.toggleSymbolExchangeInputShow}),this.state.message&&n.a.createElement(j,{msg:this.state.message}),this.state.errorMessage&&n.a.createElement(d.a,{variant:"warning"},this.state.errorMessage),this.state.latestQuotes.length>0&&n.a.createElement(P,{data:this.state.latestQuotes,handleSubmit:this.getQuoteChart}),this.state.chart&&n.a.createElement(k.a,{show:this.state.showChart,onHide:this.handleCloseChart},n.a.createElement(k.a.Body,null,n.a.createElement("p",{className:"text-center"},this.state.chart.symbol.toUpperCase()," on ",this.state.chart.exchange.toUpperCase()," Exchange ",n.a.createElement("br",null),n.a.createElement("small",null,new Date(1e3*this.state.chart.x[0]).toLocaleDateString("en-CA")," ",new Date(1e3*this.state.chart.x[0]).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"})," - ",new Date(1e3*this.state.chart.x.at(-1)).toLocaleTimeString("en-CA",{hour12:!1,hour:"2-digit",minute:"2-digit"}))),n.a.createElement(U.a,{width:"90%",height:300},n.a.createElement(q.a,{width:500,height:400,data:t,className:"my-3 mx-3"},n.a.createElement(z.a,{strokeDasharray:"3 3"}),n.a.createElement(F.a,{dataKey:"time",tickLine:!1,tickSize:8,axisLine:!1,tick:{fontSize:"0.8rem"},ticks:[r,o,s,l]}),n.a.createElement(W.a,{type:"number",domain:["auto","auto"],orientation:"right",tickLine:!1,tickSize:0,axisLine:!1,tick:{fontSize:"0.8rem"}}),n.a.createElement(G.a,{formatter:function(e,t,a){return[e,""]},separator:"",contentStyle:{fontSize:"0.8rem"},content:function(e){var t=e.active,a=e.payload,r=e.label;return t&&a&&a.length?n.a.createElement("div",{className:"custom-tooltip",style:{backgroundColor:"#ddd",fontSize:"0.8rem",padding:"0 0.5rem"}},n.a.createElement("p",{className:"label"},"".concat(r," - ").concat(a[0].value))):n.a.createElement(n.a.Fragment,null)}}),n.a.createElement(V.a,{y:a,stroke:"black",strokeDasharray:"3 3",isOverflow:"extendDomain"},n.a.createElement(B.a,{value:a,position:"bottom",fontSize:"0.8rem",fontWeight:"bold"})),n.a.createElement(X.a,{type:"monotone",dataKey:"quote",stroke:"#8884d8",fill:Math.round(100*this.state.chart.y.at(-1))/100>a?"green":"red"}))))))}}]),a}(r.Component);s.a.render(n.a.createElement(_,null),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.6c9a2b8a.chunk.js.map