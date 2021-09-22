import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Primary, Contacts, Service, SignIn } from './Pages';
import Footer from '../UI/Footer';

export function Home() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/contact-us">
          <Contacts />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Primary />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
