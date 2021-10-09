import React from 'react'
import { LoginStyled } from './styled'
import { Form } from './form'
import { checkAuthLogin } from '../../../common/services/common/checkAuth'


export const Login = () => {

  checkAuthLogin()
  
  return (

    <LoginStyled>

      <h2 className="text-center mb-5 fs-1">Welcome!</h2>

      <Form />

    </LoginStyled>
    
  )

}

