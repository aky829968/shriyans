const userModel = require("../models/userModel");
const userService = require("../services/userServices");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const blackListToken = require("../models/blackListTOkenModel");

module.exports.registerUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, email, password } = req.body;

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists " });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPasword,
  });

  const token = await user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({ message: "No user found", success: false });
  }
  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    return res
      .status(400)
      .json({ success: false, message: "Password does not matched" });
  }
  const token = user.generateAuthToken();

  return res.status(201).json({ token, user });
};

module.exports.getProfileUser = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blackListToken.create({ token });
  res.status(200).json({ message: "Logged Out" });
};
