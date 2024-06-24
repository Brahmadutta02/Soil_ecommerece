
// This function is used to validate the user input for the registration form. It checks if the name, email, and password are entered correctly.
import { findUser } from "../data/repository";
 export default async function Validate(name, email, password, passwordConfirm){
    let errors = {};
    
    // Set error messages to null
    errors.accExists = false;
    errors.name = null;
    errors.email = null;
    errors.password = null;
    errors.passwordMismatch = false;


    // Check if name, email, and password are entered correctly
    if (!name) {
        errors.name = 'Name is required';
    }
    if (!email) {
      errors.email  = 'Email address is required';
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (await findUser(email) !== null) {
      errors.accExists = true;
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,20}$/.test(password))) {
      errors.password = 'Password must be between 8 to 20 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';
    }

    if(password !== passwordConfirm){
      errors.passwordMismatch = true;
    }
    // Return the errors
    return errors;
  };
