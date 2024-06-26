module.exports = (express, app) => {
  const controller = require("../controllers/user.controller.js");
  const router = express.Router();

  // Select all users.
  router.get("/", controller.all);

  // Select a single user with id.
  router.get("/select/:id", controller.one);

  // Select one user from the database if username and password are a match.
  router.get("/login", controller.login);

  router.get("/login/select", controller.oneLogin);

  router.get("/logout", controller.logout);
  // Create a new user.
  router.post("/", controller.create);

  router.post("/select/:id/:name", controller.setName);

  router.post("/select/:id/:password", controller.setPassword);

  router.post("/delete/:id", controller.delete);
  // Add routes to server.
  app.use("/api/users", router);
};
