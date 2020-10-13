import React, { Component, useContext } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Card, CardGroup } from 'react-bootstrap';
import { Formik } from 'formik';

class FormSong extends Component {
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

    // TODO verify will mount status change
    componentWillMount() {
        let formData = this.props.formData;
        console.log(formData);
        if (formData){
            let song = this.state.song;
            song.title = formData.title;
            song.rating = formData.rating;
            song.length = formData.length;
            song.genre = formData.genre;
            song.imageURL = formData.imageURL;
            this.setState({...this.state, song: song})
        }
        console.log(this.state.song)
    }

    render() {
        return (
            <Container fluid className="py-3" >
                <Row>
                    <Col>
                        <h1>This is a form</h1>
                        <Formik
                            initialValues={{ title: this.state.song.title, rating: this.state.song.rating,
                                length: this.state.song.length, genre: this.state.song.genre, imageURL: this.state.song.imageURL}}
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
                               <Row>
                                    <Col>
                                       <label>Titulo</label>
                                       <input
                                         type="text"
                                         name="title"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.title}
                                       />
                                    </Col>
                               </Row>
                               <Row>
                                    <Col>
                                       <label>Rating</label>
                                       <input
                                         type="integer"
                                         name="rating"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.rating}
                                       />
                                    </Col>
                               </Row>
                               <Row>
                                    <label>Duración</label>
                                    <Col>
                                       <input
                                         type="text"
                                         name="length"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.length}
                                       />
                                    </Col>
                               </Row>
                               <Row>
                                    <Col>
                                       <label>Genero</label>
                                       <input
                                         type="text"
                                         name="genre"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.genre}
                                       />
                                    </Col>
                               </Row>
                               <Row>
                                    <Col>
                                       <label>Image Url</label>
                                       <input
                                         type="text"
                                         name="imageURL"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.imageURL}
                                       />
                                    </Col>
                               </Row>
                               <button type="submit">
                                 Submit
                               </button>
                             </form>
                           )}
                     </Formik>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default FormSong;
