const db = require("../database");
const argon2 = require("argon2");

// Select all users from the database.
exports.all = async (req, res) => {
  const users = await db.user.findAll();

  res.json(users);
};

// Select one user from the database.
exports.one = async (req, res) => {
  const user = await db.user.findByPk(req.params.id);

  if(user === null){
    res.json(null)
  }
  else{
  res.json(user);
  }
};

exports.oneLogin = async (req, res) => {
  const user = await db.user.findOne({ where: { logged_in: true } })

  if(user == null){
    res.json(null)
  }

  else{
    res.json(user);
  }
};

exports.logout = async (req, res) => {
  const user = await db.user.findOne({ where: { logged_in: true } })

  user.logged_in = false;

  await user.save()
  res.json(null);
};
// Select one user from the database if username and password are a match.
exports.login = async (req, res) => {
  const user = await db.user.findByPk(req.query.email);
 
  if(user === null || await argon2.verify(user.password_hash, req.query.password) === false){
    // Login failed.
    res.json(null);
  }
  else{
    user.logged_in = true;

    await user.save();
    res.json(user);
  }
};

// Create a user in the database.
exports.create = async (req, res) => {
  
  const hash = await argon2.hash(req.body.password, { type: argon2.argon2id });

  const user = await db.user.create({
    email: req.body.email,
    name: req.body.name,
    join_date: req.body.join_date,
    password_hash: hash,
  });

  user.logged_in = true;
  await user.save();

  res.json(user);
};

exports.setName = async (req, res) => {
  
  const user = await db.user.findByPk(req.params.id);
  
  user.name = req.params.name;

  await user.save();

  res.json(user);

};

exports.delete = async (req, res) => {
  
  const user = await db.user.findByPk(req.params.id);

  await user.destroy();

  res.json(null);

};

exports.setPassword = async (req, res) => {
  
  const user = await db.user.findByPk(req.params.id);
  
  user.password = req.params.password;

  await user.save();

  res.json(user);

};
