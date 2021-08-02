import React from 'react';
import './Landing.css';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile.js';
import Work from '../../components/Work/Work.js';
import Contact from '../../components/Contact/Contact.js';
import ProfileLanding from '../../components/ProfileLanding/ProfileLanding.js';

const Landing = () => {
  return (
    <main>
      <section className='landingLayout'>
        <Header />
        <ProfileLanding />
      </section>
      <section className='workLayout'>
        <Work />
      </section>
      <section className='contactLayout'>
        <Contact />
      </section>
    </main>
  )
}

export default Landing;
