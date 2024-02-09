// imports
import React from 'react';
import axios from 'axios';
import './Cards.css';
import './Challenge.css';
import logo from './comp-imgs/cw-icon-ss.png'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"

//api variables
const userName =  'AntCannon';
const page = 0;
const getCompletedChallengesURL = `https://www.codewars.com/api/v1/users/AntCannon/code-challenges/completed?page=0}`

// Challenge Card
const ChallengeCard = (props) => {
  return(
    <div className="Card">
    <a className="Card-Link" href={props.link} target="_blank" rel="noreferrer"></a>
      <div className="Info">
        <h2>Kata: {props.name}</h2>
        <h3>Date: {props.date}</h3>
      </div>
      <div className="Icon">
        <img src={logo} width={75}></img>
      </div>
    </div>
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
    challengesArr.push(<ChallengeCard
      name={challengeData[i].name}
      date={dispDate(challengeData[i])}
      link={kataLink(challengeData[i])} />);
  }

  let numChallengesCompleted = challengesArr.length

  // Return
  return (
    <div className="Challenge ">
      <h1 className="NumKata">I train every day</h1>
      <h1 className="NumKata">I've completed {numChallengesCompleted} Katas today.</h1>
      <p><strong>Click a card and go train!</strong></p>
      <div className="Container">
        {challengesArr}
      </div>
    </div>
  );
};

// Helper function - display date and time
function dispDate(challenge) {
  return new Date(challenge.completedAt).toString().slice(0,-33)
}

// Helper function - kata link
function kataLink(challenge) {
return `https://www.codewars.com/kata/${challenge.id}`
}

export default ChallengeSection;
