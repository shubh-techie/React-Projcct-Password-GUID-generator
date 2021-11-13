import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import Contact from "../../components/Contact";
import { HomepageHeading } from "../HomepageHeading/HomepageHeading";
import Faq from "../../components/Faq";


export interface IContactUsProps {
}

export interface IContactUsState {

}

export default class ContactUs extends React.Component<IContactUsProps, IContactUsState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HomepageHeading heading="Redefine possibilities by bridging the gap between your product and customers " imageUrl="assets/img/contactus2.jpg" description="Make your data do more. Act on your next opportunity, next pitfall and next threat before you must. Get to the source of the insights instead of relying on derivatives! Leverage enterprise knowledge and sense micro-feedback to respond in an agile and meaningful way." />
                <br />
                <br />
                <Container>
                    <Segment raised vertical padded='very' style={{ borderRadius: "10px" }}>
                        <Container>
                            <Contact />
                            <Faq />
                        </Container>
                    </Segment>
                </Container>
                <br />
            </div >
        );
    }

}
