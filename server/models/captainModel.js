const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
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
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: "String",
      required: true,
      minlength: [2, "Color should me more than two charcters"],
    },
    plate: {
      type: Number,
      required: true,
      min: [3, "Plate must be more than 3 charcters"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Plate must be more than 1 charcters"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },
});

captainSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
captainSchema.statics.hashPassword = async function (password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;
