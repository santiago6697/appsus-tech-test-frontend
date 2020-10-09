import React, { Component, useContext } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Card, CardGroup } from 'react-bootstrap';
import ItemCard from './layout/ItemCard'
import { firebaseAuth } from '../provider/AuthProvider'
import './Home.scss'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {
                title: "The less I know the better",
                rating: 5,
                length: "4:03",
                genre: "Indie rock",
                imageURL: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png"
            },
            songs: [],
            albums: []
        };
    }
    componentDidMount() {
        switch (this.props.selectedItemType) {
            case "songs":
                let songs = [];
            for (let i = 0; i < 10; i++) {
                songs.push(this.state.song);
            }
            this.setState({...this.state, 
                songs: songs
            });
                break;
            default:

                break;
        }
    }

    componentDidUpdate() {
        switch (this.props.selectedItemType) {
            case "songs":

                break;
            default:

                break;
        }

    }

    render() {
        return (
            <Container fluid className="py-3" >
                <Row>
                    <Col>
                        <div className="card-scroll">
                            {
                                this.state.songs.map(song => {
                                    return (<ItemCard title={song.title} 
                                                imageURL={song.imageURL}
                                                rating={song.rating}
                                                length={song.length}
                                                genre={song.genre}
                                            />);
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

};

export default Home;
