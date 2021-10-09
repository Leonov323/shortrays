import { WaiterListStyled } from './WaiterListStyled'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'


function WaiterList() {

  const match = useRouteMatch()

  // const waiter = <Link to={`${match.url}/waiter`} className="w-50 d-flex justify-content-center"><Button className="btn-dark w-100 mt-3 m-2">Mario</Button></Link>

  return (

    <WaiterListStyled>
      {/* {waiter} */}
    </WaiterListStyled>

  )
}

export default WaiterList

