import Link from 'next/link'
import PropTypes from 'prop-types'

const JoinButton = props => {
    return (
        <section className="JoinButton">
            <div className={'level join ' + props.location}>
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
            </div>
        </section>
    )
}

JoinButton.propTypes = {
    location: PropTypes.string.isRequired,
}

export default JoinButton
