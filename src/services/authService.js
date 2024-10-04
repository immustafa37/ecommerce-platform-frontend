import axios from 'axios';
import { setToken } from '../utils/tokenStorage';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/users/login', { email, password });
    const token = response.data.token;
    setToken(token); // Store the token
    return response.data; // return user data
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/users/register', userData);
    return response.data; // return user data
  } catch (error) {
    return { error: error.response.data.message };
  }
};
