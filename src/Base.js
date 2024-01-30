import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dropdown } from 'react-bootstrap';
import { Block } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


export default function BaseApp({title,children,searchDisplay,dropdownDisplay}){

    const history = useHistory();

    return(
        <div className="BaseParent">
            <div className="SideCon">
                <h3><b>SB Admin</b></h3>
                <hr></hr>
                <p onClick={()=>history.push("/")}><strong>Dashboard</strong></p>
                <hr></hr>
                <b>INTERFACE</b>
                <h5><b>Components</b></h5>
                <p onClick={()=>history.push("/Button")}>Buttons</p>
                <p onClick={()=>history.push("/Card")}>Cards</p>
                <h5><b>Utilities</b></h5>
                <p onClick={()=>history.push("/Color")}>Colors</p>
                <p onClick={()=>history.push("/Border")}>Border</p>
                <p onClick={()=>history.push("/Animation")}>Animations</p>
                <p onClick={()=>history.push("/Other")}>Other</p>
                <hr></hr>
                <b>ADDONS</b>
                <h5><b>Pages</b></h5>
                <p onClick={()=>history.push("/Login")}>Login</p>
                <p onClick={()=>history.push("/Register")}>Register</p>
                <p onClick={()=>history.push("/ResetPassword")}>Forgot Password</p>
                <b>Other Pages</b>
                <p onClick={()=>history.push("/WrongPage")}>404 Page</p>
                <p onClick={()=>history.push("/Blank")}>Blank Page</p>
                <hr></hr>
                <div className='UpgradePro'>
                    <p>SB Admin Pro is packed with premium features, components, and more!</p>
                    <button>Upgrade to PRO!</button>
                </div>
            </div>
            <div className="MainCon">
                <div className='SearchCon' style={{display:searchDisplay}}>
                    <form className='searchForm'>
                        <input placeholder='Search'></input>
                        <button type="submit" ><SearchIcon color="dark"/></button>
                    </form>
                </div>
                <div className='Profile' style={{display:dropdownDisplay}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <AccountCircleIcon
                            color="action"
                            fontSize='large'/>
                            Neelakandan
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">Profile</Dropdown.Item>
                            <Dropdown.Item href="">Settings</Dropdown.Item>
                            <Dropdown.Item href="">Activity Log</Dropdown.Item>
                            <hr></hr>
                            <Dropdown.Item href="">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='Title'>
                    <h3><b>{title}</b></h3>
                </div>
                <div className='Children'>
                    {children}
                </div>
            </div>
        </div>
    )
}
  