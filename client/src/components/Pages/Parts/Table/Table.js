import React, { Component } from 'react'
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";
import './Table.css'

class Table extends Component {
render(){
  return (
    <CDBContainer className="tableStyle2">
          <CDBTable responsive>
            <CDBTableHeader>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Second</th>
                <th>Third</th>
                <th>Fourth</th>
                <th>Fifth</th>
                <th>Sixth</th>
                <th>Seventh</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </CDBTableHeader>
            <CDBTableBody>
              <tr>
                <td>1</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>@email</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>@email</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>@email</td>
              </tr>
            </CDBTableBody>
          </CDBTable>
    </CDBContainer>
  );
}
};
export default  Table;