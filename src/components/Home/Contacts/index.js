import { Container, Button, Col, Form } from 'react-bootstrap';
import { Styled } from './Primary.styled'


function Contacts() {
    return (
        <Styled>
            <Container>
                <Col md={6} className="mx-auto">
                    <section className="text-center mb-4">
                        <h2 className="display-4"><strong>CONTACT US</strong></h2>
                        <p className="lead">We`d love to hear from you!</p>
                    </section>
                    <Form>
                        <Form.Group className="mb-3" controlId="Form.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="example@example.com" />
                            <Form.Label className="mt-3">Subject</Form.Label>
                            <Form.Control className="mb-1" type="text" />
                            <Form.Control as="textarea" rows={5} />
                            <Button variant="dark" className="mt-3">Send</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>
        </Styled>
    );
}

export default Contacts;