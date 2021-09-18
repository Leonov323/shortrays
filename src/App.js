import React from "react";
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { User, Home, Authorization } from './components'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/dashboard" exact component={User} />
          <Route path="/authorization" exact component={Authorization} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
