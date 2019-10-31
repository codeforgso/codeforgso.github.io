import React from 'react'
import Page from '../components/page'

const Projects = () => (
    <Page title="">
        <div className="projects">
            <h1 className="title is-1">Our Projects</h1>
            <div className="columns is-centered">
                {/* Card 1 */}
                <div className="column is-one-third">
                    <div className="card card-equal-height">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img
                                    src="../static/web-design.jpg"
                                    alt="Web Design"
                                />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content title is-3 has-text-centered">
                                Code for GSO Website
                            </div>
                            <div className="content">
                                A redesign of this website.
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="card-footer-item">
                                <div className="level">
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Status</p>
                                            <p className="subtitle">
                                                In Design
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer-item">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Source</p>
                                        <p className="subtitle">N/A</p>
                                        {/* <a
                                        href="https://github.com/codeforgso/GoVote"
                                        className="subtitle"
                                    >
                                        gitgub
                                    </a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer-item">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Help Needed</p>
                                        <p className="subtitle">Yes</p>
                                        {/* <a
                                        href="https://github.com/codeforgso/GoVote/issues"
                                        className="subtitle"
                                    >
                                        Yes
                                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="column is-one-third">
                    <div className="card card-equal-height">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="../static/vote.jpg" alt="Vote" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content title is-3 has-text-centered">
                                Go Vote
                            </div>
                            <div className="content">
                                A web app providing local residents the ability
                                to to look up voter registration status and
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
                {/* Card 3 */}
                <div className="column is-one-third">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img
                                    src="../static/Prison_cell_block.jpg"
                                    alt="Opened Prison Door"
                                />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content title is-3 has-text-centered">
                                Re-Entry Resources
                            </div>
                            <div className="content">
                                A website providing information relevant and
                                valuable to residents reentering communities
                                after a period of incarceration. Project
                                initiated by Code for Asheville and scaled by
                                Open NC.
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
        </div>
    </Page>
)

export default Projects
