import BaseApp from "./Base";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


export default function LoginComp(){

    return(
        <BaseApp
        searchDisplay="none"
        dropdownDisplay="none">
            <div className="loginMainPar">
                <div className="ImageCon">
                    <img src="https://images.hindustantimes.com/auto/img/2021/09/12/600x338/Lotus-Emira-GT4_1_1631437113681_1631437125779.jpg"></img>
                </div>
                <div className="formCon">
                    <h3>Welcome Back!</h3>

                    <Form type="submit">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            (We'll never share your email with anyone else.)
                          </Form.Text>
                        </Form.Group>
                  
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <div className="d-grid gap-2">
                          <Button variant="primary" size="md">
                            LOGIN
                          </Button>
                          <hr></hr>

                          <Button variant="danger" size="md">
                          <FontAwesomeIcon icon={faGoogle} style={{color: "#245a94",}}/>
                            Login With Google
                          </Button>

                          <Button variant="info" size="md">
                          <FontAwesomeIcon icon={faFacebook} style={{color: "#1e7bc2",}}/>
                            Login With Facebook
                          </Button>
                          <hr></hr>
                          <a href="/ResetPassword">Forgot Password?</a>
                          <a href="/Register">Create an Account!!</a>
                        </div>
                    </Form>
                </div>
            </div> 
       </BaseApp>
    );
}