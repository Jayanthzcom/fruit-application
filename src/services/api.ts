import axios from 'axios';

//for local/prod botht to work dont use this const API_URL = 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/';

const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent('https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/')}`;


export const fetchFruits = async () => {
  try {
    const response = await axios.get(API_URL);
    return  JSON.parse(response.data.contents);
   

  } catch (error) {
    console.error("Error fetching fruits:", error);
    throw error;
  }
};