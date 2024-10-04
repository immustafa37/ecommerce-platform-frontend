import React, { useState } from 'react';
import { addProduct, updateProduct } from '../services/productService';

const ProductForm = ({ product }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product) {
      await updateProduct(product._id, { name, description, price });
    } else {
      await addProduct({ name, description, price });
    }
    // Optionally redirect or show a success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">{product ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
