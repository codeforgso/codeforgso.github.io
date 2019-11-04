import Link from 'next/link'
import Logo from '../components/logo'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className=" columns is-vcentered">
                    <div className="column is-narrow">
                        <Logo />
                    </div>
                    <div className="footer-selection column is-narrow">
                        <Link href="/join">
                            <a className="subtitle is-6 red">Join</a>
                        </Link>
                    </div>
                    <div className="column is-narrow">
                        <Link href="/join">
                            <a className="subtitle is-6 red">Code of Conduct</a>
                        </Link>
                    </div>
                    <div className="column is-narrow">
                        <Link href="/contact">
                            <a className="subtitle is-6 red">Contact Us</a>
                        </Link>
                    </div>
                </div>
                <p className="copyright">
                    Copyright {new Date().getFullYear()} Code For Greensboro
                </p>
            </div>
        </footer>
    )
}

export default Footer
