import { Container, Row, Col } from 'react-bootstrap';
import { Styled } from './Primary.styled';
import OrderButton from './Button';
import Chevrons from '../../../UI/Chevrons';
import Background from './Background';
import { Link } from 'react-router-dom';
import React from 'react';
import Contacts from '../Contacts';

function Primary() {
  return (
    <Styled>
      <Container>
        <Col>
          <Row className="min">
            <Col xl={6} className="pb-5 d-flex flex-column align-items-center justify-content-center">
              <section className="text-center">
                <h1>The way to better your service</h1>
                <p>Just scan QR code to call a waiter, no more angry waiting clients.</p>
              </section>
              <OrderButton />
              <span className="link-to-login d-flex mt-3">
                <p>Already registred?</p>
                <Link to={'/sign-in'}>Sign in</Link>
              </span>
            </Col>
          </Row>
          <Row className="hidde-on-desktop">
            <Col xl={6}>
              <Contacts />
            </Col>
          </Row>
        </Col>
      </Container>
      <Background />
      <Chevrons />
    </Styled>
  );
}

export default Primary;
