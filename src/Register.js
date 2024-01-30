import BaseApp from "./Base";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Dashboard from "./Dashboard";

export default function RegisterComp(){

    return(
        <BaseApp
        searchDisplay="none"
        dropdownDisplay="none">
            <div className="RegisterMainPar">
                <div className="regisImgCon">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gub-1608133278.jpg"></img>
                </div>
                
                <div className="regisFormCon">
                    <h4>Create an Account!</h4>

                    <Form>
                        <Row className="mb-3">
                          <Col>
                            <Form.Control placeholder="First name" />
                          </Col>
                          <Col>
                            <Form.Control placeholder="Last name" />
                          </Col>
                        </Row>
  
                          <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Control placeholder="Enter Email Address" />
                          </Form.Group>
  
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formPassword">
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formPassword">
                            <Form.Control type="password" placeholder="Reset Password" />
                          </Form.Group>
                        </Row>
                  
                        <Form.Group className="mb-3" id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <div className="d-grid gap-2">
                          <Button variant="primary" size="md">
                            REGISTER
                          </Button>
                          <hr></hr>

                          <Button variant="danger" size="md">
                          <FontAwesomeIcon icon={faGoogle} style={{color: "#245a94",}}/>
                            Register With Google
                          </Button>

                          <Button variant="info" size="md">
                          <FontAwesomeIcon icon={faFacebook} style={{color: "#1e7bc2",}}/>
                            Register With Facebook
                          </Button>
                          <hr></hr>
                          <a href="/ResetPassword">Forgot Password?</a>
                          <a href="/Login">Already have an Account? Login!</a>
                        </div>
                    </Form>
                </div>
            </div>
        </BaseApp>
    );
}