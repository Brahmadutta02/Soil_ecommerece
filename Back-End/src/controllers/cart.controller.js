const db = require("../database");
const argon2 = require("argon2");

// Select all users from the database.
exports.all = async (req, res) => {
  const carts = await db.cart.findAll();

  res.json(carts);
};

// Select one user from the database.
exports.one = async (req, res) => {
  const cart = await db.cart.findByPk(req.params.id);

  res.json(cart);
};


// Create a user in the database.
exports.create = async (req, res) => {
  
  const cart = await db.cart.create({
    user_name: req.body.user_name
  });

  res.json(cart);
};