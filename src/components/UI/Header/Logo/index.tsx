import React, { FC } from 'react'
import { ImgStyled, LogoStyled } from './styled'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { LogoProps } from './types'


const Logo: FC<LogoProps> = (props) => {

  return (

    <Link to={props.logoLink}>
      <LogoStyled>
        <ImgStyled src={logo} />
        <h1>SHORT<span>RAYS</span></h1>
      </LogoStyled>
    </Link>

  )
}


export default Logo
