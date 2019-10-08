import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/">
            <a className="navbar-item">
                <div className="Logo">
                    <img src="/static/cfg_logo.png" />
                    <div className="textContainer">
                        <p className="topText">Code for</p>
                        <p className="bottomText">Greensboro</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Logo
