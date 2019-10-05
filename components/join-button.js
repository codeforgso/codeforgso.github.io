import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight as icon } from '@fortawesome/free-solid-svg-icons';

const JoinButton = (props) => {
  return (
    <section className='JoinButton'>
      <div className={"level join " + props.location} >
        <div className="level-item">
          <Link href='/join'>
            <a className="button is-large">
              <span>JOIN US</span>
              <span className="icon join-icon">
                <FontAwesomeIcon className='arrow fa-2x' icon={icon} />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JoinButton;