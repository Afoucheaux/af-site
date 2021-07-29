import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import './DetailView.css';
import { workData } from '../../Data/Data.js';
import DetailCard from '../../components/DetailCard/DetailCard.js';

const DetailView = ({ id }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    findProject()
  }, [])

  const findProject = () => {
    const newProject = workData.find(proj => proj.id == id);
    setProject(newProject)
  }

  return (
    <main>
      <Header />
      {project && <DetailCard title={project.title} advDesc={project.advDesc} allImg={project.allImg} gifs={project.gifs} repo={project.repo} deployed={project.deployed} />}
    </main>
  )
}

export default DetailView;
