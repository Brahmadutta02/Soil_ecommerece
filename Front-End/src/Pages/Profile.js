import '../Styles/Page.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteUser } from '../data/repository';


// Profile page function
const Profile = (props) => {
  
// State variables
const Navigate = useNavigate();


// If user is not logged in, redirect to home page
if(props.user === null){
  Navigate('/')
}

// Function to delete account
const deleteAccount = async () => {
  props.setUser(await deleteUser(props.user.email));
  alert("Account Deleted")
  Navigate('/')
}

// Return the profile page
return(
  <div>
    {props.user !== null && <h2>Name: {props.user.name}</h2>}
    {props.user !== null && <h2>Email: {props.user.email}</h2>}
    {props.user !== null && <h2>Date Joined: {props.user.join_date}</h2>}
    <Link to="/editPassword"><Button>Change Password</Button></Link>
    <Link to="/editName"><Button>Change Name</Button></Link>
    <Button variant="danger" onClick={deleteAccount}>Delete Account</Button>
  </div>
  
);
    
};

// Export the profile page
export default Profile;