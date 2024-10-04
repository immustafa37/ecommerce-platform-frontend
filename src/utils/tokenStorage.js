// src/utils/tokenStorage.js

const TOKEN_KEY = 'authToken'; // Key for local storage

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token); // Store the token in local storage
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY); // Retrieve the token from local storage
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY); // Remove the token from local storage
};

export default { setToken, getToken, removeToken }; // Optional default export
