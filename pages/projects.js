import React from 'react'
import Page from '../components/page'

const Projects = () => (
    <Page className="projects" title="">
        <h1 className="title is-1">Our Projects</h1>
        <div className="columns is-centered">
            <div className="column is-one-third">
                <div className="card">
                    <header className="card-header">
                        <div className="card-header-title is-centered">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="../static/vote.jpeg" alt="Vote" />
                                </figure>
                            </div>
                        </div>
                    </header>
                    <div className="card-content">
                        <div className="content title is-3 has-text-centered">
                            GoVoteGSO
                        </div>
                        <div className="content">
                            A web app providing local residents the ability to
                            look up voter registration status and polling place
                            information by address.

                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-item">
                            <div className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Status</p>
                                        <p className="subtitle">On Hold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer-item">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Source</p>
                                    {/* <p className="subtitle">github</p> */}
                                    <a
                                        href="https://github.com/codeforgso/GoVote"
                                        className="subtitle"
                                    >
                                        gitgub
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer-item">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Help Needed</p>
                                    {/* <p className="subtitle">Yes</p> */}
                                    <a
                                        href="https://github.com/codeforgso/GoVote/issues"
                                        className="subtitle"
                                    >
                                        Yes
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-one-third">
                <div className="card">
                    <header className="card-header">
                        <div className="card-header-title is-centered">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="./../static/Prison-224x224.jpg" alt="Opening Prison Door" />
                                </figure>
                            </div>
                        </div>
                    </header>
                    <div className="card-content">
                        <div className="content title is-3 has-text-centered">
                            Re-Entry Resources
                        </div>
                        <div className="content">
                            A website providing information relevant and
                            valuable to residents reentering communities after a
                            period of incarceration. Project initiated by Code
                            for Asheville and scaled by Open NC.
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-item">
                            <div className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Status</p>
                                        <p className="subtitle">On Hold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer-item">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Source</p>
                                    {/* <p className="subtitle">github</p> */}
                                    <a
                                        href="https://github.com/Open-NC/reentry-resources-hub"
                                        className="subtitle"
                                    >
                                        gitgub
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer-item">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Help Needed</p>
                                    {/* <p className="subtitle">Yes</p> */}
                                    <a
                                        href="https://github.com/codeforgso/GoVote/issues"
                                        className="subtitle"
                                    >
                                        Yes
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2>Re-entry Resources</h2>
            <div className="projects">
                <p>
                    {' '}
                    A website providing information relevant and valuable to
                    residents reentering communities after a period of
                    incarceration. Project initiated by Code for Asheville and
                    scaled by Open NC.
                </p>{' '}
                <p>
                    <a href="https://github.com/Open-NC/reentry-resources-hub">
                        {' '}
                        Re-entry Resources Repository (Open NC){' '}
                    </a>
                </p>
            </div>
            <br />
            <h2>GoVoteGSO</h2>
            <div className="projects">
                A web app providing local residents the ability to look up voter
                registration status and polling place information by address.
                Project initiated in partnership with the League of Women{"'"}s
                Voters Triad. <br />
                <a href="https://github.com/codeforgso/GoVote">
                    GoVoteGSO Repository
                </a>
            </div>
            <div>
                {' '}
                <a href="https://govotegso.org/"> Open NC Repository </a>
            </div>
            <div>
                {' '}
                <a href="https://govotegso.org/"> Open NC Repository </a>
            </div>
        </div>
    </Page>
)

export default Projects
