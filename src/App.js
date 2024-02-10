// imports 
import React from 'react';
import WelcomeSection from './components/WelcomeSection';
import ChallengeSection from './components/ChallengeSection';
import './App.css';

// App.js
const App = () => {

  return (
    <div className="App">
      <WelcomeSection />
      <div>
        <ChallengeSection />
      </div>
    </div>
  );
};

// export
export default App;