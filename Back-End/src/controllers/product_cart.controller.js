const db = require("../database");
const argon2 = require("argon2");

// Select all users from the database.
exports.one = async (req, res) => {
  const products = await db.product_cart.findOne({where: {cartID: req.params.cartID, productName: req.params.productName}});

  res.json(products);
};

// Select one user from the database.



// Create a user in the database.
exports.create = async (req, res) => {
  
  const product_cart = await db.product_cart.create({
    cartID: req.body.cartID,
    productName: req.body.productName,
  });

  res.json(product_cart);
};