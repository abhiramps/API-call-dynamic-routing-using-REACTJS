import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import ApiCall from './api';
import profile from './profile'
import ControllableStates from './profile1'
import TodoRegistration  from './todoregistration.js'
import Todolisting from './todolisting'
import TodoExample from './TodoExample'
import Login from './Login'
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        <Router>
          <div className="App">

             <h1>Api call</h1> 

            <ul>
              <li>
                <a href="/api">api</a>
              </li>
              <li>
                <a href="/profile">profile</a>
              </li>
              <li>
              <a href="/todoregistration">registration form</a>

              </li>
                <li>
                  <a href='/todolisting'>todo listing</a>
              </li>
              
                <li>
                  <a href='/TodoExample'>todo example</a>
              </li> 
              dynamic routing
              <li>
               
                  <a href='/login'>Login</a>
              </li>
              <li>
               
                  <a href='/welcome'>welcome</a>
              </li>


            </ul>
            <Switch>
              <Route path="/api" component={ApiCall}></Route>
              <Route exact path="/profile" component={ControllableStates}></Route>
              <Route exact path="/todoregistration" component={TodoRegistration}></Route>
              <Route path='/todolisting'  component={Todolisting}></Route>
              <Route path='/TodoExample'  component={TodoExample}></Route>
              <Route path='/login'  component={Login}></Route>
              <Route exact path='/welcome/:role'  component={Welcome}/>

              
            </Switch>
            <h1>footer</h1>
            {/* <header className="App-header"> */}
            {/* <RoutingFn></RoutingFn> */}
            {/* </header> */}
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
