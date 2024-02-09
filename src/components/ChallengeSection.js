// imports
import React from 'react';
import axios from 'axios';

//api variables
const userName =  'AntCannon';
const page = 0;
const getCompletedChallengesURL = `https://www.codewars.com/api/v1/users/AntCannon/code-challenges/completed?page=0}`

// Challenge Card
// const ChallengeCard = (props) => {
//   return(
//     <>
//     <h2></h2>
//     </>
//   )
// }



// ChallengeSection.js
const ChallengeSection = () => {
  const [challengeData, setChallengeData] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    // Make API request to codewars
    axios.get(getCompletedChallengesURL)
      .then(response => setChallengeData(response.data.data))
      .catch(error => setError(error))

  }, []);

  if (error) return `Error: ${error.message}`
  if (!challengeData) return null;

  return (
    <div>
      <h1>Daily Challenges should be Here</h1>
      <h2>{challengeData[0].name}</h2>
    </div>
  );
};

export default ChallengeSection;