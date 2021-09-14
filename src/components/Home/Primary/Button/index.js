import { Styled } from './Button.styled';
import React, {useState} from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';
import Logo from '../../../../img/logo3.png';

function OrderButton() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Styled>
                <button className="order-button" onClick={() => setModalShow(true)}>
                    <span className="textButtonNormal">Register now</span>
                    <span className="textButtonHover">You are awesome!</span>
                </button>
            </Styled>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

function MyVerticallyCenteredModal(props) {
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
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill in the form!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="p-3" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="*******" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupRepeatPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control type="password" placeholder="*******" required/>
                        </Form.Group>
                        <Button type="submit" variant="dark">Cilck me!</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <small>SHORTRAYS - QR call waiter system</small>
                <Image src={Logo} width="35px" />           
                </Modal.Footer>     
        </Modal>
    );
}

export default OrderButton;