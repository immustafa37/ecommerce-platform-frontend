const authService = {
  registerUser: async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      return data; // Return any data if needed
    } catch (error) {
      console.error('Error registering user:', error);
      throw error; // Rethrow the error for further handling if necessary
    }
  },

  loginUser: async (email, password) => {
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
      return data; // Return the data, which includes the token
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; // Rethrow the error for further handling if necessary
    }
  },

  // Add more functions as needed
};

// Default export the authService object
export default authService;
