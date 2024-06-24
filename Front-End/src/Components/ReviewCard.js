import { Button } from 'react-bootstrap';
import '../Styles/card.css';
import { useNavigate } from 'react-router-dom';
function ReviewCard (props){
    // Return the footer
  const Navigate = useNavigate();
   const handleClick = () => {
      props.setReview(props.review);
      Navigate("/editReview");

   }

    return (
      <div className="card">
        <img className="src" src={props.src}></img>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.review.description}</p>
        <p>{props.review.stars}</p>
        <button onClick={handleClick}>Edit Review</button>
      </div>
    );
  
}
// Export the footer
export default ReviewCard