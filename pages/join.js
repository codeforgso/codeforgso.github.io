import React from 'react'
import Page from '../components/page'

// class Join extends React.Component {
//     render() {
//         return (
const Join = () => (
    <Page title="">
        <h1 className="title is-1">Join Us</h1>
        <div className="join content">
            <div className="join-item">
                <a href="https://www.meetup.com/Code-for-Greensboro">
                    <div>
                        <img src="../static/meetup.svg" alt="Meetup logo" />
                    </div>
                </a>
                <p>
                    Meetup is a platform for finding and building local
                    communities. People use Meetup to meet new learn new things,
                    find support, get out of their comfort zones, and pursue
                    their passions, together.
                </p>
            </div>
            <br />
            <div className="join-item">
                <a href="https://bit.ly/cfgso-slack ">
                    <div>
                        <img src="../static/icon_slack.svg" alt="Slack logo" />
                    </div>
                </a>
                <p>
                    Slack is a collaboration hub, where the right people
                    information come together, helping everyone get work done.
                </p>
                <p>
                    If you are already on our Slack channel, just click
                    <a href="https://cfgso.slack.com"> here</a>
                </p>
            </div>
            <br />
            <div className="join-item">
                <h2>
                    <a href="mailto:hello@codeforgreensboro.org">Email Us</a>
                </h2>
            </div>
        </div>
    </Page>
)
//     }
// }

export default Join
