import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Specials from "./Pages/Specials";
import Vegetables from "./Pages/Vegetables";
import EditPassword from "./Pages/EditPassword";
import EditName from "./Pages/EditName";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Review from "./Pages/Review";
import MyReviews from "./Pages/MyReviews";
import EditReview from "./Pages/EditReview";
import { getLoggedInUser } from "./data/repository";
import { useEffect } from "react";



// Main App function
 function App() {
    // State variables
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [Review, setReview] = useState(null)

    useEffect(() => {
      const getLoggedUser = async () => {
        try {
          const user = await getLoggedInUser(); // Extract products
          setUser(user); // Update state with fetched data
        } catch (error) {
          console.error('Error fetching products:', error); // Handle potential errors
        }
      }
      getLoggedUser();
    }, []);
      // Update the document title using the browser API
    
    const specials = [
      
         {
           

        },
         {
            name: "Fresh Pink Lady Apples",
            price: "$2",
            salePrice: "$1.5",
            unit: "each",
            src: "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fHww",
            description: "Delicious pink lady apples",
            quantity: 0
        
        },
         {
            name: "Baby Cucumbers",
            price: "$16",
            salePrice: "$12",
            unit: "per Kg",
            src: "https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
            description: "Fresh Cucumbers",
            quantity: 0

        },
         {
            name: "Gold Kiwifruit",
            price: "$3",
            salePrice: "$2",
            unit: "each",
            src: "https://media.istockphoto.com/id/1083918554/photo/golden-kiwifruit-slice-on-wood.webp?b=1&s=170667a&w=0&k=20&c=3YgUK7QdLRBapB-FlqZpZycuFY73kuo7jaZXvSWKmGk=",
            description: "Delicious Aussie Kiwies",
            quantity: 0
        },
         {
            name: "Navel Oranges",
            price: "$7",
            salePrice: "$5",
            unit: "per Kg",
            src: "https://images.unsplash.com/photo-1661882002589-d93b357a2ffc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF2ZWwlMjBvcmFuZ2VzfGVufDB8fDB8fHww",
            description: "Fresh Oranges",
            quantity: 0
        }
        
        
      ]

    
  // Return the main app
  return (
    // Main app div
    <div className="d-flex flex-column min-vh-100">
      <Router>
        {/* Header, Navbar, and Routes */}
        <Header user={user}/>
        <Navbar  name={name} user={user} setUser={() => {setUser(null)}}  />
            <Routes>
              {/* Routes to different pages */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login  user={user} setUser={(user) => {setUser(user)}} />} />
              <Route path="/about" element={<About  />} />
              <Route path="/specials" element={<Specials cart={cart} setCart={(cart) => {setCart(cart)}} />} />
              <Route path="/vegetables" element={<Vegetables  />} />
              <Route path="/sign-up" element={<SignUp  user={user} setUser={(user) => {setUser(user)}} />} />
              <Route path="/profile" element={<Profile user={user} setUser={(user) => {setUser(user)}}   />} />
              <Route path="/editPassword" element={<EditPassword user={user} />} />
              <Route path="/editName" element={<EditName user={user} setUser={(user) => {setUser(user)}} email={email} setName={(name) => {setName(name)}} />} />
              <Route path="/products" element={<Products user={user} cart={cart} setCart={(cart) => {setCart(cart)}} products={products} setProducts={(products) => {setProducts(products)}}  product={product} setProduct={(product) => {setProduct(product)}} />} />
              <Route path="/cart" element={<Cart cart={cart}/>} />
              <Route path="/review" element={<Review product={product} user={user}/>} />
              <Route path="/myreviews" element={<MyReviews products={products} user={user} setReview={(review) => {setReview(review)}}/>} />
              <Route path="/editReview" element={<EditReview Review={Review} user={user}/>} />
            </Routes>
      </Router>
    </div>
  );
}
// Export the main app
export default App;