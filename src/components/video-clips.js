import React from 'react';
import ReactPlayer from 'react-player';
import videos from '../video-list';
import './styles/video-styles.scss';
import '../styles.scss';

const Videos = (props) => {
  return (
    <div>
      <div className="standup-title">Standup</div>
      <hr className="white-line" />
      <div className="video-container">
        {videos.map((video) => {
          return (
            <div className="video" key={video.link}>
              <div className="video-title">{video.title}</div>
              <div className="video-date">{video.date}</div>
              <ReactPlayer url={video.link} light controls style={{ width: '40vw' }} />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Videos;
