(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(71),l=a(16),s=a(17),r=a(19),o=a(18),c=a(20),u=a(0),i=a.n(u),m=a(10),d=a.n(m),h=a(68),p=a.n(h),g=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return i.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},i.a.createElement(E,null),i.a.createElement(f,{rows:e}))}}]),t}(u.Component),E=function(){return i.a.createElement("thead",null,i.a.createElement("tr",{class:"text-right"},i.a.createElement("th",{class:"text-left"},"Local Time"),i.a.createElement("th",null,"SYM"),i.a.createElement("th",null,"$"),i.a.createElement("th",null,"CHG"),i.a.createElement("th",null,"%")))},f=function(e){var t=e.rows.map(function(e,t){var a=new Date(e.pricedata.lasttradedatetime).toLocaleString("en-CA"),n=e.pricedata.changepercent.toFixed(2)+"%",l=0===e.pricedata.change?"text-dark":e.pricedata.change>0?"text-success":"text-danger";return i.a.createElement("tr",{key:t,class:"text-right"},i.a.createElement("td",{class:"text-left"},a),i.a.createElement("td",null,e.symbolstring),i.a.createElement("td",null,e.pricedata.last),i.a.createElement("td",{class:l},e.pricedata.change),i.a.createElement("td",{class:l},n))});return i.a.createElement("tbody",null,t)},b=g,v=a(12),k=a(27),y=a.n(k),S=a(21),O=a.n(S),j=a(23),w=a.n(j),C=a(11),x=a.n(C),M=a(28),T=a.n(M),Q=a(70),I=a.n(Q),N=a(69),F=a.n(N),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).getQuote=function(){F.a.get("/quote?symbol="+a.state.symbol+"&token="+a.props.token).then(function(e){console.log(e);var t=e.data;if(console.log(t),t&&t.pricedata&&t.pricedata.last){console.log("Got last price ... ");var n=t.symbolstring+": "+t.equityinfo.longname+" on "+t.key.exLgName;a.setState(Object(v.a)({},a.state,{errorMessage:null,message:n})),a.props.handleSubmit(t)}else if(t&&"Error"===t.name){var l=t.name+": "+t.message;console.log(l),a.setState(Object(v.a)({},a.state,{errorMessage:l}))}else a.setState(Object(v.a)({},a.state,{errorMessage:"Oops, something went wrong!"}))}).catch(function(e){var t;(console.log(e),e.response)?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers),t="string"===typeof e.response.data?e.response.data.includes("Cannot GET /quote")?"The API backend is not available. Please have a check.":"HTTP "+e.response.status+": "+e.response.data:"object"===typeof e.response.data?e.response.data.name+": "+e.response.data.message:"Oops, something went wrong!",a.setState(Object(v.a)({},a.state,{errorMessage:t}))):a.setState(Object(v.a)({},a.state,{errorMessage:"Oops, something went wrong!"}))})},a.handleInputChange=function(e){a.setState(Object(v.a)({},a.state,{symbol:e.target.value,errorMessage:null,message:null}))},a.state={symbol:null,errorMessage:null,message:null},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=!0;void 0!==this.state.symbol&&null!==this.state.symbol&&this.state.symbol.length>0&&(e=!1);var t=null!==this.state.errorMessage,a=null!==this.state.message;return i.a.createElement(y.a,null,i.a.createElement(x.a,{autoComplete:"off",onSubmit:function(e){return e.preventDefault()}},i.a.createElement(x.a.Group,{as:I.a},i.a.createElement(x.a.Label,{column:!0,xs:"2",className:"d-flex justify-content-end"},"Quote:"),i.a.createElement(T.a,{xs:"8"},i.a.createElement(x.a.Control,{type:"text",onChange:this.handleInputChange,placeholder:"Enter a symbol like RBA, FTNT:US, or J:CNX"})),e?null:i.a.createElement(T.a,{xs:"2"},i.a.createElement(w.a,{onClick:this.getQuote},"GO")))),a?i.a.createElement(O.a,{variant:"info"},this.state.message):null,t?i.a.createElement(O.a,{variant:"warning"},this.state.errorMessage):null)}}]),t}(u.Component),B=a(24),H=a.n(B),L=a(25),R=a.n(L);a(112).config();var q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).getQuote=function(e){a.setState({latestQuotes:[e].concat(Object(n.a)(a.state.latestQuotes))})},a.handleClose=function(){a.setState({showModal:!1})},a.handleSave=function(){if(a.form.current.reportValidity()){var e=a.tokenInput.current.value;a.setState({showModal:!1,token:e})}},a.handleShow=function(){a.setState({showModal:!0})},a.state={latestQuotes:[],showModal:!1,token:"f37b9b0e53740ea44c387c024025e30b84573d4893c2f051455ba2258e5604c5"},a.tokenInput=i.a.createRef(),a.form=i.a.createRef(),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.token;return i.a.createElement(y.a,null,i.a.createElement(H.a,{bg:"dark",variant:"dark",sticky:"top",expand:!0},i.a.createElement(H.a.Brand,{href:"#home"},"Valentine Wu - 2019"),i.a.createElement(H.a.Toggle,null),i.a.createElement(H.a.Collapse,{className:"justify-content-end"},i.a.createElement(w.a,{variant:"outline-success",onClick:this.handleShow},"Settings"))),i.a.createElement(O.a,{variant:"success"},i.a.createElement(O.a.Heading,null,"FREE Real-Time Stock Quotes for Companies Listed on TSX"),i.a.createElement("p",null,"For US exchanges, append ",i.a.createElement("code",null,":us"),", like ",i.a.createElement("code",null,"FTNT:US"),"."),i.a.createElement("hr",null),i.a.createElement("p",null,"For Canadian Securities Exchange, append ",i.a.createElement("code",null,":cnx"),", like ",i.a.createElement("code",null,"J:CNX"),".")),i.a.createElement(G,{handleSubmit:this.getQuote,token:e}),this.state.latestQuotes.length>0?i.a.createElement(b,{data:this.state.latestQuotes}):null,i.a.createElement(R.a,{show:this.state.showModal,centered:!0,onHide:this.handleClose},i.a.createElement(R.a.Header,{closeButton:!0},i.a.createElement(R.a.Title,null,"Please enter access token")),i.a.createElement(R.a.Body,null,i.a.createElement(x.a,{autoComplete:"off",onSubmit:function(e){return e.preventDefault()},ref:this.form},i.a.createElement(x.a.Group,null,i.a.createElement(x.a.Control,{ref:this.tokenInput,as:"input",type:"text",placeholder:"Enter access token",required:!0})),i.a.createElement(w.a,{variant:"primary",onClick:this.handleSave,block:!0},"Save")))))}}]),t}(u.Component);d.a.render(i.a.createElement(q,null),document.getElementById("root"))},72:function(e,t,a){e.exports=a(143)}},[[72,1,2]]]);
//# sourceMappingURL=main.2b313549.chunk.js.map