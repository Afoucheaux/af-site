import React from 'react';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section className='headerLayout'>
        <article className='backGroundTop'>
          <div className='hashStyling'>
            <HashLink smooth to='/' className='hashLink'>Home</HashLink>
            <HashLink smooth to='/#work' className='hashLink'>Portfolio</HashLink>
            <HashLink smooth to='/#contact' className='hashLink end'>Contact</HashLink>
          </div>
        </article>
        <article className='lineBreak'>
        </article>
        <article className='backGroundBot'>
        </article>
        <article className='imgOutline'>
          <h1 className='iconText'>AF</h1>
        </article>
      </section>
    </>
  )
}

export default Header;
