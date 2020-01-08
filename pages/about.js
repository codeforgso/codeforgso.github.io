import React from 'react'
import Page from '../components/page'
import HeroImage from '../components/hero-image'
// import Leadership from '..//components/leadership'
import LeadershipCard from '..//components/leadershipCard'
import Leaders from '../static/leadership.json'

const About = () => (
    <Page title="Who We Are">
        <section className="section">
            <div className="container"></div>
            <h1 className="title is-1">Who We Are</h1>
            <div className="content about">
                <div className="leftcolumn">
                    <p>The Code for America mission is, in part, to</p>
                    <blockquote>
                        build open source technology and organize a network of
                        people dedicated to making government services simple,
                        effective, and easy to use.
                    </blockquote>
                    <HeroImage
                        src="../static/NDOCH.jpg"
                        alt="Greensboro National Day of Hacking"
                    />
                    <p>
                        As a Code for America Brigade, CfG extends this mission
                        to the government and citizens of Greensboro. Our
                        mission is to improve access to city data, to assist in
                        bettering city websites — and generally making the
                        relationship between the city and the citizens better
                        through technology.
                    </p>

                    <p className="content-heading">For Example</p>

                    <p>
                        What sorts of projects do we do? Mapping and recording
                        status of fire hydrants. Tracking storm water data. Apps
                        that report trash collection times and let citizens
                        report missed pickups. In short, the projects we improve
                        improve the parts of city government that would be
                        {'"'}nice to have{'"'}, but that — in the course of
                        entire city — can sometimes be forgotten.
                    </p>

                    <p className="content-heading">Is This Just For Coders?</p>

                    <p>
                        The short answer is, {'"'}nope{'"'}. We need people from
                        walks of life to participate. Of course we need
                        designers, user experience and user interface types, and
                        project managers. But you may not know that we also need
                        urban planners, software testers, photographers,
                        bloggers, product managers, and anyone else who wants to
                        make technology access better in the Gate City. As we
                        always say, we need the <em>community</em>.
                </p>

                    <p className="content-heading">
                        What goes on at our meetups?
                    </p>

                    <p>
                        We start every meetup with introductions and a welcome
                        new members. From there we move into a presentation or
                        updates from members who have attended community events,
                        meetings, or anything else that would interest the After
                        After that, our Project Leads will give quick project
                        updates and let everyone know what they need help with
                        night - and then the work begins.
                    </p>

                    <p>
                        Have an idea for a presentation you{"'"}d like to hear?
                        Want Want Want to sign up to give one? Add to the list
                        list assign a topic to yourself
                        <a href="https://github.com/codeforgso/lightning-talks/issues">
                            {' '}
                            here{' '}
                        </a>
                        . Not a member of our GitHub organization? Let us know
                        by by jumping into
                        <a href="https://slack.codeforgreensboro.org/">
                            {' '}
                            Slack{' '}
                        </a>
                        and posting to the general channel. We hope to see you
                        at our next
                        <a href="http://www.meetup.com/Code-for-Greensboro/">
                            {' '}
                            Meetup
                        </a>
                        !
                </p>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-2 content">Leadership</h2>
                <div className="columns leadership">
                    {Leaders.map(profile => {
                        return (
                            <div
                                className="column is-one-third"
                                key={profile.handle}
                            >
                                <LeadershipCard profile={profile} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-2">Sponsors</h2>
                <div>add content</div>
            </div>
        </section>
    </Page >
)

export default About
