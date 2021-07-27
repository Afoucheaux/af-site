import React from 'react';
import './ProfileLanding.css';

const ProfileLanding = () => {
  return (
    <section className='profileLandingLayout'>
      <article className='profileLandingCard'>
        <h1 className='name'>Aaron Foucheaux</h1>
        <h2 className='title'>Software Developer</h2>
        <p className='kindOfDev'>Need to come up with a statement.</p>
        <div className='linkStylingBox'>
          <a href='https://www.linkedin.com/in/aaron-foucheaux-891626207/' className='linkText' target='_blank'><img className='linkImg' src='https://i.postimg.cc/FRYhc0Yr/icons8-linkedin-circled-50.png' alt='AF linkedIn link'/>LinkedIn</a>
          <a href='https://github.com/Afoucheaux' className='linkText' target='_blank'><img className='linkImg' src='https://i.postimg.cc/W4Hv2tXQ/icons8-github-50.png' alt='AF GitHub link'/>GitHub</a>
        </div>
      </article>
    </section>
  )
}

export default ProfileLanding;
