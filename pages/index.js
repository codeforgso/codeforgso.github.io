import React from 'react'
import Page from '../components/page'
import '../styles.scss'
const Home = () => (
    <Page title="Home">
        <div className="content">
            <p className="subtitle">
                Code for Greensboro works to improve the way our community uses
                technology and data. And we need you—no coding required.
            </p>
        </div>
        <div className="img-wrapper">
            <img
                src="../static/Washington-DC-Capitol.png"
                alt="Washington DC Capitol"
                style={{
                    width: '100%',
                }}
            />
        </div>
        <div>
            <div className="container">
                Code for Greensboro is a local chapter of Code for America, a
                national 501(c)(3) nonprofit. We are dedicated to helping grow
                Greensboro’s tech community and improve local government
                services through the development of civic technology projects,
                the volunteer efforts of local members of our community, and by
                educating the public on opportunities to contribute to their
                community through technology.
            </div>
            <div className="container">
                Code for Greensboro could not make it without the help of its
                community. Both tech-savy and none, we have had the opportunity
                to help others through the projects we conduct. The more, the
                merrier, as the level of impact we have is dependant on those
                who help. Join us on Slack and our meetups.
            </div>
        </div>
    </Page>
)

export default Home
