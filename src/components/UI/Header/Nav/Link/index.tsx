import React, { FC } from 'react'
import { LinkStyled } from './styled'
import { NavLink } from 'react-router-dom'
import { LinkProps } from './types'

const Link: FC<LinkProps> = (props) => {

  return (
    <LinkStyled >
      <NavLink
        onClick={props.onClick}
        exact={props.exact}
        to={props.link}
        activeStyle={{ background: 'black', color: 'white' }}
      >
        {props.text}
      </NavLink>
    </LinkStyled>
  )
}

export default Link
