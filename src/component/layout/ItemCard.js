import React, { Component, useContext } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Card, CardGroup, ListGroup } from 'react-bootstrap';
import './ItemCard.scss'

class ItemCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <Card className="bg-dark text-white item-card">
                <div className="card-image">
                    <Card.Img variant="top" src={this.props.imageURL} />
                </div>
                <Card.Body>
                    <Card.Title className="text-center">{this.props.title}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item className="bg-dark text-white">Rating: {this.props.rating}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Length: {this.props.length}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Genre: {this.props.genre}</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row className="justify-content-around">
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </Row>
                </Card.Footer>
            </Card>
        )
    }

};

export default ItemCard;
