import React from 'react';
import AdminHeader from '../admin-header';
import CreateNewLocation from '../admin-right-panel/create-new-location';
import LocationPage from '../admin-right-panel/create-new-location/location-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLeftNav from '../admin-left-nav/index.jsx';
import TablePage from '../admin-right-panel/table-page';
import TableDescription from '../admin-right-panel/table-page/table-description';

export default function AdminHome() {
  return (
    <Router>
      <div className="footer-to-bot container-fluid">
        <AdminHeader />
        <div className="row">
          <AdminLeftNav />
          <div className="col bg-white border vh-85 p-0">
            <Switch>
              <Route path="/name-of-location">
                <LocationPage />
              </Route>
              <Route path="/table-page">
                <TablePage />
              </Route>
              <Route path="/table-description">
                <TableDescription />
              </Route>
              <Route path="/">
                <CreateNewLocation />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
