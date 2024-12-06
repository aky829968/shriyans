const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captainController");
const { authCaptain } = require("../middleware/authMiddleware");
const router = express.Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("name3 should be more than 3 charters"),
    body("email").isEmail().withMessage("invalid email"),

    body("password")
      .isLength({ min: 5 })
      .withMessage("Password  must be more than 5 characters"),
    body("vehicle.color")
      .isLength({ min: 2 })
      .withMessage("Shoud be more than 2 charcters"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Shoud be more than 3 charcters"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Shoud be more than 1 capacity"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.captainRegister
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("invalid email"),

    body("password")
      .isLength({ min: 5 })
      .withMessage("Password  must be more than 5 characters"),
  ],
  captainController.captainLogin
);

router.get("/profile", authCaptain, captainController.captainProfile);

router.get("/logout", authCaptain, captainController.captainLogout);

module.exports = router;
