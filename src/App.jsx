import './App.css';
import React from 'react';
import Home from './components/main/home';
import Services from './components/main/services';
import Contacts from './components/main/contacts';
import Login from './components/main/login';
import AdminHome from './components/admin/admin-home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/admin">
            <AdminHome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          <h6>info@shortrays.com</h6>
        </footer>
      </div>
    </Router>
  );
}

export default App;
