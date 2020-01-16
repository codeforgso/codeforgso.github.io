import Link from 'next/link'

const JoinButton = () => {
    return (
        <section className="join-button">
            <div className="level-item">
                <Link href="/join">
                    <a className="button is-large">
                        <span>JOIN US</span>
                        <span className="icon join-icon">
                            <i className="fas fa-arrow-right fas-2x" />
                        </span>
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default JoinButton
