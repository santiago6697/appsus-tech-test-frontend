import React, { Component } from 'react';
import { Col, Form, Button, InputGroup, Card, CardGroup } from 'react-bootstrap';
import { Formik } from 'formik';

class FormSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            song: {
                title: "",
                rating: null,
                length: "",
                genre: "",
                imageURL: "",
                albumId: ""
            }
        };
    }

    // TODO verify will mount status change
    componentDidMount() {
        let formData = this.props.formData;
        if (formData) {
            let song = this.state.song;
            song.title = formData.title;
            song.rating = formData.rating;
            song.length = formData.length;
            song.genre = formData.genre;
            song.imageURL = formData.imageURL;
            song.albumId = formData.albumId;
            this.setState({ ...this.state, song: song })
        }
        
        if (this.state.albums.length == 0) {
            // TODO: Populate with albums
        }
    }

    render() {
        return (
            <Formik
                initialValues={{
                    title: this.state.song.title, rating: this.state.song.rating,
                    length: this.state.song.length, genre: this.state.song.genre, imageURL: this.state.song.imageURL
                }}
                onSubmit={(values) => {
                    this.props.submitData(values)
                }}
            >
                {({
                    values,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                        <form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormikTitle">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">Title</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="The Less I Know The Better"
                                            aria-describedby="inputGroupPrepend"
                                            name="title"
                                            value={values.title}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        // isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {/* erors.username*/}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormikRating">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">Rating</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="integer"
                                            placeholder="5"
                                            aria-describedby="inputGroupPrepend"
                                            name="rating"
                                            value={values.rating}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        // isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {/* erors.username*/}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormikLength">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">Length</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="04:10"
                                            aria-describedby="inputGroupPrepend"
                                            name="length"
                                            value={values.length}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        // isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {/* erors.username*/}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormikGenre">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">Genre</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Indie rock"
                                            aria-describedby="inputGroupPrepend"
                                            name="genre"
                                            value={values.genre}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        // isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {/* erors.username*/}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormikImageURL">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">Album</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            as="select"
                                            id="inlineFormCustomSelect"
                                            custom
                                        >
                                            <option value="0">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {/* erors.username*/}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="justify-content-center">
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Row>
                        </form>
                    )}
            </Formik>
        )
    }
};

export default FormSong;
