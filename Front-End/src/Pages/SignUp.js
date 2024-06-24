import '../Styles/Page.css';
import '../Styles/login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Validate from '../Components/Validate'
import { Link } from 'react-router-dom';
import { createUser } from "../data/repository";

// Sign up page
function SignUp(props) {
    
  // State variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState({name: null, email: null, password: null, accExists: false, passwordMismatch: false});
    const Navigate = useNavigate();
    
    // Functions to handle input changes
    function onChangeName(e) {
        setName(e.target.value)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangePasswordConfirm(e) {
      setPasswordConfirm(e.target.value)
  }

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Get current date
        const today = new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const date = today.getDate();
        const currentDate = date + "/" + month + "/" + year;

        // Create user object
        let user = {
            name,
            email,
            password,
            join_date: currentDate
        }
        
        // Validate user input
        const errors = await Validate(name, email, password, passwordConfirm);
        
        // Check if user is already signed up
        if(errors.name === null && errors.email === null && errors.accExists === false && errors.password === null && errors.passwordMismatch === false){
          
          user = await createUser(user);
          props.setUser(user)
          alert("Sign up Complete");
          Navigate("/profile")
            
        }
        // If there are errors
        else{
            setErrorMessage(errors);
        }  
        
    }
 
    // Return the sign up form
    return (
      // Sign up form
      <div class="login">
      <form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name: </Form.Label>
            <Form.Control type="text" placeholder="John Doe" value={name} onChange={onChangeName} required />
            {errorMessage.name !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage.name}</span>
              </div>
            }
        </Form.Group>
        
        {/* Form to enter email and password*/}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="John@example.com" value={email} onChange={onChangeEmail} required />
            {errorMessage.email !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage.email}</span>
              </div>
            }
            {errorMessage.accExists &&
              <div className="form-group">
                <span className="text-danger">Looks like you're already signed up <Link to="/login">Login?</Link></span>
              </div>
            }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={onChangePassword} placeholder="Password" required  />
            {errorMessage.password !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage.password}</span>
              </div>
            }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" value={passwordConfirm} onChange={onChangePasswordConfirm} placeholder="Password" required  />
            {errorMessage.passwordMismatch &&
              <div className="form-group">
              <span className="text-danger">Passwords do not match</span>
            </div>
            }
        </Form.Group>
        
        {/* Submit button */}
        <div class="submit_text">
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </div>
        

      </form>
    </div>
  );
  }
  // Export the sign up page
  export default SignUp;