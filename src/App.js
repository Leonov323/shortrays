import React from "react";
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Header, Primary, Contacts, Service, SignIn, Footer } from './components'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/contact-us">
            <Contacts />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/">
            <Primary />
          </Route>
        </Switch>
       
      </Router>
      <Footer />
    </>
  );
}

export default App;
