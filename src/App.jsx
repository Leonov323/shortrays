import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { User, Home, Authorization } from './components';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/dashboard" component={User} />
          <Route path="/authorization" component={Authorization} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
