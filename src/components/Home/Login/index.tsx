import React from 'react';
import { LoginStyled } from './styled'
import Form from './form'



const Login: React.FC = () => {

  return (
    <LoginStyled>
      <h2 className="text-center mb-5 fs-1">Welcome!</h2>
      <Form />
    </LoginStyled>
  )
}

export default Login
