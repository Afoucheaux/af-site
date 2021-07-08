import React from 'react';
import './Work.css';
import { workData } from '../../Data/Data.js'

const Work = () => {
  console.log(workData[0].mainImg)
  return (
    <section id='work' className='workLayout'>
      <p>Section One</p>
      <img src={workData[0].mainImg} />
    </section>
  )
}

export default Work;
