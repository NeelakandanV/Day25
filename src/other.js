import BaseApp from "./Base";
import { ProgressBar } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

export default function OtherComp(){

    return(
        <BaseApp title="Other Utiliies"
        searchDisplay="block"
        dropdownDisplay="block">
            <div className="OtherMainPar">
                <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
                
                <div className="Overflow">
                    <h4>Overflow Hidden Utility</h4>
                    <p>Use .o-hidden to set the overflow property of any element to hidden.</p>
                </div>

                <div className="Rotation">
                    <h4>Rotation Utilities</h4>
                    <p className="rot45">.rotate-15</p>
                    <hr></hr>
                    <p className="rot135">.rotate-n-15</p>
                </div>

                <div className="Progress">
                    <h4>Progress Small Utility</h4>
                    <p>Normal Progress Bar</p>
                    <ProgressBar now={60} />
                    <p>Animated Progress Bar</p>
                    <ProgressBar animated now={45} />
                    <p>Use the animated class along with now</p>
                </div>

                <div className="DropNoArr">
                    <h4>Dropdown</h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Dropdown Button
                        </Dropdown.Toggle>
                  
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <p>Add the .bg-success class alongside the .dropdown</p>
                </div>
            </div>
        </BaseApp>
    );
}