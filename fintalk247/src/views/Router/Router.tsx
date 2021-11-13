import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HeaderNav from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services/Services";
import ContactUs from "../ContactUs/ContactUs";
import FaqInfo from "../FaqInfo/FaqInfo";



interface IRouterProps {

}
interface IRouterState {
}

export default class Router extends React.Component<IRouterProps, IRouterState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
        }
    }
    render() {
        return (
            <BrowserRouter >
                <HeaderNav />
                <Route exact path="/" component={LandingPage} />
                <Route path="/Services" component={Services} />
                <Route path="/ContactUs" component={ContactUs} />
                <Route path="/Faq" component={FaqInfo} />
                <br />
                <br />
                <Footer />
            </BrowserRouter>
        )
    }

}






// const getWidth = () => {
//     const isSSR = typeof window === 'undefined'
//     return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
// }

// const ResponsiveContainer = ({ children }) => (
//     <div>
//         <DesktopContainer getWidth={getWidth}>>{children}</DesktopContainer>
//         <MobileContainer getWidth={getWidth}>>{children}</MobileContainer>
//     </div>
// )



// interface IDesktopContainerProps {
//     children: any;
//     getWidth: any;
// }
// interface IDesktopContainerState {
//     fixed: boolean;
// }

// class DesktopContainer extends React.Component<IDesktopContainerProps, IDesktopContainerState> {
//     constructor(props: any, state: any) {
//         super(props, state);
//         this.state = {
//             fixed: false
//         }

//     }
//     hideFixedMenu = () => this.setState({ fixed: false })
//     showFixedMenu = () => this.setState({ fixed: true })

//     render() {
//         const { children } = this.props

//         return (
//             <Responsive getWidth={this.props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
//                 <Visibility
//                     once={false}
//                     onBottomPassed={this.showFixedMenu}
//                     onBottomPassedReverse={this.hideFixedMenu}
//                 >
//                     <Segment
//                         inverted
//                         textAlign='center'
//                         style={{ minHeight: 700, padding: '1em 0em' }}
//                         vertical
//                     >
//                         <Menu
//                             fixed={this.state.fixed ? 'top' : null}
//                             inverted={!this.state.fixed}
//                             pointing={!this.state.fixed}
//                             secondary={!this.state.fixed}
//                             size='large'
//                         >
//                             <Container>
//                                 <Menu.Item as='a' active>
//                                     Home
//                   </Menu.Item>
//                                 <Menu.Item as='a'>Work</Menu.Item>
//                                 <Menu.Item as='a'>Company</Menu.Item>
//                                 <Menu.Item as='a'>Careers</Menu.Item>
//                                 <Menu.Item position='right'>
//                                     <Button as='a' inverted={!this.state.fixed}>
//                                         Log in
//                     </Button>
//                                     <Button as='a' inverted={!this.state.fixed} primary={this.state.fixed} style={{ marginLeft: '0.5em' }}>
//                                         Sign Up
//                     </Button>
//                                 </Menu.Item>
//                             </Container>
//                         </Menu>
//                         <LandingPage />
//                     </Segment>
//                 </Visibility>

//                 {children}
//             </Responsive>
//         )
//     }
// }


// interface IMobileContainerProps {
//     children: any;
//     getWidth: any;

// }
// interface IMobileContainerState {
//     sidebarOpened: boolean;
// }

// class MobileContainer extends React.Component<IMobileContainerProps, IMobileContainerState>  {
//     constructor(props: any, state: any) {
//         super(props, state);
//         this.state = {
//             sidebarOpened: false
//         }

//     }
//     handleSidebarHide = () => this.setState({ sidebarOpened: false })
//     handleToggle = () => this.setState({ sidebarOpened: true })

//     render() {
//         const { children } = this.props
//         const { sidebarOpened } = this.state

//         return (
//             <Responsive
//                 as={Sidebar.Pushable}
//                 getWidth={this.props.getWidth}
//                 maxWidth={Responsive.onlyMobile.maxWidth}
//             >
//                 <Sidebar
//                     as={Menu}
//                     animation='push'
//                     inverted
//                     onHide={this.handleSidebarHide}
//                     vertical
//                     visible={sidebarOpened}
//                 >
//                     <Menu.Item as='a' active>
//                         Home
//             </Menu.Item>
//                     <Menu.Item as='a'>Work</Menu.Item>
//                     <Menu.Item as='a'>Company</Menu.Item>
//                     <Menu.Item as='a'>Careers</Menu.Item>
//                     <Menu.Item as='a'>Log in</Menu.Item>
//                     <Menu.Item as='a'>Sign Up</Menu.Item>
//                 </Sidebar>

//                 <Sidebar.Pusher dimmed={sidebarOpened}>
//                     <Segment
//                         inverted
//                         textAlign='center'
//                         style={{ minHeight: 350, padding: '1em 0em' }}
//                         vertical
//                     >
//                         <Container>
//                             <Menu inverted pointing secondary size='large'>
//                                 <Menu.Item onClick={this.handleToggle}>
//                                     <Icon name='sidebar' />
//                                 </Menu.Item>
//                                 <Menu.Item position='right'>
//                                     <Button as='a' inverted>
//                                         Log in
//                     </Button>
//                                     <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
//                                         Sign Up
//                     </Button>
//                                 </Menu.Item>
//                             </Menu>
//                         </Container>
//                     </Segment>
//                     {children}
//                 </Sidebar.Pusher>
//             </Responsive>
//         )
//     }
// }

