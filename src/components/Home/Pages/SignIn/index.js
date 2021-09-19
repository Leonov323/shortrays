import { FloatingLabel, Form, Row, Col, Button } from 'react-bootstrap'
import { Styled } from './SignIn.styled'
import React, { useState } from 'react'

function SignIn () {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
        <Styled>
                <Row>
                    <Col lg={4} className="mx-auto">
                        <section className="text-center mb-4">
                            <h2 className="display-4"><strong>Sign in</strong></h2>
                            <p className="lead">Welcome!</p>
                        </section>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"

                        >
                            <Form.Control type="email" placeholder="name@example.com" required/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" required/>
                        </FloatingLabel>
                        <Button type="submit" variant="dark" className="mt-3">Sign in</Button>
                        </Form>
                    </Col>
                </Row>
        </Styled>
  )
}

export default SignIn
