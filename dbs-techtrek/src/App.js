import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './sign-up/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
                <Route path="/onboard">
                  <SignUp />
                </Route>
                <Route path="/">
                  <SignUp/>
                </Route>
          </Switch>
    </Router>
    
    // <List>{mainListItems}</List>
    
  );
}

export default App;
