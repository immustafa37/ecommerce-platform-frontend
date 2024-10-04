import axios from 'axios';
import { getToken } from '../utils/tokenStorage';

const api = axios.create({
  baseURL: '/api/products',
});

// Attach JWT token to each request
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAllProducts = async () => {
  const response = await api.get('/');
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await api.post('/', productData);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/${id}`, productData);
  return response.data;
};

// Add other product-related functions as needed
