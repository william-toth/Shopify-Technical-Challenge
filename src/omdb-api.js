import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/?&apikey=8254682a';

const omdbSearch = (term) => {
  const params = {
    t: term,
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(`omdb api error: ${error}`);
        reject(error);
      });
  });
};

export default omdbSearch;
