import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import GetQuote from './input';
import Container from 'react-bootstrap/Container';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { latestQuotes: [] }        
   }

   getQuote = quote => {
      this.setState({ latestQuotes: [quote, ...this.state.latestQuotes]});
   }

   render() {
      
      return (
         <Container>
            <h1 class="text-center">FREE Real-Time Stock Quotes from TSX</h1>
            <p class="lead">You can get real-time stock quotes from Toronto Stock Exchange for FREE!</p>
            <GetQuote handleSubmit={this.getQuote} token='992b6fbbb2d687159ec1282417cb62a6bf110b7d49adf0fc779c0c68db1c51fc'/>
            { this.state.latestQuotes.length > 0 ? <Display data={this.state.latestQuotes} /> : null}
         </Container>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));


