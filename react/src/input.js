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
      this.state = { symbol: null, errorMessage: null, message: null }
   }

   getQuote = () => {
      axios.get('/quote?symbol=' + this.state.symbol + '&token=' + this.props.token)
         .then(res => {
            //console.log(res);
            const quote = res.data;
            //console.log(quote);
            if (quote && quote.pricedata && quote.pricedata.last) {
               //console.log("Got last price ... ");
               const message = quote.symbolstring + ': ' + quote.equityinfo.longname + ' on ' + quote.key.exLgName;
               this.setState({ ...this.state, "errorMessage": null, 'message': message });
               this.props.handleSubmit(quote);
            } else if (quote && quote.name === 'Error') {
               const message = quote.name + ": " + quote.message;
               //console.log(message);
               this.setState({ ...this.state, "errorMessage": message });
            } else {
               this.setState({ ...this.state, "errorMessage": "Oops, something went wrong!" });
            }
         })
         .catch(err => {
            //console.log(err);
            if (err.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               //console.log(err.response.data);
               //console.log(err.response.status);
               //console.log(err.response.headers);
               let message;
               if (typeof err.response.data === 'string') {
                  message = err.response.data.includes('Cannot GET /quote') ? 'The API backend is not available. Please have a check.' : 'HTTP ' + err.response.status + ': ' + err.response.data;
               } else if (typeof err.response.data === 'object') {
                  message = err.response.data.name + ": " + err.response.data.message;
               } else {
                  message = "Oops, something went wrong!";
               }
               this.setState({ ...this.state, "errorMessage": message });
            } else {
               this.setState({ ...this.state, "errorMessage": "Oops, something went wrong!" });
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
            <Form autoComplete="on" onSubmit={e => e.preventDefault()} >
               <Form.Group as={Row} >
                  <Col xs="9">
                     <Form.Control type="text" autocorrect="off" autocapitalize="off" onChange={this.handleInputChange} placeholder="e.g. rba, tqqq:us, or j:cnx" />
                  </Col>
                  {disableGet ? null : <Col xs="2"><Button onClick={this.getQuote}>GO</Button></Col>}
               </Form.Group>
            </Form>
            {displayMessage ? <Alert variant='info'>{this.state.message}</Alert> : null}
            {displayError ? <Alert variant='warning'>{this.state.errorMessage}</Alert> : null}
         </Container>
      )
   }
}
export default GetQuote;
