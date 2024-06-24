export default function ValidateName(name) {
    let errors = null;

    
    if (!name) {
      errors = 'Password is required';
    } 
    return errors;
  };
