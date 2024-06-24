import { Link } from "react-router-dom";
import '../Styles/header.css';
// Header component
function Header (props){
    // Return the header
    return (
      <div class="header">
        <h1>SOIL</h1> 
        <p>Your one stop shop for healthy food, advice on nutrition and diet as 
            well as organic farming</p>
            {props.user && <Link to="/profile"><span class="material-icons md-36 float-right">account_circle</span></Link>}
            <Link to="/cart"><span class="material-icons cart">shopping_cart</span></Link>
      </div>
    );
  
}
// Export the header
export default Header