import PropTypes from 'prop-types'

const Sponsor = props => {
    return (
        <div className="card sponsor-card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={`../static/sponsors/${props.sponsor.image}`}
                        alt={props.sponsor.name}
                    ></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="columns">
                    <div className="column">
                        <p className="title is-3">{props.sponsor.name}</p>
                        <p className="title is-5">
                            <a href={props.sponsor.url}>{props.sponsor.url}</a>
                        </p>
                    </div>
                </div>
                <div className="content">{props.sponsor.description}</div>
            </div>
        </div>
    )
}

Sponsor.propTypes = {
    sponsor: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Sponsor
