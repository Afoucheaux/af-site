import React, {useState } from 'react';
import './WorkForm.css';

const WorkForm = ({ handleForm }) => {

  return (
    <section>
      <button onClick={() => handleForm('All')}>All</button>
      <button onClick={() => handleForm('JavaScript')}>JavaScript</button>
      <button onClick={() => handleForm('React')}>React</button>
      <button onClick={() => handleForm('HTML5')}>HTML5</button>
      <button onClick={() => handleForm('CSS')}>CSS</button>
      <button onClick={() => handleForm('Sass')}>Sass</button>
      <button onClick={() => handleForm('PWA')}>Mobil/PWA</button>
      <button onClick={() => handleForm('Cypress')}>Cypress</button>
      <button onClick={() => handleForm('Mocha/Chai')}>Mocha/Chai</button>
    </section>
  )
}

export default WorkForm;
