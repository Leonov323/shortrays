import React from 'react'
import { Col } from 'react-bootstrap'
import { OrderButton } from './OrderButton'
import { Link } from 'react-router-dom'
import { Background } from './Background'


export const Primary = () => {

  return (
    <>
      <Col md={6}>
        <section className="text-center">
          <h1>The way to better your service</h1>
          <p>Just scan QR code to call a waiter, no more angry waiting clients.</p>
        </section>

        <OrderButton />

        <span className="d-flex justify-content-center mt-3">
          <p>Already registred?</p>
          <Link to={'/login'}>Login</Link>
        </span>
      </Col>
      <Background />
    </>
  )

}
