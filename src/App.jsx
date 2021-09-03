import logo from './img/logo.png';
import './App.css';
import Home from './components/home';
import Services from './components/services';
import AboutUs from './components/about-us';
import Contacts from './components/contacts';
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
                <Link to="/components/services">SERVICES</Link>
              </li>
              <li>
                <Link to="/components/about-us">ABOUT-US</Link>
              </li>
              <li>
                <Link to="/components/contacts">CONTACTS</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/components/services">
              <Services />
            </Route>
            <Route path="/components/about-us">
              <AboutUs />
            </Route>
            <Route path="/components/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>
          <h4>
            <a href="#">info@shortrays.com</a>
          </h4>
        </footer>
      </div>
    </Router>
  );
}

export default App;
