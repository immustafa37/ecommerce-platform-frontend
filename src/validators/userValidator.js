export const validateUserForm = (data) => {
    const errors = {};
  
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.password) errors.password = 'Password is required';
  
    return errors;
  };
  