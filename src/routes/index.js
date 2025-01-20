const router = require("express").Router();
require("express-group-routes");
router.group("/api", (api) => {
  api.use(require("./admin"));
  api.use(require("./user"));
  api.get("/", (req, res) => {
    res.json({
      status: "Api server is running",
    });
  });
});

module.exports = router;
