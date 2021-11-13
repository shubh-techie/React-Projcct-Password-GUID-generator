import * as React from "react";
import { Button, Container, Row, Col, Alert, Card } from "react-bootstrap";
import { Stack, ComboBox, SelectableOptionMenuItemType, IComboBoxOption, IComboBox, Toggle, Slider, IStackProps, IStackTokens, TextField, PrimaryButton, DefaultButton, mergeStyleSets, IIconProps, Icon } from "office-ui-fabric-react";
import GuidGeneratorHelper from '../../../Services/GuidGeneratorHelper';


const MyInfo = () => <Icon iconName="CheckboxCompositeReversed" />;

interface IPasswordGeneratorProps {

}

interface IPasswordGeneratorState {
    PassworLength: number;
    IncludeNumber: boolean;
    IncludeSymbol: boolean;
    IncludeUpperCase: boolean;
    ExcludeSimilarChar: boolean;
    ExcludeWords: boolean;
    IsStrictPassword: boolean;
    PasswordString: string;
    CopyTextMessage: string;
}

const stackTokens: IStackTokens = { childrenGap: 20 };

const styles = mergeStyleSets({
    buttons: {
        backgroundColor: "black",
        borderRadius: "4px",
        width: "120px"
    }
})

const GenerateiIcon: IIconProps = { iconName: 'CirclePlus' };
const RefreshIcon: IIconProps = { iconName: 'Refresh' };
const CopyIcon: IIconProps = { iconName: 'Copy' };

export default class LoaPasswordGeneratornCalculator extends React.Component<IPasswordGeneratorProps, IPasswordGeneratorState> {
    private guidGeneratorHelper: GuidGeneratorHelper;

