import React, { FC } from 'react'
import { ServiceStyled } from './styled'
import { increment, decrement } from '../../../store/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

const Service: FC = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <ServiceStyled>   
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </ServiceStyled>
  )
}


export default Service
