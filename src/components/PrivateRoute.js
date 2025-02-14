// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// The PrivateRoute component checks if the user is authenticated
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token'); // Check if the token exists

  return (
    <Route
      {...rest}
      element={token ? <Component /> : <Navigate to="/login" />} // Use Navigate instead of Redirect
    />
  );
};

export default PrivateRoute;
