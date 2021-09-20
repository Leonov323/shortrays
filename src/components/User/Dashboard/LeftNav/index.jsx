import { Styled, LeftPanel } from './LeftNav.styled';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import ListNav from './ListNav';

function LeftNav() {
  const [isOpen, setOpen] = useState(false);
  isOpen ? disableBodyScroll(document) : enableBodyScroll(document);
  const headerRedirect = () => () => {
    setOpen(false);
  };
  return (
    <Styled>
      <LeftPanel isOpen={isOpen}>
        <Col xs={10} className="overflow-auto full">
          <NavLink onClick={headerRedirect('/user/dashboard')} to="/user/dashboard" className="w-100 btn btn-dark mb-2">
            Locations
          </NavLink>
          <ListNav />
        </Col>
        <Col xs={2} className="bg-light border hide-row">
          <Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} />
        </Col>
      </LeftPanel>
    </Styled>
  );
}

export default LeftNav;
