import { history, api } from '../common/importFuncs'
import React from 'react'
import { Spinner } from 'react-bootstrap'


export const RedirectService = () => {

    api.get('/me')
        .then(res => {
            const userId = res.data.id
            history.push(`/user/${userId}/dashboard`)
            location.reload()
        })
        .catch(err => {
            console.log('RedirectService Error:', err)
            history.push('/login')
            location.reload()
        })

    return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center" id="redirect">
            <Spinner animation="border" />
        </div>
    )

}

