const db = require("../database");
const argon2 = require("argon2");

// Select all users from the database.
exports.all = async (req, res) => {
  const reviews = await db.review.findAll({where: {userEmail: req.params.userEmail}});

  res.json(reviews);
};

// Select one user from the database.
exports.one = async (req, res) => {
  const review = await db.review.findOne({where: {userEmail: req.params.userEmail, productName: req.params.productName}});

  res.json(review);
};

exports.setDescription = async (req, res) => {
  
  const review = await db.review.findOne({where: {userEmail: req.params.userEmail, productName: req.params.productName}});
  
  review.description = req.params.description;

  await review.save();

  res.json(review);

};

exports.setStars = async (req, res) => {
  
  const review = await db.review.findOne({where: {userEmail: req.params.userEmail, productName: req.params.productName}});
  
  review.stars = req.params.stars;

  await review.save();

  res.json(review);

};


// Create a user in the database.
exports.create = async (req, res) => {
  
  const review = await db.review.create({
    userEmail: req.body.userEmail,
    productName: req.body.productName,
    description: req.body.description,
    stars: req.body.stars
  });

  res.json(review);
};