import '../Styles/Page.css';
import '../Styles/login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import ValidateName from '../Components/ValidateName';
import { setUserName } from '../data/repository';


// Edit Password page
function EditName(props) {
    // State variables
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const Navigate = useNavigate();
    
    // Functions to handle input changes
    function onChangeName(e) {
        setName(e.target.value)
    }

    // Function to handle form submission
    async function onSubmit(e) {
        e.preventDefault()
        
        const errors = ValidateName(name);
        
        if(errors === null){
          const user = await setUserName(props.user.email, name);
          props.setUser(user);
          alert("Name Changed");
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
            <Form.Label>New Name</Form.Label>
            <Form.Control type="text" value={name} onChange={onChangeName} placeholder="Name" required  />
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
  export default EditName;