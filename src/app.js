import React from 'react';

import Landing from './components/landing';
import Info from './components/info';
import Videos from './components/video-clips';


const App = (props) => {
  return (
    <div>
      <Landing />
      <Info />
      <Videos />
    </div>
  );
};
export default App;
