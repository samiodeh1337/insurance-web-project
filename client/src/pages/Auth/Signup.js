
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Input } from '@themesberg/react-bootstrap';

import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <div className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-800">
                <Row>
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">New Insurance</h3>
                  </div>
                  <Col xs={12} xl={6}>
                    <Form>
                      <Form.Group id="SocialNumber" className="mb-4">
                        <Form.Label>Social Number</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faEnvelope} />
                          </InputGroup.Text>
                          <Form.Control autoFocus required type="text" placeholder="Social Number" />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="FirstName" className="mb-4">
                        <Form.Label>First Name</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="text" placeholder="First Name" />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="Phone" className="mb-4">
                        <Form.Label>Phone</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="text" placeholder="Phone" />
                        </InputGroup>
                      </Form.Group>

                    </Form>

                  </Col>
                  <Col xs={12} xl={6}>
                    <Form >

                      <Form.Group id="Lastname" className="mb-4">
                        <Form.Label>Last Name</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="text" placeholder="Last Name" />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="email" className="mb-4">
                        <Form.Label>Your Email</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faEnvelope} />
                          </InputGroup.Text>
                          <Form.Control autoFocus required type="email" placeholder="example@company.com" />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="insuranceamount" className="mb-4">
                        <Form.Label>Insurance Amount</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="text" placeholder="Insurance Amount" />
                        </InputGroup>
                      </Form.Group>
                    </Form>
                  </Col>
                  <Form.Group id="pinsuranceNumber" className="mb-4">
                    <Form.Label>Previous insurance number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="text" placeholder="Previous insurance number" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="pinsuranceId" className="mb-4">
                    <Form.Label>Previous insurance id</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="text" placeholder="Previous insurance id" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="pinsuranceCom" className="mb-4">
                    <Form.Label>Previous insurance company</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control as="select">
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="comment" className="mb-4">
                    <Form.Label>Comments</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control as="textarea" rows={3} />
                    </InputGroup>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Row>

              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
