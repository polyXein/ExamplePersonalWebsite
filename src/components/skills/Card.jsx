import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
   faUser, 
  } 
   from '@fortawesome/free-solid-svg-icons'

   import AnimatedLetters from '../AnimatedLeterrs/AnimatedLetters'

import './skills.scss'

const Card = ({name, letters}) => {


 

  return (
    <>
      <div className='card'>

         <div className='card__skill'>
              <div className='card__wrapper'>
              <a>
                <FontAwesomeIcon icon={faUser} color="#fff" />
              </a>  
                <p> 
                    <AnimatedLetters letterClass={letters}
                    strArray={name}
                    idx={15} 
                    /> 
                    
                </p>
              </div>
            </div>
      </div>

    </>
  )
}

export default Card