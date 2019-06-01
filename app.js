'use strict';

const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

const host = 'https://app.quotemedia.com/datatool/getSnapQuotes.json';

app.get('/test', (req, res) => res.send('App is running well? Yes!'));
app.get('/', (req, res) => res.send('Usage: /quote?symbol=xxx&token=xxx'));

app.get('/quote', (req, res) => {
   const symbol = req.query.symbol;
   const token = req.query.token;
   if (symbol && token) {
      axios({
         method: 'get',
         url: host + '?symbols=' + symbol + '&token=' + token,
         headers: { 'Origin': 'https://web.tmxmoney.com' }
      })
         .then(resp => {
            const quote = resp.data.results.quote[0];
            console.log("Got quote info ... ");
            console.log(quote);
            const exchange = quote.key.exchange
            if (exchange) {
               res.status(200).send(quote);
            } else {
               const noSuchSymbol = "Cannot find any exchanges with entered quote - " + symbol;
               console.log(noSuchSymbol);
               res.status(400).send(noSuchSymbol);
            }
         }).catch(error => {
            console.error(error);
            res.send(error);
         });
   } else {
      res.status(400).send('Bad Request. Usage: /quote?symbol=xxx&token=xxx');
   }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));