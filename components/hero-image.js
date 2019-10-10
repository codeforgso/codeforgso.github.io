import { string } from 'prop-types'

const HeroImage = (props) => {
    return (
        <div className="HeroImage">
            <img
                src={props.src}
                alt={props.alt}
            />
        </div>
    )
}

HeroImage.defaultProps = {
    src: "../static/cfg_logo_name.png",
    alt: "Code For Greensboro Logo",
}

HeroImage.propTypes = {
    src: string,
    alt: string,
}

export default HeroImage;
