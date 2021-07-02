import React from 'react';
import './Landing.css';
import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile.js'

const Landing = () => {
  return (
    <main>
      <section className='landingLayout'>
        <Header />
      </section>
      <section className='profileLayout'>
        <Profile />
      </section>
    </main>
  )
}

export default Landing;
