const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "firstname should be more than 3 charcters"],
    },
    lastname: {
      type: String,

      minlength: [3, "lastname should be more than 3 charcters"],
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: [5, "email must be more than 5 charcters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [5, "password should be more than 5 charcters"],
  },
  sockedId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
const comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = {
  userModel,

  comparePassword,
  hashPassword,
};
