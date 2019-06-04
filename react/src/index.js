import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import GetQuote from './input';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';

require('dotenv').config();

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
                  Companies on US exchanges, append ":US", like <code>FTNT:US</code>
               </p>
               <p>
                  Companies on Canadian Securities Exchange, append ":CNX", like <code>J:CNX</code>
               </p>
            </Alert>
            <GetQuote handleSubmit={this.getQuote} token={process.env.REACT_APP_TOKEN} />
            {this.state.latestQuotes.length > 0 ? <Display data={this.state.latestQuotes} /> : null}
         </Container>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));


