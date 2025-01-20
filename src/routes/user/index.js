const Authenticated = require("../../middleware/Authenticated");

const userRouter = require("express").Router();
require("express-group-routes");

userRouter.group("/user", (route) => {
  route.use(Authenticated);
  route.get("/", (req, res) => {
    res.json({
      status: "User server is running",
    });
  });
});

module.exports = userRouter;