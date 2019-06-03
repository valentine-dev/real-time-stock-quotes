'use strict';

const axios = require('axios');
const express = require('express');
const config = require('config');
const path = require('path');

// port
const configuredPort = config.has('server.port') ? config.get('server.port') : 3000;
const envPort = parseInt(process.env.NODE_SERVER_PORT, 10);
const port = isNaN(envPort) ? configuredPort : envPort;
console.log("----> Port to listen to: " + port);

// host
const host = config.has('access.url') ? config.get('access.url') : null;
if (!host) {
   console.error("No access URL in the configuration file.");
   return;
} else {
   console.log("----> Access URL: " + host);
}

// host 
const headers = config.has('access.headers') ? config.get('access.headers') : { 'Origin': 'https://web.tmxmoney.com' };
console.log("----> Access Headers: " + JSON.stringify(headers));

// response
const cors = config.has('response.headers.accessControlAllowOrigin') ? config.get('response.headers.accessControlAllowOrigin') : '*';

// help messasges
const app = express();
const testMessage = config.has('help.message.test') ? config.get('help.message.test') : 'Fine';
const defaultMessage = config.has('help.message.default') ? config.get('help.message.default') : 'Usage: /quote?symbol=xxx&token=xxx';

app.get('/test', (req, res) => res.send(testMessage));
// app.get('/', (req, res) => res.send(defaultMessage));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/quote', (req, res) => {
   const symbol = req.query.symbol;
   const token = req.query.token;
   res.set('Access-Control-Allow-Origin', cors);
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
            res.status(200).send(quote);
         } else {
            const noSuchSymbol = "Cannot find any exchanges with entered symbol - " + symbol;
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