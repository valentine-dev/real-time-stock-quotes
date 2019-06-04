import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import GetQuote from './input';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { latestQuotes: [] }
   }

   getQuote = quote => {
      this.setState({ latestQuotes: [quote, ...this.state.latestQuotes] });
   }

   render() {

      return (
         <Container>
            <Navbar bg="dark" variant="dark" sticky="top" expand>
               <Navbar.Brand href="#home">                  
                  {'Valentine Wu - 2019'}
               </Navbar.Brand>
            </Navbar>
            <Alert variant="success">
               <Alert.Heading>FREE Real-Time Stock Quotes for Companies Listed on TSX</Alert.Heading>
               <p>
                  For public companies on US exchanges, there would be 15 minutes delay (add ":US" after symbol, like FTNT:US). Have fun!
               </p>               
            </Alert>
            <GetQuote handleSubmit={this.getQuote} token='f37b9b0e53740ea44c387c024025e30b84573d4893c2f051455ba2258e5604c4' />
            {this.state.latestQuotes.length > 0 ? <Display data={this.state.latestQuotes} /> : null}
         </Container>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));


