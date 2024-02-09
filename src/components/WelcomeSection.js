// imports
import React from "react";
import axios from "axios";
import './Welcome.css';


// api variables
const userName = 'AntCannon';
const getUserURL = `https://www.codewars.com/api/v1/users/${userName}`


// WelcomeSection
const WelcomeSection = () => {
  const [userData, setUserData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // Make API request to Codewars
    axios.get(getUserURL)
      .then(response => setUserData(response.data))
      .catch(error => setError(error))

  }, []); // Empty dependency array ensures useEffect runs only once

  if (error) return `Error: ${error.message}`
  if (!userData) return null;

  return (
    <div className="Welcome">
      <h1>Hi 👋🏾, my name is {userData.username} and I am a Code Warrior!</h1>
      <h2>Rank: {userData.ranks.overall.name} | Honor: {userData.honor} | Kata Completed: {userData.codeChallenges.totalCompleted}</h2>
      <div className="HR"></div>
    </div>
  )
};


// export
export default WelcomeSection;