import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const SearchBox = () => {


    const [keyword, setKeyword] = useState("");

    const dispatch = useDispatch();

    const searchContact = (e) => {
        e.preventDefault();

        dispatch({type: "SEARCH_CONTACT", payload: {keyword}});
    }

  return (
    <Form onSubmit={(e) => searchContact(e)}>
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e) => setKeyword(e.target.value)}/>
            </Col>
            <Col lg={2}>
                <Button variant="primary" type="submit">검색</Button>
            </Col>
        </Row>
    </Form>
    
  )
}

export default SearchBox