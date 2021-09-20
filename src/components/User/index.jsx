import HeaderUser from './HeaderUser';
import LeftNav from './Dashboard/LeftNav';
import { Locations, LocationName, Tables, TableName, Waiters, WaiterName } from './Dashboard/RightPanel';
import Footer from '../UI/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const Styled = styled.div`
  min-height: calc(100vh - 71px);
`;

export function User() {
  return (
    <Styled>
      <HeaderUser />
      <Router>
        <Container fluid>
          <Row>
            <Col md={3} className="p-0 m-0">
              <LeftNav />
            </Col>
            <Col md={9} className="p-0 m-0">
              <Switch>
                <Route exact path="/user/dashboard">
                  <Locations />
                </Route>
                <Route path="/user/dashboard/location-name">
                  <LocationName />
                </Route>
                <Route path="/user/dashboard/tables">
                  <Tables />
                </Route>
                <Route path="/user/dashboard/table">
                  <TableName />
                </Route>
                <Route path="/user/dashboard/waiters">
                  <Waiters />
                </Route>
                <Route path="/user/dashboard/waiter">
                  <WaiterName />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
      <Footer />
    </Styled>
  );
}
