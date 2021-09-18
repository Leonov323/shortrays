import { Styled } from './Location.styled'
import { Col, Button, Form, Container } from 'react-bootstrap'
import React, { useState } from 'react';

function Locations() {
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
                <h3>HELLO THIS IS WAITER PAGE</h3>
            </Col>
            <Col className={positionAndBorder}>
               <h3>Assign table</h3>
            </Col>
        </Styled>
    );
}
export default Locations;