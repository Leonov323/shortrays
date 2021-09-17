import { HeadPanelStyled, HeaderSpace } from "./HeadPanel.styled";
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../../../../img/icon.png';
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Link } from 'react-router-dom';

function Headburger() {
    const [isOpen, setOpen] = useState(false);
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document);
    const headerRedirect = (route) => () => {
        setOpen(false);
    };

    return (
        <Container className="mobile">
            <HeaderSpace />
            <Navbar fixed="top" bg="dark" variant="dark" className="py-0 vw-100">
                <Container fluid className="bg-dark h70">
                    <Link className="d-flex" onClick={headerRedirect('/home')} to="/home">
                        <img src={Logo} height="40" alt="burger" className="p-2" />
                        {' '}
                        <h2>SHORT<span>RAYS</span></h2>
                    </Link>
                    <Nav.Item>
                        <Hamburger label="Show menu" color="#F0FFFF" toggled={isOpen} toggle={setOpen} hideOutline={false} />
                    </Nav.Item>
                </Container>
                <HeadPanelStyled isOpen={isOpen}>
                    <Container className="col">
                        <Link onClick={headerRedirect('/home/sign-in')} className="btn btn-success mb-5 mt-5" to="/home/sign-in"><h3>Sign in</h3></Link>
                        <Link onClick={headerRedirect('/home/sign-up')} className="btn btn-primary mb-5" to="/home/sign-up"><h3>Sign up</h3></Link>
                        <Link onClick={headerRedirect('/home/contact-us')} className="btn btn-info mb-5" to="/home/contact-us"><h3>Contacts</h3></Link>
                        <Link onClick={headerRedirect('/home/service')} className="btn btn-warning" to="/home/blog"><h3>Service</h3></Link>
                    </Container>
                </HeadPanelStyled>
            </Navbar>
        </Container>
    );
}

export default Headburger;