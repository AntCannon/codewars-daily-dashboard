const userName = 'AntCannon';
const getUserURL = `https://www.codewars.com/api/v1/users/${userName}`

let userInfo;

async function fetchUserData() {
  const userData = await fetch(getUserURL)
    .then(response => response.json())
    .then(json => userInfo = json);
  return userInfo
}

// fetchUserData().then(userData => userInfo = (userData))
console.log(`variable`,userInfo)

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();