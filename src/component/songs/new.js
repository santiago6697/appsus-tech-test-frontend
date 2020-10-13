import React, { Component, useContext } from 'react';
import { Container, Row, Col, Button, InputGroup, Card, CardGroup } from 'react-bootstrap';
import Form from './Form';

class NewSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {
                title: "",
                rating: 0,
                length: "",
                genre: "",
                imageURL: ""
            }
        };
    }

    componentDidMount() {
    }

    submitData = (formPayload) => {
        console.log('parent receiving data', formPayload);
    }

    render() {
        return (
            <Container fluid className="py-3" >
                <Row>
                    <Col>
                        <h2>Tu nueva canción</h2>
                        <Form submitData={this.submitData}/>
                    </Col>
                </Row>
            </Container>
        )
    }

};

export default NewSong;
