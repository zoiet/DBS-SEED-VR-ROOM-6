import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
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
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <Login/>
                </Route>
          </Switch>
    </Router>
    
    // <List>{mainListItems}</List>
    
  );
}

export default App;
