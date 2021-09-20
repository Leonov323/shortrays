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
        <Route path="/contact-us" exact>
          <Contacts />
        </Route>
        <Route path="/service" exact>
          <Service />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <Primary />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
