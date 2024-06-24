const db = require("../database");
const argon2 = require("argon2");

// Select all users from the database.
exports.all = async (req, res) => {
  const products = await db.product.findAll();

  res.json(products);
};

exports.allSpecials = async (req, res) => {
  const products = await db.product.findAll({
    where: {
      special: true
    }
  });

  res.json(products);
};

// Select one user from the database.
exports.one = async (req, res) => {
  const product = await db.product.findByPk(req.params.id);

  res.json(product);
};


// Create a user in the database.
exports.create = async (req, res) => {
  
  const product = await db.product.create({
    name: req.body.name,
    price: req.body.price,
    unit: req.body.unit,
    src: req.body.src,
    description: req.body.description,
    special: req.body.special

  });

  res.json(product);
};