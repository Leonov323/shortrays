import { Navbar, Image, Container, Nav } from 'react-bootstrap';
import Logo from '../../../img/logo3.png';
import { NavLink } from 'react-router-dom';
import { Styled } from './HeaderUser.styled'
import Headburger from './Headburger'


const active = { background: 'black', color: 'white' }
function HeaderUser() {
    return (
        <Styled primary>
            <Headburger />
            <Navbar bg="light" variant="light" className="desctop">
                <Container fluid>
                    <NavLink className="d-flex" to="/user/dashboard">
                        <Image height="50" src={Logo} alt="QR code" />
                        {' '}<h2 className="d-flex align-items-center">Short<span>rays</span></h2>
                    </NavLink>
                    <Nav justify className="w-100">
                        <Nav.Item>
                            <NavLink exact to="/user/dashboard" activeStyle={active}>Dashboard</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink exact to="/user/profile" activeStyle={active}>Profile</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink exact to="/user/contact-us" activeStyle={active}>Need help</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink exact to="/" activeStyle={active}>Sign Out</NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </Styled>
    );
}

export default HeaderUser;