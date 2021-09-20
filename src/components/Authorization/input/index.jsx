/* eslint-disable */
import { ContainerStyled, LabelStyled, InputStyled } from './styled'
import React from 'react'

export const AuthorizationInput = (props) => {
  AuthorizationInput.propTypes = {

  }
  const { labelText, onChange, value } = props
  const inputChange = (e) => {
    onChange(e.target.value)
  }
  return (
        <ContainerStyled>
            <LabelStyled>{labelText}</LabelStyled>
            <InputStyled onChange={inputChange} value={value} />
        </ContainerStyled>
  )
}
