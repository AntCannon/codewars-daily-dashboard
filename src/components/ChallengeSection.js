// imports
import React from 'react';
import axios from 'axios';

//api variables
const userName =  'AntCannon';
const page = 0;
const getCompletedChallengesURL = `https://www.codewars.com/api/v1/users/AntCannon/code-challenges/completed?page=0}`

// Challenge Card
const ChallengeCard = (props) => {
  return(
    <>
    <h2>Kata: {props.name}</h2>
    <h3>Date: {props.date}</h3>
    </>
  )
}

// ChallengeSection.js
const ChallengeSection = () => {
  // create useStates
  const [challengeData, setChallengeData] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  // useEffect for API
  React.useEffect(() => {
    // Make API request to codewars
    axios.get(getCompletedChallengesURL)
    .then(response => setChallengeData(response.data.data))
    .catch(error => setError(error))
    
  }, []);
  
  if (error) return `Error: ${error.message}`
  if (!challengeData) return null;
  
  // create array of challenge cards
  const currDate = new Date().getDate();

  const challengesArr = [];
  for (let i = 0; currDate === new Date(challengeData[i].completedAt).getDate(); i++) {
    challengesArr.push(<ChallengeCard name={challengeData[i].name} date={dispDate(challengeData[i])}/>)
  }

  return (
    <div>
      <h1>Daily Challenges should be Here</h1>
      <div>{challengesArr}</div>
    </div>
  );
};

// Helper function - display date and time
function dispDate(challenge) {
  return new Date(challenge.completedAt).toString().slice(0,-33)
}

export default ChallengeSection;
