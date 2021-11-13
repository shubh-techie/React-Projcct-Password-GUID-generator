import * as React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import { HashRouter } from 'react-router-dom'
import GuidGenerator from '../GuidGenerator/GuidGenerator';
import PasswordGenerator from '../PasswordGenerator/PasswordGenerator';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Review from '../Reveiw/Review';
import Feedback from '../Feedback/Feedback';


interface IRouterProps {

}
interface IRouterState {

}



export default class Router extends React.Component<IRouterProps, IRouterState> {
    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Container>
                        <Row>
                            <Col>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={8} lg={8}>
                                <Switch>
                                    <Route path="/" component={GuidGenerator} exact={true} />
                                    <Route path="/passwordgenerator" component={PasswordGenerator} />
                                    <Route path="/feedback" component={Feedback} />
                                    <Route path="*" component={NotFoundPage} />
                                </Switch>
                            </Col>
                            <Col xs={12} sm={4} lg={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true}>Guid Generator</NavLink>
                                            <NavLink to="/passwordgenerator" className="nav-link" activeClassName="is-active">Password Generator</NavLink>
                                            <NavLink to="/feedback" className="nav-link" activeClassName="is-active">Provide Feedback</NavLink>
                                        </Card.Text>
                                        <Review></Review>
                                    </Card.Body>
                                </Card>
                                {/* <Card horizontal tokens={cardTokens}>
                                    <Card.Item>
                                        <Review></Review>
                                    </Card.Item>
                                </Card> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}

interface IGenPasspros {

}
export const GeneratePasscode: React.SFC<IGenPasspros> = (props) => {
    return (
        <div>
            {props}
            <textarea placeholder="enter your name" ></textarea>
        </div>
    )
}

export const CardDeckSample: React.FC<IGenPasspros> = (props) => {
    return (
        <div>
            {props}
            <textarea placeholder="enter your name" ></textarea>

        </div>
    )
}

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

