module.exports = (express, app) => {
    const controller = require("../controllers/cart.controller.js");
    const router = express.Router();
  
    // Select all users.
    router.get("/", controller.all);
  
    // Select a single user with id.
    router.get("/select/:id", controller.one);
  
    // Create a new user.
    router.post("/", controller.create);
  
    // Add routes to server.
    app.use("/api/carts", router);
  };