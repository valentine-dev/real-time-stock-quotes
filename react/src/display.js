import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class Display extends Component {
   render() {
      const { data } = this.props;
      return (
         <Table striped bordered hover responsive="sm" size="sm">
            <DisplayHeader />
            <DisplayBody rows={data} />
         </Table>
      )
   }
}

const DisplayHeader = () => {
   return (
      <thead>
         <tr className="text-right">
            <th className="text-left"><span role="img" aria-label="Date">&#x1F4C6;</span> <span role="img" aria-label="Time">&#x23F2;</span></th>
            <th><span role="img" aria-label="Symbol">&#x1F4C8;</span></th>
            <th><span role="img" aria-label="Price">&#x1F4B0;</span> <span role="img" aria-label="Volume">&#x1F4CA;</span></th>
            <th>&#x00B1; %</th>
         </tr>
      </thead>
   )
};

const DisplayBody = props => {
   const rows = props.rows.map((row, index) => {

      const dateOptions = { month: 'numeric', day: 'numeric' };
      const dateStr = new Date(row.regularMarketTime.raw*1000).toLocaleDateString('en-CA', dateOptions);
      const timeOptions = { hour12: false };
      const timeStr = new Date(row.regularMarketTime.raw*1000).toLocaleTimeString('en-CA', timeOptions);
      const changePercent = row.regularMarketChangePercent.fmt;
      const change = row.regularMarketChange.fmt;
      const textColor = row.regularMarketChange.raw === 0 ? "text-dark"
         : (row.regularMarketChange.raw > 0 ? "text-success" : "text-danger");
      const colonIndex = row.symbol.indexOf('.');
      const price = row.regularMarketPrice.fmt;
      const volume = row.regularMarketVolume.fmt;

      const symColor = colonIndex > -1 ? 
         (row.symbol.slice(colonIndex+1).toLowerCase() === 'to' ? "text-primary" 
         : (row.symbol.slice(colonIndex+1).toLowerCase() === 'cn' ? "text-danger" : "text-dark"))
         : "text-success";

      const symbolString = colonIndex > -1 ? row.symbol.slice(0,colonIndex) : row.symbol;
      const currency = row.currency;
      return (

         <tr key={index} className="text-right">
            <td className="text-left">{dateStr} <span className="font-weight-bold">{timeStr}</span></td>
            <td className={symColor}>{symbolString}</td>
            <td>{currency}<span className="font-weight-bold">{price}</span> {volume}</td>
            <td className={textColor}><span className="font-weight-bold">{change}</span> {changePercent}</td>
         </tr >
      )
   });

   return <tbody>{rows}</tbody>
};



export default Display;
