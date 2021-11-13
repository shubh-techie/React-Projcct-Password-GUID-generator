import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import { HomepageHeading } from "../HomepageHeading/HomepageHeading";
import Faq from "../../components/Faq";


export interface IFaqInfoProps {
}

export interface IFaqInfoState {

}

export default class FaqInfo extends React.Component<IFaqInfoProps, IFaqInfoState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HomepageHeading heading="How can we help you ? You can also browse below." imageUrl="assets/img/bg8.jpg" description="Modernize your core systems to tackle high-frequency decision making at the speed of insights and achieve zero latency. Build a digital infrastructure that enables your enterprise to listen, learn and leverage entrenched knowledge to make better decisions with minimal intervention." />
                <br />
                <br />
                <Container>
                    <Segment raised vertical padded='very' style={{ borderRadius: "10px" }}>
                        <Container>
                            <Faq />
                        </Container>
                    </Segment>
                </Container>
                <br />
            </div >
        );
    }

}
