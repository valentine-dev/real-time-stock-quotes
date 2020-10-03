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
         <tr class="text-right">
            <th class="text-left">Time</th>
            <th>Symbol (Exchange)</th>
            <th>$ (Volume)</th>
            <th>Change (%)</th>
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
         : (row.symbol.slice(colonIndex+1).toLowerCase() === 'cn' ? "text-secondary" : "text-dark"))
         : "text-success";

      const symbolString = colonIndex > -1 ? row.symbol.slice(0,colonIndex) : row.symbol;
      const currency = row.currency;
      return (

         <tr key={index} class="text-right">
            <td class="text-left">{dateStr} {timeStr}</td>
            <td class={symColor}>{symbolString} ({row.fullExchangeName})</td>
            <td>{currency} <span class="font-weight-bold">{price}</span> ({volume})</td>
            <td class={textColor}>{change} ({changePercent})</td>
         </tr >
      )
   });

   return <tbody>{rows}</tbody>
};



export default Display;
