import React from "react";
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { User, Home } from './components'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <GlobalStyles />
      
      
      <Router>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Switch>
          
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
