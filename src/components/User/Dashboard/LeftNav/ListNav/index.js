import { Styled } from './ListNav.styled'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import React, {useState} from 'react';

function ListNav() {
    const [isOpen, setOpen] = useState(false);
    const headerRedirect = (route) => () => {
        setOpen(false);
    };
    const table = <NavLink onClick={headerRedirect('./user')} to="/user" className="m-1 btn btn-dark ">Table1</NavLink>
    const waiter = <NavLink onClick={headerRedirect('./user')} to="/user" className="btn btn-dark m-1">Mario</NavLink>
    return (
        <Styled>
            <Col>
                <NavLink onClick={headerRedirect('/user/location-name')} to="/user/location-name" className="w-75 btn btn-secondary mb-1">Your location 1</NavLink>
                <Col>
                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-50  h-100 btn btn-secondary mb-1">Tables</NavLink>
                    <Col className="p-2">
                        {table}{table}{table}{table}{table}{table}{table}
                        {table}{table}{table}{table}{table}{table}{table}
                        {table}{table}{table}{table}{table}{table}{table}
                        {table}{table}{table}{table}{table}{table}{table}
                        {table}{table}{table}{table}{table}{table}{table}
                        {table}{table}{table}{table}{table}{table}{table}
                        {table}{table}{table}{table}{table}{table}{table}
                        {table}{table}{table}{table}{table}{table}{table}
                    </Col>
                </Col>
                <Col>
                    <NavLink onClick={headerRedirect('./user')} to="/user" className="w-50 btn btn-secondary m-1">Waiters</NavLink>
                    <Col className="p-2">
                        {waiter}{waiter}{waiter}{waiter}{waiter}{waiter}
                    </Col>
                </Col>
            </Col>
        </Styled>
    );
}

export default ListNav;