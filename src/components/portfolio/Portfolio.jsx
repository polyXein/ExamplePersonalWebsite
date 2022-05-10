import React from 'react'
import Loader from 'react-loaders'
import './portfolio.scss'
import CardProject from './CardProject.jsx'

import {Link, NavLink} from  'react-router-dom';

/* list of photos */
import zafiro  from '../../assets/photo-projects/Restaurant-Zafiro.png';
import googleclone  from '../../assets/photo-projects/google-clone.png';
import calculator  from '../../assets/photo-projects/calculator.png';
import audioBookReader  from '../../assets/photo-projects/audiobookreader-ready.png';
import blogWebsite  from '../../assets/photo-projects/Blog-Website.png';
import chronometer  from '../../assets/photo-projects/chronometer.png';
import discontCalculator  from '../../assets/photo-projects/Discount-calculator.png';
import saltingGame  from '../../assets/photo-projects/game-salting.png';
import platziConfHawaii  from '../../assets/photo-projects/platziconf-hawaii.png';
import shadowCustomizer  from '../../assets/photo-projects/shadow-customer.png';
import teslaClone  from '../../assets/photo-projects/tesla-clone.png';
import todoList  from '../../assets/photo-projects/TodoList-basico.png';
import youtubeClone  from '../../assets/photo-projects/youtube-clone.png';
import linkedinClone  from '../../assets/photo-projects/linkedin-clone-in.png';
import yourComputerSpeak  from '../../assets/photo-projects/yourcomputerspeak.png';
import randomBackground  from '../../assets/photo-projects/random-background.png';
import batabit  from '../../assets/photo-projects/batabit-mobilefirst.png';
import componentParade  from '../../assets/photo-projects/component-parade.png';


/* finish import of photos */


const Portfolio = () => {
  return (
    <>
    
    
        <div className=' portfolio-page'>

            <div className='box__info'>
                <h1 className='title_projects'>Projects</h1>
                 <div className='container__projects'>
                    
          <CardProject 
         pagelink="https://suarez-dev.github.io/clone-tesla/"
         repository="https://github.com/Suarez-dev/clone-tesla"
        title="Tesla clone " year="2022"type="Clone" image={teslaClone}/>    
         <CardProject 
         pagelink="https://suarez-dev.github.io/CloneYoutube/"
         repository="https://github.com/Suarez-dev/CloneYoutube"
         title="Youtube clone " year="2022"type="Clone" image={youtubeClone}/>  
         <CardProject 
         pagelink="https://suarez-dev.github.io/BoxShadowGUI/"
         repository="https://github.com/Suarez-dev/BoxShadowGUI"
         title="Shadow Customizer " year="2022"type="Website" image={shadowCustomizer}/> 
         <CardProject 
         pagelink="https://suarez-dev.github.io/ZafiroRestaurante/index.html"
         repository="https://github.com/Suarez-dev/ZafiroRestaurante"
         title="Zafiro" year="2021"type="Restaurant" image={zafiro}/>
         <CardProject 
         pagelink=""
         repository="https://github.com/Suarez-dev/Linkedin-clone"
         title="Linkedin clone " year="2022"type="Clone" image={linkedinClone}/>
         <CardProject 
         pagelink=""
         repository="https://github.com/Suarez-dev/Salting-Game"
         title="Salting Game" year="2022"type="Game" image={saltingGame}/>
      
         <CardProject 
         pagelink="https://suarez-dev.github.io/TodoListBasico/"
         repository="https://github.com/Suarez-dev/TodoListBasico"
         title="TodoList" year="Dic/2021"type="Website" image={todoList}/>
    
        <CardProject 
         pagelink="https://suarez-dev.github.io/DiscountCalculator/"
         repository="https://github.com/Suarez-dev/DiscountCalculator"
         title="Discount Calculator" year="2022"type="Website" image={discontCalculator}/>
           <CardProject 
         pagelink="https://suarez-dev.github.io/Practica-de-calculadora/"
         repository="https://github.com/Suarez-dev/Practica-de-calculadora"
         title="Calculator" year="2021"type="Website" image={calculator}/>
         <CardProject 
         pagelink="https://suarez-dev.github.io/ClonBuscador/"
         repository="https://github.com/Suarez-dev/ClonBuscador"
         title="Google-Clone " year="2021"type="Landing Page" image={googleclone}/>
           <CardProject 
         pagelink="https://suarez-dev.github.io/AudioBookReader/"
         repository="https://github.com/Suarez-dev/AudioBookReader"
         title="AudioBookReader" year="2022"type="Website" image={audioBookReader}/>
           <CardProject 
         pagelink="https://suarez-dev.github.io/Platzi-blog-Xein/index.html"
         repository="https://github.com/Suarez-dev/Platzi-blog-Xein"
         title="Blog Website " year="2021"type="Blog" image={blogWebsite}/>
           <CardProject 
         pagelink="https://suarez-dev.github.io/YourComputerSpeak/"
         repository="https://github.com/Suarez-dev/YourComputerSpeak"
         title="Your Computer Speak" year="2022"type="Website" image={yourComputerSpeak}/>
         <CardProject 
         pagelink="https://suarez-dev.github.io/Practica-boostrap/#conviertete-en-orador%20(bootstrap)"
         repository="https://github.com/Suarez-dev/Practica-boostrap"
         title="Platzi-Conf Hawaii" year="2021"type="Landing page" image={platziConfHawaii}/>
       
             <CardProject 
         pagelink="https://suarez-dev.github.io/Random-Background/"
         repository="https://github.com/Suarez-dev/Random-Background"
         title="Random Background " year="2022"type="Website" image={randomBackground}/>
       
         <CardProject 
         pagelink="https://suarez-dev.github.io/Cronometro/"
         repository="https://github.com/Suarez-dev/Cronometro"
         title="Chronometer" year="2021"type="Website" image={chronometer}/>
        
        <CardProject 
         pagelink="https://suarez-dev.github.io/Components_parade/"
         repository="https://github.com/Suarez-dev/Components_parade"
         title="Components parade " year="2021"type="Components" image={componentParade}/>

        <CardProject 
         pagelink="https://suarez-dev.github.io/Platzi-mobileFirst/"
         repository="https://github.com/Suarez-dev/Platzi-mobileFirst"
         title="Batabit" year="Mayo/2021"type="Mobile First" image={batabit}/>
                </div>
            </div>

        </div>
        <Loader type="pacman" />
    </>

  )
}

export default Portfolio