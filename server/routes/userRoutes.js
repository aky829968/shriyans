const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("name3 should be more than 3 charters"),
    body("passwors")
      .isLength({ min: 5 })
      .withMessage("Password  must be more than 5 characters"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Inavlaid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("password should be more than 5 charcters"),
  ],
  userController.loginUser
);
router.get("/profile", authMiddleware.authUser, userController.getProfileUser);

router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
