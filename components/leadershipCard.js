import PropTypes from 'prop-types'

const Leadership = props => {
    return (
        <div className="card leadership-card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={`../static/leadership/${props.profile.image}`}
                        alt={props.profile.name}
                    ></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="columns">
                    <div className="column">
                        <p className="title is-3 ">{props.profile.title}</p>
                        <p className="title is-4">{props.profile.name}</p>
                    </div>
                </div>
                <div className="content">{props.profile.bio}</div>
            </div>
        </div>
    )
}

Leadership.propTypes = {
    profile: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
export default Leadership
