/* eslint-disable max-len */
import React from 'react';
import './styles/info-styles.scss';

const image = require('../assets/about-image.png');

const Info = (props) => {
  return (
    <div className="info-container">
      <div className="info">
        <div className="info-picture"><img className="rabbit-pic" src={image} alt="isabel holding rabbit" /></div>
        <div className="info-content">
          <div className="about">About Isabel</div>
          <hr className="black-line" />
          {/* if you want to change out general info, here it is!
          changing out the links just would be chaning out the urls under href and it shows up as what is written between the tags */}
          <div className="about-content">
            She began doing standup at 16, attending open mics and following her favorite Chicago comics around the city.
            Isabel has since moved to Boston to be a student at Harvard, where she is majoring in Social Studies (she knows it sounds like a made up major)
            and is a member of the Harvard College Stand Up Comic Society.
            She also writes jokes in her spare time, and has performed
            at <span><a className="comedy-link" href="https://laughboston.com/" target="_blank" rel="noreferrer">Laugh Boston</a></span>, <span><a className="comedy-link" href="https://www.facebook.com/hideoutcomedy/" target="_blank" rel="noreferrer">Hideout Comedy</a></span>,
            and <span><a className="comedy-link" href="https://www.thecomedystudio.com/" target="_blank" rel="noreferrer">The Comedy Studio</a></span>.
            You can see her next as a contestant in <span><a className="comedy-link" href="https://www.bostoncomedyfest.com/" target="_blank" rel="noreferrer">The Boston Comedy Festival</a></span>.
            <br />
            <br />
            Scroll to see some of Isabel’s favorite jokes right now.
          </div>
        </div>
      </div>
    </div>

  );
};

export default Info;
