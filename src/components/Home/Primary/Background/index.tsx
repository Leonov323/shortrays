import { Image } from 'react-bootstrap'
import { Styled } from './styled'
import Arm from './arm.png'
import React, { FC } from 'react'

export const Background: FC = () => {
  return (
    <Styled>
      <Image src={Arm} width="100%" />
    </Styled>
  )
}