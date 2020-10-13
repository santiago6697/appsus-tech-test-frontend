import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css';
import { BrowserRouter } from 'react-router-dom'

const Layout = React.lazy(() => import('./component/layout/Layout'))

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedItemType: "songs",
            token: null
        }
    }

    componentDidMount = async () => {
        this.setState({...this.state,
            token: await localStorage.getItem('token')
        });
    }

    changeSelectedItemType = (selectedItemType) => {
        if (selectedItemType != this.state.selectedItemType) {
            this.setState({...this.state,
                selectedItemType: selectedItemType
            });
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render () {
        let routes = (
            <Container fluid className="p-0">
                <Switch>
                    <Route path='/' name="Music" render={props => <Layout {...props} />} />
                </Switch>
            </Container>
        )

        return (
            <div>
                <React.Suspense fallback={this.loading()}>
                    <BrowserRouter>
                        {
                          localStorage.getItem('token') ? <Redirect to='/home'/> : <Redirect to='/' />
                        }
                        {routes}
                    </BrowserRouter>
                </React.Suspense>



            </div>
        );
    }
}

export default App;
