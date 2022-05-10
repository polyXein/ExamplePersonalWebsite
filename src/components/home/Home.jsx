import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import { useState, useEffect} from 'react';
import Loader from 'react-loaders'
import './home.scss';

import AnimatedLetters from '../AnimatedLeterrs/AnimatedLetters';

const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate');

    const name = 
    ['N', 'i','c','o','l','a','s', ' '];
    const firstApellido = 
    ['O','r','t','i','z', ' '];
    const secondApellido = 
    ['S','u','a','r','e','z',' '];
    const jobArray = 
    ['F','r','o','n','t','e','d',' ','d','e','v','e','l','o', 'p','e','r']


    useEffect(() =>{
        return setTimeout(() => {
                setLetterClass('text-animate-hover')
        }, 500);
    }, [])

return (

    <>

    <div className="home-page">
    
        <div className="text-zone" > 

        <h1> 
            <span className={letterClass} >H</span>
            <span className={`${letterClass} _12`} >i,</span>

            <br /> 
            <span className={`${letterClass} _13`} >I</span>
            <span className={`${letterClass} _14`} >'m</span>
            <br/>
                <AnimatedLetters  letterClass={letterClass}
                strArray={name}
                idx={15} 
                />
                <AnimatedLetters  letterClass={letterClass}
                strArray={firstApellido}
                idx={15} 
                />

                <AnimatedLetters letterClass={letterClass}
                strArray={secondApellido}
                idx={15} 
                />
                
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={120} 
                />
                <br/>

        



        </h1>
        <h2 id="title_position">
            Frontend developer | Javascript intermediate | Videogame programmer 
        </h2>
      
        <Link to="/contact" className="flat-button" >
        CONTACT ME
        </Link>

        </div>
     {/*    <Logo /> */}
     
    </div>
    <Loader type="pacman" />
    </>
    );

}
export default Home; 



  