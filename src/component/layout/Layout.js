import React, { Component } from 'react';
import { Button, Row, Col, Form, Card, Container, Nav } from 'react-bootstrap'
import {Redirect, Route, Switch, Link} from 'react-router-dom'
import routes from '../../routes';
import TopBar from './TopBar';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: null
        }
    }

    componentDidMount = async () => {
        this.setState({...this.state, 
            token: localStorage.getItem("token")
        });
    }

    render () {
        let token = localStorage.getItem('token');
        return (
            <div className="App">
                <div className="app-body">
                    <main className="main">
                        { this.state.token ? <TopBar changeSelectedItemType={this.changeSelectedItemType} /> : null}
                        <Container fluid className="p-0">
                            <Switch>
                                {
                                    routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={
                                                    props => (
                                                        <route.component {...props} />
                                                    )
                                                }
                                            />
                                        ) : (null);

                                    })
                                }
                            </Switch>
                        </Container>
                    </main>
                </div>
            </div>
        )
    };
};

export default Layout;
