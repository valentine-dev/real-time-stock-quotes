import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class Display extends Component {
   render() {
      const { data } = this.props;
      return (
         <Table striped bordered hover responsive>
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
            <th class="text-left">Local Time</th>
            <th>SYM</th>
            <th>$</th>
            <th>CHG</th>
            <th>%</th>
         </tr>
      </thead>
   )
};

const DisplayBody = props => {
   const rows = props.rows.map((row, index) => {

      const dateTimeStr = new Date(row.pricedata.lasttradedatetime).toLocaleString('en-CA');
      const changePercent = row.pricedata.changepercent.toFixed(2) + "%";
      const textColor = row.pricedata.change === 0 ? "text-dark"
         : (row.pricedata.change > 0 ? "text-success" : "text-danger");

      return (

         <tr key={index} class="text-right">
            <td class="text-left">{dateTimeStr}</td>
            <td>{row.symbolstring}</td>
            <td>{row.pricedata.last}</td>
            <td class={textColor}>{row.pricedata.change}</td>
            <td class={textColor}>{changePercent}</td>
         </tr >
      )
   });

   return <tbody>{rows}</tbody>
};



export default Display;