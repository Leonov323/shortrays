import Header from './components/main/header';
import './App.css';
import Home from './components/main/home';
import Services from './components/main/services';
import Contacts from './components/main/contacts';
import Login from './components/main/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>
          <h6>info@shortrays.com</h6>
        </footer>
      </div>
    </Router>
  );
}

export default App;
