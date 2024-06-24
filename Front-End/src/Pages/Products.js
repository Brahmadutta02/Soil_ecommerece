import React, { useEffect, useState } from 'react';
import '../Styles/product.css';
import '../Styles/Page.css';
import ProductCard from '../Components/ProductCard';
import { getProducts } from '../data/repository';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { FcPlus, FcMinus, FcEmptyTrash } from "react-icons/fc";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        const fetchedProducts = Object.values(response); // Extract products
        setProducts(fetchedProducts); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching products:', error); // Handle potential errors
      }
    }

    fetchData(); // Call fetchData function when component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  const handleAddToCart = (productName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productName]: (prevQuantities[productName] || 0) + 1
    }));
  };

  const handleRemoveFromCart = (productName) => {
    if (quantities[productName] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productName]: prevQuantities[productName] - 1
      }));
    }
  };

  const handleDeleteFromCart = (productName) => {
    const updatedCart = cart.filter(item => item.name !== productName);
    setCart(updatedCart);
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[productName];
    setQuantities(updatedQuantities);
  };

  const splitProductsIntoRows = (products, rowSize) => {
    const rows = [];
    for (let i = 0; i < products.length; i += rowSize) {
      rows.push(products.slice(i, i + rowSize));
    }
    return rows;
  };

  const getSelectedProducts = () => {
    return products.filter(product => quantities[product.name] > 0);
  };

  return (
    <div className="body">
      <div className="inside_body">
        <div className="body2">
          <h1 className="product">Our Products</h1>
          {splitProductsIntoRows(products, 5).map((row, index) => (
            <div key={index} className="index">
              {row.map((product, productIndex) => (
                <div key={product.name} className="product1">
                  <img src={product.src} alt={product.name} className="image" />
                  <h2 className="product_name">{product.name}</h2>
                  <div className="container">
                    <h3 className="product_price">
                      {product.price.toLocaleString()}
                    </h3>
                  </div>
                  {quantities[product.name] > 0 ? (
                    <div className="displaybutton">
                      <button
                        onClick={() => handleRemoveFromCart(product.name)}
                        className="minus"
                      >
                        <AiFillMinusCircle />
                      </button>
                      <span className='productquantity'>
                        {quantities[product.name]}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product.name)}
                        className="plus"
                      >
                        <AiFillPlusCircle />
                      </button>
                      <button
                        onClick={() => handleDeleteFromCart(product.name)}
                        className="trash"
                      >
                        <FcEmptyTrash />
                      </button>
                    </div>
                  ) : (
                    <button
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                      onClick={() => handleAddToCart(product.name)}
                      className="addtocart"
                    >
                      <FaShoppingCart className="shoppingcart" /> Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="cart2">
          <h2 className="cart1">Cart</h2>
          {getSelectedProducts().map((product, index) => (
            quantities[product.name] > 0 && (
              <div key={product.name} className="selectproduct">
                <div>
                  <div className="cartimage">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="cartimage1"
                    />
                    <span className="cartproduct">
                      {product.name} - {quantities[product.name]}
                    </span>
                  </div>
                  <div className="productbutton">
                    <button onClick={() => handleRemoveFromCart(product.name)}>
                      <AiFillMinusCircle />
                    </button>
                    <button onClick={() => handleAddToCart(product.name)}>
                      <AiFillPlusCircle />
                    </button>
                    <button onClick={() => handleDeleteFromCart(product.name)}>
                      <FcEmptyTrash />
                    </button>
                  </div>
                  {index < getSelectedProducts().length - 1 && <hr className='selectproduct1'/>}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;