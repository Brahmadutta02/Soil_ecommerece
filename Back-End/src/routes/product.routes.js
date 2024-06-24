module.exports = (express, app) => {
  const controller = require("../controllers/product.controller.js");
  const router = express.Router();

    // Select all users.
    router.get("/", controller.all);

    router.get("/specials", controller.allSpecials);

    // Select a single user with id.
    router.get("/select/:id", controller.one);
  
    // Create a new user.
    router.post("/", controller.create);

  // Add routes to server.
  app.use("/api/products", router);
};
