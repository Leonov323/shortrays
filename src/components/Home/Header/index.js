import { Navbar, Image, Container, Nav } from 'react-bootstrap';
import Logo from '../../../img/logo3.png';
import { NavLink } from 'react-router-dom';
import { Styled } from './Header.styled'
import Headburger from './Headburger'


const active = { background: 'black', color: 'white' }
function Header() {
    return (
        <Styled primary>
            <Headburger/>
            <Navbar bg="light" variant="light" className="desctop">
                <Container fluid>
                            <NavLink className="d-flex" to="./">
                                <Image height="50" src={Logo} alt="QR code" />
                                {' '}<h2 className="d-flex align-items-center">Short<span>rays</span></h2>
                            </NavLink>
                            <Nav justify className="w-100">
                                <Nav.Item>
                                    <NavLink to="./" activeStyle={active}>Home</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/service" activeStyle={active}>Service</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/contact-us" activeStyle={active}>Contacts</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/sign-in" activeStyle={active}>Sign In</NavLink>
                                </Nav.Item>
                            </Nav>
                </Container>
            </Navbar>
        </Styled>
    );
}

export default Header;