import React, { Component } from 'react';
import { Button, Row, Col, Form, Card, Container } from 'react-bootstrap'
import { firebaseAuth } from '../../provider/AuthProvider'
import SignIn from './SignIn'
import SignUp from './SignUp'

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alreadyMet: true
        };
        console.log(this.state)
    }

    handleClick (event) {
        console.log(this.state);
        this.setState({...this.state,
            alreadyMet: !this.state.alreadyMet});
    }

    render () {
        return (
            <Container fluid className="p-5">
                <Row className="justify-content-center">
                    { this.state.alreadyMet ? <SignIn/> : <SignUp/>}                
                </Row>
                <Row>
                    <Col lg="12" className="mt-4 mb-3 text-center">
                        {this.state.alreadyMet ? 
                            <small>New in town?</small>: 
                            <small>Do we know each other?</small>}
                    </Col>
                    <Col lg="12" className="text-center">
                        <Button onClick={(e) => this.handleClick(e)}>
                            {this.state.alreadyMet ? 
                                "Sign up": 
                                "Sign in"}
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Auth;