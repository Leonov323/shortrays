import { Styled } from './Location.styled';
import { Col } from 'react-bootstrap';
import React from 'react';

function Locations() {
  const positionAndBorder = 'border h-50 d-flex flex-column align-items-center justify-content-center';
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
