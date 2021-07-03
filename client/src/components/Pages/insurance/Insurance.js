import React, { Component, useState, useEffect } from 'react'
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Modal, Dropdown } from '@themesberg/react-bootstrap';
import { useHistory } from "react-router-dom";

function Insurance(props) {


    const [showDefault, setShowDefault] = useState(false);
    const [message, setMessage] = useState('Error');

    const [SocialNumber, setSocialNumber] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [insuranceAmount, setinsuranceAmount] = useState(0);
    const [PinsCom, setPinsCom] = useState('');
    const [Pinsnum, setPinsnum] = useState('');
    const [PinsId, setPinsId] = useState('');
    const [comment, setcomment] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [submitted, setsubmitted] = useState(false);
    const [data, setdata] = useState(undefined);

    useEffect(() => {
        setsubmitted(false);
    }, []);

    const history = useHistory();
    const navigateToLogin = () => history.push('/sign-in');


    const handleClose = () => setShowDefault(false);
    const clickhandler = () => {
        if (SocialNumber === '') {
            setMessage("Please fill Social number!");
            setShowDefault(true)
            return;
        } else if (Firstname === '') {
            setMessage("Please fill First name!");
            setShowDefault(true)
            return;
        } else if (Lastname === '') {
            setMessage("Please fill Last name!");
            setShowDefault(true)
            return;
        } else if (insuranceAmount <= 0) {
            setMessage("Please fill a valid insurance amount!");
            setShowDefault(true)
            return;
        } else if (PinsCom === '' || PinsCom === "Previous insurance company") {
            setMessage("Please select a previous insurance company!");
            setShowDefault(true)
            return;
        } else if (Pinsnum === '') {
            setMessage("Please fill previous insurance number!");
            setShowDefault(true)
            return;
        } else if (PinsId === '') {
            setMessage("Please fill previous insurance ID!");
            setShowDefault(true)
            return;
        } else if (comment === '') {
            setMessage("Please fill a comment!");
            setShowDefault(true)
            return;
        } else if (Phone === '') {
            setMessage("Please fill a phone number!");
            setShowDefault(true)
            return;
        } else if (Email === '') {
            setMessage("Please fill a email address!");
            setShowDefault(true)
            return;
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(Email)) {
            setMessage('Email is not valid!')
            setShowDefault(true)
            return;
        }

        fetch('http://localhost:5000/api/insurance/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: Firstname,
                lastname: Lastname,
                email: Email,
                insuranceAmountRequested: insuranceAmount,
                insuranceCompanyName: "Harel",
                companyUserId: SocialNumber,
                PrevinsuranceCompanyName: PinsCom,
                Previousinsurancenumber: Pinsnum,
                PrevinsuranceID: PinsId,
                phone: Phone,
                comment: comment,
            })
        }).then(r => r.json())
            .then(r => {
                console.log(r);
                if (r.response == "Success") {

                    setdata(r.data);
                    setsubmitted(true);


                } else {
                    setMessage(r.msg)
                    setShowDefault(true)
                }


            }).catch(error => console.error('Error', error))



    }

    return (
        <div className="container">


            {submitted === false ? <div>   <div className="row ">
                <div className="col-md-4 py-5 bg-primary text-white text-center ">
                    <div className="card-body">
                        <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ width: '30%' }} />
                        <h2 className="py-3">New Insurance</h2>
                    </div>
                </div>
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please fill with your details</h4>

                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="SocialNumber" name="SocialNumber" placeholder="Social Number" onChange={e => setSocialNumber(e.target.value)} className="form-control" type="text" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="LastName" onChange={e => setLastname(e.target.value)} placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="FirstName" name="FirstName" placeholder="First Name" onChange={e => setFirstname(e.target.value)} className="form-control" type="text" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" id="inputEmail4" onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="MobileNo." name="Mobile No." placeholder="Mobile No." onChange={e => setPhone(e.target.value)} className="form-control" required="required" type="text" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="number" className="form-control" id="InsuranceAmount" onChange={e => setinsuranceAmount(e.target.value)} placeholder="Insurance Amount" />
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" id="Previousinsurancenumber" onChange={e => setPinsnum(e.target.value)} placeholder="Previous insurance number" />
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" id="Previousinsuranceid" onChange={e => setPinsId(e.target.value)} placeholder="Previous insurance id" />
                            </div>
                            <div className="form-group col-md-12">
                                <select id="inputState" onChange={e => setPinsCom(e.target.value)} className="form-control" title="test" >
                                    <option>Previous insurance company</option>
                                    <option>Harel</option>
                                    <option>Yashir</option>
                                    <option>Migdal</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <textarea id="comment" name="comment" cols="40" placeholder="Comment" onChange={e => setcomment(e.target.value)} rows="5" className="form-control" type="text"></textarea>
                            </div>
                        </div>

                        <div className="form-row">
                            <button type="button" onClick={clickhandler} className="btn btn-danger col-md-12">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
                <React.Fragment>
                    <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title className="h6">Message</Modal.Title>
                            <Button variant="close" aria-label="Close" onClick={handleClose} />
                        </Modal.Header>
                        <Modal.Body>
                            <p>{message}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                I Got It
                        </Button>

                        </Modal.Footer>
                    </Modal>
                </React.Fragment></div> : <Card>
                <Card.Body>
                    <Card.Title>Thank you for your request</Card.Title>
                    <Card.Text>
                        Your request number is {data.insuranceData[0].RequestNumber}.
                    We will review your request and will contact you soon!
                    </Card.Text>
                    <Button variant="primary" onClick={navigateToLogin}>Go to Login</Button>
                </Card.Body>
            </Card>}
        </div>
    )

}
// document.getElementById('.img-btn').addEventListener('click', function()
// 	{
// 		document.getElementById('.cont').classList.toggle('s-signup')
// 	}
// );

export default Insurance
