
import './about.scss'
import AnimatedLetters from '../AnimatedLeterrs/AnimatedLetters'
import {useEffect, useState} from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faReact,
  faAngular,
  faHtml5,
  faJsSquare,
  faCss3,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

const About = () =>{


    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() =>{
        return setTimeout(() => {
                setLetterClass('text-animate-hover')
        }, 500);
    }, [])

    return(

        <>

        <div className=" about-page">

            <div className="text-zone">
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15} />
                </h1>

                <p>I'm very ambitious front-end developer looking for a role in
            established  <br/> IT company with the opportunity to work with the latest
            technologies <br/>  on challenging and diverse projects.
                </p>
                <p align="LEFT">
               <br/> I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
                </p>
                <p>
                If I need to define myself in one sentence that would be a  self-taught person, a languages fanatic,  photography enthusiast, and sports-obsessed!!!
                </p>
               
            </div>

            <div className="stage-cube-cont">

                <div className="cubespinner">
                    
                    <div className="face1" >
                        <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                        </div>
                    <div className="face2" >
                        <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                        </div>
                    <div className="face3" >
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                        </div>
                    <div className="face4" >
                        <FontAwesomeIcon icon={faJsSquare} color="#5ed4f4" />
                        </div>
                    <div className="face5" >
                        <FontAwesomeIcon icon={faReact} color="#efd81d" />
                        </div>
                    <div className="face6" >
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                        </div>

                </div>

            </div>
        </div>
     <Loader type="pacman" />
</>       

    )
}

export default About;