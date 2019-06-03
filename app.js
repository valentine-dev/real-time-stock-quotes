'use strict';

const axios = require('axios');
const express = require('express');
const path = require('path');

// port
const port = 8080;
console.log("----> Port to listen to: " + port);

// host
const host = 'https://app.quotemedia.com/datatool/getSnapQuotes.json';
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
app.use('/ui', express.static(path.join(__dirname, 'ui')));

app.get('/ui', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html')).end();
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
         const exchange = quote.key.exchange
         if (exchange) {
            res.status(200).send(quote).end();
         } else {
            const noSuchSymbol = "Cannot find any exchanges with entered symbol - " + symbol;
            console.log(noSuchSymbol);
            res.status(400).send(noSuchSymbol).end();
         }
      }).catch(error => {
         console.error(error);
         res.send(error).end();
      });
   } else {
      res.status(400).send('Bad Request. Usage: /quote?symbol=xxx&token=xxx').end();
   }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));