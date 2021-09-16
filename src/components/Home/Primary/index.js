import { Container, Row, Col, Image, } from 'react-bootstrap';
import { Styled, Background, Chevrons } from './Primary.styled';
import Arm from '../../../img/arm-min3.png';
import OrderButton from './Button';
import { Link } from 'react-router-dom';
import React from 'react';
import Contacts from '../Contacts'

function Primary() {
    const [setModalShow] = React.useState(false);
    return (
        <>
            <Styled>
                <Container>
                    <Col>
                        <Row className="min-100-71">
                            <Col xl={6} className="pb-5 d-flex flex-column align-items-center justify-content-center">
                                <section className="text-center">
                                    <h1>The way to better your service</h1>
                                    <p>Just scan QR code to call a waiter, no more angry waiting clients.</p>
                                </section>
                                <OrderButton onClick={() => setModalShow(true)} />
                                <span className="link-to-login d-flex mt-3">
                                    <p>Already registred?</p>
                                    <Link to={`/home/sign-in`}>Sign in</Link>
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
                <Chevrons>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Chevrons>
            </Styled>

        </>
    );
}



export default Primary;