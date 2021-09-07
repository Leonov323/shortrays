import React from 'react';
import AdminHeader from '../admin-header';
import CreateNewLocation from '../create-new-location';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function AdminHome() {
  return (
    <Router>
      <div className="footer-to-bot m-0 bg-dark">
        <AdminHeader />
        <div className="row">
          <div className="col-3 bg-light footer-to-bot-2 p-0">
            <div className="btn-group dropend w-100">
              <button type="button" className="btn btn-outline-dark w-75">
                Location
              </button>
              <button
                type="button"
                className="btn btn-dark dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropright</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    + Create new location
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col bg-white border footer-to-bot-2 p-0">
            <Switch>
              <Route path="/create-new-location">
                <CreateNewLocation />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
