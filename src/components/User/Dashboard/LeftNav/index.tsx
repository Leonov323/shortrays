import { LeftNavStyled } from './LeftNavStyled'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import { GetLocations } from '../../../../common/services/rest/getLocations'


const LeftNav = () => {

  const match = useRouteMatch()

  return (
    <LeftNavStyled id="left-nav">

      <Link to={`${match.url}`}>
        <Button className="btn-dark  w-100 mt-3">Locations</Button>
      </Link>

      <GetLocations />

    </LeftNavStyled>
  )
}

export default LeftNav