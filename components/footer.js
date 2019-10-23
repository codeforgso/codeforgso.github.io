import Link from 'next/link'

const footer = () => (
    <footer className="footer">
        <div className="columns">
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <Link href="/join">
                        <h1>Join</h1>
                    </Link>
                </div>
            </div>
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <Link href="/conduct">
                        <h1>Code of Conduct</h1>
                    </Link>
                </div>
            </div>
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <Link href="/resources">
                        <h1>Resources</h1>
                    </Link>
                </div>
            </div>
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <Link href="/contact">
                        <h1>Contact Us</h1>
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
