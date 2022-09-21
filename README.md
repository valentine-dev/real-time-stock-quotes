# Free Real-time Stock Quotes
Real-time Stock Quotes Using `React` and `Node.js`

## How to Run the Application
1. Install `Node.js`;
2. Run `npm install` to get dependencies;
3. Run `npm start` to start server;
4. Run in the browser by going to [`http://localhost:8080/`](http://localhost:8080/).

## API - Steps to Test
1. Install `Node.js`;
2. Run `npm install` to get dependencies;
3. Run `npm start` to start server;
4. Find an access token;
5. In the browser, go to [`http://localhost:8080/quote?symbol=GIB.A&&token=xxx`](http://localhost:8080/quote?symbol=GIB.A&&token=xxx) to test API.

## UI - Create React App ([`?`](https://github.com/nitishdayal/cra_closer_look)) application 
1. `docs` folder is a production build of ui component, which is a Create React App application.
2. `react` folder is where to develop this Create React App application.
3. Before development: Create a React app, copy all the files in `react` to the project folder, and run `npm install`.
4. After development: Build the app for production to the project `build` folder, and copy all the files inside to the `docs` folder of this repository.

## Sample Response
From TSX - https://app.quotemedia.com/datatool/getEnhancedQuotes.json?symbols=GIB.A&token=7abe89f132178a218af699b6fe8f649336e9e47ae466945adda5a59e131ae612:
```json
{
    "results": {
        "copyright": "Copyright (c) 2020 QuoteMedia, Inc.",
        "symbolcount": 1,
        "quote": [
            {
                "key": {
                    "symbol": "GIB.A:CA",
                    "exchange": "TSX",
                    "exLgName": "Toronto Stock Exchange",
                    "exShName": "TSX"
                },
                "equityinfo": {
                    "longname": "CGI Inc. Class A Subordinate Voting Shares",
                    "shortname": "CGI Inc."
                },
                "status": {},
                "pricedata": {
                    "last": 90.65,
                    "change": 0.81,
                    "changepercent": 0.901603,
                    "tick": -1,
                    "open": 90.27,
                    "high": 91.59,
                    "low": 90.13,
                    "prevclose": 89.84,
                    "bid": 90.62,
                    "ask": 90.67,
                    "bidsize": 100,
                    "asksize": 100,
                    "rawbidsize": 100,
                    "rawasksize": 100,
                    "tradevolume": 1151,
                    "sharevolume": 125284,
                    "vwap": 90.9676922,
                    "lasttradedatetime": "2020-09-28T12:29:40-04:00",
                    "totalvalue": 11396207.00,
                    "lastmarketidentificationcode": "TSX",
                    "bidmarketidentificationcode": "TSX",
                    "askmarketidentificationcode": "TSX",
                    "imbalance": {
                        "imbalancesize": 0
                    }
                },
                "fundamental": {
                    "sharesoutstanding": 230589242,
                    "shareclasslevelsharesoutstanding": 230589242,
                    "totalsharesoutstanding": 259315428,
                    "marketcap": 23506943548,
                    "eps": 4.48999977,
                    "peratio": 20.0,
                    "pbratio": 3.382,
                    "beta": 0.929967999458313,
                    "week52high": {
                        "date": "2020-01-24",
                        "content": 114.49
                    },
                    "week52low": {
                        "date": "2020-03-23",
                        "content": 67.24
                    },
                    "week52highvwap": {
                        "date": "2020-01-17",
                        "content": 113.4199
                    },
                    "week52lowvwap": {
                        "date": "2020-03-23",
                        "content": 69.1994
                    },
                    "week52highvol": {
                        "date": "2020-06-19",
                        "content": 3490205
                    },
                    "week52lowvol": {
                        "date": "2020-07-03",
                        "content": 96790
                    },
                    "week52avgvol": 668070
                },
                "classification": {
                    "sector": "Technology",
                    "industry": "Software"
                },
                "symbolstring": "GIB.A",
                "datatype": "equity",
                "entitlement": "RT",
                "datetime": "2020-09-28T12:32:11-04:00"
            }
        ]
    }
}
```
  
From Yahoo! Finance - https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols=TQQQ:
```json
{
    "quoteResponse": {
        "result": [
            {
                "symbol": "TQQQ",
                "trailingThreeMonthNavReturns": {
                    "raw": 104.49,
                    "fmt": "104.49%"
                },
                "twoHundredDayAverageChangePercent": {
                    "raw": 0.33361712,
                    "fmt": "33.36%"
                },
                "dividendDate": {
                    "raw": 1427932800,
                    "fmt": "2015-04-01",
                    "longFmt": "2015-04-01T20:00"
                },
                "fiftyTwoWeekLowChangePercent": {
                    "raw": 2.9006815,
                    "fmt": "290.07%"
                },
                "language": "en-US",
                "regularMarketDayRange": {
                    "raw": "125.57 - 129.27",
                    "fmt": "125.57 - 129.27"
                },
                "regularMarketDayHigh": {
                    "raw": 129.27,
                    "fmt": "129.27"
                },
                "twoHundredDayAverageChange": {
                    "raw": 31.488838,
                    "fmt": "31.49"
                },
                "twoHundredDayAverage": {
                    "raw": 94.38616,
                    "fmt": "94.39"
                },
                "askSize": {
                    "raw": 10,
                    "fmt": "10",
                    "longFmt": "10"
                },
                "fiftyTwoWeekHighChange": {
                    "raw": -49.795,
                    "fmt": "-49.79"
                },
                "fiftyTwoWeekRange": {
                    "raw": "32.27 - 175.67",
                    "fmt": "32.27 - 175.67"
                },
                "fiftyDayAverageChange": {
                    "raw": -8.821182,
                    "fmt": "-8.82"
                },
                "exchangeDataDelayedBy": 0,
                "firstTradeDateMilliseconds": 1265898600000,
                "averageDailyVolume3Month": {
                    "raw": 35468473,
                    "fmt": "35.468M",
                    "longFmt": "35,468,473"
                },
                "fiftyTwoWeekLow": {
                    "raw": 32.27,
                    "fmt": "32.27"
                },
                "market": "us_market",
                "regularMarketVolume": {
                    "raw": 17912855,
                    "fmt": "17.913M",
                    "longFmt": "17,912,855"
                },
                "quoteSourceName": "Nasdaq Real Time Price",
                "messageBoardId": "finmb_98126597",
                "priceHint": 2,
                "regularMarketDayLow": {
                    "raw": 125.57,
                    "fmt": "125.57"
                },
                "exchange": "NMS",
                "sourceInterval": 15,
                "ytdReturn": {
                    "raw": 12.75,
                    "fmt": "12.75%"
                },
                "shortName": "ProShares UltraPro QQQ",
                "region": "US",
                "fiftyDayAverageChangePercent": {
                    "raw": -0.06548948,
                    "fmt": "-6.55%"
                },
                "fullExchangeName": "NasdaqGS",
                "gmtOffSetMilliseconds": -14400000,
                "regularMarketOpen": {
                    "raw": 129.29,
                    "fmt": "129.29"
                },
                "regularMarketTime": {
                    "raw": 1601310302,
                    "fmt": "12:25PM EDT"
                },
                "regularMarketChangePercent": {
                    "raw": 2.7886665,
                    "fmt": "2.79%"
                },
                "quoteType": "ETF",
                "fiftyTwoWeekLowChange": {
                    "raw": 93.604996,
                    "fmt": "93.60"
                },
                "averageDailyVolume10Day": {
                    "raw": 47040250,
                    "fmt": "47.04M",
                    "longFmt": "47,040,250"
                },
                "fiftyTwoWeekHighChangePercent": {
                    "raw": -0.2834576,
                    "fmt": "-28.35%"
                },
                "tradeable": false,
                "currency": "USD",
                "fiftyTwoWeekHigh": {
                    "raw": 175.67,
                    "fmt": "175.67"
                },
                "regularMarketPreviousClose": {
                    "raw": 122.46,
                    "fmt": "122.46"
                },
                "exchangeTimezoneName": "America/New_York",
                "trailingThreeMonthReturns": {
                    "raw": 104.97,
                    "fmt": "104.97%"
                },
                "bidSize": {
                    "raw": 12,
                    "fmt": "12",
                    "longFmt": "12"
                },
                "regularMarketChange": {
                    "raw": 3.415001,
                    "fmt": "3.42"
                },
                "fiftyDayAverage": {
                    "raw": 134.69618,
                    "fmt": "134.70"
                },
                "exchangeTimezoneShortName": "EDT",
                "marketState": "REGULAR",
                "regularMarketPrice": {
                    "raw": 125.875,
                    "fmt": "125.88"
                },
                "ask": {
                    "raw": 126.54,
                    "fmt": "126.54"
                },
                "bid": {
                    "raw": 126.59,
                    "fmt": "126.59"
                },
                "triggerable": true,
                "longName": "ProShares UltraPro QQQ"
            }
        ],
        "error": null
    }
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
  
## References
1. https://create-react-app.dev/
