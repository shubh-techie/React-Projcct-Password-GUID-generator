import * as React from "react";
import { Container, Header, Grid, Icon, Form, TextArea, Button } from "semantic-ui-react";
import { light } from "./FCComponents";


export interface IContactUsProps {
}

export interface IContactUsState {

}

export default class Contact extends React.Component<IContactUsProps, IContactUsState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {

        }

    }

    render() {
        return (
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row textAlign='center' style={{ padding: '8em 0em' }}>
                    <Grid.Column verticalAlign='middle' width={16}>
                        <Header icon as='h3' style={{ fontSize: '2em', fontFamily: "Roboto Slab, Times New Roman, serif" }}>
                            <Icon name='handshake' style={{ color: "#a333c8" }} />
                            Work with us
                </Header>
                        <p style={light}>
                            Divide details about your product or agency work into parts. Write a
                            few lines about each one and contact us about any further
                            collaboration. We will responde get back to you in a couple of
                            hours.
                   </p>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' width={16} style={{ padding: '0em 8em 0em 8em' }}>
                        &nbsp;
            </Grid.Column>
                    <Grid.Column verticalAlign='middle' width={16} style={{ padding: '0em 8em 0em 8em' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <input placeholder='First Name' />
                                </Form.Field>
                                <Form.Field>
                                    <input placeholder='Last Name' />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <input placeholder='Your Email' />
                                </Form.Field>
                                <Form.Field>
                                    <input placeholder='Your Address' />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' width={16} style={{ padding: '0em 8em 0em 8em' }}>
                        <Button color="purple" size='huge'>
                            Send Message
                </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}
