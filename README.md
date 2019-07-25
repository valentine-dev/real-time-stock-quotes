# Free Real-time Stock Quotes
Real-time Stock Quotes Using `React` and `Node.js`

## How to Run the Application
1. Install `Node.js`;
2. Run `npm install` to get dependencies;
3. Run `npm start` to start server;
4. Run in the browser by going to [`http://localhost:8080/ui`](http://localhost:8080/ui).

## API - Steps to Test
1. Install `Node.js`;
2. Run `npm install` to get dependencies;
3. Run `npm start` to start server;
4. Find an access token;
5. In the browser, go to [`http://localhost:8080/quote?symbol=GIB.A&&token=xxx`](http://localhost:8080/quote?symbol=GIB.A&&token=xxx) to test API.

## UI - Create React App ([`?`](https://github.com/nitishdayal/cra_closer_look)) application 
1. `ui` folder is a production build of ui component, which is a Create React App application.
2. `react` folder is where to develop this Create React App application.
3. Before development: Create a React app, copy all the files in `react` to the project folder, and run `npm install`.
4. After development: Build the app for production to the project `build` folder, and copy all the files inside to the `ui` folder of this repository.

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
## Google App Engine Deployment
An `app.yaml` file is required to deploy as an App Engine application. 
Create an app.yaml file using the following directions:
* for [App Engine Flexible Environment](https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml);
* for [App Engine Standard Environment](https://cloud.google.com/appengine/docs/standard/nodejs/config/appref).

## Demo Videos at YouTube
1. [v0.1.1 Go Clouding: Deployed to Google Cloud Platform - App Engine](https://youtu.be/VyDsbqdMsZA)
2. [Always Responsive & Mobile First - v0.1.1 of React & Node.js App: Real-Time Stock Quotes](https://youtu.be/bePuW3FE95o)
3. [React & Node.js Web/Cloud App: Real-Time Stock Quotes, v0.1.0](https://youtu.be/PAaxgxnC9U8) 

## To Do items
* UI using React JS
  1. Show recent symbols in NavBar dropdown list;
  2. Show charts.
* API using Node.js
  1. Use Express generator.
