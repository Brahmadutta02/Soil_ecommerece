import '../Styles/navbar.css';
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { logoutUser } from '../data/repository';

// Navbar component
function Navbar (props){
    // Return the navbar
    const handleClick = async () => {
      await logoutUser();
      props.setUser();
    }

    return (
        <div class="navbar">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/specials">Specials</Link>
            <Link to="/vegetables">Growing Vegetables</Link>
            <Link to="/products">Our Products</Link>
            {props.user && <Link to="/myreviews">My Reviews</Link>}
            {props.user ?  <Button onClick={handleClick}>Log Out</Button> : <Link to="/login">Login</Link> }
            {!props.user && <Link to="/sign-up">Sign Up</Link>}
          </ul>
        </div>
      );
  
  
}
// Export the navbar
export default Navbar