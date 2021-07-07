import React, { Component, useState, useEffect } from 'react'
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Modal } from '@themesberg/react-bootstrap';
import cookie from 'react-cookies'
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

function Auth(props) {



    const [showDefault, setShowDefault] = useState(false);
    const [message, setMessage] = useState('Error');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [CheckBox, setCheckBox] = useState('Off');
    const history = useHistory();



    useEffect(() => {
        let isLoggedIn = false;
        let token = cookie.load('token')
        token == undefined ? isLoggedIn = false : isLoggedIn = true;
        if (isLoggedIn == true) {
            history.push("/");
        }
    }, []);
    const handleClose = () => setShowDefault(false);


    const setCheckBoxHandler = () => {
        CheckBox == 'Off' ? setCheckBox('On') : setCheckBox('Off');
    };
    const Handleclicklogin = () => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(Email)) {
            setMessage('Email is not valid!')
            setShowDefault(true)
            return;
        } else if (Password === '' || Password.length < 4) {
            setMessage('Password is not valid!')
            setShowDefault(true)
            return;
        }
        let link = process.env.SERVER_LINK || "http://localhost:5000";
        fetch(link + '/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: Email, password: Password })
        }).then(r => r.json())
            .then(r => {
                console.log(r);
                if (r.response == "Success") {
                    if (CheckBox == "On") {
                        cookie.save('token', r.data.token,
                            {
                                path: '/',
                                maxAge: 60 * 60 * 24 * 30,
                            }
                        );
                    } else {
                        cookie.save('token', r.data.token,
                            {
                                path: '/',
                            }
                        );
                    }
                    history.push("/");

                } else {
                    setMessage(r.msg)
                    setShowDefault(true)
                }


            }).catch(error => console.error('Error', error))



    }


    return (
        <div className="container" style={{ marginTop: '10%' }}>
            <div className="row">

                <div className="col-md-4 py-5 bg-primary">
                    <div className="card-body">
                        <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ width: '30%' }} />
                        <h2 className="py-3">Login</h2>
                        <h5>OR</h5>
                        <Card >
                            <Card.Body>
                                <Card.Link href="/new_insurance">Assign new Request!</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please fill with your details</h4>
                    <form>

                        <div className="form-group col-md-12">
                            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} id="inputEmail4" placeholder="Email Adress" />
                        </div>
                        <div className="form-group col-md-12">
                            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="passwordinput" placeholder="Password" />
                        </div>
                        <div className="form-group col-md-12">
                            <Form.Check type="checkbox">
                                <FormCheck.Input id="defaultCheck5" onChange={e => setCheckBoxHandler()} className="me-2" />
                                <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                            </Form.Check>
                        </div>

                        <div className="form-row">
                            <button type="button" onClick={() => { Handleclicklogin() }} className="btn btn-primary col-md-12">Login</button>

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


export default Auth
