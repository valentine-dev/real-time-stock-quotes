import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class GetQuote extends Component {
   constructor(props) {
      super(props);
      this.state = { symbol: null, errorMessage: null, message: null}
   }

   getQuote = () => {
      const symbol = this.state.symbol.toLowerCase().startsWith("t.") ? this.state.symbol.slice(2) + ".to"
         : (this.state.symbol.toLowerCase().startsWith("c.") ? this.state.symbol.slice(2) + ".cn" 
         : (this.state.symbol.toLowerCase().startsWith("v.") ? this.state.symbol.slice(2) + ".v" : this.state.symbol));
      axios.get('https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols=' + symbol)
         .then(res => {
            //console.log(res);
            const quotes = res.data.quoteResponse.result;
            //console.log(quote);
            if (quotes && quotes.length >  0) {
               //console.log("Got last price ... ");
               const message = quotes[0].longName + ' on ' + quotes[0].fullExchangeName;
               this.setState({ ...this.state, "errorMessage": null, 'message': message });
               this.props.handleSubmit(quotes[0]);
            } else {
               this.setState({ ...this.state, "errorMessage": "There is no data for this symbol." });
            }
         })
         .catch(err => {
            //console.log(err);
            let message;
            if (err.response.data) {
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

   handleInputChange = (event) => {
      this.setState({ ...this.state, "symbol": event.target.value.trim(), "errorMessage": null, "message": null });
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
                  <Col xs="9">
                     <Form.Control type="text" autoCorrect="off" autoCapitalize="off" onChange={this.handleInputChange} placeholder="a, t.h, c.j, or v.c" />
                  </Col>
                  {disableGet ? <Col xs="2"><Button onClick={this.getQuote} disabled>GO</Button></Col> 
                     : <Col xs="2"><Button onClick={this.getQuote}>GO</Button></Col>
                  }
               </Form.Group>
            </Form>
            </Alert>
            {displayMessage ? <Alert variant='info'>{this.state.message}</Alert> : null}
            {displayError ? <Alert variant='warning'>{this.state.errorMessage}</Alert> : null}
         </Container>
      )
   }
}
export default GetQuote;
