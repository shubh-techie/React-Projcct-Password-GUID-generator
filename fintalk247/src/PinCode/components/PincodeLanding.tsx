import * as React from "react";
import PincodeHeader from "./PincodeHeader";
import App from "./App";
import { Container, Header } from "semantic-ui-react";
import SearchByVillage from "./SearchByVillage";
import Disclaimer from "./Disclaimer";
import Feedback from "./Feedback";
import Footer from "../../views/Footer/Footer";


export interface IPincodeLandingProps {
}

export interface IPincodeLandingState {
    headerTest: string;
    displaySearchByPinCode: boolean;
    diplaySearchByVillage: boolean;
    displayFeedback: boolean;
    displayDisclaimer: boolean;
}

export default class PincodeLanding extends React.Component<IPincodeLandingProps, IPincodeLandingState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            headerTest: "locate your post office",
            displaySearchByPinCode: true,
            diplaySearchByVillage: false,
            displayFeedback: false,
            displayDisclaimer: false
        }

        this._changeStateOnMenuclick = this._changeStateOnMenuclick.bind(this);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <PincodeHeader changeStateOnMenuclick={this._changeStateOnMenuclick} />
                <Container>
                    <Header as='h1' color='grey'>{this.state.headerTest}</Header>
                    <br />
                    {this.state.displaySearchByPinCode && <App />}
                    {this.state.diplaySearchByVillage && <SearchByVillage />}
                    {this.state.displayFeedback && <Feedback />}
                    {this.state.displayDisclaimer && <Disclaimer />}
                </Container>
                <br />
                <br />
                <Footer />
            </div>
        );
    }

    _changeStateOnMenuclick(_headerTest: string, _displaySearchByPinCode: boolean, _diplaySearchByVillage: boolean, _displayFeedback: boolean, _displayDisclaimer: boolean) {
        this.setState({
            headerTest: _headerTest,
            displaySearchByPinCode: _displaySearchByPinCode,
            diplaySearchByVillage: _diplaySearchByVillage,
            displayFeedback: _displayFeedback,
            displayDisclaimer: _displayDisclaimer
        })
    }
}
