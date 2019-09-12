import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight as icon } from '@fortawesome/free-solid-svg-icons'

const Join = (props) => {
  console.log(props)
  return (

    <div className={"level join " + props.location} >
      <div className="level-item">
        <a className="button is-large">
          <span>JOIN US</span>
          <span className="icon arrow">
            <FontAwesomeIcon className='arrow' icon={icon} />
          </span></a>

      </div>
    </div>
    
  );
}

export default Join;
