// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WelcomeSection from './components/WelcomeSection';
import ChallengeCard from './components/ChallengeCard';

const App = () => {
  const username = 'AntCannon';

  // Replace 'http://www.codewars.com/api/v1/users/' with the base API URL
  const apiUrl = `http://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=0`;
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    // Make API request to Codewars
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setChallenges(response.data.data);
      } catch (error) {
        console.error('Error fetching Codewars data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className ="App">
      <WelcomeSection />
      {challenges.map(challenge => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default App;