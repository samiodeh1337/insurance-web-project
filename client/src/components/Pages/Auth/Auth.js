import React, { Component, useState } from 'react'
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Modal } from '@themesberg/react-bootstrap';
import cookie from 'react-cookies'

function Auth(props) {



    const [showDefault, setShowDefault] = useState(false);
    const [message, setMessage] = useState('Error');

    const handleClose = () => setShowDefault(false);

    const handleSubmit = async e => {

        setShowDefault(true)
        /*e.preventDefault();
        const response = await fetch('/Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: this.state.password, email: this.state.email, name: this.state.name }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });*/
    };


    // document.getElementById('.img-btn').addEventListener('click', function()
    // 	{
    // 		document.getElementById('.cont').classList.toggle('s-signup')
    // 	}
    // );


    return (
        <div className="container" style={{ marginTop: '10%' }}>
            <div className="row">
                <div className="col-md-4 py-5 bg-primary">
                    <div className="card-body">
                        <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ width: '30%' }} />
                        <h2 className="py-3">Login</h2>
                    </div>
                </div>
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please fill with your details</h4>
                    <form>

                        <div className="form-group col-md-12">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email Adress" />
                        </div>
                        <div className="form-group col-md-12">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Password" />
                        </div>


                        <div className="form-row">
                            <button type="button" onClick={() => { handleSubmit() }} className="btn btn-primary col-md-12">Login</button>
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
            </React.Fragment>
        </div >
    )

}
// document.getElementById('.img-btn').addEventListener('click', function()
// 	{
// 		document.getElementById('.cont').classList.toggle('s-signup')
// 	}
// );

export default Auth
