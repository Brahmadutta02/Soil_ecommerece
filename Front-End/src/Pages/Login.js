import '../Styles/Page.css';
import '../Styles/login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from "../data/repository";


// Login page
function Login(props) {

    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const Navigate = useNavigate();
    
    // Functions to handle input changes
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const user = await verifyUser(email, password);

        if(user === null) {
      // Login failed, reset password field to blank and set error message.
            setErrorMessage("Username and / or password invalid, please try again.");
            return
        }
        // Check if user is signed up
        // Check if password is correct
        else{
                props.setUser(user)
                setErrorMessage(null);
                alert("Login Successful")
                Navigate("/profile")
                return
            }
            // If password is incorrec
        }
    
    // Return the login form
    return (
      <div class="login">
      <form onSubmit={handleSubmit}>

        
        {/* Form to enter email and password*/}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="John@example.com" value={email} onChange={onChangeEmail} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={onChangePassword} placeholder="Password" required />
        </Form.Group>
        
        {/* Submit button*/}
        <div class="submit_text">
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </div>
        
        {/* Error message*/}
        {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            }
      </form>
    </div>
  );
}
  
  // Export the Login component
  export default Login;