const Authenticated = require("../../middleware/Authenticated");

const adminRouter = require("express").Router();
require("express-group-routes");

adminRouter.group("/admin", (route) => {
  route.use(Authenticated);
  route.get("/", (req, res) => {
    res.json({
      status: "Admin server is running",
    });
  });
});

module.exports = adminRouter;
