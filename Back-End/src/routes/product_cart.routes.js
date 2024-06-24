module.exports = (express, app) => {
    const controller = require("../controllers/product_cart.controller.js");
    const router = express.Router();
  
    // Select all users.
    router.get("/select/:cartID/:productName", controller.one);
  
    // Create a new user.
    router.post("/", controller.create);
  
    // Add routes to server.
    app.use("/api/product_carts", router);
};