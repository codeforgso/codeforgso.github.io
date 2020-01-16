
import Link from 'next/link'
import Logo from '../components/logo'

const Footer = () => {
    return (
        <footer className="footer">
            <div className=" columns is-vcentered">
                <div className="column is-narrow">
                    <Logo />
                </div>
                <div className="column is-narrow">
                    <Link href="/join">
                        <a className="subtitle is-6 red">Join</a>
                    </Link>
                </div>
                <div className="column is-narrow">
                    <a
                        href="https://github.com/codeforgso/codeofconduct"
                        className="subtitle is-6 red"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Code of Conduct
                    </a>
                </div>
                <div className="column is-narrow">
                    <a
                        href="mailto:hello@codeforgreensboro.org"
                        className="subtitle is-6 red"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="columns is-full">
                <p className="column copyright">
                    Copyright {new Date().getFullYear()} Code For Greensboro
                </p>
            </div>
        </footer>
    )
}

export default Footer