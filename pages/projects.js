import React from 'react'
import Page from '../components/page'
import '../styles.scss'

const Projects = () => (
    <Page title="Our Projects">
        <p className="title">Our Projects</p>
        <div>
            <h2>Re-entry Resources</h2>
            <div>
                A website providing information relevant and valuable to
                residents reentering communities after a period of
                incarceration. Project initiated by Code for Asheville and
                scaled by Open NC.
            </div>
            <div>
                {' '}
                <a href="https://github.com/Open-NC/reentry-resources-hub">
                    {' '}
                    Open NC Repository{' '}
                </a>
            </div>
            <h2>GoVoteGSO</h2>
            <div>
                A web app providing local residents the ability to look up voter
                registration status and polling place information by address.
                Project initiated in partnership with the League of Women{"'"}s
                Voters Triad.{' '}
            </div>
            <div>
                {' '}
                <a href="https://govotegso.org/">
                    {' '}
                    Open NC Repository{' '}
                </a>
            </div>
        </div>
    </Page>
)

export default Projects
