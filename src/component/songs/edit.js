import React, { Component, useContext } from 'react';
import { Container, Row, Col, Button, InputGroup, Card, CardGroup } from 'react-bootstrap';
import Form from './Form';

class EditSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {
                title: "holis",
                rating: 5,
                length: "infinito",
                genre: "rock",
                imageURL: ""
            }
        };
    }

    componentDidMount() {
    }

    submitData = (formPayload) => {
        console.log('parent receiving data for edit', formPayload);
    }

    render() {
        return (
            <Container fluid className="py-3" >
                <Row>
                    <Col>
                        <p>edit song</p>
                        <Form submitData={this.submitData} formData={this.state.song}/>
                    </Col>
                </Row>
            </Container>
        )
    }

};

export default EditSong;
