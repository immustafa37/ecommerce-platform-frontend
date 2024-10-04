import axios from 'axios';
import { setToken } from '../utils/tokenStorage';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/users/login', { email, password });
    const token = response.data.token;
    setToken(token); // Store the token in localStorage
    console.log('Login successful, token stored in localStorage.');
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Rethrow error for handling in the component
  }
};
