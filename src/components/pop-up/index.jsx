import React from 'react';
import './style.css';
import Form from '../order-form';

export const PopUpWrapper = (prop) => {
  const { closeCallback, display } = prop;

  return (
    <div style={{ display: display ? 'flex' : 'none' }} className={'popUp'}>
      <button className={'closePopUpButton'} onClick={() => closeCallback(false)}>
        X
      </button>
      <Form />
    </div>
  );
};
