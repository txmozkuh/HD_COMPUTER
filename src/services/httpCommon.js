import axios from 'axios';

// TODO: get url from env file
export default axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});
