import axios from 'axios';

// TODO: get url from env file
export default axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json',
  },
});
