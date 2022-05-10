import './sidebar.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle  from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faLinkedin, 
  faGithub,
  faYoutube,
  faSkype,
  faTwitter,
  faSolderImage
} from '@fortawesome/free-brands-svg-icons';

import react  from'react'
import {
  faEnvelope,
   faUser, 
   faHome,
  faFolder,
  faCode

  } 
   from '@fortawesome/free-solid-svg-icons'


import {Link, NavLink} from  'react-router-dom';



const Sidebar = () =>{
    return (
        <div className="nav-bar">

            <Link className="logo" to="/" >
                    <img src={LogoS} alt="Suarez Logo"/>
            </Link>

            <nav>

                <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
               
               
                <NavLink exact="true" activeclassname="active" className="about-link" to="about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                
                <NavLink exact="true" activeclassname="active" className="skills-link" to="skills">
            <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="portfolio">
            <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                


            </nav>

            <ul>
              <li> 
               <a target="_blank" 
               rel="noreferrer" 
               href="https://www.linkedin.com/in/nicolasortizdev/">
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />

                </a>
             </li>
             <li> 
               <a target="_blank" 
               rel="noreferrer" 
               href="https://github.com/Suarez-dev/">
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />

                </a>
             </li>
             <li> 
               <a target="_blank" 
               rel="noreferrer" 
               href="https://www.youtube.com/channel/UCTovhlvU7Ok8wjliihM_V0A">
                  <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />

                </a>
             </li>

             <li> 
               <a target="_blank" 
               rel="noreferrer" 
               href="https://platzi.com/p/Suarez_dev/">
                  <img className='logo-platzi' alt='logo platzi' 
                  src="https://static.platzi.com/media/achievements/platzi-bd.png" />

                </a>
             </li>

             <li> 
               <a target="_blank" 
               rel="noreferrer" 
               href="https://twitter.com/Suarez_dev">
                  <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />

                </a>
             </li>
           </ul>


      </div>
    )
}

export default Sidebar; 
