import { Styled } from './Main.styled'
import { Row, Col, Container } from 'react-bootstrap'
import Locations from '../Locations'
import LeftNav from '../LeftNav'

function Main() {
    return (
        <Styled>
            <Container fluid>
                <Row>
                    <Col md={3} className="p-0 m-0">
                        <LeftNav />
                    </Col>
                    <Col md={9} className="p-0 m-0">
                        <Locations />
                    </Col>
                </Row>
            </Container>
        </Styled>
    );
}
export default Main;