import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Container>
        <Row>
            <Col lg={2}>
                <img width={80} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='프로필이미지'/>
            </Col>
            <Col lg={10}>
                <h4>{item.name}</h4>
                <p>{item.phoneNumber}</p>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactItem