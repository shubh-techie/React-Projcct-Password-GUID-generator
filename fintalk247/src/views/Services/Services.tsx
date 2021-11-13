import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import { ProductAndService } from "../../components/FCComponents";
import { HomepageHeading } from "../HomepageHeading/HomepageHeading";
import ProductInfo from "./ProductInfo";


export interface IPincodeLandingProps {
}

export interface IPincodeLandingState {

}

export default class Services extends React.Component<IPincodeLandingProps, IPincodeLandingState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <HomepageHeading heading="Digitize and Modernize you application." imageUrl="assets/img/servicesbg1.jpg" description="We bring you powerful advantages to navigate your digital transformation. Deliver design-led delightful experiences built on a deep empathy for customers. Conquer context, content and channel to make CX your competitive advantage." />
                <br />
                <br />
                <Container>
                    <Segment raised vertical padded='very' style={{ borderRadius: "10px" }}>
                        <Container>
                            <ProductAndService />
                        </Container>
                    </Segment>
                </Container>
                <br />
                <br />
                <ProductInfo />
            </div>
        );
    }

}
