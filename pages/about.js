import React from 'react'
import Page from '../components/page'
import '../styles.scss'

const About = () => (
    <Page title="About">
        <div className="content">
            <div className="leftcolumn">
                <p>The Code for America mission is, in part, to</p>
                <blockquote>
                    build open source technology and organize a network of
                    people dedicated to making government services simple,
                    effective, and easy to use.
                </blockquote>
                <div className="img-wrapper">
                    <img
                        src="../static/Woolworths-Diner-March.svg"
                        alt="Woolworths Diner March"
                        style={{ width: '100%' }}
                    />
                </div>
                <p>
                    As a Code for America Brigade, CfG extends this mission to
                    the government and citizens of Greensboro. Our mission is to
                    improve access to city data, to assist in creating and
                    bettering city websites — and generally making the
                    relationship between the city and the citizens better
                    through technology.
                </p>

                <h5>For Example</h5>

                <p>
                    What sorts of projects do we do? Mapping and recording the
                    status of fire hydrants. Tracking storm water data. Building
                    apps that report trash collection times and let citizens
                    report missed pickups. In short, the projects we undertake
                    improve the parts of city government that would be "nice to
                    have", but that — in the course of running an entire city — can
                    sometimes be forgotten.
                </p>

                <h5>Is This Just For Coders?</h5>

                <p>
                    The short answer is, {'"'}nope{'"'}. We need people from all
                    walks of life to participate. Of course we need developers,
                    designers, user experience and user interface types, and
                    project managers. But you may not know that we also need
                    urban planners, software testers, photographers, bloggers,
                    product managers, and anyone else who wants to make
                    technology access better in the Gate City. As we always say,
                    we need the <em>community</em>.
                </p>

                <h5>What goes on at our meetups?</h5>

                <p>
                    We start every meetup with introductions and a welcome to
                    new members. From there we move into a presentation or
                    updates from members who have attended community events,
                    meetings, or anything else that would interest the Brigade.
                    After that, our Project Leads will give quick project status
                    updates and let everyone know what they need help with that
                    night - and then the work begins.
                </p>

                <p>
                    Have an idea for a presentation you{"'"}d like to hear? Want
                    to sign up to give one? Add to the list or assign a topic to
                    yourself{' '}
                    <a href="https://github.com/codeforgso/lightning-talks/issues">
                        here
                    </a>
                    . Not a member of our GitHub organization? Let us know by
                    jumping into{' '}
                    <a href="https://slack.codeforgreensboro.org/">
                        {' '} Slack and posting to the general channel. We hope
                    to see you at our next{' '}
                    <a href="http://www.meetup.com/Code-for-Greensboro/">
                        {' '}
                        Meetup
                    </a>
                    !
                </p>
            </div>
        </div>
    </Page>
)

export default About
