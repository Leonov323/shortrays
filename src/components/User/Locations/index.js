import { Styled, OpenLeftPanel, LeftPanel } from './Location.styled'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function Locations() {
    const [isOpen, setOpen] = useState(false);
    isOpen ? console.log('OPEN') : console.log('CLOSE');
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document);
    const headerRedirect = (route) => () => {
        setOpen(false);
    };
    return (
        <Styled>
            <Container fluid>
                <Row className="min-100-71">
                    <OpenLeftPanel isOpen={isOpen}>
                        <Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} />
                    </OpenLeftPanel>

                    <Col md={3} className="left-panel">
                        <Row>
                            <LeftPanel isOpen={isOpen}>
                                <NavLink to="/user" className="w-100 btn btn-dark mb-2">Locations</NavLink>
                                <Col className="max-50">
                                    <NavLink to="/user" className="w-100 btn btn-secondary mb-1">Your location 1</NavLink>
                                    <Col>
                                        <NavLink to="/user" className="w-75  h-100 btn btn-secondary mb-1">Tables</NavLink>
                                        <Col>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table1</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table2</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table3</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table4</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table5</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table6</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table7</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table8</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table9</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table10</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table11</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table12</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table13</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table14</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table10</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table11</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table12</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table13</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table14</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table10</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table11</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table12</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table13</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Table14</NavLink>
                                        </Col>
                                    </Col>
                                    <Col>
                                        <NavLink to="/user" className="w-75 btn btn-secondary mb-1">Waiters</NavLink>
                                        <Col>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Mario</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Francesco</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Giacomo</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Valentino</NavLink>
                                            <NavLink to="/user" className="w-50 btn btn-dark mb-1">Ovsaldo</NavLink>
                                        </Col>
                                    </Col>

                                </Col>
                            </LeftPanel>
                        </Row>

                    </Col>

                    <Col md={9} className="right-panel border p-0">
                        <Col className="border w-100">Col1</Col>
                        <Col className="border w-100">Col2</Col>
                    </Col>
                </Row>
            </Container>
        </Styled >
    );
}

export default Locations;