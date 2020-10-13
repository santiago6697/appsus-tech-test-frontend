import React, { useContext } from 'react';
import { Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap'
import { firebaseAuth } from '../../provider/AuthProvider'
import {Redirect, Route, Switch, Link} from 'react-router-dom'

const TopBar = (props) => {

    const { handleSignout, } = useContext(firebaseAuth)

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Link to="/albums">Albums</Link>
               <Link to="/home">Songs</Link>
               <Link to="/songs/new">New Song</Link>
               <Link to="/album/new">New Album</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            <Nav className="ml-auto">
                <Nav.Link onClick={handleSignout} href="/">Sign Out</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default TopBar;