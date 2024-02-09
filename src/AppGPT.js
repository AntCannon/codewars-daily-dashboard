// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WelcomeSection from './components/WelcomeSection';
import ChallengeCard from './components/ChallengeCard';
import ApiData from './components/ApiData';

const App = () => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    // Update the API URL
    const apiUrl = 'http://www.codewars.com/api/v1/users/AntCannon/code-challenges/completed?page=0';

    // Make API request to Codewars
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setApiResponse(response.data);
      } catch (error) {
        console.error('Error fetching Codewars data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <WelcomeSection />
      <ApiData apiResponse={apiResponse} />
      <div>
        {apiResponse.data.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default App;
