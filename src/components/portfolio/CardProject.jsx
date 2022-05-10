import React from 'react'
import './CardProject.scss'
import {Link, NavLink} from  'react-router-dom';


const CardProject = ({year, title, type, image, repository, pagelink}) => {
  return (


<div className="  project" >
        <div>
 
            <p>
            {year} </p>

        </div>
        
        <div>
              <img src={image} alt={title} />
        </div>

        <div>
         <a target="_blank" 
               rel="noreferrer" 
                href={repository}>
            <span>{type} </span>
        </a>  
        <a
        target="_blank" 
        rel="noreferrer" 
        href={pagelink}>
            <h3> {title} </h3>
        </a>
        </div>

    </div>  )
}

export default CardProject