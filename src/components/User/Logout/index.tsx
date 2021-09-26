import React, { FC } from 'react'
import { useHistory } from 'react-router'

const Logout: FC = () => {
    const history = useHistory()
    const current_url = location.pathname
    const autoLogout = () => {
        if (current_url == '/shortrays/#/user/logout') {
            localStorage.removeItem('token')
            history.push('https://leonov323.github.io/shortrays/')
            window.location.reload()
        }
    }
    autoLogout()
    return (
        <div>
            <p>Sorry, auto redirect does not work :(</p>
            <a href="https://leonov323.github.io/shortrays/">
                <button>Go to home</button>
            </a>

        </div>
    )
}

export default Logout
