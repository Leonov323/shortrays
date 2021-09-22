import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';
import { Styled } from './SignIn.styled';
import React, { useState } from 'react';
import Button from '../../../UI/Button';
import axios from 'axios';

const API_ENDPOINT = 'https://api-shortrays-dev.herokuapp.com/';
function SignIn() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_ENDPOINT}sign-in`, {
        email,
        password,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Styled>
      <Row>
        <Col lg={4} className="mx-auto">
          <section className="text-center mb-4">
            <h2 className="display-4">
              <strong>Sign in</strong>
            </h2>
            <p className="lead">Welcome!</p>
          </section>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FloatingLabel>
            <Button onSubmit={onSubmit} text="Sign in" />
          </Form>
        </Col>
      </Row>
    </Styled>
  );
}

export default SignIn;
