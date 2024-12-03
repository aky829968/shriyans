const userModel = require("../models/userModel");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new error("All feilds are required");
  }
  const user = userModel.create({
    fullname: { firstname, lastname },
    email,
    passowrd,
  });
  return user;
};