import BaseApp from "./Base";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

export default function AnimeComp(){

    return(
        <BaseApp title="Animation Utilities"
        searchDisplay="block"
        dropdownDisplay="block">
            <div className="AnimeMainPar">
                <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

                <div className="GrowIn">
                    <h4>Grow In Animation Utility</h4>
                    <p style={{color:"crimson"}}>.animated--grow-in</p>
                    <p>Navbar Dropdown Example:</p>

                    <Navbar expand="lg"  bg="light" data-bs-theme="light" className="bg-body-tertiary">
                      <Container>
                        <Navbar.Brand href="#home">Nav Bar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                Another action
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.3">
                                Something else here
                              </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>

                    <p>Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.</p>
                </div>

                <div className="FadeIn">
                    <h4>Fade In Animation Utility</h4>
                    <p style={{color:"crimson"}}>.animated--fade-in</p>
                    <p>Navbar Dropdown Example:</p>
                    <Navbar expand="lg"  bg="light" data-bs-theme="light" className="bg-body-tertiary">
                      <Container>
                        <Navbar.Brand href="#home">Nav Bar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                Another action
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.3">
                                Something else here
                              </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>

                    <p>Dropdown Button Example:</p>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <p>Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!</p>
                </div>
            </div>
        </BaseApp>
    );
};
