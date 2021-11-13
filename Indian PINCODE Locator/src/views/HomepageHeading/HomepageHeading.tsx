import * as React from "react";
import { Container, Grid, Header, Button, Icon } from "semantic-ui-react";
import { ModalExampleCloseIcon } from "../../components/FCComponents";

interface IHomepageHeadingProps {
    mobile?: boolean;
    imageUrl?: string;
    heading?: string;
    description?: string;
}
interface IHomepageHeadingState {
    displayModel: boolean;
}

export class HomepageHeading extends React.Component<IHomepageHeadingProps, IHomepageHeadingState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            displayModel: false
        }

        this._onBtnClick = this._onBtnClick.bind(this);
    }
    render() {
        let _imageUrl = this.props.imageUrl ? this.props.imageUrl : "assets/img/bgtech2.jpg";
        let _heading = this.props.heading ? this.props.heading : 'Do you need website ? Your Story Starts With Us.';
        let _description = this.props.description ? this.props.description : 'Run the business, Create the website and Redefine possibilities by bridging the gap between your product and customers. Digitize and Modernize you application to reach our maximum audiance'
        return (
            <div style={{ backgroundImage: `url(${_imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Container textAlign="left"  >
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column computer={8} tablet={12} mobile={16} >
                                <Header
                                    as='h1'
                                    content={_heading}
                                    inverted
                                    style={{
                                        fontSize: this.props.mobile ? '2em' : '4em',
                                        fontWeight: 'normal',
                                        marginBottom: 0,
                                        // marginTop: this.props.mobile ? '1.5em' : '3em',
                                        paddingTop: this.props.mobile ? '1.5em' : '1.5em',
                                        fontFamily: "Roboto Slab, Times New Roman, serif",
                                        textDecoration: "none",
                                    }}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column computer={12} tablet={12} mobile={16}>
                                <Header
                                    as='h2'
                                    content={_description}
                                    inverted
                                    style={{
                                        fontSize: this.props.mobile ? '1.5em' : '1.7em',
                                        fontWeight: 'normal',
                                        marginTop: this.props.mobile ? '0.5em' : '1.5em',
                                        //marginBottom: this.props.mobile ? '0.5em' : '1.5em',
                                        paddingBottom: this.props.mobile ? '0.5em' : '1.5em',
                                        fontFamily: "Roboto Slab, Times New Roman, serif",
                                        backgroundColor: "#585858",
                                        opacity: "0.7",
                                        padding: ".7em"
                                    }}
                                />
                                <Button onClick={this._onBtnClick} color="purple" size='huge'>
                                    Get Started
                                <Icon name='arrow right' />
                                </Button>
                                {this.state.displayModel && <ModalExampleCloseIcon />}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }

    _onBtnClick = () => {
        this.setState({ displayModel: true });
    }
}

