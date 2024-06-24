module.exports = (express, app) => {
    const controller = require("../controllers/review.controller.js");
    const router = express.Router();
  
    // Select all users.
    router.get("/select/all/:userEmail", controller.all);
  
    // Select a single user with id.
    router.get("/select/:userEmail", controller.one);
  
    router.post("/select/:userEmail/:productName/:description", controller.setDescription);

    router.post("/select/:userEmail/:productName/:stars", controller.setStars);
    // Create a new user.
    router.post("/", controller.create);
  
    // Add routes to server.
    app.use("/api/reviews", router);
  };