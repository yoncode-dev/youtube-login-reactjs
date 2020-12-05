import axios from 'axios';

const jwt = localStorage.getItem('@yoncode:jwt');

const api = axios.create({
  baseURL: 'http://localhost:1337',
  headers: jwt ? { Authorization: `Bearer ${jwt}`} : null,
});

export default api;
