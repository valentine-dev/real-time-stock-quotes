import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import GetQuote from './input';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

require('dotenv').config();

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { latestQuotes: [
         {
            "symbol": "TQQQ",
            "trailingThreeMonthNavReturns": {
            "raw": 12.46576,
            "fmt": "12.47%"
            },
            "twoHundredDayAverageChangePercent": {
            "raw": -0.48798254,
            "fmt": "-48.80%"
            },
            "dividendDate": {
            "raw": 1427932800,
            "fmt": "2015-04-01",
            "longFmt": "2015-04-01T20:00"
            },
            "fiftyTwoWeekLowChangePercent": {
            "raw": 0.09005629,
            "fmt": "9.01%"
            },
            "language": "en-US",
            "regularMarketDayRange": {
            "raw": "23.23 - 25.915",
            "fmt": "23.23 - 25.92"
            },
            "regularMarketDayHigh": {
            "raw": 25.915,
            "fmt": "25.92"
            },
            "twoHundredDayAverageChange": {
            "raw": -22.149076,
            "fmt": "-22.15"
            },
            "askSize": {
            "raw": 32,
            "fmt": "32",
            "longFmt": "32"
            },
            "twoHundredDayAverage": {
            "raw": 45.389076,
            "fmt": "45.39"
            },
            "fiftyTwoWeekHighChange": {
            "raw": -68.44,
            "fmt": "-68.44"
            },
            "fiftyTwoWeekRange": {
            "raw": "21.32 - 91.68",
            "fmt": "21.32 - 91.68"
            },
            "fiftyDayAverageChange": {
            "raw": -7.499201,
            "fmt": "-7.50"
            },
            "exchangeDataDelayedBy": 0,
            "averageDailyVolume3Month": {
            "raw": 156380533,
            "fmt": "156.381M",
            "longFmt": "156,380,533"
            },
            "firstTradeDateMilliseconds": 1265898600000,
            "fiftyTwoWeekLow": {
            "raw": 21.32,
            "fmt": "21.32"
            },
            "regularMarketVolume": {
            "raw": 292950101,
            "fmt": "292.95M",
            "longFmt": "292,950,101"
            },
            "market": "us_market",
            "postMarketPrice": {
            "raw": 22.97,
            "fmt": "22.97"
            },
            "quoteSourceName": "Nasdaq Real Time Price",
            "messageBoardId": "finmb_98126597",
            "priceHint": 2,
            "exchange": "NGM",
            "sourceInterval": 15,
            "ytdReturn": {
            "raw": -70.28212,
            "fmt": "-70.28%"
            },
            "regularMarketDayLow": {
            "raw": 23.23,
            "fmt": "23.23"
            },
            "shortName": "ProShares UltraPro QQQ",
            "region": "US",
            "fiftyDayAverageChangePercent": {
            "raw": -0.24396212,
            "fmt": "-24.40%"
            },
            "fullExchangeName": "NasdaqGM",
            "gmtOffSetMilliseconds": -14400000,
            "regularMarketOpen": {
            "raw": 24.81,
            "fmt": "24.81"
            },
            "regularMarketTime": {
            "raw": 1663790404,
            "fmt": "4:00PM EDT"
            },
            "regularMarketChangePercent": {
            "raw": -5.4900384,
            "fmt": "-5.49%"
            },
            "quoteType": "ETF",
            "fiftyTwoWeekLowChange": {
            "raw": 1.9200001,
            "fmt": "1.92"
            },
            "averageDailyVolume10Day": {
            "raw": 171119080,
            "fmt": "171.119M",
            "longFmt": "171,119,080"
            },
            "fiftyTwoWeekHighChangePercent": {
            "raw": -0.7465096,
            "fmt": "-74.65%"
            },
            "typeDisp": "ETF",
            "tradeable": false,
            "postMarketTime": {
            "raw": 1663798921,
            "fmt": "6:22PM EDT"
            },
            "currency": "USD",
            "regularMarketPreviousClose": {
            "raw": 24.59,
            "fmt": "24.59"
            },
            "fiftyTwoWeekHigh": {
            "raw": 91.68,
            "fmt": "91.68"
            },
            "trailingThreeMonthReturns": {
            "raw": 12.46576,
            "fmt": "12.47%"
            },
            "postMarketChangePercent": {
            "raw": -1.161792,
            "fmt": "-1.16%"
            },
            "exchangeTimezoneName": "America/New_York",
            "bidSize": {
            "raw": 13,
            "fmt": "13",
            "longFmt": "13"
            },
            "regularMarketChange": {
            "raw": -1.3500004,
            "fmt": "-1.35"
            },
            "cryptoTradeable": false,
            "fiftyDayAverage": {
            "raw": 30.7392,
            "fmt": "30.74"
            },
            "exchangeTimezoneShortName": "EDT",
            "regularMarketPrice": {
            "raw": 23.24,
            "fmt": "23.24"
            },
            "customPriceAlertConfidence": "HIGH",
            "marketState": "POST",
            "postMarketChange": {
            "raw": -0.27000046,
            "fmt": "-0.27"
            },
            "ask": {
            "raw": 23.02,
            "fmt": "23.02"
            },
            "bid": {
            "raw": 23.01,
            "fmt": "23.01"
            },
            "triggerable": true,
            "longName": "ProShares UltraPro QQQ"
            }
      ] }
   }

   getQuote = quote => {
      this.setState({ latestQuotes: [quote, ...this.state.latestQuotes] });
   }

   render() {

      return (
         <Container>
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
               <Navbar.Brand>
                  <span role="img" aria-label="Stock">&#x1F4C8;</span> <a href="https://enjoyit.ca" title="go to enjoyit.ca">enjoyit.ca</a> <Badge variant="light">v{process.env.REACT_APP_VERSION}</Badge>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                  <Nav>
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
         </Alert>         
      )
   }
   return <></>;
};

ReactDOM.render(<App />, document.getElementById('root'));
