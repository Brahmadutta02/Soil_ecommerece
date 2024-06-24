import '../Styles/Page.css';
import '../Styles/login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import ValidateName from '../Components/ValidateName';
import { setUserName } from '../data/repository';
import ProductCard from '../Components/ProductCard';
import { createReview } from '../data/repository';


// Edit Password page
function Review(props) {
    // State variables
    const [description, setDescription] = useState('');
    const [stars, setStars] = useState('')
    const Navigate = useNavigate();
    
    // Functions to handle input changes
    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    function onChangeStars(e) {
        setStars(e.target.value)
    }

    // Function to handle form submission
    async function onSubmit(e) {
        e.preventDefault()
        
        const Review = {
            userEmail: props.user.email,
            productName: props.product.name,
            description,
            stars
        }

        const review = await createReview(Review);
        if(review){
            alert("Review Submitted");
            Navigate("/products");
        }

        else{
            alert("Review not created")
        }


    }
 
    // Return the edit password form
    return (
    <div>
        <h2>Leave a Review</h2>
        <div className="products">
        <ProductCard name={props.product.name} price={props.product.price} description={props.product.description} src={props.product.src} unit={props.product.unit} />;
        </div>
      <div class="login">
      <form onSubmit={onSubmit} noValidate>

        {/* Form to enter new password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} onChange={onChangeDescription} placeholder="Decription of Review" required  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Stars</Form.Label>
            <Form.Control type="text" value={stars} onChange={onChangeStars} placeholder="Number of Stars out of 5" required  />
        </Form.Group>
        
        {/* Submit button */}
        <div class="submit_text">
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </div>
        

      </form>
    </div>
    </div>
  );
  }
  
  // Export the edit password page
  export default Review;