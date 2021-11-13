import * as React from 'react';
import { Button, Alert, Col, Row, Card } from "react-bootstrap";
import { TextField, Slider, ChoiceGroup, IChoiceGroupOption, Link, IStackStyles, IContextualMenuProps, Stack, CommandBarButton } from 'office-ui-fabric-react';
import { Icon, IIconProps } from 'office-ui-fabric-react/lib/Icon';
import GuidGeneratorHelper from '../../../Services/GuidGeneratorHelper';
import DialogBasic from '../DialogBasic/DialogBasic';
import { IGuidGeneratorProps } from './IGuidGeneratorProps';
import { IGuidGeneratorState } from './IGuidGeneratorState';

const MyIconCopy = () => <Icon iconName="Copy" className="ms-IconExample" />;
const MyIconCloudDownload = () => <Icon iconName="CloudDownload" className="ms-IconExample" />;
const MyIconRefresh = () => <Icon iconName="Refresh" className="ms-IconExample" />;
const MyIconGenerate = () => <Icon iconName="Generate" className="ms-IconExample" />;
const MyIconDownload = () => <Icon iconName="Download" className="ms-IconExample" />;
const MyInfo = () => <Icon iconName="CheckboxCompositeReversed" />;

const addIcon: IIconProps = { iconName: 'Add' };
const mailIcon: IIconProps = { iconName: 'Mail' };
const downloadIcon: IIconProps = { iconName: 'Download' };
const downloadCloudIcon: IIconProps = { iconName: 'CloudDownload' };
const ResetIcon: IIconProps = { iconName: 'Refresh' };
const copyIcon: IIconProps = { iconName: 'Copy' };
const stackStyles: Partial<IStackStyles> = { root: { height: 40 } };

const GUIDVersions: IChoiceGroupOption[] =
    [
        {
            key: '1',
            text: '1\u00A0 \u00A0',
            checked: false
        },
        {
            key: '3',
            text: '3\u00A0 \u00A0',
            checked: false
        },
        {
            key: '4',
            text: '4\u00A0 \u00A0',
            checked: true
        },
        {
            key: '5',
            text: '5\u00A0 \u00A0',
            checked: false
        }
    ];


const menuProps: IContextualMenuProps = {
    items: [
        {
            key: 'Generate',
            text: 'Generate',
            iconProps: { iconName: 'Mail' }
        },
        {
            key: 'Reset',
            text: 'reset',
            iconProps: { iconName: 'Calendar' }
        }
    ]
};
export default class GuidGenerator extends React.Component<IGuidGeneratorProps, IGuidGeneratorState> {
    private guidGeneratorHelper: GuidGeneratorHelper;

    constructor(props: any, state: any) {
        super(props, state);
        this.guidGeneratorHelper = new GuidGeneratorHelper();
        this.state = {
            SelectedCopyMessage: "Copy",
            NoOfGUID: 1,
            hideDialog: true,
            needToDisplayMultiText: false,
            uuidVersionNumber: 4,
            dnsNamespace: "",
            GuidNumber: this.guidGeneratorHelper.getGUIDByVersion(4, ""),//this._uuidv4(),
        }


        this._onBtnGenerateGUIDNumber = this._onBtnGenerateGUIDNumber.bind(this);
        this._onChangeTextField = this._onChangeTextField.bind(this);
        this._onChangeSlider = this._onChangeSlider.bind(this);
        this._onBtnClickReset = this._onBtnClickReset.bind(this);
        this._copyMessage = this._copyMessage.bind(this);
        this._downloadTxtFile = this._downloadTxtFile.bind(this);
        this._downloadCSVFile = this._downloadCSVFile.bind(this);
        this._onChangeChoiceGroups = this._onChangeChoiceGroups.bind(this);
        this._onChangedChoiceGroups = this._onChangedChoiceGroups.bind(this);
        this._onChangeDNSTextField = this._onChangeDNSTextField.bind(this);
    }

