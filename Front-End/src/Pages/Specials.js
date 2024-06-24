import '../Styles/Page.css';
import ProductCard from '../Components/ProductCard';
import { getProductsOnSpecial } from '../data/repository';
import { useState } from 'react';
import { useEffect } from 'react';


// Specials page function
function Specials(props) {
    
  // Return the specials page
  const [specials, setSpecials] = useState([]); // State to store fetched products

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductsOnSpecial();
        const fetchedProducts = Object.values(response); // Extract products
        setSpecials(fetchedProducts); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching products:', error); // Handle potential errors
      }
    }
    fetchData();
  }, []);
    let formatSpecials = specials.map(function(special){
      return <ProductCard name={special.name} price={special.price} salePrice={special.salePrice} description={special.description} src={special.src} unit={special.unit} cart={props.cart} setCart={props.setCart} showCart={true}/>;
  })
    
    // Return the specials page
    return (
    <div>
      <h2>This Week's Specials</h2>
      <div className="products">
        {formatSpecials}
      </div>
    </div>
    
  );
  }
  // Export the specials page
  export default Specials;