import axios from 'axios';

//const API_URL = 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/';

//for local change it to /api

export const fetchFruits = async () => {
  try {
    const response =await axios.get('/.netlify/functions/fetchFruits');
    return response.data;
  } catch (error) {
    console.error("Error fetching fruits:", error);
    throw error;
  }
};