import BaseApp from "./Base";
import { Form } from "react-bootstrap";
import {FloatingLabel} from "react-bootstrap";
import {Button} from "react-bootstrap";


export default function PasswordResetComp(){

    return(
        <BaseApp 
        searchDisplay="none"
        dropdownDisplay="none">
           <div className="ForgotMainPar">
            <div className="ForImgCon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHt7u8S8benfDnzRxzOOU0--NKthaMo6zpQ&usqp=CAU"></img>
            </div>

            <div className="ForgotCon">
                <h4>Forgot Your Password?</h4>
                <p>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                <FloatingLabel
                   controlId="floatingInput"
                   label="Enter Email Address"
                   className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="md">
                      Reset Password
                    </Button>
                    <hr></hr>
                    <a href="/Register">Create an Account!</a>
                    <a href="/Login">Already have an account?Login!!</a>
                </div>
            </div>
        </div>
        </BaseApp>
    );
}