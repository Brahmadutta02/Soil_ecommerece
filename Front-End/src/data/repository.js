import axios from "axios";

// --- Constants ----------------------------------------------------------------------------------
const API_HOST = "http://localhost:4000";
const USER_KEY = "user";

// --- User ---------------------------------------------------------------------------------------
async function verifyUser(email, password) {
  const response = await axios.get(API_HOST + "/api/users/login", { params: { email, password } });
  const user = response.data;
  
  // NOTE: In this example the login is also persistent as it is stored in local storage.
  if(user !== null) 
  setUser(user)
  return user;
}

async function findUser(id) {
  const response = await axios.get(API_HOST + `/api/users/select/${id}`);
  const user = response.data
  return user;
}

async function createUser(user) {
  const response = await axios.post(API_HOST + "/api/users", user);

  return response.data;
}

async function setUserName(id, name) {
  const response = await axios.post(API_HOST + `/api/users/select/${id}/${name}`);
  const user = response.data
  return user;
}

async function setUserPassword(id, password) {
  const response = await axios.post(API_HOST + `/api/users/select/${id}/${password}`);
  const user = response.data
  return user;
}

async function deleteUser(id) {
  const response = await axios.post(API_HOST + `/api/users/delete/${id}`);
  const user = response.data
  return user;
}

async function getLoggedInUser() {
  const response = await axios.post(API_HOST + "/api/users/login/select");
  const user = response.data
  return user;
}

async function logoutUser() {
  const response = await axios.post(API_HOST + "/api/users/logout");
  const user = response.data
  return user;
}

// --- Post ---------------------------------------------------------------------------------------
async function getProducts() {
  const response = await axios.get(API_HOST + "/api/products");

  return response.data;
}

async function getProductsOnSpecial() {
  const response = await axios.get(API_HOST + "/api/products/specials");

  return response.data;
}
async function findProduct(id) {
    const response = await axios.get(API_HOST + `/api/products/select/${id}`);
  
    return response.data;
  }

async function createProduct(product) {
  const response = await axios.post(API_HOST + "/api/products", product);

  return response.data;
}

async function getReviews(userEmail) {
    const response = await axios.get(API_HOST + `/api/reviews/select/all/${userEmail}`);
  
    return response.data;
  }
  async function findReview(id) {
      const response = await axios.get(API_HOST + `/api/reviews/select/${id}`);
    
      return response.data;
    }

  async function editReviewDecription(userEmail, productName, description) {
      const response = await axios.get(API_HOST + `/api/reviews/select/${userEmail}/${productName}/${description}`);
    
      return response.data;
    }

    async function editReviewStars(userEmail, productName, stars) {
      const response = await axios.get(API_HOST + `/api/reviews/select/${userEmail}/${productName}/${stars}`);
    
      return response.data;
    }
  
  async function createReview(review) {
    const response = await axios.post(API_HOST + "/api/reviews", review);
  
    return response.data;
  }

  async function getCarts() {
    const response = await axios.get(API_HOST + "/api/carts");
  
    return response.data;
  }
  async function findCart(id) {
      const response = await axios.get(API_HOST + `/api/carts/select/${id}`);
    
      return response.data;
    }
  
  async function createCart(post) {
    const response = await axios.post(API_HOST + "/api/carts", post);
  
    return response.data;
  }

  async function getProductCart(cartID, productName) {
    const response = await axios.get(API_HOST + `/api/product_carts/select/${cartID}/${productName}`);
  
    return response.data;
  }
  
  async function createProductCart(product_cart) {
    const response = await axios.post(API_HOST + "/api/carts", product_cart);
  
    return response.data;
  }
// --- Helper functions to interact with local storage --------------------------------------------
function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

export {
  verifyUser, findUser, createUser,
  getUser, removeUser, setUserName, setUserPassword, deleteUser,
  getLoggedInUser, logoutUser,
  getCarts, findCart, createCart,
  getProducts, findProduct, createProduct, getProductsOnSpecial,
  getProductCart, createProductCart,
  getReviews, findReview, createReview, editReviewDecription,
  editReviewStars
}