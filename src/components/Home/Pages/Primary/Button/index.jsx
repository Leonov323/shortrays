import { Styled } from './Button.styled';
import React from 'react';
import MyVerticallyCenteredModal from './Modal';

function OrderButton() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Styled>
      <button className="order-button" onClick={() => setModalShow(true)}>
        <span className="textButtonNormal">Register now</span>
        <span className="textButtonHover">You are awesome!</span>
      </button>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </Styled>
  );
}

export default OrderButton;
