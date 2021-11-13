import * as React from "react";
import FinTalkAxiosHelper from "../../Services/FinTalkAxiosHelper";
//import { Dropdown, DropdownMenuItemType, IDropdownOption } from "office-ui-fabric-react";
/* global Button, Header, HeroList, HeroListItem, Progress */
import { Dropdown, Divider, Grid, Segment, Input, Button, Icon, Header, Card, Container, Message, Menu } from 'semantic-ui-react'

export interface AppProps {
}

export interface AppState {
  stateName: string;
  districtName: string;
  cityName: string;
  pinCode: string;
  isPincodeValid: boolean;
  activeItem: string;

  stateNames: any[];
  districtNames: any[];
  CityNames: any[];
  postOfficeResults: any[];
}

export default class App extends React.Component<AppProps, AppState> {
  private finTalkAxiosHelper: FinTalkAxiosHelper;
  constructor(props, context) {
    super(props, context);
    this.finTalkAxiosHelper = new FinTalkAxiosHelper();
    this.state = {
      stateName: "",
      districtName: "",
      cityName: "",
      pinCode: "",
      isPincodeValid: true,
      activeItem: 'home',
      stateNames: [],
      districtNames: [],
      CityNames: [],
      postOfficeResults: []
    }

    this._onChangeSemanticD = this._onChangeSemanticD.bind(this);
    this._onClickSearch = this._onClickSearch.bind(this);
  }

  componentDidMount() {
    this.finTalkAxiosHelper.GetStatesNames().then(response => {
      //console.log(response);
      this.setState({
        stateNames: response.data.StateNames,
      })
    }).catch(errResponse => {
      //console.log("componentDidMount() {" + errResponse);
    })
  }

  render() {

    let PostOfficeResults = this.state.postOfficeResults && this.state.postOfficeResults.map((item, index) => {
      console.log(item.PinCode);
      let postOfficeAddress = `Post Office Name: ${item.OfficeName} , Office Type :${item.OfficeType} Telephone :${item.Telephone}`;
      let deptInfo = `Departmental Information : ${item.Suboffice}  in ${item.DivisonName} Division ${item.RegionName} Region ${item.StateName} Circle and headoffice ${item.Headoffice}`;
      return (
        <Card style={{ width: "100%" }}>
          <Card.Content header={`Pincode :${item.PinCode}`} />
          <Card.Description>
            &nbsp;&nbsp;&nbsp;{postOfficeAddress} <br />
            &nbsp;&nbsp;&nbsp;{deptInfo}<br />
            <br />
          </Card.Description>
          <Card.Content extra>
            <Icon name='map marker alternate' /> District: {item.DistrictName}, State : {item.StateName}, Pin :{item.PinCode}
          </Card.Content>
        </Card>
      )
    });

    return (
      <div>
        <Segment piled>
          <Container>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>
              <Grid.Row >
                <Grid.Column verticalAlign='middle'>
                  <Header icon>
                    <Icon name='search' />
                    Search by Pincode
                 </Header>
                  <br />
                  <Input
                    error={!this.state.isPincodeValid}
                    action={{
                      icon: "search",
                      onClick: () => this.handleClick(),
                      width: "20"
                    }}
                    placeholder='Please enter pincode...'
                    onChange={(e) => this._onChangeTextField(e, "pinCode")}
                    value={this.state.pinCode.toString()}
                    style={{ width: "350px" }}
                  />
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                  <Header icon>
                    <Icon name='map marker alternate' />
                    Search by State and District name
               </Header>
                  <div>
                    <Dropdown
                      clearable
                      //fluid
                      search
                      selection
                      value={this.state.stateName}
                      onChange={(e, data) => this._onChangeSemanticD(e, data, "stateName")}
                      options={this.state.stateNames && this._getDropSemanticDownItem(this.state.stateNames)}
                      placeholder='Start typing state name'
                      style={{ width: "350px" }}
                    />
                    <br />
                    <br />
                    <Dropdown
                      clearable
                      //fluid
                      search
                      selection
                      value={this.state.districtName}
                      onChange={(e, data) => this._onChangeSemanticD(e, data, "districtName")}
                      options={this.state.districtNames && this._getDropSemanticDownItem(this.state.districtNames)}
                      placeholder='Start typing district name'
                      style={{ width: "350px" }}
                    />
                    <br />
                    <br />
                    <Dropdown
                      clearable
                      search
                      selection
                      value={this.state.cityName}
                      onChange={(e, data) => this._onChangeSemanticD(e, data, "cityName")}
                      options={this.state.CityNames && this._getDropSemanticDownItem(this.state.CityNames)}
                      placeholder='Start typing City name'
                      style={{ width: "350px" }}
                    />
                    <br />
                    <br />
                    <Button icon labelPosition='right' onClick={this._onClickSearch}>
                      Search
                  <Icon name='search' />
                    </Button>
                    <Button icon labelPosition='right' onClick={this._onClickSearch}>
                      Reset
                  <Icon name='redo' />
                    </Button>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        {this.state.postOfficeResults.length > 0 && <Message info>
          <Message.Header>Total {this.state.postOfficeResults && this.state.postOfficeResults.length} Post offices sharing the same pincode</Message.Header>
        </Message>
        }
        {PostOfficeResults}
      </div>
    );
  }

