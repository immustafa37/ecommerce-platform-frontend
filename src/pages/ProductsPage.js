import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductsPage = () => {
  return (
    <div>
      <h2>Manage Products</h2>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default ProductsPage;
