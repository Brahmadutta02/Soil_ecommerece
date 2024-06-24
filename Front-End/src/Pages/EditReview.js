import '../Styles/Page.css';
import '../Styles/login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import ValidateName from '../Components/ValidateName';
import { setUserName } from '../data/repository';
import { useEffect } from 'react';
import { editReviewDecription } from '../data/repository';
import { editReviewStars } from '../data/repository';


// Edit Password page
function EditReview(props) {
    // State variables
    const [description, setDescription] = useState('');
    const [stars, setStars] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {
        setDescription(props.Review.description)
        setStars(props.Review.stars)
        // match review products with products array
      }, []);
    
    // Functions to handle input changes
    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    async function onChangeStars(e) {
        setStars(e.target.value)
    }

    // Function to handle form submission
    async function onSubmit(e) {
        e.preventDefault()
        await editReviewDecription(props.Review.userEmail, props.Review.productName, description);
        await editReviewStars(props.Review.userEmail, props.Review.productName, stars);
        Navigate("/myreviews")
    }
 
    // Return the edit password form
    return (
      <div class="login">
      <form onSubmit={onSubmit} noValidate>

        {/* Form to enter new password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} onChange={onChangeDescription} required  />
            {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={stars} onChange={onChangeStars} required  />
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
  export default EditReview;