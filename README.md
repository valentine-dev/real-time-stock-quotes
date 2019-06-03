# Free Real-time Stock Quotes
Real-time Stock Quotes Using `React` and `Node.js`

## Steps to Run
0. Copy `app.js`, `package.json`, and all files in folder `config`;
1. Install `Node.js`;
2. Run `npm install` to get dependencies;
3. Run `npm start` to start server;
4. Find an access token;
5. In Browser, go to [`http://localhost:3000/quote?symbol=GIB.A&&token=xxx`](http://localhost:3000/quote?symbol=GIB.A&&token=xxx) to try this web application.

## Configuration
`default.yml` in folder `config` is the configuration file. 

## Sample Response
GIB.A:
```json
{
   "equityinfo":{
      "longname":"CGI Inc. Class A Subordinate  Voting Shares",
      "shortname":"CGI Group Cl A S"
   },
   "pricedata":{
      "changepercent":-0.182371,
      "high":99.07,
      "lasttradedatetime":"2019-05-31T16:00:00-04:00",
      "last":98.52,
      "low":98.26,
      "change":-0.18,
      "tradevolume":3141,
      "prevclose":98.7,
      "tick":1,
      "lastmarketidentificationcode":"TSX",
      "open":98.27,
      "sharevolume":466518
   },
   "datetime":"2019-06-01T05:47:06-04:00",
   "datatype":"equity",
   "entitlement":"RT",
   "key":{
      "exShName":"TSX",
      "symbol":"GIB.A:CA",
      "exchange":"TSX",
      "exLgName":"Toronto Stock Exchange"
   },
   "symbolstring":"GIB.A"
}
```
BBD.B:
```json
{
  "equityinfo": {
    "longname": "Bombardier Inc. Class B Subordinate Voting Shares",
    "shortname": "Bombardier Cl B "
  },
  "pricedata": {
    "changepercent": 0.49505,
    "high": 2.03,
    "lasttradedatetime": "2019-05-31T16:17:43-04:00",
    "last": 2.03,
    "low": 1.985,
    "change": 0.01,
    "tradevolume": 5436,
    "prevclose": 2.02,
    "tick": -1,
    "lastmarketidentificationcode": "TSX",
    "open": 2.02,
    "sharevolume": 7377181
  },
  "datetime": "2019-06-01T19:14:27-04:00",
  "datatype": "equity",
  "entitlement": "RT",
  "key": {
    "exShName": "TSX",
    "symbol": "BBD.B:CA",
    "exchange": "TSX",
    "exLgName": "Toronto Stock Exchange"
  },
  "symbolstring": "BBD.B"
}
  ```

## To do items
* UI using React JS
  1. Add input text field
  2. Add output display field
  
## Google App Engine Deployment
An `app.yaml` file is required to deploy as an App Engine application. 
Create an app.yaml file using the following directions:
* for [App Engine Flexible Environment](https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml);
* for [App Engine Standard Environment](https://cloud.google.com/appengine/docs/standard/nodejs/config/appref).

