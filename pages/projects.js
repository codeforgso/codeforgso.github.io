import React from 'react'
import Page from '../components/page'
import '../styles.scss'

const Projects = () => (
<Page title="Our Projects">
        <div>
            <h2>Re-entry Resources</h2>
            <div className='projects'>
               <p> A website providing information relevant and valuable to
                residents reentering communities after a period of
                incarceration. Project initiated by Code for Asheville and
                scaled by Open NC.</p>
                {' '}
                <p>
                  <a href="https://github.com/Open-NC/reentry-resources-hub">
                    {' '}
Re-entry Resources Repository (Open NC){' '}
                  </a>
                </p>
            </div> 
            <br/>
            <h2>GoVoteGSO</h2>
            <div className='projects'>
                A web app providing local residents the ability to look up voter
                registration status and polling place information by address.
                Project initiated in partnership with the League of Women{"'"}s
                Voters Triad.{' '}
              <br/>
              <a href="https://github.com/codeforgso/GoVote">
                GoVoteGSO Repository
              </a>
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
