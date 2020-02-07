import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Dietster</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/logged-in-home">Get started</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default NavBar;
