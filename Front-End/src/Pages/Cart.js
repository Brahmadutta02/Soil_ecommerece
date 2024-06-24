import '../Styles/Page.css';
import '../Styles/about.css';
import '../Styles/cart.css';
import ProductCard from '../Components/ProductCard';
import React, { useState } from 'react';
import images from '../Images/bottle.webp';
// Vegetables page function


// Dummy product data
const dummyProducts = [
  {
    name: "Tomato",
    price: 1.5,
    description: "Fresh red tomatoes",
    src: images.bottle,
    unit: "kg",
    quantity: 2
  },
  {
    name: "Cucumber",
    price: 1.0,
    description: "Crisp green cucumbers",
    src: "images/cucumber.jpg",
    unit: "kg",
    quantity: 3
  },
  {
    name: "Carrot",
    price: 2.0,
    description: "Organic carrots",
    src: "images/carrot.jpg",
    unit: "kg",
    quantity: 1
  }
];

function Cart(props) {
  const [cart, setCart] = useState(dummyProducts); // Using dummy product data

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  let formatCart = cart.map((product, index) => (
    <div key={index} className="cart-item">
      <ProductCard
        name={product.name}
        price={product.price}
        description={product.description}
        src={product.src}
        unit={product.unit}
        cart={cart}
        setCart={setCart}
      />
      <div className="cart-item-details">
  <span>Quantity: {product.quantity}</span>
  <span>Total: ${(product.price * product.quantity).toFixed(2)}</span>
</div>

    </div>
  ));

  return (
    <div className="cart-container">
      <h2 className='cart-page'>My Cart</h2>
      <div className="products">
        {formatCart}
      </div>
      <div className="cart-total">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

  // Export the vegetables page
  export default Cart;