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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
