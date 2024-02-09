import axios from "axios";
import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const userName = 'AntCannon';
const getUserURL = `https://www.codewars.com/api/v1/users/${userName}`

const FCCTutorial = () => {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    axios.get(getUserURL).then((response) => {
      setUserData(response.data);
    });
  }, []);

  if (!userData) return null;

  return (
    <div>
      <h1>{userData.username}</h1>
      <h2>Rank: {userData.ranks.overall.name} | Honor: {userData.honor}</h2>
      <p></p>
    </div>
  );
}

export default FCCTutorial;