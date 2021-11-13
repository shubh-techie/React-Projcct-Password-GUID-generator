import * as React from "react";
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem, } from 'react-bootstrap';

interface IHeaderProps {

}
interface IHeaderState {

}
export default class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        return (
            <header>
                {/* <h1>Password Generation</h1> */}
                {/* <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true}>Guid Generator</NavLink>
                    <NavLink to="/passwordgenerator" className="nav-link" activeClassName="is-active">Password Generator</NavLink>
                    <NavLink to="/feedback" onclik className="nav-link" activeClassName="is-active">Provide Feedback</NavLink>
                </Nav> */}

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/"><img src="images/PassWordLogo.jpg" height="50px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Guid Generator</Nav.Link>
                            <Nav.Link as={Link} to="/passwordgenerator" >Password Generator</Nav.Link>
                            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
                            {/* <NavDropdown title="Password Generator" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/feedback">Help</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}
