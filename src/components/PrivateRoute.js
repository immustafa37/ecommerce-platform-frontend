import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/tokenStorage';

const PrivateRoute = ({ children }) => {
  const token = getToken();

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;