import React from 'react'
import { Container, Row, Col } from 'react-materialize'

export default () => {
    return (
        <Container>
            <Row>
                <Col className="teal" s={12} m={3}>
                    Profile
                </Col>
                <Col className="red" s={12} m={3}>
                    Feed
                </Col>
            </Row>
        </Container>
    )
}