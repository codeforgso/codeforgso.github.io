import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/">
            <a className="navbar-item">
                <div className="logo">
                    <img
                        src="/static/cfg_logo.png"
                        alt="Code for Greensboro logo"
                    />
                    <div className="text-container">
                        <p className="top-text">Code for</p>
                        <p className="bottom-text">Greensboro</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Logo
