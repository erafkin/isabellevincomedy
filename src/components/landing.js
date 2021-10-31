import React from 'react';
import mail from '../assets/mail.svg';
import './styles/landing-styles.scss';
import '../styles.scss';

const Landing = (props) => {
  return (
    <div className="landing">
      <hr className="white-line" />
      <div className="content-container">
        <div className="title-content">
          <div className="title">Isabel Levin is a comic from Chicago living in Boston</div>
          <div className="button-container">
            <a href="https://www.facebook.com/isabel.levin.92" target="_blank" className="social-button" rel="noreferrer">f</a>
            <a href="mailto:ilevin@college.harvard.edu" className="social-button" target="_blank" rel="noreferrer"><img src={mail} alt="email logo" className="mail-logo" /></a>
            <a href="https://www.linkedin.com/in/isabel-levin-4888391ab/" className="social-button" target="_blank" rel="noreferrer">li</a>
          </div>
        </div>
        <div className="landing-picture">Picture of isabel</div>
      </div>

    </div>
  );
};

export default Landing;
