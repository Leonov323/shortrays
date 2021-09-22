import React from 'react';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

function Button(props) {
  const { text, onSubmit } = props;
  return (
    <ButtonStyled type="submit" onClick={onSubmit} className="btn-dark mt-3 mb-3">
      {text}
    </ButtonStyled>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default Button;
