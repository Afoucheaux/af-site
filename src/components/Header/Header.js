import React from 'react';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <>
      <section className='headerLayout'>
        <article className='backGroundTop'>
          <HashLink smooth to='/Profile'>Profile</HashLink>
          <HashLink smooth to='/Profile'>Profile</HashLink>
          <HashLink smooth to='/Profile'>Profile</HashLink>
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
