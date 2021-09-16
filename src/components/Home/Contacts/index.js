import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { Styled } from './Contacts.styled';
import React, { useState } from 'react';


function Contacts() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Styled>
            <Container className="hidde-on-primary p-5">
                <Row>
                    <Col md={6} className="mx-auto pb-3">
                        <section className="text-center mb-4">
                            <h2 className="display-4"><strong>CONTACT US</strong></h2>
                            <p className="lead">We`d love to hear from you!</p>
                        </section>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="example@example.com" required />
                            </Form.Group>
                            <Form.Group controlId="formGroupSubject">
                                <Form.Label className="mt-3">Subject</Form.Label>
                                <Form.Control type="text" required />
                                <Form.Label className="mt-1">Message</Form.Label>
                                <Form.Control as="textarea" rows={4} required />
                            </Form.Group>
                            <Button type="submit" variant="dark" className="mt-3">Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Styled>
    );
}

export default Contacts;