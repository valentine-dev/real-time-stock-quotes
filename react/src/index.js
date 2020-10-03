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
                  {'enjoyit.ca'}
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
               <Nav.Link href="mailto:feedback@enjoyit.ca" title="provide feedback to feedback@enjoyit.ca">Feedback</Nav.Link>
               <Nav.Link href="mailto:donations@enjoyit.ca" title="eTransfer less than $10 to donations@enjoyit.ca">Donations</Nav.Link>
               </Nav>
               </Navbar.Collapse>
            </Navbar>
            <Alert variant="success">
               <Alert.Heading>FREE Real-Time Quotes for North American Stocks</Alert.Heading>
               <p>
                  For non-common stocks, Yahoo! Finance convention is used.
               </p>
            </Alert>
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
      const rows = 
         [
            ['success','US exchanges','just enter the stock symbol.'],
            ['primary','Toronto Stock Exchange','prepend ', 't.', 't.h'],
            ['dark','TSX Venture Exchange','prepend ','v.', 'v.c'],
            ['secondary','Canadian Securities Exchange','prepend ', 'c.', 'c.j']
         ].map((row, index) => {
            return (
               <Alert variant={row[0]} dismissible onClose={() => setShow(false)}>
                   For {row[1]}, {row[2]}
                   {row.length > 3 ? <><code>{row[3]}</code>{' like '}<code>{row[4]}</code></> : null}
               </Alert>
            )
         });
      return (
         <>{rows}</>
      )
   }
   return <></>;
};

ReactDOM.render(<App />, document.getElementById('root'));
