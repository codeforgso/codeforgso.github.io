import Link from 'next/link'

const footer = () => (
    <footer className="footer">
        {/* <div className="content has-text-centered">
            <div className="columns">
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/join">
                            <a className="title">Join</a>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/conduct">
                            <a className="title">Code of Conduct</a>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/resources">
                            <a className="title">Resources</a>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/contact">
                            <a className="title">Contact Us</a>
                        </Link>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        Copyright {new Date().getFullYear()} Code For Greensboro
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div className="content"> */}
        {/* <div className="columns"> */}
        <ul>
            <div className="columns">
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/join">
                            <a className="title">Join</a>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/conduct">
                            <a className="title">Code of Conduct</a>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/resources">
                            <a className="title">Resources</a>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="title is-4 red has-text-centered">
                        <Link href="/contact">
                            <a className="title">Contact Us</a>
                        </Link>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        Copyright {new Date().getFullYear()} Code For Greensboro
                    </div>
                </div>
            </div>
            {/* <li>
                <p className="home">Home</p>
                <a className="logo" href="#">Company Name <i>&copy; 2013</i></a>
            </li>
            <li>
                <p className="services">Services</p>

                <ul>
                    <li><a href="#">3D modeling</a></li>
                    <li><a href="#">Web development</a></li>
                    <li><a href="#">Mobile development</a></li>
                    <li><a href="#">Web &amp; Print Design</a></li>
                </ul>
            </li>
            <li>
                <p className="reachus">Reach us</p>

                <ul>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li>555-123456789</li>
                </ul>
            </li>
            <li>
                <p className="clients">Clients</p>

                <ul>
                    <li><a href="#">Login Area</a></li>
                    <li><a href="#">Support Center</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </li> */}
        </ul>
        {/* </div> */}
        {/* </div> */}
    </footer>
)

export default footer
