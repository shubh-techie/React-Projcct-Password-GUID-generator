import * as React from "react";
import { Button, Grid, Header, Icon, Modal, } from 'semantic-ui-react'
import Contact from "./Contact";


export const light = {
    fontSize: '1.33em', fontFamily: "Roboto,Helvetica,Arial,sans-serif", color: "#999"
}

export const lightwtihBg = {
    fontSize: '1.33em', fontFamily: "Roboto,Helvetica,Arial,sans-serif", color: "#999", background: "linear-gradient(135deg, #e570e7 0%,#79f1fc 100%)", padding: '0.7em'
}

export const dark = {
    fontSize: '1.33em', fontFamily: "Roboto,Helvetica,Arial,sans-serif", color: "#696969"
}

export const white = {
    fontSize: '1.33em', fontFamily: "Roboto,Helvetica,Arial,sans-serif", color: "#ffffff "
}

export const Header3style = {
    fontSize: '2em', fontFamily: "Roboto Slab, Times New Roman, serif"
}

export const Header3Whitestyle = {
    fontSize: '2em', fontFamily: "Roboto Slab, Times New Roman, serif"
}



export const ProductAndService = () => {
    return (
        <Grid container stackable verticalAlign='middle' >
            <Grid.Row textAlign="center" style={{ padding: '6em 0em' }} >
                <Grid.Column verticalAlign='middle' width={16}>
                    <Header icon as='h3' style={Header3style}>
                        We are more than just web designers
                                    </Header>
                    <p style={light}>
                        Make technology a competitive advantage in your organization. We Offer Exceptional Website Design and development Services to suit Individual Business Needs.Our web design process is focused on working towards your commercial objectives, to ensure you achieve the highest levels of return on investment.
                    </p>
                    <p style={light}>
                        Since our beginning, we have focused on designing and developing top-performing websites that convert visitors into leads. Each project breaks down into four main areas.
                    </p>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={16} style={{ padding: '2em 0em' }}>
                    &nbsp;
            </Grid.Column>
                <Grid.Column verticalAlign='middle' width={4}  >
                    <Header icon as='h3' style={Header3style}>
                        <Icon name='lightbulb' style={{ color: "#a333c8" }} />
                        STRATEGY & ANALYTICS
                                    </Header>
                    <p style={light}>
                        Fintalk247 ensure successful websites rank well, attract visitors and compel them to take action and convert into leads or customers. We projects follow these strategic core principles.
                                   </p>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={4} >
                    <Header icon as='h3' style={Header3style}>
                        <Icon name='magic' style={{ color: "#a333c8" }} />
                        WEB DESIGN & UX
                                    </Header>
                    <p style={light}>
                        Fintalk247 Guide visitors, help them become informed, trusting and likely to act. Your website should be easy to use, easy to update and a powerful source of demand and supply.
                                   </p>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={4}>
                    <Header icon as='h3' style={Header3style}>
                        <Icon name='cogs' style={{ color: "#a333c8" }} />
                        WEB DEVELOPMENT
                                    </Header>
                    <p style={light}>
                        Fintalk247 sites are secure and built on latest versions of open source content management systems. All web development is done in-house from our Chicago office.
                    </p>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={4}>
                    <Header icon as='h3' style={Header3style}>
                        <Icon name='chart line' style={{ color: "#a333c8" }} />
                        ANALYTICS & OPTIMIZATION
                    </Header>
                    <p style={light}>
                        Fintalk247 sites are designed to provide longterm results. Analytics tell you what your visitors are doing over time so that you can optimize content to yield high conversion.
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}


export const IntroductionFinTalk = () => {
    return (
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row textAlign='center' style={{ padding: '6em 0em' }}>
                <Grid.Column width={16}>
                    <Header as='h3' style={Header3style}>
                        We get results, Custom web applications and consulting
                                   </Header>
                    <p style={light}>
                        Fintalk247 is a full-service web design agency. We craft beautiful, engaging websites and deliver successful SEO campaigns. We specialise in website design, custom web development for desktop and mobile and search engine optimisation (SEO). Our developers are certified and highly skilled in a multitude of programming languages, frameworks, and technology stacks.
                                   </p>
                    <Header as='h3' style={Header3style}>
                        Web Design, Web Development & SEO is what we do
                                   </Header>
                    <p style={light}>
                        We understand your website is central to your brand identity, reputation and how customers perceive you.  We take the time to understand your business and create a strategy to fulfil your commercial objectives.
                </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export const GetStartedInfo = () => {
    return (
        <Grid stackable verticalAlign='middle' style={{ padding: '6em 4em 6em 4em', backgroundColor: "purple" }}>
            <Grid.Row container textAlign='center' >
                <Grid.Column width={16}>
                    <Header as='h3' style={Header3Whitestyle} inverted>
                        Get Started with your Project or Take Existing one to Next Level with more dynamic and mobile world.
                </Header>
                    <p style={white}>
                        Please feel free to view our web design portfolio to see our growing list of successful projects and customer testimonials.
                        Our experienced web design professionals are more than happy to offer free website consultation and discuss how Go Web Design can further your business.
                   </p>
                    <Button color="purple" size='huge'>
                        Estimate Project
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}



export const ModalExampleCloseIcon = () => (
    <Modal closeIcon>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
            <p>
                Your inbox is getting full, would you like us to enable automatic
                archiving of old messages?
           </p>
            <Contact />
        </Modal.Content>
        <Modal.Actions>
            <Button color='red'>
                <Icon name='remove' /> No
       </Button>
            <Button color='green'>
                <Icon name='checkmark' /> Yes
       </Button>
        </Modal.Actions>
    </Modal>
)
