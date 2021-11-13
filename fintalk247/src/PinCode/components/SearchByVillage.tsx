import * as React from "react";
import { Segment, Divider, Grid, Header, Input, Icon, Dropdown } from "semantic-ui-react";

export interface ISearchByVillageProps {
}

export interface ISearchByVillageState {
    stateName: string,
    villageName: string,
    stateNames: any[],
    villageNames: any[],
    isFetching: boolean;
    searchQuery:string;
}

export default class SearchByVillage extends React.Component<ISearchByVillageProps, ISearchByVillageState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            stateName: "",
            villageName: "",
            stateNames: [],
            villageNames: [],
            isFetching: true,
            searchQuery:""
        }
    }
    render() {
        return (
            <div>
                <Segment piled>
                    <Grid stackable textAlign='center'>
                        <Grid.Row >
                            <Grid.Column verticalAlign='middle'>
                                <Header as='h6' icon>
                                    <Icon name='search' />
                                    Search by village
                                </Header>
                                <br />
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
                                    value={this.state.villageName}
                                    onChange={(e, data) => this._onChangeSemanticD(e, data, "villageName")}
                                    options={this.state.villageNames && this._getDropSemanticDownItem(this.state.villageNames)}
                                    placeholder='Start typing village name'
                                    style={{ width: "350px" }}
                                    loading={this.state.isFetching}
                                    onSearchChange={this.handleSearchChange}
                                />
                            </Grid.Column>
                        </Grid.Row >
                    </Grid>
                </Segment>
            </div>
        );
    }

    handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })
    _onChangeSemanticD = (e, data, stateName: string) => { }

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
}
