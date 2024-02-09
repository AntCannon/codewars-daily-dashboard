// imports 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WelcomeSection from './components/WelcomeSection';
import ChallengeSection from './components/ChallengeSection';
import ApiData from './components/ApiData';
import FCCTutorial from './FCCTutorial';
import './App.css';


// App.js
const App = () => {

  return (
    <div className="App">
      <WelcomeSection />
      {/* <p>{ apiResponse.id }</p> */}
      <div>
        <ChallengeSection />
      </div>
    </div>
  );
};

// export
export default App;