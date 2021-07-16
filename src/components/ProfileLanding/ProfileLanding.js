import React from 'react';
import './ProfileLanding.css';

const ProfileLanding = () => {
  return (
    <section className='profileLandingLayout'>
      <article className='profileLandingCard'>
        <h1 className='name'>Aaron Foucheaux</h1>
        <h2 className='title'>Software Developer</h2>
        <p className='kindOfDev'>Need to come up with a statement.</p>
        <a href='https://www.linkedin.com/in/aaron-foucheaux-891626207/'><img src='https://i.postimg.cc/FRYhc0Yr/icons8-linkedin-circled-50.png' /></a>
        <a href='https://github.com/Afoucheaux'><img src='https://i.postimg.cc/W4Hv2tXQ/icons8-github-50.png' /></a>
      </article>
    </section>
  )
}

export default ProfileLanding;
