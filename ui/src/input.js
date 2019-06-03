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
      this.state = { symbol: null, message: null }
   }

   getQuote = () => {
      axios.get('/quote?symbol=' + this.state.symbol + '&token=' + this.props.token)
         .then(res => {
            const quote = res.data;
            console.log("Got quote info ... ");
            console.log(quote);
            const exchange = quote.key.exchange;
            if (exchange) {
               console.log("SUCCESS!");
               this.setState({ ...this.state, "message": null });
               this.props.handleSubmit(quote);
            } else {
               const noSuchSymbol = "Cannot find any exchanges with entered quote - " + this.state.symbol;
               console.log(noSuchSymbol);
               this.setState({ ...this.state, "message": noSuchSymbol });
            }
         })
         .catch(err => {
            console.log(err);
            if (err.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               console.log(err.response.data);
               console.log(err.response.status);
               console.log(err.response.headers);
               this.setState({ ...this.state, "message":  err.response.data});
             } else {
               this.setState({ ...this.state, "message":  "Oops, something went wrong!"}); 
             }
            
         });
   }

   handleInputChange = (event) => {
      this.setState({ ...this.state, "symbol": event.target.value, "message": null });
   }

   render() {

      let disableGet = true;
      if (this.state.symbol !== undefined && this.state.symbol !== null && this.state.symbol.length > 0) {
         disableGet = false;
      }

      const displayMessage = this.state.message === null ? false : true;
      return (
         <Container>

            <Form autoComplete="off" onSubmit={e => e.preventDefault()} >
               <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column xs="2">
                     Quote:
                  </Form.Label>
                  <Col xs="8">
                     <Form.Control type="text" onChange={this.handleInputChange} />
                  </Col>
                  {disableGet ? null : <Button xs="2" onClick={this.getQuote}>GO</Button>}
               </Form.Group>
            </Form>
            {displayMessage ? <Alert variant='warning'>{this.state.message}</Alert> : null}
         </Container >
      )
   }
}
export default GetQuote;