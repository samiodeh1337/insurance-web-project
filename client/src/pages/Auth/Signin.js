
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Modal } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import cookie from 'react-cookies'
import { Routes } from "../../routes";
import { Redirect } from 'react-router';
import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {

  const [showDefault, setShowDefault] = useState(false);
  const [message, setMessage] = useState('Error');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [CheckBox, setCheckBox] = useState('Off');
  const history = useHistory();
  let isLoggedIn = false;
  let token = cookie.load('token')
  token == undefined ? isLoggedIn = false : isLoggedIn = true;

  const setCheckBoxHandler = () => {
    CheckBox == 'Off' ? setCheckBox('On') : setCheckBox('Off');
  }
  const handleClose = () => setShowDefault(false);
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

    fetch('http://localhost:5000/api/users/login', {
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

  if (isLoggedIn === true) {
    return (<Redirect to="/" />);
  } else {
    return (
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            <p className="text-center">
              <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
              </Card.Link>
            </p>
            <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
              <Col xs={12} className="d-flex align-items-center justify-content-center">
                <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Sign in</h3>
                  </div>
                  <Form className="mt-4">
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Your Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control autoFocus required type="email" onChange={e => setEmail(e.target.value)} placeholder="example@company.com" />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.Group id="password" className="mb-4">
                        <Form.Label>Your Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        </InputGroup>
                      </Form.Group>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check type="checkbox">
                          <FormCheck.Input id="defaultCheck5" onChange={e => setCheckBoxHandler()} className="me-2" />
                          <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                        </Form.Check>
                      </div>
                    </Form.Group>
                    <Button variant="primary" onClick={() => { Handleclicklogin() }} className="w-100">
                      Sign in
                    </Button>
                  </Form>

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

                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    );
  }

};
