import React from 'react';
import './WorkForm.css';

const WorkForm = ({ handleForm }) => {

  return (
    <section className='stylingLayout'>
        <article className='directionLayout'>
          <h1 className='sampleWork'>Sample  Work</h1>
          <p className='useFilter'>Filter by selecting the following technology.</p>
        </article>
        <article className='buttonLayout'>
          <button className='buttonFilter' onClick={() => handleForm('All')}>All</button>
          <button className='buttonFilter' onClick={() => handleForm('JavaScript')}>JavaScript</button>
          <button className='buttonFilter' onClick={() => handleForm('React')}>React</button>
          <button className='buttonFilter' onClick={() => handleForm('HTML5')}>HTML5</button>
          <button className='buttonFilter' onClick={() => handleForm('CSS')}>CSS</button>
          <button className='buttonFilter' onClick={() => handleForm('Sass')}>Sass</button>
          <button className='buttonFilter' onClick={() => handleForm('PWA')}>Mobil/PWA</button>
          <button className='buttonFilter' onClick={() => handleForm('Cypress')}>Cypress</button>
          <button className='buttonFilter' onClick={() => handleForm('Mocha/Chai')}>Mocha/Chai</button>
        </article>
    </section>
  )
}

export default WorkForm;
