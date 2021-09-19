import { Image } from 'react-bootstrap'
import { Styled } from './Background.styled'
import Arm from '../../../../../img/arm-min3.png'
import React from 'react'

function Primary () {
  return (
        <Styled>
            <Image src={Arm} width="100%" />
        </Styled>
  )
}

export default Primary
