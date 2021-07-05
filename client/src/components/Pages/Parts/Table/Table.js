import React, { Component } from 'react'
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";
import {Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'

class Tablein extends Component {
  constructor(props) {
    super(props);
  }
  
severity(UserRank) {
  switch(UserRank) {
    case "1":
      return "LOW"
    case "2":
      return "MEDIUM"
    case "3":
      return "HIGHT"
    case "4":
      return "SEVERE"
    default:
      return "SEVERE"
  }
}

isReviewed(calculated){
   // eslint-disable-next-line no-unused-expressions
   let view
   (calculated === 1) ? view= (<i class='bx bx-dots-horizontal-rounded'></i>): 
   view= (<button type="button" class="btn btn-success">Calculate</button>)
   return view
 }

render(){
  const tableItems= this.props.data.map((jsonItem) =>
          <tr>
          <td>{this.severity(jsonItem.UserRank)}</td>
          <td>{jsonItem.insuranceType}</td>
          <td>{jsonItem.FirstName} {jsonItem.LastName}</td>
          <td>{jsonItem.insuranceAmountRequested}$</td>
          <td>{jsonItem.calculated===0? "In Review":"Reviewed"}</td>
          <td>{jsonItem.dateofEnblment}</td>
          <td>{this.isReviewed(jsonItem.calculated)}</td>
        </tr>
    );
  return (
    <Container className="col-12 col-md-8" >
        <Table responsive className="noWrap" >
          <thead>
            <tr>
              <th>SEVERITY</th>
              <th>CATEGORY</th>
              <th>NAME</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>DUE DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {tableItems}
          </tbody>
      </Table>
    </Container>
  );
}
};
export default  Tablein;