export const validateProductForm = (data) => {
    const errors = {};
  
    if (!data.name) errors.name = 'Product name is required';
    if (!data.price) errors.price = 'Price is required';
    if (!data.description) errors.description = 'Description is required';
    if (!data.category) errors.category = 'Category is required';
  
    return errors;
  };
  