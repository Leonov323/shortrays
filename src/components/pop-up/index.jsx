import React from 'react';
import './style.css';

export const PopUpWrapper = (prop) => {
  const { closeCallback, display } = prop;

  return (
    <div style={{ display: display ? 'flex' : 'none' }} className={'popUp'}>
      <button className={'closePopUpButton'} onClick={() => closeCallback(false)}>
        X
      </button>
    </div>
  );
};
