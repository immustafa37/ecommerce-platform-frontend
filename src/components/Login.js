import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import authService from '../services/authService'; // Import authService as default

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const userData = await authService.loginUser(email, password); // Call loginUser from authService
      console.log('Login successful:', userData);

      // Store token in localStorage (or any other storage you prefer)
      localStorage.setItem('token', userData.token); // Assuming userData contains a token

      // Redirect to the root path after successful login
      navigate('/'); // Change '/dashboard' to '/'

      // If you have a user context or state management, you can update the user state here
      // e.g., setUser(userData.user); // Assuming userData contains user info

    } catch (error) {
      setError('Login failed');
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
