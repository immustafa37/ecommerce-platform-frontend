// src/services/authService.js

const TOKEN_KEY = 'authToken'; // Key for local storage

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token); // Store the token in local storage
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY); // Retrieve the token from local storage
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY); // Remove the token from local storage
};

// Example function to log in and store the token
const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    const token = data.token; // Get the token from the response
    setToken(token); // Store the token using the setToken function
    return token; // Return the token if needed
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Rethrow the error for further handling if necessary
  }
};

export default {
  setToken,
  getToken,
  removeToken,
  loginUser, // Export the loginUser function to use in other components
};
