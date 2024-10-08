// src/services/productService.js

export const getProducts = async () => {
  const response = await fetch('http://localhost:5000/api/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  return await response.json();
};

export const addProduct = async (productData) => {
  const response = await fetch('http://localhost:5000/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error('Failed to add product');
  return await response.json();
};

export const updateProduct = async (id, productData) => {
  const response = await fetch(`http://localhost:5000/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error('Failed to update product');
  return await response.json();
};
