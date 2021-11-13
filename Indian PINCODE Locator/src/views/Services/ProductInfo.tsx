import * as React from "react";
import { Container, Header, Segment, Grid, Icon, Card } from "semantic-ui-react";
import { ProductAndService, Header3style, dark } from "../../components/FCComponents";
import { HomepageHeading } from "../HomepageHeading/HomepageHeading";

const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)

export interface IProductInfoProps {
}

export interface IProductInfoState {

}

export default class ProductInfo extends React.Component<IProductInfoProps, IProductInfoState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ backgroundImage: `url(assets/img/worldmap.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius: "10px" }}>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row textAlign='center' style={{ padding: '8em 0em' }}>
                        <Grid.Column verticalAlign='middle' width={16}>
                            <Header icon as='h3' style={Header3style}>
                                Pushing our limits to provide the highest quality Website and custom web application Designs!
                            </Header>
                            <p style={dark}>
                                Your New website Comes With Unlimited Customization Possibilities
                                   </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={16} style={{ padding: '2em 0em' }}>
                            &nbsp;
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4}>
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='mobile alternate' style={{ color: "#00acc1" }} />
                                Fully Responsive Layouts
                                    </Header>
                            <p style={dark}>
                                Content management systems, Modern, User Friendly & Mobile Optimized Website Solutions product development
                                   </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4} >
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='gem' style={{ color: "#00acc1" }} />
                                Innovative Design Elements
                                    </Header>
                            <p style={dark}>
                                We Provide well-defined project life cycle, advance skill-set , innovation and consistent product development
                                   </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4}>
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='search plus' style={{ color: "#00acc1" }} />
                                Search Engine Optimization
                                    </Header>
                            <p style={dark}>
                                Customers.  You need them.  We can help deliver them to you.  finally its all about the business and growth.
                                   </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4}>
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='internet explorer' style={{ color: "#00acc1" }} />
                                Web Hosting and Support
                                    </Header>
                            <p style={dark}>
                                We don’t just build your site and walk away. We offer ongoing support for all your post-launch needs.
                            </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={16} style={{ padding: '2em 0em' }}>
                            &nbsp;
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4} >
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='wordpress' style={{ color: "#00acc1" }} />
                                WordPress Development
                                    </Header>
                            <p style={dark}>
                                Develop a WordPress site worthy of the brand behind it, we build digital marketing into design and development
                             </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4}>
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='fly' style={{ color: "#00acc1" }} />
                                Digital Media Marketing
                                    </Header>
                            <p style={dark}>
                                The goals of your business must be aligned with the goals of your site if you have any hope of reaching your visitors.
                                   </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4}>
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='rain' style={{ color: "#00acc1" }} />
                                Web Api intergation solution
                                    </Header>
                            <p style={dark}>
                                We help to connect two or more applications each other via their APIs to perform some joint function.
                                   </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={4}>
                            <Header icon as='h3' style={Header3style}>
                                <Icon name='users' style={{ color: "#00acc1" }} />
                                Outstanding Customer Support
                                    </Header>
                            <p style={dark}>
                                We Provide well-defined project life cycle, advance skill-set,innovation and consistent product development
                                   </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        );
    }

}
