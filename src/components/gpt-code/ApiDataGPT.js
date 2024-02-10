// ApiData.js
import React from 'react';

const ApiData = ({ apiResponse }) => {
  // Check if apiResponse is defined before accessing its properties
  if (!apiResponse) {
    return null; // or display a loading/error message
  }

  return (
    <div>
      <h2>API Data</h2>
      <p>Total Pages: {apiResponse.totalPages}</p>
      <p>Total Items: {apiResponse.totalItems}</p>
      <div>
        {apiResponse.data.map(challenge => (
          <div key={challenge.id}>
            <h3>{challenge.name}</h3>
            <p>Language(s): {challenge.completedLanguages.join(', ')}</p>
            <p>Completed At: {new Date(challenge.completedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