    render() {
        return (
            <div>
                <Row>
                    <Stack horizontal styles={stackStyles}>
                        <Col xs={12} md={12} xl={12}>
                            <CommandBarButton iconProps={addIcon} text="Generate" title="Generate another GUID" onClick={e => this._onBtnGenerateGUIDNumber(e)} />
                            {/* <CommandBarButton iconProps={mailIcon} text="Share" /> */}
                            <CommandBarButton iconProps={ResetIcon} text="Reset" onClick={(e) => this._onBtnClickReset(e)} />
                            <CommandBarButton iconProps={copyIcon} text={this.state.SelectedCopyMessage} onClick={e => this._copyMessage(e)} />
                            <CommandBarButton iconProps={downloadIcon} text="Text" onClick={this._downloadTxtFile} />
                            <CommandBarButton iconProps={downloadIcon} text="CSV" onClick={this._downloadCSVFile} />
                        </Col>
                    </Stack>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} md={12} xl={12}>
                        {
                            this.state.needToDisplayMultiText ?
                                <TextField
                                    value={this.state.GuidNumber}
                                    //autoAdjustHeight
                                    borderless
                                    multiline
                                    style={{ height: "180px", fontWeight: "bold", lineHeight: "15px" }}
                                />

                                : <div>
                                    <label className="divGuidNumber h2" >{this.state.GuidNumber}</label>
                                </div>
                        }
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={8} md={8} xl={8}>
                        <Slider
                            label="No of GUID ?"
                            max={100}
                            value={this.state.NoOfGUID}
                            onChange={(value: number) => this._onChangeSlider(value)}
                            showValue={true}
                        /></Col>
                    <Col xs={4} md={4} xl={4}>
                        <TextField
                            label="No of GUID ?"
                            value={this.state.NoOfGUID.toString()}
                            placeholder="No ?"
                            onChange={(e) => this._onChangeTextField(e, "NoOfGUID")}
                            styles={{ fieldGroup: { width: 80 } }}
                            defaultValue="1"
                        />
                    </Col>
                </Row>
                <hr />
                <div className="d-flex justify-content-center">
                    <Button
                        onClick={e => this._onBtnGenerateGUIDNumber(e)}
                        variant="dark"
                        title="Generate another GUID" size="sm"
                        style={{ width: "30%", margin: "10px" }} >
                        <MyIconGenerate /> Generate
                    </Button>
                    <Button
                        onClick={e => this._copyMessage(e)}
                        variant="dark"
                        title="Copy this GUID"
                        style={{ width: "30%", margin: "10px" }} >
                        < MyIconCopy />&nbsp;{this.state.SelectedCopyMessage}
                    </Button>
                </div>
                <hr />
                <div className="d-flex justify-content-left">
                    {
                        (this.state.uuidVersionNumber === 3 || this.state.uuidVersionNumber === 5) &&
                        < TextField // prettier-ignore
                            prefix="https://"
                            value={this.state.dnsNamespace}
                            ariaLabel="Example text field with https:// prefix"
                            placeholder="Provide your DNS..."
                            styles={{ fieldGroup: { width: 350 } }}
                            onChange={this._onChangeDNSTextField}
                        />
                    }
                </div>
                <Row>
                    <Col xs={6} md={6} xl={6}>
                        <ChoiceGroup
                            defaultSelectedKey="4"
                            options={[
                                {
                                    key: '1',
                                    text: '1\u00A0 \u00A0',
                                    checked: this.state.uuidVersionNumber == 1
                                },
                                {
                                    key: '3',
                                    text: '3\u00A0 \u00A0',
                                    checked: this.state.uuidVersionNumber == 3
                                },
                                {
                                    key: '4',
                                    text: '4\u00A0 \u00A0',
                                    checked: this.state.uuidVersionNumber == 4
                                },
                                {
                                    key: '5',
                                    text: '5\u00A0 \u00A0',
                                    checked: this.state.uuidVersionNumber == 5
                                }
                            ]}
                            //selectedKey={this.state.uuidVersionNumber}
                            label="Select UUID Version ?"
                            required={true}
                            onChange={this._onChangeChoiceGroups}
                            //onChanged={this._onChangedChoiceGroups}
                            styles={{ flexContainer: { display: "flex" } }}
                        />
                    </Col>
                    <Col xs={6} md={6} xl={6}>
                        <br />
                        <Link onClick={this._showDialog}>More info >></Link>
                        <DialogBasic
                            closeDialog={this._closeDialog}
                            hideDialog={this.state.hideDialog}
                            guidVersion={this.state.uuidVersionNumber}
                        />
                    </Col>
                </Row>

                <hr />
                <Row>
                    <Col xs={12} md={12} xl={12}>&nbsp;</Col>
                </Row>
                <Alert variant='light'>
                    Note : The GUID generated by this site are provided AS IS without warranty of any kind, not even the warranty that the generated UUIDs are actually unique. Use these GUIDs at your own risk! so There is no guarantee of their uniqueness or suitability is given or implied.
                </Alert>
                <GuidInfo />
            </div >
        )
    }

    private _downloadTxtFile = () => {
        try {
            const element = document.createElement("a");
            const file = new Blob([this.state.GuidNumber], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = "myGuid.txt";
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
        } catch (error) {
            console.log(error);
        }
    }
    private _downloadCSVFile = () => {
        try {
            const element = document.createElement("a");
            const file = new Blob([this.state.GuidNumber], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = "myGuid.csv";
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
        } catch (error) {
            console.log(error);

        }
    }

    private _closeDialog = (_hideDialog: boolean): void => {
        this.setState({ hideDialog: _hideDialog });
    };

    private _showDialog = (): void => {
        this.setState({ hideDialog: false });
    };

    private _onChangedChoiceGroups(option: IChoiceGroupOption, ev: React.FormEvent<HTMLInputElement>): void {
        this.setState({
            uuidVersionNumber: Number(option.key),
        })
    }

    private _onChangeChoiceGroups(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
        this.setState({
            uuidVersionNumber: Number(option.key),
        })
    }

    private _onBtnClickReset = (e: any) => {
        console.log(e);
        this.setState({
            NoOfGUID: 1,
            GuidNumber: this.guidGeneratorHelper.getGUIDByVersion(4, ""),
            SelectedCopyMessage: "Copy",
            needToDisplayMultiText: false,
            uuidVersionNumber: 4,
            dnsNamespace: ""
        });
    };

    private _onChangeSlider = (newValue?: number) => {
        if (newValue > 0 && this.state.uuidVersionNumber !== 3 && this.state.uuidVersionNumber !== 5)
            this.setState({ NoOfGUID: Number(newValue) });
    };

    private _copyMessage = (ev: any) => {
        try {
            navigator.clipboard.writeText(this.state.GuidNumber);
            // const copy = require('clipboard-copy');
            // copy(this.state.GuidNumber);
            ev.target.focus();
            this.setState({ SelectedCopyMessage: "Copied !" });
        } catch (error) {
            console.log(error);
            const copy = require('clipboard-copy')
            copy(this.state.GuidNumber);
            ev.target.focus();
            this.setState({ SelectedCopyMessage: "Copied !" });
        }
    };

    private _onChangeDNSTextField = (ev: any, stateName: string) => {
        this.setState({ dnsNamespace: ev.target.value })
    };

    private _onChangeTextField = (ev: any, stateName: string) => {
        if (this.state.uuidVersionNumber !== 3 && this.state.uuidVersionNumber !== 5)
            this.setState({ NoOfGUID: ev.target.value })
    };

    private _onBtnGenerateGUIDNumber = (ev: any) => {
        let _guidNumber = "";
        try {
            _guidNumber = this.guidGeneratorHelper.getGUIDByVersion(this.state.uuidVersionNumber, this.state.dnsNamespace);
            let _needToDisplayMultiText = false;
            if (this.state.NoOfGUID > 1 && (this.state.uuidVersionNumber == 1 || this.state.uuidVersionNumber == 4)) {
                this.setState({ needToDisplayMultiText: true });
                _needToDisplayMultiText = true;
                for (let _i = 1; _i < this.state.NoOfGUID; _i++) {
                    let _indexGUID = "\r\n" + this.guidGeneratorHelper.getGUIDByVersion(this.state.uuidVersionNumber, this.state.dnsNamespace);
                    _guidNumber = _guidNumber + _indexGUID;
                }
            }
            else {
                this.setState({
                    NoOfGUID: 1,
                    dnsNamespace: ""
                })
            }
            if (this.state.NoOfGUID == 0) {
                this.setState({ GuidNumber: _guidNumber, SelectedCopyMessage: "Copy", NoOfGUID: 1, needToDisplayMultiText: _needToDisplayMultiText, dnsNamespace: "" });
            }
            else {
                this.setState({ GuidNumber: _guidNumber, SelectedCopyMessage: "Copy", needToDisplayMultiText: _needToDisplayMultiText, dnsNamespace: "" });
            }
        } catch (error) {
            _guidNumber = this.guidGeneratorHelper.getLocalUUID();
            console.log(error);
        }
    };



}



const GuidInfo = () => {
    return (
        <Card bg="dark" text="white" >
            <Card.Header>Globally Unique Identifier</Card.Header>
            <Card.Body>
                <Card.Text>
                    GUID technically stands for globally unique identifier. What it is, actually, is a 128 bit structure that is unlikely to ever repeat or create a collision. If you do the maths, the domain of values is in the undecillions.
      </Card.Text>
                <Card.Title>More Info about GUID/UUID.</Card.Title>
                <Card.Text>
                    <MyInfo />&nbsp; The term globally unique identifier is also used, typically in software created by Microsoft.
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp; GUIDs can be created in a number of ways, but usually they are a combination of a few unique settings based on specific point in time (e.g., an IP address, network MAC address, clock date/time, etc.).
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp; Use guids when you have multiple independent systems or clients generating ID's that need to be unique.
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp; For example, if I have 5 client apps creating and inserting transactional data into a table that has a unique constraint on the ID, then use guids. This prevents having to force a client to request an issued ID from the server first.
      </Card.Text>
                <Card.Text>
                    <MyInfo />&nbsp;  This is also great for object factories and systems that have numerous object types stored in different tables where you don't want any 2 objects to have the same ID. This makes caching and scavenging schemas much easier to implement.
      </Card.Text>
            </Card.Body>
        </Card>
    )
}



