// imports
import React from 'react';
import axios from 'axios';
import './Cards.css';
import './Challenges.css';
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
const getCodeChallengeURL = `https://www.codewars.com/api/v1/code-challenges/`

// Challenge Card
const ChallengeCard = (props) => {
  return(
    <div className="Card">
    <a className="Card-Link" href={props.link} target="_blank" rel="noreferrer">
      <div className="Info">
        <h2>{props.name}</h2>
        <h3>{props.rank}{props.date}</h3>
      </div>
      <div className="Icon">
        <img src={logo} width={75}></img>
      </div>
    </a>
    </div>
  )
}

// ChallengeSection.js
const ChallengeSection = () => {
  // create useStates
  const [challengeData, setChallengeData] = React.useState(null);
  const [error, setError] = React.useState(null);

  // Helper function - kata rank name
  const [kataRankName, setKataRankName] = React.useState(null);
  const [kataError, setKataError] = React.useState(null);

  // function getKataRankNameById(challenge) {
  //   axios.get(getCodeChallengeURL+challenge.id)
  //     .then(response => setKataRankName(response.rank.name))
  //     .catch(error => setKataError(error))
  // }  
 
  // useEffect for API
  React.useEffect(() => {
    // Make API request to codewars
    axios.get(getCompletedChallengesURL)
    .then(response => setChallengeData(response.data.data))
    .catch(error => setError(error))
    
  }, []);
  
  if (error) return `Error: ${error.message}`
  if (!challengeData) return null;
  
  // how to store api data to js file
  // if error fetching data use saved kata data


  // create array of challenge cards
  const currDate = new Date().getDate();
  const currMonth = new Date().getMonth();
  const challengesArr = [];
  
  for (let i = 0; (currDate === new Date(challengeData[i].completedAt).getDate() && currMonth === new Date(challengeData[i].completedAt).getMonth() && i < 30); i++) {
    challengesArr.push(<ChallengeCard
      name={challengeData[i].name}
      // rank={getKataRankNameById(challengeData[i])}
      date={dispDate(challengeData[i])}
      link={kataLink(challengeData[i])} />);
  }

  let numChallengesCompleted = challengesArr.length

  // Return
  return (
    <div className="ChallengeSection">
      <h1 className="NumKata">I've completed {numChallengesCompleted} kata today</h1>
      <span>Click a card and go train!</span>
      <div className="ChallengeCards">
        <div className="Challenges">
          {challengesArr}
        </div>
      </div>
    </div>
  );
};

// Helper function - display date and time
function dispDate(challenge) {
  return new Date(challenge.completedAt).toDateString()
}

// Helper function - kata link
function kataLink(challenge) {
return `https://www.codewars.com/kata/${challenge.id}`
}

export default ChallengeSection;