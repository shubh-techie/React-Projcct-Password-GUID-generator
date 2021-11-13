import * as React from "react";
import { Form, Radio, Button, Icon, Label, Input, TextArea, Message, Segment, Header } from "semantic-ui-react";

export interface IFeedbackProps {
}

export interface IFeedbackState {
    value: string;
    feedbackSummery: string;
    feedbackInfo: string;
}

export default class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            value: "1",
            feedbackSummery: "",
            feedbackInfo: ""
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <Label pointing='below'>What Kind of Feedback is this ?</Label>
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Suggestion'
                            name='radioGroup'
                            value='1'
                            checked={this.state.value === '1'}
                            onChange={this.handleChange}
                        />
                        &nbsp;&nbsp;&nbsp;
                    <Radio
                            label='Problem'
                            name='radioGroup'
                            value='2'
                            checked={this.state.value === '2'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Label pointing='below'>Tell us about it.</Label>
                    </Form.Field>
                    <Form.Field>
                        <Input
                            placeholder='Summarize your issues'
                            onChange={(e) => this._onChangeTextField(e, "feedbackSummery")}
                            value={this.state.feedbackSummery.toString()}
                            style={{ width: "350px" }}
                        />
                    </Form.Field>
                    <Form.Field>
                        <TextArea placeholder='Give us more details (optional)'
                            onChange={(e) => this._onChangeTextField(e, "feedbackInfo")}
                            value={this.state.feedbackInfo.toString()}
                            style={{ width: "350px" }}
                        />
                    </Form.Field>

                    <Button.Group>
                        <Button icon labelPosition='right' onClick={this._onClickSearch}>
                            Sumbit
                         <Icon name='add' />
                        </Button>
                        <Button.Or />
                        <Button icon labelPosition='right' onClick={this._onClickSearch}>
                            Reset
                  <Icon name='redo' />
                        </Button>
                    </Button.Group>
                </Form>
                <br />
                <br />
                <Segment color='olive'>
                    <Header as='h4'>Note:</Header>
                    <p>
                        Note : Your opinion is a valued asset. Please provide your feedback to improve the application and share your ideas about what new products, features, and tools you'd like to see and where you'd suggest improvements.
                    </p>
                </Segment>

            </div>
        );
    }

    handleChange = (e, { value }) => this.setState({ value })

    _onClickSearch = (): void => { }

    private _onChangeTextField = (ev: any, stateName: string) => {
        const state = this.state;
        state[stateName] = ev.target.value;
        this.setState(state);
    }
}
