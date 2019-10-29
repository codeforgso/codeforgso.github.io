import Link from 'next/link'

const footer = () => (
    <footer className="footer">
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
    </footer>
)

export default footer
