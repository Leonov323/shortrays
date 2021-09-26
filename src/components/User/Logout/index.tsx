import React, { FC } from 'react'
import { useHistory } from 'react-router'

const Logout: FC = () => {
    const history = useHistory()
    const current_url = location.pathname
    const autoLogout = () => {
        if (current_url == '/user/logout') {
            localStorage.removeItem('token')
            history.push('/')
            window.location.reload()
        }
    }
    autoLogout()
    return (
        <div>
            <button onClick={autoLogout}>LOGOUT</button>
        </div>
    )
}

export default Logout
