import { Button } from 'react-bootstrap';
import '../Styles/card.css';
import { useNavigate } from 'react-router-dom';
function ProductCard (props){
    // Return the footer
    const Navigate = useNavigate();
    
    function handleCartClick() {
      
      const product = {
        name: props.name,
        price: props.price,
        unit: props.unit,
        src: props.src,
        description: props.description,
      }
      props.setCart([...props.cart, product])
      // alert("Item added to cart")

    }

    function handleReviewClick() {
      
      const product = {
        name: props.name,
        price: props.price,
        unit: props.unit,
        src: props.src,
        description: props.description,
      }
      props.setProduct(product);
      Navigate("/review")



    }
    return (
      <div>
        <div className="card">
          <img className="src" src={props.src}></img>
        </div>
        <div className='card1'>
          <h1>{props.name}</h1>
          {!props.salePrice && <p className="origPrice">{props.price} {props.unit}</p>}
          {props.salePrice && <p className="price">{props.price} {props.unit}</p>}
          {props.salePrice && <p className="salePrice">{props.salePrice} {props.unit}</p>}
          <p>{props.description}</p>
          {props.showCart && <p><button onClick={handleCartClick}>Add to Cart</button></p>}
          {props.user && <p><button onClick={handleReviewClick}>Leave Review</button></p>}
        </div>
      </div>
    );
  
}
// Export the footer
export default ProductCard