// imports 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WelcomeSection from './components/WelcomeSection';
import ChallengeCard from './components/ChallengeCard';
import ApiData from './components/ApiData';
import FCCTutorial from './FCCTutorial';

// App.js
const App = () => {

  return (
    <div>
      <WelcomeSection />
      {/* <p>{ apiResponse.id }</p> */}
      {/* <ApiData /> */}
      <div>
        {/* <ChallengeCard /> */}
      </div>
    </div>
  );
};

// export
export default App;