/* eslint-disable */
import { ButtonStyled } from './styled'
import React from 'react'

export const AuthorizationSubmit = (props) => {
  const { text, onSubmit } = props

  return <ButtonStyled onClick={onSubmit}>
        {text}
    </ButtonStyled>
}
