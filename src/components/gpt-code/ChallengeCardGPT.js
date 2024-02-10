// ChallengeCard.js
import React from 'react';

const ChallengeCard = ({ challenge }) => {
  // Check if challenge is defined before accessing its properties
  if (!challenge) {
    return null; // or display a loading/error message
  }

  return (
    <div>
      <h3>{challenge.name}</h3>
      <p>Language(s): {challenge.completedLanguages.join(', ')}</p>
      <p>Completed At: {new Date(challenge.completedAt).toLocaleString()}</p>
      {/* Additional content as needed */}
    </div>
  );
};

export default ChallengeCard;
