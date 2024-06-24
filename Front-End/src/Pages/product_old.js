import '../Styles/Page.css';
import ProductCard from '../Components/ProductCard';
import { getProducts } from '../data/repository';
import { useEffect, useState } from 'react';



// Specials page function
 function Products(props) {
    
  // Return the specials pag

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        const fetchedProducts = Object.values(response); // Extract products
        props.setProducts(fetchedProducts); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching products:', error); // Handle potential errors
      }
    }

     fetchData();
    
  }, []);
  
    let formatProducts = props.products.map(function(product){
      return <ProductCard name={product.name} price={product.price} description={product.description} src={product.src} unit={product.unit} cart={props.cart} setCart={props.setCart} product={props.product} setProduct={props.setProduct} user={props.user} showCart={true}/>;
  })
    
    // Return the specials page
    return (
    <div>
      <h2>Our Products</h2>
      <div className="products">
        {formatProducts}
      </div>
    </div>
    
  );
  }
  // Export the specials page
  export default Products;