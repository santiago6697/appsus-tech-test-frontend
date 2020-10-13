import React, { Component, useContext } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import record from "../../assets/images/record.png";
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
                <Row className="justify-content-center">
                    <Col lg="3" md="6">
                        <Card className="bg-dark text-white item-card">
                            <div className="card-image">
                                <Card.Img variant="top" src={record} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">New song</Card.Title>
                                <Card.Text>
                                    <Form submitData={this.submitData} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

};

export default NewSong;
