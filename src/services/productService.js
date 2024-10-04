import axios from 'axios';
import tokenStorage from '../utils/tokenStorage';

const API_URL = 'http://localhost:5000/api/products'; // Adjust URL if necessary

const getAuthHeaders = () => {
  const token = tokenStorage.getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getProducts = async () => {
  const response = await axios.get(API_URL, getAuthHeaders());
  return response.data;
};

// You can add more functions for adding, updating, and deleting products similarly
