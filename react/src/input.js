import React, { useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';

class GetQuote extends Component {
   constructor(props) {
      super(props);
      this.state = { exchange: null, symbol: null, errorMessage: null, message: null}
   }

   getQuote = () => {
      const symbol = this.state.exchange === "TSX" ? this.state.symbol.toLowerCase() + ".to"
         : (this.state.exchange === "CSE" ? this.state.symbol.toLowerCase() + ".cn" 
         : (this.state.exchange === "TSXV"? this.state.symbol.toLowerCase() + ".v" : this.state.symbol));
      axios.get('https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols=' + symbol)
         .then(res => {
            //console.log(res);
            const quotes = res.data.quoteResponse.result;
            //console.log(quote);
            if (quotes && quotes.length >  0) {
               //console.log("Got last price ... ");
               const message = quotes[0].longName ?  quotes[0].longName + ' on ' + quotes[0].fullExchangeName
                  : (quotes[0].shortName ? quotes[0].longName + ' on ' + quotes[0].fullExchangeName : null);
               if (message) {
                  this.setState({ ...this.state, "errorMessage": null, 'message': message });
                  this.props.handleSubmit(quotes[0]);
               } else {
                  this.setState({ ...this.state, "errorMessage": "Sorry, no data found." });
               }               
            } else {
               this.setState({ ...this.state, "errorMessage": "Sorry, no data found." });
            }
         })
         .catch(err => {
            //console.log(err);
            let message;
            if (err.response && err.response.data) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               //console.log(err.response.data);
               //console.log(err.response.status);
               //console.log(err.response.headers);
               if (typeof err.response.data === 'string') {
                  message = err.response.data.includes('Cannot GET /quote') ? 'The API backend is not available. Please have a check.' : 'HTTP ' + err.response.status + ': ' + err.response.data;
               } else {
                  message = err.response.data.name + ": " + err.response.data.message;
               } 
               this.setState({ ...this.state, "errorMessage": message });
            } else {
               message = err.name + ' (' + err.code + '): ' + err.message;
               this.setState({ ...this.state, "errorMessage": message });
            }
         });
   }

   handleSymbolUpdate = (event) => {
      this.setState({ ...this.state, "symbol": event.target.value.trim(), "errorMessage": null, "message": null });
   }

   handleExchangeUpdate = e => {
      this.setState({ ...this.state, "exchange": e.target.value, "errorMessage": null, "message": null });
   }

   render() {

      let disableGet = true;
      if (this.state.symbol !== undefined && this.state.symbol !== null && this.state.symbol.length > 0) {
         disableGet = false;
      }

      const displayError = this.state.errorMessage === null ? false : true;
      const displayMessage = this.state.message === null ? false : true;
      return (
         <Container>
            <Alert variant='info'>
            <Form autoComplete="on" onSubmit={e => e.preventDefault()} >
               <Form.Group as={Row} >
                  <Col xs="4">
                     <Form.Control as="select" onChange={this.handleExchangeUpdate} placeholder="Exchange">
                        <option value="US">US</option>
                        <option value="TSX">TSX</option>
                        <option value="TSXV">TSV</option>
                        <option value="CSE">CSE</option>
                     </Form.Control>
                  </Col>
                  <Col xs="5">
                     <Form.Control type="text" autoCorrect="off" autoCapitalize="off" onChange={this.handleSymbolUpdate} placeholder="Symbol" />
                  </Col>
                  {disableGet ? <Col xs="2"><Button variant="info" onClick={this.getQuote} disabled><span role="img" aria-label="eyes">&#x1f440;</span></Button></Col> 
                     : <Col xs="2"><Button onClick={this.getQuote}><span role="img" aria-label="eyes">&#x1f440;</span></Button></Col>
                  }
               </Form.Group>
            </Form>
            </Alert>
            {displayMessage ? <div className='pb-3'><DisplayMessage msg={this.state.message}/></div>: null}
            {displayError ? <Alert variant='warning'>{this.state.errorMessage}</Alert> : null}
         </Container>
      )
   }
}

const DisplayMessage = props => {
   const msg = props.msg;
   const [show, setShow] = useState(true);

   
   return (
      <Toast delay={3000} autohide show={show} onClose={() => setShow(false)}><Toast.Body>{msg}</Toast.Body></Toast>
   )
   
};

export default GetQuote;
