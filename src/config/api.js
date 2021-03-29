import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hackathon-smiles-backend.herokuapp.com'
});

export default api;