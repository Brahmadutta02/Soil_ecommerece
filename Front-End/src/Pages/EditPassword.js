import '../Styles/Page.css';
import '../Styles/login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import ValidatePassword from '../Components/ValidatePassword';
import { setUserPassword } from '../data/repository';


// Edit Password page
function EditPassword(props) {
    // State variables
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const Navigate = useNavigate();
    
    // Functions to handle input changes
    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    // Function to handle form submission
    async function onSubmit(e) {
        e.preventDefault()
        
        const errors = ValidatePassword(password);
        
        if(password === props.user.password){
            setErrorMessage("New password matches current password")
        }
        else if(errors === null){
          const user = await setUserPassword(props.user.email, password);
          props.setUser(user);
          alert("Password Changed");
          Navigate("/profile");
        }
        else{
            setErrorMessage(errors);
        }
    }
 
    // Return the edit password form
    return (
      <div class="login">
      <form onSubmit={onSubmit} noValidate>

        {/* Form to enter new password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" value={password} onChange={onChangePassword} placeholder="Password" required  />
            {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
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
  
  // Export the edit password page
  export default EditPassword;