import React, { useContext } from 'react';
import { firebaseAuth } from '../../provider/AuthProvider'
import { Button, Row, Col, Form, Card, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const SignUp = (props) => {


    const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        //wait to signup 
        await handleSignup()
        //push home
        props.history.push('/')
    }
    const handleChange = e => {
        const { name, value } = e.target
        console.log(inputs)
        setInputs(prev => ({ ...prev, [name]: value }))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Card style={{ width: '30rem' }} className="m-5">
                {/* <Card.Img variant="top" src="https://en.wikipedia.org/wiki/Tame_Impala#/media/File:Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg" /> */}
                <Card.Body>
                    <Card.Title>Sign up</Card.Title>
                    <Container>
                        <Row>
                            <Col lg="12">
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        onChange={(e) => handleChange(e)}
                                        name="email"
                                        placeholder='Enter email'
                                        value={inputs.email} />
                                </Form.Group>
                            </Col>
                            <Col lg="12">
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        onChange={(e) => handleChange(e)}
                                        value={inputs.password} />
                                </Form.Group>
                            </Col>
                            <hr />
                            <Col lg="12" className="text-center">
                                <Button className="btn-block" variant="primary" type="submit">Sign up</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                {/* <Card.Footer className="text-center">
                    {errors.length > 0 ? errors.map(error => <Alert variant="danger">{error}</Alert>) : null}
                </Card.Footer> */}
            </Card>
            <Row>
            </Row>
        </Form>
    );
};

export default withRouter(SignUp);