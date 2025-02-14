import axios from 'axios';
import tokenStorage from '../utils/tokenStorage';

const apiUrl = '/api/users/profile';

const userService = {
  getUserProfile: async () => {
    const token = tokenStorage.getToken();
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  updateUserProfile: async (formData) => {
    const token = tokenStorage.getToken();
    const response = await axios.put(apiUrl, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
};

export default userService;
