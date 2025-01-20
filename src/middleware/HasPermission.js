const AppError = require("../exception/AppError");
const catchAsync = require("../exception/catchAsync");
const Role = require("../model/Role");

module.exports = (permissionName) => {
  return catchAsync(async (req, res, next) => {
    const user = req.user;

    // Allow access if user is superAdmin
    if (user.role === "admin") {
      return next();
    }

    // Check if user has the permission

    next();
  });
};
