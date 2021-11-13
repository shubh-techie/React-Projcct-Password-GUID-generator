import * as React from "react";
import { NavLink, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem, Container, } from 'react-bootstrap';
import { Segment, Icon } from "semantic-ui-react";

interface IPincodeHeaderProps {
    changeStateOnMenuclick: any;
}
interface IPincodeHeaderState {

}
export default class PincodeHeader extends React.Component<IPincodeHeaderProps, IPincodeHeaderState> {
    constructor(props: any, state: any) {
        super(props, state);


        this._onClicklink = this._onClicklink.bind(this);
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    {/* <Navbar.Brand href="/"><img src="assets/inpostal.png" height="40px" /></Navbar.Brand> */}
                    {/* <Navbar.Brand href="/pincode.html" className="logoCSS"><Icon name='map marker alternate' /> Pincode</Navbar.Brand> */}
                    <Navbar.Brand href="/pincode.html"> <img src="assets/PincodewithWorldMaplogo.png" alt="pincode logo" title="pincode, indian pincode - perfect search" height="70px"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="/">FinTalk247</Nav.Link> */}
                            <Nav.Link onClick={this._onClicklink}>Search by state</Nav.Link>
                            <Nav.Link onClick={this._onClicklink}>Search by village</Nav.Link>
                            {/* <Nav.Link as={Link} to="/PinCode/SearchByVillage">Search by Village</Nav.Link> */}
                            {/* <Nav.Link as={Link} to="/PinCode/about">Feedback</Nav.Link>
                                <Nav.Link as={Link} to="/PinCode/dashboard">Disclaimer</Nav.Link> */}

                            {/* <NavDropdown title="Password Generator" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/feedback">Help</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={this._onClicklink}>Feedback</Nav.Link>
                            <Nav.Link onClick={this._onClicklink}>Disclaimer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

    _onClicklink(e) {

        let headerTest = "";
        let displaySearchByPinCode = true;
        let diplaySearchByVillage = false;
        let displayFeedback = false;
        let displayDisclaimer = false;

        switch (e.target.innerText) {
            case "Search by state":
                headerTest = "Search by state";
                displaySearchByPinCode = true;
                diplaySearchByVillage = false;
                displayFeedback = false;
                displayDisclaimer = false;
                break;
            case "Search by village":
                headerTest = "Search by village";
                displaySearchByPinCode = false;
                diplaySearchByVillage = true;
                displayFeedback = false;
                displayDisclaimer = false;
                break;
            case "Feedback":
                headerTest = "Feedback";
                displaySearchByPinCode = false;
                diplaySearchByVillage = false;
                displayFeedback = true;
                displayDisclaimer = false;
                break;
            case "Disclaimer":
                headerTest = "Disclaimer";
                displaySearchByPinCode = false;
                diplaySearchByVillage = false;
                displayFeedback = false;
                displayDisclaimer = true;
                break;
            default:
                break;
        }

        this.props.changeStateOnMenuclick(headerTest, displaySearchByPinCode, diplaySearchByVillage, displayFeedback, displayDisclaimer);
        console.log(e)
        console.log(e.target.innerHTML)
        console.log(e.target.innerText)
    }
}
