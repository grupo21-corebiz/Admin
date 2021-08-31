import axios from 'axios';

const api = axios.create({
  baseURL: 'https://7n2b3cjwuf.execute-api.us-east-1.amazonaws.com/prod/leads'
});

export default api;
