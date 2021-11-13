import * as React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { ChoiceGroup, Stack, IStackProps, TextField, PrimaryButton, MessageBar, MessageBarType, Separator, IChoiceGroupOption } from "office-ui-fabric-react";
import GUIDApiHelper from "../../../Services/GUIDApiHelper";

interface IFeedbackProps {

}

interface IFeedbackState {
    feedBackType: string;
    isMessageVisible: boolean;
    isSubmitButtonDisable: boolean;
    feedbackSummary: string;
    feedbackDetailSummary: string;
    isValidationFail: boolean
}

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } }
};

const SuccessExample = () => (
    <MessageBar
        messageBarType={MessageBarType.success}
        isMultiline={false}
    >
        Thank You for providing your Feedback.
    </MessageBar>
);

const BlockedExample = () => (
    <MessageBar
        messageBarType={MessageBarType.blocked}
        dismissButtonAriaLabel="Close"
        truncated={true}
    >
        Please provide issue summery in 5 words.
    </MessageBar>
);

export default class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {
    private guidAxiosHelper: GUIDApiHelper;

    constructor(props: any, state: any) {
        super(props, state);
        this.guidAxiosHelper = new GUIDApiHelper();
        this.state = {
            feedBackType: "Suggestion",
            isMessageVisible: false,
            isSubmitButtonDisable: false,
            feedbackSummary: "",
            feedbackDetailSummary: "",
            isValidationFail: false,
        }

        this._onChangeChoiceGroups = this._onChangeChoiceGroups.bind(this);
        this._onclickSubmit = this._onclickSubmit.bind(this);
        this._onChangeTextField = this._onChangeTextField.bind(this);
    }

    render() {
        return (
            <Stack tokens={{ childrenGap: 15 }}>
                What Kind of Feedback is this ?
                    <ChoiceGroup
                    defaultSelectedKey="1"
                    options={[
                        {
                            key: '1',
                            text: 'Suggestion \u00A0 \u00A0',
                        },
                        {
                            key: '2',
                            text: 'Problem \u00A0 \u00A0',
                        }
                    ]}
                    //selectedKey={this.state.uuidVersionNumber}
                    required={true}
                    onChanged={this._onChangeChoiceGroups}
                    //onChanged={this._onChangedChoiceGroups}
                    styles={{ flexContainer: { display: "flex" } }}
                />
                <hr />
                Tell us about it.
                <TextField
                    label="Summarize your issues"
                    value={this.state.feedbackSummary}
                    required
                    onChange={(ev) => this._onChangeTextField(ev, "feedbackSummary")}
                    styles={{ fieldGroup: { width: 300 } }}
                />
                <TextField
                    label="Give us more details (optional)"
                    onChange={(ev) => this._onChangeTextField(ev, "feedbackDetailSummary")}
                    multiline
                    value={this.state.feedbackDetailSummary}
                    autoAdjustHeight
                    styles={{ fieldGroup: { width: 300 } }}
                />
                {this.state.isValidationFail && <BlockedExample />}
                {this.state.isMessageVisible && <SuccessExample></SuccessExample>}
                <PrimaryButton disabled={this.state.isSubmitButtonDisable} onClick={this._onclickSubmit} style={{ padding: "5px", margin: "5 5 5 0", width: "90px" }} text="Submit" />
                <br />
                <Separator />
                <Alert variant='light'>
                    Note : Your opinion is a valued asset. Please provide your feedback to improve the application share your ideas about what new products, features, and tools you'd like to see and where you'd suggest improvements.
                </Alert>
            </Stack>
        )
    }


    private _onclickSubmit = (): void => {

        if (this.state.feedbackSummary.split(" ").length > 4) {
            let feedbackMessage = {
                UserAction: this.state.feedBackType,
                feedbackSummary: this.state.feedbackSummary,
                feedbackDetailSummary: this.state.feedbackDetailSummary
            };
            this.guidAxiosHelper.updpateFeedbackReview(feedbackMessage).then(response => {

            }).catch(errResponse => {
                console.log("this.guidAxiosHelper.updpateFeedbackReview :" + errResponse);
            })


            this.setState({
                isMessageVisible: true,
                isSubmitButtonDisable: true,
                isValidationFail: false,
                feedbackDetailSummary: "",
                feedbackSummary: ""
            })
        }
        else {
            this.setState({
                isValidationFail: true
            })
        }
    };

    private _onChangeTextField = (ev: any, stateName: string) => {
        let state = this.state;
        state[stateName] = ev.target.value
        this.setState(state)
    };


    private _onChangeChoiceGroups(option: IChoiceGroupOption, ev: React.FormEvent<HTMLInputElement>): void {
        console.log("Before " + this.state.feedBackType);

        this.setState({
            feedBackType: option.text
        })

        console.log("After " + this.state.feedBackType);
    }

}
