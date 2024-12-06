const blackListTOkenModel = require("../models/blackListTOkenModel");
const captainModel = require("../models/captainModel");
const captainService = require("../services/captainService");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

module.exports.captainRegister = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const existingCaptain = await captainModel.findOne({ email });
  if (existingCaptain) {
    return res.status(400).json({ message: "Email already exists " });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    vehicleType: vehicle.vehicleType,
    capacity: vehicle.capacity,
    plate: vehicle.plate,
  });

  const token = await captain.generateToken();
  res
    .status(200)
    .json({ token, captain, message: "Captain Regitered successfuly" });
};

module.exports.captainLogin = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    res.status(400).json({ success: false, message: "User not found" });
  }
  const isMatched = await bcrypt.compare(password, captain.password);

  if (!isMatched) {
    res
      .status(400)
      .json({ success: false, message: "User not found and pasword" });
  }

  const token = await captain.generateToken();
  res.cookie("token", token);

  res.status(200).json({ token, captain, message: "Login sucessfully" });
};

module.exports.captainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.captainLogout = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blackListTOkenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successully" });
};
