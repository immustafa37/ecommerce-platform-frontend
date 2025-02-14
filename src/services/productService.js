// src/services/productService.js
import axios from 'axios';
import tokenStorage from '../utils/tokenStorage';

const apiUrl = '/api/products';

const productService = {
  getProducts: async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  },

  getProduct: async (id) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  },

  addProduct: async (formData) => {
    const token = tokenStorage.getToken(); // Retrieve the token for authorization
    const response = await axios.post(apiUrl, formData, {
      headers: { Authorization: `Bearer ${token}` }, // Set the authorization header
    });
    return response.data;
  }
};

export default productService;
