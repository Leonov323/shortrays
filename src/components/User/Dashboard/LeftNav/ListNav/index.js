import { Styled } from './ListNav.styled'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import React from 'react'

function ListNav () {
  const table = <NavLink to="/user/dashboard/table" className="m-1 btn btn-dark ">Table</NavLink>
  const waiter = <NavLink to="/user/dashboard/waiter" className="btn btn-dark m-1">Mario</NavLink>
  return (
        <Styled>
            <Col>
                <NavLink
                    to="/user/dashboard/location-name"
                    className="w-75 btn btn-secondary mb-1">
                    Your location 1
                </NavLink>
                <Col>
                    <NavLink
                        to="/user/dashboard/tables" className="w-50 btn btn-secondary mb-1">
                        Tables
                    </NavLink>
                    <Col className="p-2">
                        {table}{table}
                        {table}{table}
                        {table}{table}
                    </Col>
                </Col>
                <Col>
                    <NavLink
                        to="/user/dashboard/waiters"
                        className="w-50 btn btn-secondary m-1">
                        Waiters
                    </NavLink>
                    <Col className="p-2">
                        {waiter}
                    </Col>
                </Col>
            </Col>
        </Styled>
  )
}

export default ListNav
