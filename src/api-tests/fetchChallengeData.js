const user = 'AntCannon'
// curl http://www.codewars.com/api/v1/users/AntCannon/code-challenges/completed?page=0


// To make the equivalent request in JavaScript using the fetch API, you can do the following:

// javascript
// Copy code
// // Replace 'some_user' with the actual username you want to query
const username = 'AntCannon';

// Replace 'http://www.codewars.com/api/v1/users/' with the base API URL
const apiUrl = `http://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=0`;


// Make a GET request
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the JSON response
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('Fetch error:', error);
//   });



// Declare a function that takes a callback
function fetchData(callback) {
  // Make a GET request
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Call the callback with the data
      callback(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Fetch error:', error);
    });
}

// Call the fetchData function with a callback
fetchData(function(userData) {
  // Now you can access 'userData' outside the scope
  console.log(userData);
});
  // You can perform other actions with 'userData' here