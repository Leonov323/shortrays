import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { RightPanel } from './RightPanel'
import LeftNav from './LeftNav'


export const Dashboard = () => {

  return (
    <Container fluid className="h-100 w-100">
      <Row className="h-100 w-100">
        <Col md={3} className="p-0 m-0 border">

          <LeftNav />

        </Col>
        <Col md={9} className="p-0 m-0">

          <RightPanel />

        </Col>
      </Row>
    </Container>
  )

}


