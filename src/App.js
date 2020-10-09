import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './component/Home'
import { Container, Spinner } from 'react-bootstrap'
import './App.css';
import { firebaseAuth } from './provider/AuthProvider'
import Auth from './component/auth/Auth'
import TopBar from './component/layout/TopBar'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedItemType: "songs"
        }
    }

    changeSelectedItemType = (selectedItemType) => {
        if (selectedItemType != this.state.selectedItemType) {
            this.setState({...this.state,
                selectedItemType: selectedItemType
            });
        }
    }

    render () {
        let token = localStorage.getItem('token');

        return (
            <Container fluid className="p-0">
                { token !== null ? <TopBar changeSelectedItemType={this.changeSelectedItemType} /> : null}
                <Switch>
                    <Route exact path='/' render={rProps => token === null ? <Auth /> : <Home selectedItemType={this.state.selectedItemType} />} />
                </Switch>
            </Container>
        );
    }
}

export default App;
