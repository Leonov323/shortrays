import { Container, Row, Col, Image, } from 'react-bootstrap';
import { Styled, Background } from './Primary.styled';
import Arm from '../../../img/arm-min3.png';
import OrderButton from './Button';
import { Link } from 'react-router-dom';
import React from 'react';
import Contacts from '../Contacts'

function Primary() {
    const [setModalShow] = React.useState(false);
    return (
        <Styled>
            <Container>
                <Col className="d-flex flex-column">
                    <Row className="min-100-71">
                        <Col xl={6} className="p-0 d-flex flex-column align-items-center justify-content-center">
                            <section className="text-center">
                                <h1>The way to better your service</h1>
                                <p>Just scan QR code to call a waiter, no more angry waiting clients.</p>
                            </section>
                            <OrderButton onClick={() => setModalShow(true)} />
                            <span className="link-to-login d-flex mt-3">
                                <p>Already registred?</p>
                                <Link to={`./sign-in`}>Sign in</Link>
                            </span>
                        </Col>
                    </Row>
                    <Row className="hidde-on-primary">
                        <Col xl={6} className="p-0">
                            <Contacts />
                        </Col>
                    </Row>
                </Col>
            </Container>
            <Background><Image src={Arm} width="100%" /></Background>
        </Styled>
    );
}



export default Primary;