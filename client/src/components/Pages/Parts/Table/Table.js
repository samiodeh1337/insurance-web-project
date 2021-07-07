import React, { Component } from 'react'
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";
import { Container, Table } from 'react-bootstrap';
import { Modal, Button, Form } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'

class Tablein extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOpen: false
  };

  // // openModal = () => this.setState({ isOpen: true });
  // closeModal = (status) => this.setState({ status: false });

  // showModal = ()  => {
  //   this.setState({ isOpen: true });
  // }

  // severity(UserRank) {
  //   let severe=""
  //   switch(UserRank) {
  //     case 1:
  //       severe="LOW"
  //       return severe;
  //     case 2:
  //       severe="MEDIUM"
  //       return severe;
  //     case 3:
  //       severe="HIGH"
  //       return severe;
  //     case 4:
  //       severe="SEVERE"
  //       return severe;
  //     default:
  //       return severe;
  //   }
  // }

  componentDidMount() {
    console.log(this.props.data);
  }
  calculatehandle = (id) => {

    let link = process.env.SERVER_LINK || "http://localhost:5000";
    fetch(link + '/api/insurance/calc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id })
    })
      .then(res => res.json())
      .then(json => {
        this.props.data_state(json);
        console.log(json);
      });


    console.log(id);
  }

  isReviewed(jsonItem) {
    // eslint-disable-next-line no-unused-expressions
    let view
    (jsonItem.calculated === 1) ? view = (<button type="button" className="btn" onClick={() => this.setState({ ["isOpen" + jsonItem._id]: true })}><i className='bx bx-dots-horizontal-rounded' /></button>) :
      view = (<button type="button" onClick={() => { this.calculatehandle(jsonItem._id) }} className="btn btn-success">Calculate</button>)
    return view
  }

  render() {
    let tableItems = this.props.data.map((jsonItem) =>
      <>
        <tr>
          <td>{(jsonItem.severity)}</td>
          <td>{jsonItem.insuranceType}</td>
          <td>{jsonItem.FirstName} {jsonItem.LastName}</td>
          <td>{jsonItem.insuranceAmountRequested}$</td>
          <td>{jsonItem.calculated === 0 ? "In Review" : "Reviewed"}</td>
          <td>{jsonItem.dateofEnblment}</td>
          <td>{this.isReviewed(jsonItem)}</td>
        </tr>
        <Modal show={this.state["isOpen" + jsonItem._id]} onHide={() => this.setState({ ["isOpen" + jsonItem._id]: false })} className=" pt-3" data-aos="zoom-out" data-aos-duration="800" >
          <Modal.Body className=" rounded" data-aos="zoom-out" data-aos-duration="800" >
            <Modal.Header closeButton className="modalHead font-weight-bold closeIcon p-0 align-items-end align-self-end border-0 ">
            </Modal.Header>
            <Table responsive className="noWrap col-12">
              <thead>
                <tr>
                  <th>insuranceEnable</th>
                  <th>dateofEnblment</th>
                  <th>CarStatus</th>
                  <th>UserRank</th>
                  <th>message</th>
                  <th></th>
                </tr>
              </thead>
              <tr>
                <td>{jsonItem.insuranceEnable}</td>
                <td>{jsonItem.dateofEnblment}</td>
                <td>{jsonItem.CarStatus}</td>
                <td>{jsonItem.UserRank}</td>
                <td>{jsonItem.message}</td>
              </tr>
            </Table>
          </Modal.Body>

        </Modal>
      </>
    );

    return (
      <Container className="col-12 col-md-6" >
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
export default Tablein;