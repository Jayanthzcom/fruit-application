const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const response = await axios.get('https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/');
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching fruits', error: error.message }),
    };
  }
};