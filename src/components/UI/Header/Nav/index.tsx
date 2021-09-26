import React, { FC, useState } from 'react'
import { NavStyled } from './styled'
import Link from './Link'
import { NavProps } from './types'
import { Sling as Hamburger } from 'hamburger-react'

const Nav: FC<NavProps> = ({ links }) => {
  const [isOpen, setOpen] = useState(false)
  const autoClose = () =>{
    setOpen(false)
  }
  return (
    <>
      <NavStyled isOpen={isOpen} onClick={autoClose}>
        {links.map(({ link, text }, index) => {
          return <Link link={link} text={text} key={index}
          />
        })}
      </NavStyled>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  )
}

export default Nav