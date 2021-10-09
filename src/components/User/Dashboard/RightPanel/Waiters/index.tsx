import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { WaitersStyled } from './WaitersStyled'


export const Waiters = () => {

    const [email, setEmail] = useState<string>('')

    const token = localStorage.getItem('token')

    const config = axios.defaults.headers.common = { Authorization: `Bearer ${token}` }

    const placeId = '615b475e563d51fe69f6b945'

    const SendWaiter = (event: SyntheticEvent) => {
        event.preventDefault()
        event.stopPropagation()
        axios
            .post(`https://api-shortrays-dev.herokuapp.com/places/${placeId}/members`, {
                email,
                role: 'employee',
                config
            }).then( res => {
                console.log('Response From Waiters:', res)
            }).catch(console.log)
    }
  
    return (
        <WaitersStyled className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
            Create New Waiter
            <label>Name</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <button onClick={SendWaiter}>create</button>
        </WaitersStyled>
    )
}