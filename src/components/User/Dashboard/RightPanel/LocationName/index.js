import { Styled } from './Location.styled'
import { Col, Button, Form, Container } from 'react-bootstrap'
import React, { useState } from 'react';

function LocationName() {
    // validation
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    const positionAndBorder = "border h-50 d-flex flex-column align-items-center justify-content-center"
    return (
        <Styled>
            <Col className={positionAndBorder}>
                <h3>HELLO THIS IS LOCATIONNAME PAGE</h3>
            </Col>
            <Col className={positionAndBorder}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3>Create new location</h3>
                    <Form.Group controlId="CreateNewTable">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required placeholder="Ex. Ristorante da Mario" />
                        <Button>Create</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Styled>
    );
}
export default LocationName;