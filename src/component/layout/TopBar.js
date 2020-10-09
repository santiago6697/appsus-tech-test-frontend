import React, { useContext } from 'react';
import { Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap'
import { firebaseAuth } from '../../provider/AuthProvider'

const TopBar = (props) => {

    const { handleSignout, } = useContext(firebaseAuth)

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link onClick={e => props.changeSelectedItemType("albums")}>Albums</Nav.Link>
                <Nav.Link onClick={e => props.changeSelectedItemType("songs")}>Songs</Nav.Link>
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