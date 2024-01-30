import './App.css';
import './Dashboard.css';
import './Button.css';
import './Card.css';
import './colors.css';
import './Border.css'
import './Animation.css'
import './other.css'
import './login.css'
import './register.css'
import './ResetPassword.css'
import './404Page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import ButtonComp from './Button';
import CardComp from './Card';
import ColorComp from './colors';
import BorderComp from './Border';
import AnimeComp from './Animation';
import OtherComp from './other';
import LoginComp from './login';
import RegisterComp from './Register';
import PasswordResetComp from './ResetPassword';
import WrongPageComp from './404Page';
import BlankComp from './BlankPage';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';


function App() {
  return (
   <div className='App'>

    <Switch>

      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route path="/Button">
        <ButtonComp/>
      </Route>
      <Route path="/Card">
        <CardComp/>
      </Route>
      <Route path="/Color">
        <ColorComp/>
      </Route>
      <Route path="/Border">
        <BorderComp/>
      </Route>
      <Route path="/Animation">
        <AnimeComp/>
      </Route>
      <Route path="/Other">
        <OtherComp/>
      </Route>
      <Route path="/Login">
        <LoginComp/>
      </Route>
      <Route path="/Register">
        <RegisterComp/>
      </Route>
      <Route path="/ResetPassword">
        <PasswordResetComp/>
      </Route>
      <Route path="/WrongPage">
        <WrongPageComp/>
      </Route>
      <Route path="/Blank">
        <BlankComp/>
      </Route>
      <Route path="**">
        <WrongPageComp/>
      </Route>

    </Switch>


   </div>
  );
}


export default App;