    constructor(props: any, state: any) {
        super(props, state);
        this.guidGeneratorHelper = new GuidGeneratorHelper();

        this.state = {
            PassworLength: 12,
            IncludeNumber: true,
            IncludeSymbol: true,
            IncludeUpperCase: true,
            ExcludeSimilarChar: true,
            ExcludeWords: true,
            IsStrictPassword: true,
            CopyTextMessage: "Copy",
            PasswordString: this.guidGeneratorHelper.generatePassword(12, true, true, true, true, true, true)
        }
        this._resetDefaultValues = this._resetDefaultValues.bind(this);
        this._onChangeSlider = this._onChangeSlider.bind(this);
        this._onChangeToggle = this._onChangeToggle.bind(this);
        this._onPasswordGenerator = this._onPasswordGenerator.bind(this);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={10}>
                        <Slider
                            label="length of password ?"
                            max={100}
                            value={this.state.PassworLength}
                            onChange={(value: number) => this._onChangeSlider(value)}
                            showValue={true}
                        />
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Toggle label="Include Numbers? (e.g. 123456)"
                            defaultChecked onText="On" offText="Off"
                            checked={this.state.IncludeNumber}
                            onChange={(ev, checked) => this._onChangeToggle(ev, checked, "IncludeNumber")} />
                        <Toggle label="Include symbols? (e.g. @#$%)"
                            defaultChecked onText="On" offText="Off"
                            checked={this.state.IncludeSymbol}
                            onChange={(ev, checked) => this._onChangeToggle(ev, checked, "IncludeSymbol")} />
                        <Toggle label="Include uppercase? (e.g. ABCDEFGH)"
                            defaultChecked onText="On" offText="Off"
                            checked={this.state.IncludeUpperCase}
                            onChange={(ev, checked) => this._onChangeToggle(ev, checked, "IncludeUpperCase")} />
                    </Col>
                    <Col >
                        <Toggle label="Exclude Similar Characters? (e.g. a, A)"
                            defaultChecked onText="On" offText="Off"
                            checked={this.state.ExcludeSimilarChar}
                            onChange={(ev, checked) => this._onChangeToggle(ev, checked, "ExcludeSimilarChar")} />
                        <Toggle label="Exclude Words?"
                            defaultChecked onText="On" offText="Off"
                            checked={this.state.ExcludeWords}
                            onChange={(ev, checked) => this._onChangeToggle(ev, checked, "ExcludeWords")} />
                        <Toggle label="strict?"
                            defaultChecked onText="On" offText="Off"
                            checked={this.state.IsStrictPassword}
                            onChange={(ev, checked) => this._onChangeToggle(ev, checked, "IsStrictPassword")} />
                    </Col>
                </Row>
                <br />
                <Stack horizontal tokens={stackTokens}>
                    <PrimaryButton onClick={this._resetDefaultValues} className={styles.buttons} iconProps={RefreshIcon}>Reset</PrimaryButton>
                    <PrimaryButton onClick={this._onPasswordGenerator} className={styles.buttons} iconProps={GenerateiIcon}>Generate</PrimaryButton>
                    <PrimaryButton onClick={(ev) => this._onCopyPassword(ev)} className={styles.buttons} iconProps={CopyIcon}>{this.state.CopyTextMessage}</PrimaryButton>
                </Stack>
                <br />
                <hr />
                <Stack horizontal tokens={stackTokens} >
                    <label className="divGuidNumber" >{this.state.PasswordString}</label>
                </Stack>

                <Row>
                    <Col xs={12} md={12} xl={12}>&nbsp;</Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} xl={12}> <PasswordTips /></Col>
                </Row>
            </Container>
        )
    }

    private _resetDefaultValues = () => {
        this.setState({
            PassworLength: 12,
            IncludeNumber: true,
            IncludeSymbol: true,
            IncludeUpperCase: true,
            ExcludeSimilarChar: true,
            ExcludeWords: true,
            IsStrictPassword: true,
            CopyTextMessage: "Copy",
            PasswordString: this.guidGeneratorHelper.generatePassword(12, true, true, true, true, true, true)
        })
    };

    private _onPasswordGenerator = () => {
        let finalPassword = this.guidGeneratorHelper.generatePassword(this.state.PassworLength, this.state.IncludeNumber, this.state.IncludeSymbol, this.state.IncludeUpperCase, this.state.ExcludeSimilarChar, this.state.ExcludeWords, this.state.IsStrictPassword);
        this.setState({
            PasswordString: finalPassword
        })
    };

    private _onCopyPassword = (ev: any) => {
        try {
            navigator.clipboard.writeText(this.state.PasswordString);
            // const copy = require('clipboard-copy');
            // copy(this.state.GuidNumber);
            ev.target.focus();
            this.setState({ CopyTextMessage: "Copied !" });
        } catch (error) {
            console.log(error);
            const copy = require('clipboard-copy')
            copy(this.state.PassworLength);
            ev.target.focus();
            this.setState({ CopyTextMessage: "Copied !" });
        }
    };

    private _onChangeSlider = (NewPassworLength?: number) => {
        this.setState({
            PassworLength: NewPassworLength
        })
    };

    private _onChangeToggle(ev: React.MouseEvent<HTMLElement>, checked: boolean, stateName: string) {
        // console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
        let state = this.state;
        state[stateName] = checked;
        this.setState(state);

        // console.log("IncludeNumber ->" + this.state.IncludeNumber);
        // console.log("IncludeSymbol ->" + this.state.IncludeSymbol);
        // console.log("IncludeUpperCase ->" + this.state.IncludeUpperCase);
        // console.log("ExcludeSimilarChar ->" + this.state.ExcludeSimilarChar);
        // console.log("ExcludeWords ->" + this.state.ExcludeWords);
        // console.log("IsStrictPassword ->" + this.state.IsStrictPassword);
    };
}

const PasswordTips = () => {
    return (
        <Card bg="dark" text="white" >
            <Card.Header>Key points of Password Security</Card.Header>
            <Card.Body>
                <Card.Text>
                    There are key points of password security that users must know in order to reduce the likelihood of a hacker cracking their password and thus gaining access to their device.
      </Card.Text>
                <Card.Title>Password Tips</Card.Title>
                <Card.Text>
                    <MyInfo />&nbsp; Most importantly, passwords must be long and complex.
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp; Long and complex passwords require more effort and time for a hacker to guess.
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp; Passwords should contain at least ten characters and have a combination of characters such as commas, percent signs, and parentheses, as well as upper-case and lower-case letters and numbers.
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp; Users should never write down their passwords, as that makes it easier for the passwords to be stolen and used by someone else.
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp;  Also, never use the same password for two or more devices, as hackers who break into one machine will try to use the same password to take control of others.
      </Card.Text>
            </Card.Body>
        </Card>
    )
}

