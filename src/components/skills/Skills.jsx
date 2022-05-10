import React, {useState, useEffect} from 'react'
import Loader from 'react-loaders'
import './skills.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
   faUser, 
  } 
   from '@fortawesome/free-solid-svg-icons'

   import AnimatedLetters from '../AnimatedLeterrs/AnimatedLetters'


import Carousel from 'react-elastic-carousel';

import Card from './Card'

const Skills = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  
  const nameArray = 
  ['S', 'o','f','t',' ','S','k','i', 'l', 'l','s'];
  const timeManagement = 
  ['T','i','m','e',' ','M','a','n','a','g','e','m','e','n','t'];
  const organitazion = 
  ['O','r','g','a','n','i','z','a','t','i','o','n'];
  const empathy = 
  ['E','m','p','h','a','t','y'];
  const stressmanagement = 
  ['S','t','r','e','s','s',' ', 'M','a','n','a','g','e','m','e','n','t'];
  const adaptability = 
  ['A','d','a','p','t','a','b', 'i','l','i', 't', 'y'];
  const teamwork = 
  ['T','e','a','m','W','o','r','k'];
  const creativity = 
  ['C','r','e','a','t','i','v','i', 't', 'y'];
  const autodidact = 
  ['S','e','l','f','-','T','a','u', 'g', 'h', 't'];
  const responsible = 
  ['R','e','s','p','o','n','s','i', 'b', 'l', 'e'];
  const leadership = 
  ['L','e','a','d','e','r','s','h','i', 'p'];
  const proactive = 
  ['P','r','o','a','c','t','i','v','e'];
  const resilience = 
  ['R','e','s','i','l','i','e','n','c', 'e'];
  const emotialIntelligence = 
  ['E','m','o','t','i','o','n','a','l', ' ', 'I', 'n','t','e','l','l','i','g','e','n','c','e'];
  const positive = 
  ['P','o','s','i','t','i','v','e'];
  const problemsolving =
  ['P','r', 'o', 'b','l','e','m','-','S','o','l','v','i','n', 'g'];


  useEffect(() =>{
    return setTimeout(() => {
            setLetterClass('text-animate-hover')
    }, 500);
}, [])

const breakPoints = [
{ width: 400, itemsToShow: 1},
{ width: 768, itemsToShow: 2},
{ width: 1200, itemsToShow: 3},
{ width: 1500, itemsToShow: 4},
]


  return (
    <>
    
    
        <div className=' skills-page'>

       <div className='container__softSkills'>
          <div className='container__title__softSkills'>
            <h1 className='box__letters'>
              <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} 
                />
            </h1> 
          </div>
      
        <Carousel breakPoints={breakPoints} className='carousel__container'>
          <Card name={autodidact}  letters={letterClass} />
          <Card name={teamwork}  letters={letterClass} />
          <Card name={proactive}  letters={letterClass} />
          <Card name={timeManagement}  letters={letterClass} />
          <Card name={organitazion}  letters={letterClass} />
          <Card name={stressmanagement}  letters={letterClass} />
          <Card name={empathy}  letters={letterClass} />
          <Card name={adaptability}  letters={letterClass} />
          <Card name={creativity}  letters={letterClass} />
          <Card name={responsible}  letters={letterClass} />
          <Card name={leadership}  letters={letterClass} />
          <Card name={resilience}  letters={letterClass} />
          <Card name={emotialIntelligence}  letters={letterClass} />
          <Card name={positive}  letters={letterClass} />
          <Card name={problemsolving}  letters={letterClass} />
      </Carousel>
          
      </div> 


   

        </div>
        <Loader type="pacman" />
    </>

  )
}

export default Skills