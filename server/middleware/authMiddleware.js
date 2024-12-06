const { userModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListModel = require("../models/blackListTOkenModel");
const captainModel = require("../models/captainModel");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized user" });
  }
  const blackList = await blackListModel.findOne({ token: token });
  if (blackList) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decode._id);
    if (!user) {
      return res.status(401).json({ message: "UnAuthorized user e" });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorized " });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized user" });
  }
  const blackList = await blackListModel.findOne({ token: token });
  if (blackList) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    const captain = await captainModel.findById(decode._id);

    if (!captain) {
      return res.status(401).json({ message: "UnAuthorized user e" });
    }
    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorized " });
  }
};
