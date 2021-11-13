import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import Contact from "../../components/Contact";
import { ProductAndService, IntroductionFinTalk, GetStartedInfo } from "../../components/FCComponents";
import { HomepageHeading } from "../HomepageHeading/HomepageHeading";


const style = {
    fontFamily: "Roboto Slab, Times New Roman, serif",
}


export interface IPincodeLandingProps {
}

export interface IPincodeLandingState {

}



export default class LandingPage extends React.Component<IPincodeLandingProps, IPincodeLandingState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HomepageHeading />
                <br />
                <br />
                <Container>
                    <Segment raised vertical padded='very' style={{ borderRadius: "10px" }}>
                        <Container>
                            <IntroductionFinTalk />
                            <ProductAndService />
                            <Contact />
                        </Container>
                    </Segment>
                </Container>
                <br />
                <br />
                <GetStartedInfo />
            </div>
        );
    }

}
