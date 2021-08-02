import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contactLayout'>
      <article className='contactCard'>
        <p className=''>MY PICK HERE</p>
        <p>Contact me with the following links or view my GitHub profile.</p>
        <div className='linkStylingBox'>
          <a href='https://www.linkedin.com/in/aaron-foucheaux-891626207/' className='linkText' target='_blank'><img className='linkImg' src='https://i.postimg.cc/FRYhc0Yr/icons8-linkedin-circled-50.png' alt='AF linkedIn link'/>LinkedIn</a>
          <a href='https://github.com/Afoucheaux' className='linkText' target='_blank'><img className='linkImg' src='https://i.postimg.cc/W4Hv2tXQ/icons8-github-50.png' alt='AF GitHub link'/>GitHub</a>
        </div>
          <p className='thisSiteSent'>Click <a href='https://github.com/Afoucheaux/af-site' target='_blank' className='thisSiteLink'>HERE </a> to see the code for this site.</p>
      </article>
    </section>
  )
}

export default Contact;
