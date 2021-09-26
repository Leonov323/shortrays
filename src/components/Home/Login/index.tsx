import React from 'react';
import { LoginStyled } from './styled'
import Form from './form'



const Login: React.FC = () => {

  return (
    <LoginStyled>
      <section className="w-100 text-center mb-5">
      <h2 className="fs-1 text-center">Welcome!</h2>
      <small className="text-center">(Just click the enter button to redirect on user page)</small>
      </section>
      <Form />
    </LoginStyled>
  )
}

export default Login
