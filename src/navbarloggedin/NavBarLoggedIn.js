import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export class NavBarLoggedIn extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Dietster</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="./home">Home</Nav.Link>
                                <Nav.Link href="/my-diet">My Plans</Nav.Link>
                                <Nav.Link href="/logged-in-home">Food Plans</Nav.Link>
                            </Nav>
                            <Nav inline>
                                <Nav.Link inline href="/">Log Out</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default NavBarLoggedIn;
