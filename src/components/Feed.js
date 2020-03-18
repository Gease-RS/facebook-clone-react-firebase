import React from 'react'
import { Container, Row, Col } from 'react-materialize'
import Profile from './Profile'
import AddPost from './AddPost'
import SinglePost from './SinglePost'
import PostList from './PostList'

export default () => {
    return (
        <Container>
            <Row>
                <Col className="teal" s={12} m={4}>
                    <Profile />
                </Col>
                <Col className="red" s={12} m={8}>
                    <AddPost />
                    <SinglePost />
                    <PostList />
                </Col>
            </Row>
        </Container>
    )
}