

// const queryData = '123456';

// const getLink = async () => {
//   try {
//     const resp = await axios.get(`https://www.apisite.com/${queryData}`);
//     return resp.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

const challengeID = "5277c8a221e209d3f6000b56"
const getCodeChallengeURL = `https://www.codewars.com/api/v1/code-challenges/`



const getKataData = async () => {
  try {
    const resp = await axios.get(getCodeChallengeURL+challengeID);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

console.log(getKataData())