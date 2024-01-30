import BaseApp from "./Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function ButtonComp(){

    return(
        <BaseApp 
        title = "Buttons"
        searchDisplay="block"
        dropdownDisplay="block">
            <div className="BtnMainParent">
                <div className="circleBtns">
                    <h4>Circle Buttons</h4>
                    <hr></hr>
                    <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
                    <br></br>
                    <div className="circleBtnHead">
                        <p><strong>.btn-circle</strong></p>
                        <a><FontAwesomeIcon icon={faFacebook} style={{color: "#1080d5",}} size="3x"/></a>
                        <a><FontAwesomeIcon icon={faCircleCheck} style={{color: "#63E6BE",}} size="3x" /></a>
                        <a><FontAwesomeIcon icon={faCircleInfo} style={{color: "#16bdc0",}} size="3x"/></a>
                        <a><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#FFD43B",}} size="3x" /></a>
                    </div>
                    
                    <div className="circleBtnHead">
                        <p><strong>.btn-circle .btn sm</strong></p>
                        <a><FontAwesomeIcon icon={faFacebook} style={{color: "#1080d5",}} size="2x"/></a>
                        <a><FontAwesomeIcon icon={faCircleCheck} style={{color: "#63E6BE",}} size="2x" /></a>
                        <a><FontAwesomeIcon icon={faCircleInfo} style={{color: "#16bdc0",}} size="2x"/></a>
                        <a><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#FFD43B",}} size="2x" /></a>
                    </div>

                    <div className="circleBtnHead">
                        <p><strong>.btn-circle .btn lg</strong></p>
                        <a><FontAwesomeIcon icon={faFacebook} style={{color: "#1080d5",}} size="4x"/></a>
                        <a><FontAwesomeIcon icon={faCircleCheck} style={{color: "#63E6BE",}} size="4x" /></a>
                        <a><FontAwesomeIcon icon={faCircleInfo} style={{color: "#16bdc0",}} size="4x"/></a>
                        <a><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#FFD43B",}} size="4x" /></a>
                    </div>
                </div>

                <div className="SplitButtons">
                    <h4>Split Buttons with icon</h4>
                    <hr></hr>
                    <p>Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.</p>
                    <br></br>
                    <button style={{backgroundColor:"dodgerblue"}}><FontAwesomeIcon icon={faFlag} style={{color: "#74C0FC",}} size="2x" className="BtnIcon" />Split Button Primary</button><br></br>
                    <button style={{backgroundColor:"green"}}><FontAwesomeIcon icon={faSquareCheck} style={{color: "#11bb63",}} size="2x" className="BtnIcon" />Split Button Success</button><br></br>
                    <button style={{backgroundColor:"skyblue"}}><FontAwesomeIcon icon={faCircleInfo} style={{color: "#6e8291",}} size="2x" className="BtnIcon"/>Split Button Info</button><br></br>
                    <button style={{backgroundColor:"yellow"}}><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#FFD43B",}} size="2x" className="BtnIcon"/>Split Button Warning</button><br></br>
                    <button style={{backgroundColor:"crimson"}}><FontAwesomeIcon icon={faTrash} style={{color: "#a59393",}} size="2x" className="BtnIcon"/>Split Button Danger</button><br></br>
                    <button style={{backgroundColor:"lightgrey"}}><FontAwesomeIcon icon={faArrowRight} size="2x" className="BtnIcon"/>Split Button Secondary</button><br></br>
                    <button style={{backgroundColor:"whitesmoke"}}><FontAwesomeIcon icon={faArrowRight} size="2x" className="BtnIcon"/>Split Button Light</button><br></br>

                    <p>Also works with small and large button classes!</p>
                    <button style={{backgroundColor:"dodgerblue"}}><FontAwesomeIcon icon={faFlag} style={{color: "#74C0FC",}} size="x" className="BtnIcon" />Split Button Small</button><br></br>
                    <button style={{backgroundColor:"dodgerblue"}}><FontAwesomeIcon icon={faFlag} style={{color: "#74C0FC",}} size="3x" className="BtnIcon" />Split Button </button><br></br>
                </div>

                <div className="BrandButtons">
                    <h4>Brand Buttons</h4>
                    <hr></hr>
                    <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
                    <br></br>
                    <p>You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
                    <button style={{backgroundColor:"crimson"}}><FontAwesomeIcon icon={faGoogle} style={{color: "#245a94",}} className="BtnBlock" />.btn Google</button>
                    <button style={{backgroundColor:"skyblue"}}><FontAwesomeIcon icon={faFacebook} style={{color: "#1e7bc2",}}className="BtnBlock"/>.btn Facebook</button>
                </div>
            </div>
        </BaseApp>
    );
}