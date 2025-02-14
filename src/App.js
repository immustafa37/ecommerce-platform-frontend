// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';
import ProductUploadPage from './pages/ProductUploadPage.js'; // Import the new component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/upload" element={<PrivateRoute component={ProductUploadPage} />} /> {/* New route for product uploader */}
        <Route path="/profile" element={<PrivateRoute component={ProfilePage} />} />
      </Routes>
    </Router>
  );
};

export default App;
