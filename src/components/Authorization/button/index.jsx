import { ButtonStyled } from './styled'
import React from 'react'
import PropTypes from 'prop-types';

const AuthorizationSubmit = (props) => {
  const { text, onSubmit } = props

  return <ButtonStyled onClick={onSubmit}>
    {text}
  </ButtonStyled>
}

AuthorizationSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthorizationSubmit;