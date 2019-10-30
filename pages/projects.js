import React from 'react'
import Page from '../components/page'

const Projects = () => (
    <Page title="">
        <h1 className="title is-1">Our Projects</h1>
        <div className="columns is-centered">
            <div className="column is-one-third">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title is-centered">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="../static/vote.jpeg" alt="Vote" />
                                </figure>
                            </div>
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
                            <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">
                                11:09 PM - 1 Jan 2016
                            </time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="container card-footer-item">
                            <p className="content is-right">ppppppppp</p>
                            <p className="content">qqqqqqqqqq</p>
                        </a>
                        <a href="#" className="card-footer-item">
                            Source
                        </a>
                        <a href="#" className="card-footer-item">
                            Help Needed
                        </a>
                    </footer>
                </div>
            </div>
            {/*  */}
            <div className="column is-one-quarter">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title is-centered">
                            Component
                        </p>
                        <a
                            href="#"
                            className="card-header-icon"
                            aria-label="more options"
                        >
                            <span className="icon">
                                <i
                                    className="fas fa-angle-down"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
                            <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">
                                11:09 PM - 1 Jan 2016
                            </time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">
                            Save
                        </a>
                        <a href="#" className="card-footer-item">
                            Edit
                        </a>
                        <a href="#" className="card-footer-item">
                            Delete
                        </a>
                    </footer>
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
        </div>
    </Page >
)

export default Projects
