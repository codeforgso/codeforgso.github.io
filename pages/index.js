import React from 'react'
import Page from '../components/page'
import HeroImage from '../components/hero-image'

const Home = () => (
    <Page title="">
        <h1 className="title is-1">Home</h1>
        <div className="home container content">
            <p className="subtitle">
                {/* Code for Greensboro works to improve the way our community uses
                technology and data. And we need you—no coding required. */}
                Code for Greensboro is a welcoming and inclusive volunteer group
                of civic-minded thinkers, problem solvers, designers and techies
                who use creative technology to solve civic and social problems.
            </p>
            <HeroImage
                src="../static/GreensboroSkylineSmall.jpg"
                alt="Greensboro Skyline"
            />
        </div>
        <div className="container content">
            <p>
                Code for Greensboro is a local chapter of Code for America, a
                national 501(c)(3) nonprofit. We are dedicated to helping grow
                Greensboro’s tech community and improve local government
                services through the development of civic technology projects,
                the volunteer efforts of local members of our community, and by
                educating the public on opportunities to contribute to their
                community through technology.
            </p>
            <p>
                Code for Greensboro could not make it without the help of our
                community. Both tech-savvy and not, we have had the opportunity
                to help others through the projects we conduct. The more the
                merrier, as the level of impact we have is dependent on those
                who help. Join us on Slack and at our meetups.
            </p>
        </div>
    </Page>
)

export default Home
