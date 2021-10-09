import React, { FC } from 'react'
import { HeaderStyled } from './styled'
import Logo from './Logo'
import Nav from './Nav'
import { HeaderProps } from './types'


export const Header: FC<HeaderProps> = ({ logoLink, nav }) => {
 
  return (

    <HeaderStyled>
 
        <Logo {...logoLink}/>
        
        <Nav {...nav}  />    

    </HeaderStyled>

  )
  
}


