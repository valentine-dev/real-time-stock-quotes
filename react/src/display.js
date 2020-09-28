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
      const dateStr = new Date(row.pricedata.lasttradedatetime).toLocaleDateString('en-CA', dateOptions);
      const timeOptions = { hour12: false };
      const timeStr = new Date(row.pricedata.lasttradedatetime).toLocaleTimeString('en-CA', timeOptions);
      const changePercent = row.pricedata.changepercent.toFixed(2) + "%";
      const textColor = row.pricedata.change === 0 ? "text-dark"
         : (row.pricedata.change > 0 ? "text-success" : "text-danger");
      const colonIndex = row.symbolstring.indexOf(':');

      const symColor = colonIndex > -1 ? 
         (row.symbolstring.slice(colonIndex+1).toLowerCase() === 'us' ? "text-success" : "text-secondary")
         : "text-primary";

      const symbolString = colonIndex > -1 ? row.symbolstring.slice(0,colonIndex) : row.symbolstring;

      return (

         <tr key={index} class="text-right">
            <td class="text-left">{dateStr} {timeStr}</td>
            <td class={symColor}>{symbolString} ({row.key.exchange})</td>
            <td>{row.pricedata.last} ({row.pricedata.sharevolume})</td>
            <td class={textColor}>{row.pricedata.change} ({changePercent})</td>
         </tr >
      )
   });

   return <tbody>{rows}</tbody>
};



export default Display;
