import * as React from "react";
import { Stack, IconButton, IIconProps, TextField, PrimaryButton, DefaultButton, MessageBar, MessageBarType, mergeStyleSets, IFontIconProps, IIconStyles, mergeStyles } from "office-ui-fabric-react";
import GuidGeneratorHelper from '../../../Services/GuidGeneratorHelper';
import GUIDApiHelper from "../../../Services/GUIDApiHelper";

const classNames = mergeStyleSets({
    deepSkyRed: [{ color: '#d44300' }],
    deepSkyGreen: [{ color: '#07d400' }],
});

const likeIcon: IIconProps = { iconName: 'Like' };
const disLikeIcon: IIconProps = { iconName: 'Dislike' };
const LikeFontIcon: IFontIconProps = { iconName: 'CompassNW' };

interface IReviewProps {

}
interface IReviewState {
    disabledLike?: boolean;
    disabledDislike?: boolean;
    isVisibleFeedBackForm: boolean;
    isVisibleThankYou: boolean;
    isFeedbackTexBoxVisible: boolean;
    feedbackMessage: string;
    feedbackMessageArray: any[];
    userActionforLike: boolean;
    userActionforDisLike: boolean;
}

const SuccessExample = () => (
    <MessageBar
        messageBarType={MessageBarType.success}
        isMultiline={false}
    >
        Thank You.
    </MessageBar>
);

export default class Review extends React.Component<IReviewProps, IReviewState> {
    private guidGeneratorHelper: GuidGeneratorHelper;
    private guidAxiosHelper: GUIDApiHelper;
    constructor(props: any, state: any) {
        super(props, state);
        this.guidGeneratorHelper = new GuidGeneratorHelper();
        this.guidAxiosHelper = new GUIDApiHelper();
        this.state = {
            disabledLike: false,
            disabledDislike: false,
            isVisibleFeedBackForm: true,
            isVisibleThankYou: false,
            isFeedbackTexBoxVisible: false,
            feedbackMessage: "",
            feedbackMessageArray: null,
            userActionforLike: false,
            userActionforDisLike: false
        }

        this._onChangeTextField = this._onChangeTextField.bind(this);
        this._likeClick = this._likeClick.bind(this);
        this._closeDialog = this._closeDialog.bind(this);
    }

    componentDidMount() {
        this.guidAxiosHelper.getGuidPasswordAppReview().then(response => {
            this.setState({ feedbackMessageArray: response.data })
        }).catch(errResponse => {
            console.log("componentDidMount() {" + errResponse);
        })
    }

    render() {
        console.log
        let feedbackMessageView = this.state.feedbackMessageArray && this.state.feedbackMessageArray.map((item, index) => {
            return (
                <div key={item.ID}>
                    <div>
                        <span>
                            <hr />
                            someone : {item.UserAction}d and provided feedback : {item.Feedback} , on:{item.ProvidedOn}
                        </span>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {this.state.isVisibleThankYou && <SuccessExample />}
                {this.state.isVisibleFeedBackForm &&
                    <div>
                        <hr />
                        Is this page helpful?
                        <Stack tokens={{ childrenGap: 8 }} horizontal>
                            <IconButton className={this.state.userActionforLike && classNames.deepSkyGreen} iconProps={likeIcon} onClick={(ev) => this._likeClick(ev, "Like")} title="Like" ariaLabel="Like" disabled={this.state.disabledLike} />
                            <IconButton className={this.state.userActionforDisLike && classNames.deepSkyRed} iconProps={disLikeIcon} onClick={(ev) => this._likeClick(ev, "Dislike")} title="Dislike" ariaLabel="Dislike" disabled={this.state.disabledDislike} />
                        </Stack>
                        {this.state.isFeedbackTexBoxVisible
                            && <div>
                                <TextField
                                    label="Feedback"
                                    placeholder="Any additional feedback ?"
                                    onChange={this._onChangeTextField}
                                    multiline
                                    value={this.state.feedbackMessage}
                                    autoAdjustHeight />
                                <DefaultButton onClick={(ev) => this._closeDialog(ev, "Skip")} style={{ padding: "5px", margin: "5px 5px 5px 0px" }} text="Skip" />
                                <PrimaryButton onClick={(ev) => this._closeDialog(ev, "Submit")} style={{ padding: "5px", margin: "5px 5px 5px 0px" }} text="Submit" />
                            </div>
                        }
                    </div>}
                {feedbackMessageView}
            </div>
        )
    }

    private _onChangeTextField = (ev: any) => {
        this.setState({ feedbackMessage: ev.target.value })
    };

    private _likeClick = (ev, Action: string): void => {
        let _action = "Like";
        if (Action != _action) {
            _action = "Dislike"
        }
        this.setState({
            userActionforLike: Action == "Like" ? true : false,
            userActionforDisLike: Action == "Dislike" ? true : false,
            isFeedbackTexBoxVisible: true
        })
    };

    private _getAllGuidReviewMessage() {
        return this.guidAxiosHelper.getGuidPasswordAppReview();
    }

    private _closeDialog = (ev, btnAction: string): void => {

        if (btnAction == "Submit") {
            let userAction = "";
            if (this.state.userActionforLike)
                userAction = "Like";
            else if (this.state.userActionforDisLike)
                userAction = "DisLike"

            let feedbackMessage = {
                UserAction: userAction,
                Feedback: this.state.feedbackMessage
            };

            this.guidAxiosHelper.updpateAppReview(feedbackMessage).then(response => {
                this.setState({ feedbackMessageArray: response.data })
            }).catch(errResponse => {
                console.log("this.guidAxiosHelper.updpateAppReview :" + errResponse);
            })
        }

        this.setState({
            isVisibleThankYou: true,
            isVisibleFeedBackForm: false
        });
    };

}
