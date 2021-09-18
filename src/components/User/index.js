import LeftNav from './Dashboard/LeftNav';
import LocationName from "./Dashboard/RightPanel/LocationName";
import Locations from './Dashboard/RightPanel/Locations'
import Footer from '../Home/Footer';
import { HeaderUser } from './';
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import styled from "styled-components"
export { default as HeaderUser } from './HeaderUser';

const Styled = styled.div` 
     min-height: calc(100vh - 71px);
`


function User() {
    return (
        <>
            <HeaderUser />
            <Router>
                <Styled>
                    <Container fluid>
                        <Row>
                            <Col md={3} className="p-0 m-0">
                                <LeftNav />
                            </Col>
                            <Col md={9} className="p-0 m-0">
                                <Switch>
                                    <Route path="/user/location-name">
                                        <LocationName />
                                    </Route>
                                    <Route path="/user/locations">
                                        <Locations />
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </Styled>
            </Router>
            <Footer />
        </>
    );
}

export default User;