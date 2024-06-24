import '../Styles/Page.css';
import ReviewCard from '../Components/ReviewCard';
import { getProducts } from '../data/repository';
import { getReviews } from '../data/repository';
import { useEffect, useState } from 'react';



// Specials page function
 function MyReviews(props) {
    
  // Return the specials pag
  const [reviews, setReviews] = useState([]);
  let reviewedProducts = []; // State to store fetched products

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviews(props.user.email);
        const fetchedReviews = Object.values(response); // Extract products
        setReviews(fetchedReviews); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching reviews:', error); // Handle potential errors
      }
    }

    fetchReviews();

    // match review products with products array
  }, []);

  for(let i = 0; i < reviews.length; ++i){
    for(let j = 0; j < props.products.length; ++j){
      if(reviews[i].productName === props.products[j].name){
        reviewedProducts.push(props.products[j]);
        break;
      }
    }

  }
  
    let formatProducts = reviewedProducts.map(function(product){
      const productReview = reviews.find(review=> review.productName === product.name)
      return <ReviewCard name={product.name} description={product.description} src={product.src} review={productReview} setReview={props.setReview} />;
  
  })
  
    
    // Return the specials page
    return (
    <div>
      <h2>My Reviews</h2>
      <div className="products">
        {formatProducts}
      </div>
    </div>
    
  );
  }
  // Export the specials page
  export default MyReviews;