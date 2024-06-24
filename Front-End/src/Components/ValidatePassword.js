export default function ValidatePassword(password) {
    let errors = null;

    
    if (!password) {
      errors = 'Password is required';
    } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{12,20}$/.test(password))) {
      errors = 'Password must be between 12 to 20 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';
    }
    return errors;
  };
