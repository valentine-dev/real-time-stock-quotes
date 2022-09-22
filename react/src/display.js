import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

class Display extends Component {
   constructor(props) {
      super(props);
      this.state = { showDate: false, showVolume: false, showDiff: false}
   }

   toggleShowDate = (status) => {      
      status ? this.setState({showDate: false}) : this.setState({showDate: true});
   } 

   toggleShowVolume = (status) => {      
      status ? this.setState({showVolume: false}) : this.setState({showVolume: true});
   }

   toggleShowDiff = (status) => {      
      status ? this.setState({showDiff: false}) : this.setState({showDiff: true});
   }

   render() {
      const { data } = this.props;
      //console.log("ok");
      //console.log("Show Date: " + this.state.showDate);
      return (
         <Table striped bordered hover responsive="sm" size="sm">
            <DisplayHeader 
               showStates={this.state} 
               handleToggleShowDate={this.toggleShowDate} 
               handleToggleShowVolume={this.toggleShowVolume}
               handleToggleShowDiff={this.toggleShowDiff}
            />
            <DisplayBody 
               rows={data} 
               showStates={this.state}
            />
         </Table>
      )
   }
}

const DisplayHeader = props => {
   //console.log(props);
   return (
      <thead>
         <tr className="text-right"> 
            <th className="text-left">
            <Button variant="light" disabled><span role="img" aria-label="Symbol">&#x1F4C8;</span></Button>
            </th>
            <th>
               {props.showStates.showDate ? <Button variant="light" onClick={() => props.handleToggleShowDate(props.showStates.showDate)}><span role="img" aria-label="Date">&#x1F4C6;</span></Button> : <Button variant="light" onClick={() => props.handleToggleShowDate(props.showStates.showDate)}><span role="img" aria-label="Time">&#x23F2;</span></Button> }
            </th>
            <th>
               {props.showStates.showVolume ? <Button variant="light" onClick={() => props.handleToggleShowVolume(props.showStates.showVolume)}><span role="img" aria-label="Volume">&#x1F4CA;</span></Button> : <Button variant="light" onClick={() => props.handleToggleShowVolume(props.showStates.showVolume)}><span role="img" aria-label="Price">&#x1F4B0;</span></Button> }
            </th>
            <th>{props.showStates.showDiff ? <Button variant="light" onClick={() => props.handleToggleShowDiff(props.showStates.showDiff)}><span>&#x00B1;</span></Button> : <Button variant="light" onClick={() => props.handleToggleShowDiff(props.showStates.showDiff)}><span>%</span></Button>}</th>
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
            <td className={symColor + " text-left"}>{symbolString}</td>
            <td>
            {props.showStates.showDate ? <span>{dateStr}</span> : <span>{timeStr}</span>}
            </td>
            <td>
               {props.showStates.showVolume ? <span>{volume}</span>: <span>{currency}{price}</span> }
            </td>
            <td className={textColor}>
               {props.showStates.showDiff ? <span>{change}</span> : <span>{changePercent}</span> }
            </td>
         </tr>
      )
   });

   return <tbody>{rows}</tbody>
};



export default Display;
