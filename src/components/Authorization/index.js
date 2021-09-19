import React, { useState } from 'react'
import { AuthorizationWrapper } from './wrapper'
import { AuthorizationInput } from './input'
import { AuthorizationSubmit } from './button'
import axios from 'axios'

const API_ENDPOINT = 'https://api-shortrays-dev.herokuapp.com/'

export function Authorization () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    axios.post(`${API_ENDPOINT}sign-up`, {
      email,
      password
    }).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
        <AuthorizationWrapper>
            <AuthorizationInput labelText={'email'} value={email} onChange={setEmail} />
            <AuthorizationInput labelText={'password'} value={password} onChange={setPassword} />
            <AuthorizationSubmit onSubmit={onSubmit} text={'submit'} />
        </AuthorizationWrapper>
  )
}
