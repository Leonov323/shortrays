import logo from './img/logo.png';
import './App.css';
import Home from './components/home';
import Services from './components/services';
import Contacts from './components/contacts';
import Login from './components/login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">
            <img className="logo" src={logo} alt="logo" />
            <h2>
              short<span>rays</span>
            </h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/services">SERVICES</Link>
              </li>
              <li>
                <Link to="/contacts">CONTACTS</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            </ul>
          </nav>
        </header>
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
