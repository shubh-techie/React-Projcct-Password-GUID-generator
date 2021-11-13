import * as React from "react";
import { Card, Button, Alert } from 'react-bootstrap';
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

interface IFooterProps {

}
interface IFooterState {

}
export default class Footer extends React.Component<IFooterProps, IFooterState> {
    constructor(props: any, state: any) {
        super(props, state);
    }
    render() {
        return (
            <div>
                {/* <Card className="text-center">
                <Card.Header>Guid and Password Generator</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <Alert variant='light'>
                            Note : Your opinion is a valued asset. Please provide your feedback to improve the application share your ideas about what new products, features, and tools you'd like to see—and where you'd suggest improvements.
                        </Alert>
                        Coopyright&#169;2019 <a href="/">www.guidpassword.com</a>
                    </Card.Text>
                </Card.Body>
                </Card> */}
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a' href="/sitemap.xml">Sitemap</List.Item>
                                        <List.Item as='a' href='/'>About Us</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Feedback</List.Item>
                                        <List.Item as='a' href='/pincode.html'>Search Pincode</List.Item>
                                        <List.Item as='a'>Search IFSC Code</List.Item>
                                        <List.Item as='a'>Loan intereset Calulator</List.Item>
                                        <List.Item as='a'>Compound intereset Calulator</List.Item>
                                        <List.Item as='a'>Disclaimer</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a' href='/'>Web Development</List.Item>
                                        <List.Item as='a' href='/'>Mobile Development </List.Item>
                                        <List.Item as='a' href='/'>Software Development</List.Item>
                                        <List.Item as='a' href='/'>Web Hosting</List.Item>
                                        <List.Item as='a' href='/'>Support and maintenance</List.Item>
                                        <List.Item as='a' href='/'>Digital Marketing</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>
                                        <List link inverted> <List.Item icon='arrow right' content='Get Started' href='/' /></List>
                                    </Header>
                                    <p>
                                        Connect with the team to create a cross-platform web application development, api integration and resources you need to do amazing things.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Segment inverted vertical>
                    <Container>
                        <Grid divided inverted stackable textAlign="center">
                            <Grid.Row>
                                <Grid.Column width={12}>
                                    <p>
                                        &#169; 2019 www.guidpassword.com
                                   </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>

        )
    }
}
