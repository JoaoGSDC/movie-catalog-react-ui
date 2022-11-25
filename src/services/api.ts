import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.REACT_BASE_URL,
});

export default api;
