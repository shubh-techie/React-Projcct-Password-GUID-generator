import * as React from "react";
import { Grid, Icon, Accordion } from "semantic-ui-react";
import { light } from "./FCComponents";


export interface IFaqProps {
}

export interface IFaqState {
    activeIndex: number;
}

export default class Faq extends React.Component<IFaqProps, IFaqState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            activeIndex: 0
        }

    }

    render() {
        const { activeIndex } = this.state
        return (
            <Grid stackable verticalAlign='middle'>
                <Grid.Row style={{ padding: '4em 0em' }}>
                    <Grid.Column verticalAlign='middle' width={16} style={{ padding: '0em 8em 0em 8em' }}>
                        <p style={light}>
                            General Questions (10)
                        </p>
                        <Accordion fluid styled>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What areas do you serve?
                   </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <p>
                                    We work with all types of clients from big corporations to individuals. We have clients all over the United States and even internationally.
                               </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                How can we pay to get started?
                        </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <p>
                                    We accept all major credit cards including Visa, Master Card, American Express, Discover. We also accept Paypal, Checks, Money Orders and Western Union.
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 2}
                                index={2}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Are your web design costs one time?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <p>
                                    Yes, just a one time cost as mentioned on our website for web design.
                              </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 3}
                                index={3}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What is your typical turn around period?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <p>
                                    Due to the high level of custom work and the collaborative process involved in each website we build, it’s difficult to predict an exact turn around time. We will work together with you to complete the web design Project in atimely manner. We agree to work expeditiously to complete the web design, but delays can occur if any milestone that requires your action, such as approving design mockups or web design changes, is not acknowledged on time. As an example, a 5 page website can be finished anywhere between 1-6 weeks after we’ve received all content and feedback from you. It’s a safe estimate to expect at least a month for your project, though it could be much quicker or slower, depending on your input. Ask your sales agent or project manager for more information. We also offer an express service for an additional fee to expedite your project. Always remember, we can only work as fast as you allow us; turn around time is client-dependent. If content is provided sooner, initial and on-going instructions are clear and revisions requested are reasonable, turn around time can be significantly decreased. On the other hand, it could drastically increase due to client in-action, delayed mockup approvals, back and forth change requests, etc.
                            </p>
                            </Accordion.Content>


                            <Accordion.Title
                                active={activeIndex === 4}
                                index={4}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Will you custom design our website for this price?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <p>
                                    Absolutely, we do awesome custom web design.
                            </p>

                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 5}
                                index={5}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Can I call any of your clients for a testimonial?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 5}>
                                <p>
                                    Sure, you can call any of them. Since we cannot control what happens once we complete the website, we can not guarantee they will be able to take your call. You can take a look at our Testimonials page for just a few references. The best testimonial for us is our past work in our portfolio. You will be hard pressed to find any other company with as large a portfolio as ours.
                            </p>
                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 6}
                                index={6}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                I am a small home business, do you work with individuals?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 6}>
                                <p>
                                    Yes, we work with big and small businesses, corporations, professionals, home business owners, startups, and even individuals.
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 7}
                                index={7}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Do you design adult web sites?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 7}>
                                <p>
                                    NO.
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 8}
                                index={8}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What are your business hours?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 8}>
                                <p>
                                    We are open 24 X 7 (except on major US Holidays).
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 9}
                                index={9}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What kind of website is suitable for my business?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 9}>
                                <p>
                                    Well that totally depends on the kind of business you own, your goal and your budget. digital surface excels in building all kinds of websites.
                            </p>

                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 10}
                                index={10}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What are the payment terms?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 10}>
                                <p>
                                    50% of advance payment is a requisite. A link of the ready site will be sent for your approval. Once it is approved from your side the rest 50% payment is the stipulation before making the website live.
                            </p>
                            </Accordion.Content>
                        </Accordion>
                        <br />
                        <br />
                        <p style={light}>
                            Technical Questions (19)
                        </p>
                        <Accordion fluid styled>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What information should I have ready upon purchasing my design package?
                   </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <p>
                                    We will need your company profile, contact info, products and services, and any other information you intend to present on your website.
                               </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                How much input do I have?
                        </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <p>
                                    We welcome your input! The more input we receive from you the better able we will be to satisfy your needs and produce a site that will have the desired look and impact that you want. It’s your website, we want it to look the way you want it. We guarantee it 100%
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 2}
                                index={2}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                If I already have a site can you help me improve it?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <p>
                                    Yes. We can usually redesign or freshen up an existing site quicker, and for less money than building one from scratch. Whether your company’s website “doesn’t look professional”, takes too long to load or the navigation is baffling to visitors, we can help.
                              </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 3}
                                index={3}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Can you use my business's existing logo, brochure design, and other materials for my website?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <p>
                                    Certainly. If your logo and promotional materials are not in electronic format, we can convert them to a format appropriate for your website for a small fee. We can accept almost any type of file. If your materials are printed, we can scan and convert them. Go Web Design’s designers will help you establish your online image to be consistent with your existing image that your customers already know & remember.
                            </p>
                            </Accordion.Content>


                            <Accordion.Title
                                active={activeIndex === 4}
                                index={4}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Does my business need to be computer-based in order to have a website? Do I need to know about computers?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <p>
                                    NO, you do not need to own a computer or have computers involved in your business in order to have a website. Many companies do filing, invoicing and more without a computer. Creating a website is more about exposing your business to new potential clients and generating new sales. There is no need to overhaul the way your company does business.
                            </p>

                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 5}
                                index={5}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What does 'website maintenance' or 'website updates' mean?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 5}>
                                <p>
                                    Website Maintenance or Website Updates refers to changes made to your website after the initial design & setup. Keeping a website up-to-date is essential in having repeat visitors to your site. Updating the site with sales, articles, new products, newsletters, press releases, financial figures and links are all examples of website Maintenance.
                            </p>
                                <p>
                                    You are welcome to send over your list of necessary revisions. We are happy to assist you with any changes you would like at $45/hour.
                             </p>
                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 6}
                                index={6}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Who writes the copy/text for each of the pages on the website?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 6}>
                                <p>
                                    You are responsible for writing the copy/text for your website. However, Go Web Design will place your supplied copy on the website for you. We also offer copy writing assistance at $100/page.
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 7}
                                index={7}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Do you have your own servers?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 7}>
                                <p>
                                    Yes. in fact we have a full rack of servers in our Datacenter in Pennsylvania.
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 8}
                                index={8}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                What does 'website maintenance' or 'website updates' mean?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 8}>
                                <p>
                                    No, unlike other companies we don’t make hosting with us mandatory. However, choosing to host with us is a BIG advantage for you. You don’t have to worry about any technical aspects of managing your hosting account and the servers, we do it all for you. Plus you just have a one point contact for your Web Presence. If there is a problem it is always better to call a single reliable company who can take care of everything while you concentrate on your business. We will make your website one less worry for you.
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 9}
                                index={9}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Can I have a site that looks like this?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 9}>
                                <p>
                                    Actually, making it look like anything you want is not much of a factor. We’ll start with your initial direction and then work with you to refine it.
                            </p>

                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 10}
                                index={10}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Have you built a site like mine before?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 10}>
                                <p>
                                    Usually the content of a site or type of business does not affect the methods, procedures and codes used to build it. For example, you wouldn’t ask a car wash if they had washed your color car before. Some sites require advanced functions to perform special operations and Go Web Design has the depth and experience to meet these needs. It would be unlikely that we had not had experience with your required web site functions. We have worked with a wide range of clientele, as evident from our portfolio.
                            </p>

                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 11}
                                index={11}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                I want a site like eBay/MySpace/Youtube/...etc. Can you do this?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 11}>
                                <p>
                                    These types of websites require complex web development and will be quoted individually. Costs can exceed $10,000 for this type of work.
                            </p>

                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 12}
                                index={12}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                I see a lot of your websites are flash based? My website targets a serious and mature audience. Can you make clean HTML and non flash corporate websites?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 12}>
                                <p>
                                    Sure, in fact we design very good professional websites. We have experience in working with clients from different fields and we understand their different taste. Our portfolio is just a partial list of our clients. If you did not find examples of sites you are looking for, please email us or call us, and we can give you more examples.
                            </p>

                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 13}
                                index={13}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Can you host our website and register our domain name?
                           </Accordion.Title>
                            <Accordion.Content active={activeIndex === 13}>
                                <p>
                                    Yes, we would love to. We charge a low $14.95 monthly fee for web hosting. Domain Names are $20/Year. We provide with custom email accounts and a fantastic control panel to check your web visitor stats, manage your files etc.
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 14}
                                index={14}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Can I use my existing website address if I host with you?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 14}>
                                <p>
                                    Yes, we can easily help you retain your old domain name on our servers or register a new one for you.
                            </p>
                            </Accordion.Content>


                            <Accordion.Title
                                active={activeIndex === 15}
                                index={15}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Do you offer emergency after hours support?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 15}>
                                <p>
                                    We have 24/7 email and chat support. Phone support is available during Business Hours. We give you phone numbers of key individuals and in case of emergency, after business hours where you can reach them.
                            </p>
                            </Accordion.Content>


                            <Accordion.Title
                                active={activeIndex === 16}
                                index={16}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Can you create a logo to go with our web site?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 16}>
                                <p>
                                    Sure we can. In fact, we make excellent logos for $180.00. We can also design brochures, business cards and all your stationary to go with your website.
                            </p>
                            </Accordion.Content>


                            <Accordion.Title
                                active={activeIndex === 17}
                                index={17}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Can you help us get listed in search engines?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 17}>
                                <p>
                                    We have a Web Marketing Service (Search Engine Optimization) from $295/Year to help you list in Major Search Engines. For more details, please ask a representative when you call us.
                               </p>
                            </Accordion.Content>


                            <Accordion.Title
                                active={activeIndex === 18}
                                index={18}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Will we get a chance to review and suggest modifications to the website before it is launched?
                         </Accordion.Title>
                            <Accordion.Content active={activeIndex === 18}>
                                <p>
                                    Of course! In fact, we will work with you closely to create the website based on your input. We will do our very best to make you happy.
                            </p>
                            </Accordion.Content>
                        </Accordion>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }


}
