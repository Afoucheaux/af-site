import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, techUsed, mainImg, desc, id }) => {
  return (
    <button>
      <h1 className='projectTitle'>{title}</h1>
      <img src={mainImg} alt={`image of ${title}`}/>
      <p className='tech'>{techUsed.join(' | ')}</p>
      <p className='quickDesc'>{desc}</p>
    </button>
  )
}

export default ProjectCard;
