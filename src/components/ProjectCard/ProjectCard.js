import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, techUsed, mainImg, desc, id }) => {
  return (
    <Link to={`/${id}`} className='projectLinkStyling'>
      <h1 className='projectTitle'>{title}</h1>
      <img src={mainImg} alt={`image of ${title}`} className='mainImage'/>
      <p className='tech'>{techUsed.join(' | ')}</p>
      <p className='quickDesc'>{desc}</p>
    </Link>
  )
}

export default ProjectCard;
