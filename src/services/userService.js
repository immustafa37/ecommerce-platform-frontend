import axios from 'axios';
import { getToken } from '../utils/tokenStorage';

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get('/api/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
