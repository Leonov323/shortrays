import { Styled, OpenLeftPanel, LeftPanel,HideRow } from './Location.styled'
import { Container, Row, Col } from 'react-bootstrap'
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
                    <Col md={3} className="left-panel">
                        <Row>
                            <LeftPanel className="p-0" isOpen={isOpen}>
                                <Row>
                                    <Col xs={10} className="max-100-71 p-4">
                                        <NavLink onClick={headerRedirect('./user')} to="/user" className="w-100 btn btn-dark mb-2">Locations</NavLink>
                                        <Col>
                                            <NavLink onClick={headerRedirect('./user')} to="/user" className="w-100 btn btn-secondary mb-1">Your location 1</NavLink>
                                            <Col>
                                                <NavLink onClick={headerRedirect('./user')} to="/user" className="w-75  h-100 btn btn-secondary mb-1">Tables</NavLink>
                                                <Col>
                                                <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 m-1 btn btn-dark ">Table1</NavLink>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 btn btn-dark m-1">Table2</NavLink>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 btn btn-dark m-1">Table3</NavLink>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 btn btn-dark m-1">Table4</NavLink>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 m-1 btn btn-dark ">Table1</NavLink>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 btn btn-dark m-1">Table2</NavLink>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 btn btn-dark m-1">Table3</NavLink>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 btn btn-dark m-1">Table4</NavLink>
                                                </Col>
                                            </Col>
                                            <Col>
                                                <NavLink onClick={headerRedirect('./user')} to="/user" className="w-75 btn btn-secondary m-1">Waiters</NavLink>
                                                <Col>
                                                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-46 btn btn-dark m-1">Mario</NavLink>
                                                   
                                                </Col>
                                            </Col>
                                        </Col>
                                    </Col>
                                    
                                        <Col xs={2} className="bg-light border hide-row">
                                        
                                            <OpenLeftPanel isOpen={isOpen}>
                                                <Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} />
                                            </OpenLeftPanel>
                                           
                                        </Col>
                                    
                                </Row>
                            </LeftPanel>
                        </Row>

                    </Col>

                    <Col md={9} className="right-panel  p-0">
                        <Col className=" w-100">Col1</Col>
                        <Col className="w-100">Col2</Col>
                    </Col>
                </Row>
            </Container>
        </Styled>
    );
}

export default Locations;