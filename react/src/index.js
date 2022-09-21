import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import GetQuote from './input';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
               <Navbar.Brand href="https://enjoyit.ca">
                  enjoyit.ca <span role="img" aria-label="Stock">&#x1F4C8;</span> 2022
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
               <Nav.Link href="mailto:feedback@enjoyit.ca" title="provide feedback to feedback@enjoyit.ca">Feedback</Nav.Link>
               <Nav.Link href="mailto:donations@enjoyit.ca" title="eTransfer less than $10 to donations@enjoyit.ca">Donations</Nav.Link>
               </Nav>
               </Navbar.Collapse>
            </Navbar>            
            <Notes />
            <GetQuote handleSubmit={this.getQuote} token={process.env.REACT_APP_TOKEN} />
            {this.state.latestQuotes.length > 0 ? <Display data={this.state.latestQuotes} /> : null}
         </Container>
      );
   }
}

const Notes = () => {
   const [show, setShow] = useState(true);

   if (show) {
      return (
         <Alert variant="primary" dismissible onClose={() => setShow(false)}>
            <Alert.Heading>FREE Real-Time Quotes for North American Stocks</Alert.Heading>
            <p>For non-common stocks, Yahoo! Finance convention is used.</p>
            <p>
               For US exchanges, enter the stock symbol. <br/>
               For Toronto Stock Exchange, prepend <code>t.</code> like <code>t.h</code>. <br/>
               For TSX Venture Exchange, prepend <code>v.</code> like <code>v.c</code>.<br/>
               For Canadian Securities Exchange, prepend <code>c.</code> like <code>c.h</code>.
            </p>
         </Alert>         
      )
   }
   return <></>;
};

ReactDOM.render(<App />, document.getElementById('root'));
