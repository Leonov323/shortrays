import React from 'react';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ text }) {
  return (
    <ButtonStyled type="submit" className="btn-dark mt-3 mb-3">
      {text}
    </ButtonStyled>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
