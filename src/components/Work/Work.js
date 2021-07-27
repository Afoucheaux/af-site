import React, {useState, useEffect} from 'react';
import './Work.css';
import { workData } from '../../Data/Data.js';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import WorkForm from '../WorkForm/WorkForm.js';

const Work = () => {
  const [projects, setProjects] = useState(workData);
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    setFilterProjects(workData);
  }, [])

  const handleForm = (techType) => {
    if(techType === 'All') {
      setFilterProjects(projects);
    } else {
      const filtered = projects.filter(project => project.techUsed.includes(techType))
      setFilterProjects(filtered);
    }
  }

  const projectDisplay = filterProjects.map((project) => {
    return (
      <ProjectCard
        title={project.title}
        techUsed={project.techUsed}
        mainImg={project.mainImg}
        desc={project.desc}
        id={project.id}
        key={project.id}
      />
    )
  })

  return (
    <section id='work' className='workLayout'>
      <WorkForm handleForm={handleForm}/>
      <article className='projectDisplayLayout'>
        {projectDisplay}
      </article>
    </section>
  )
}

export default Work;
