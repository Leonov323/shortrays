import React, { FC } from 'react'
import { ButtonStyled } from './styled'


type ButtonProps = {
    text: string
    onSubmit?: unknown
}


export const Button: FC<ButtonProps> = (props) => {
  const { text, onSubmit } = props

  return (
    <ButtonStyled onClick={onSubmit} className="btn-dark mt-3 mb-3"> 
      {text}
    </ButtonStyled>
  )
}

