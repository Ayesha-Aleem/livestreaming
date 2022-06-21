import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"

// components
import Menu from './Components/Menu';
import contact from './Components/contact';
import dramas from './Components/dramas';
import notFound from './Components/notFound';
import home from './Components/home';
import Login from './Components/Login';
import signup from './Components/signup';
import CreditCard from './Components/creditCard';
// css files
import "./cssFiles/login.css"
import "./cssFiles/signup.css"
import "./cssFiles/contact.css"

function App() {
  return (
  <Router>
    <div >
      <Menu/>
      <div style={{padding:"10px"}}>
        <Switch>
          <Route path="/contact" component={contact}/>
          <Route path="/dramas" component={dramas}/>
          <Route path="/notfound" component={notFound}/>
          <Route path="/home" exact component={home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={signup} />
          <Route path="/creditcard" exact component={CreditCard} />
          <Redirect to="/home" />
          </Switch>
      </div>
      
    </div>
  </Router>
  );
}

export default App;
