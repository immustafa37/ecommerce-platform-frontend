import axios from 'axios';
import tokenStorage from '../utils/tokenStorage';

const apiUrl = '/api/users';

const authService = {
  login: async (email, password) => {
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    const token = response.data.token;
    tokenStorage.setToken(token);
    return response.data;
  },

  register: async (name, email, password) => {
    const response = await axios.post(`${apiUrl}/register`, { name, email, password });
    return response.data;
  },

  isAuthenticated: () => {
    return !!tokenStorage.getToken();  // Check if token exists
  },

  logout: () => {
    tokenStorage.removeToken();
  }
};

export default authService;
