const tokenKey = 'authToken';

const tokenStorage = {
  setToken: (token) => {
    localStorage.setItem(tokenKey, token);
  },

  getToken: () => {
    return localStorage.getItem(tokenKey);
  },

  removeToken: () => {
    localStorage.removeItem(tokenKey);
  }
};

export default tokenStorage;
