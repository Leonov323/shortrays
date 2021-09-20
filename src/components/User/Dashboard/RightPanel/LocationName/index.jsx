import { Styled } from './Location.styled';
import { Col, Button, Form } from 'react-bootstrap';
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
  return (
    <Styled>
      <Col className="border h-50 d-flex flex-column align-items-center justify-content-center">
        <h3>HELLO THIS IS LOCATIONNAME PAGE</h3>
      </Col>
      <Col className="d-flex align-items-center h-50">
        <Form className="d-flex justify-content-around w-100" noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="CreateNewTable">
            <h3>Create new table</h3>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required placeholder="Ex. Ristorante da Mario" />
            <Button>Create</Button>
          </Form.Group>
          <Form.Group controlId="CreateNewTable">
            <h3>Create new waiter</h3>
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
