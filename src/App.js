import React from "react";
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Header, Primary } from './components'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/about">

        </Route>
        <Route path="/users">

        </Route>
        <Route path="/home">
          <Primary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