  _handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClick = () => {
    if (this.state.stateName && this.state.districtName && this.state.cityName) {
      this.finTalkAxiosHelper.getPostOfficeInfoByInupts(this.state.stateName, this.state.districtName, this.state.cityName).then(response => {
        this.setState({
          postOfficeResults: response.data
        })
      }).catch(errResponse => {
        console.log("error in _onClickSearch = ()" + errResponse);
      })
    }
    else if (this.state.pinCode) {
      this.finTalkAxiosHelper.getPostOfficeInfoPinCode(this.state.pinCode).then(response => {
        this.setState({
          postOfficeResults: response.data
        })
      }).catch(errResponse => {
        console.log("error in _onClickSearch = ()" + errResponse);
      })
    }
  };

  _onClickSearch = (): void => {

    if (this.state.stateName && this.state.districtName && this.state.cityName) {
      this.finTalkAxiosHelper.getPostOfficeInfoByInupts(this.state.stateName, this.state.districtName, this.state.cityName).then(response => {
        this.setState({
          postOfficeResults: response.data
        })
      }).catch(errResponse => {
        console.log("error in _onClickSearch = ()" + errResponse);
      })
    }
    else if (this.state.pinCode) {
      this.finTalkAxiosHelper.getPostOfficeInfoPinCode(this.state.pinCode).then(response => {
        this.setState({
          postOfficeResults: response.data
        })
      }).catch(errResponse => {
        console.log("error in _onClickSearch = ()" + errResponse);
      })
    }
  };

  private _onChangeTextField = (ev: any, stateName: string) => {
    const state = this.state;
    state[stateName] = ev.target.value;
    this.setState(state);


    if (this.state.pinCode && this.state.pinCode.length == 6) {
      this.finTalkAxiosHelper.getPostOfficeInfoPinCode(this.state.pinCode).then(response => {
        this.setState({
          postOfficeResults: response.data
        })
      }).catch(errResponse => {
        console.log("error in _onClickSearch = ()" + errResponse);
      })
    }

  };

  _getDropSemanticDownItem(dropdowndata: any): any[] {
    let options = [];
    //{ key: 'af', value: 'af', text: 'Afghanistan' },
    options.push({ key: "", text: "select one option." });
    if (dropdowndata && dropdowndata != null) {
      dropdowndata.map((element) => {
        try {
          if (element && element != null && element != undefined) {
            options.push({ key: element, value: element, text: element });
          }
        } catch (error) {
        }
      })
      return options;
    }
    return options;
  }

  _onChangeSemanticD = (e, data, stateName: string) => {
    let dataValue = data.value;
    const state = this.state;
    state[stateName] = dataValue;
    this.setState(state);

    if (stateName == "stateName") {
      this.finTalkAxiosHelper.getGetDisName(this.state.stateName).then(response => {
        this.setState({
          districtNames: response.data.DistrictNames
        })
      }).catch(errResponse => {
        console.log("error in _onChangeSemanticD = ()" + errResponse);
      })
    }
    if (stateName == "districtName") {
      this.finTalkAxiosHelper.getGetCityName(this.state.districtName).then(response => {
        this.setState({
          CityNames: response.data.CityNames
        })
      }).catch(errResponse => {
        console.log("error in _onChangeSemanticD = ()" + errResponse);
      })
    }
    if (stateName == "cityName") {
      if (this.state.stateName && this.state.districtName && this.state.cityName) {
        this.finTalkAxiosHelper.getPostOfficeInfoByInupts(this.state.stateName, this.state.districtName, this.state.cityName).then(response => {
          this.setState({
            postOfficeResults: response.data
          })
        }).catch(errResponse => {
          console.log("error in _onClickSearch = ()" + errResponse);
        })
      }
    }
  }
}
