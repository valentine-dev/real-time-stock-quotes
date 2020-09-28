'use strict';

const axios = require('axios');
const express = require('express');
const path = require('path');

// port
const port = 8080;
console.log("----> Port to listen to: " + port);

// host
const host = 'https://app.quotemedia.com/datatool/getEnhancedQuotes.json';
console.log("----> Access URL: " + host);

// host 
const headers = { 'Origin': 'https://web.tmxmoney.com' };
console.log("----> Access Headers: " + JSON.stringify(headers));

// help messasges
const app = express();
const testMessage = 'Fine';
const defaultMessage = 'API Usage: /quote?symbol=xxx&token=xxx';

app.get('/test', (req, res) => res.send(testMessage).end());
app.get('/', (req, res) => res.send(defaultMessage).end());
app.use('/ui', express.static(path.join(__dirname, 'docs')));

app.get('/ui', function(req, res) {
  res.sendFile(path.join(__dirname, 'docs', 'index.html')).end();
});

app.get('/quote', (req, res) => {
   const symbol = req.query.symbol;
   const token = req.query.token;
   
   if (symbol && token) {
      axios({
         method: 'get',
         url: host + '?symbols=' + symbol + '&token=' + token,
         headers: headers
      }).then(resp => {
         const quote = resp.data.results.quote[0];
         console.log("Got quote info ... ");
         console.log(quote);
         
         if (quote && quote.pricedata && quote.pricedata.last) {
            res.status(200).send(quote).end();
         } else {
            const noSuchSymbol = "No data at TSX/TSXV for - " + symbol;
            console.log(noSuchSymbol);
            res.status(400).send(noSuchSymbol).end();
         }
      }).catch(error => {
         console.error(error);
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            res.status(error.response.status).send(error).end();
         } else {
            res.send(error.name + ": " + error.message).end();
         }
      });
   } else {
      res.status(400).send('Bad Request. Usage: /quote?symbol=xxx&token=xxx').end();
   }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
