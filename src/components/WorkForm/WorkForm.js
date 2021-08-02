import React from 'react';
import './WorkForm.css';
import FilterButton from '../FilterButton/FilterButton.js';

const WorkForm = ({ handleForm, match }) => {
  return (
    <section className='stylingLayout'>
        <article className='directionLayout'>
          <h1 className='sampleWork'>Sample  Work</h1>
          <p className='useFilter'>Filter by selecting the following technology.</p>
        </article>
        <article className='buttonLayout'>
          <FilterButton value={'All'} match={match} handleForm={handleForm} />
          <FilterButton value={'JavaScript'} match={match} handleForm={handleForm} />
          <FilterButton value={'React'} match={match} handleForm={handleForm} />
          <FilterButton value={'TypeScript'} match={match} handleForm={handleForm} />
          <FilterButton value={'HTML5'} match={match} handleForm={handleForm} />
          <FilterButton value={'CSS'} match={match} handleForm={handleForm} />
          <FilterButton value={'Sass'} match={match} handleForm={handleForm} />
          <FilterButton value={'PWA'} match={match} handleForm={handleForm} />
          <FilterButton value={'Cypress'} match={match} handleForm={handleForm} />
          <FilterButton value={'Mocha/Chai'} match={match} handleForm={handleForm} />
        </article>
    </section>
  )
}

export default WorkForm;
