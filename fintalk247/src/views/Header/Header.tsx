import * as React from "react";
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem, Container, } from 'react-bootstrap';

interface IHeaderProps {
}
interface IHeaderState {

}

export default class HeaderNav extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: any, state: any) {
        super(props, state);
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{ fontSize: '1.3em', backgroundColor: "black", minHeight: "70px" }}  >
                <Container>
                    <Navbar.Brand href="/">
                        FinTalk247
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link as={Link} to="/">FinTalk247</Nav.Link> */}
                            <Nav.Link as={Link} to="/Services">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Faq">FAQ</Nav.Link>
                            <Nav.Link as={Link} to="/ContactUs">Contact us</Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        )
    }
}
