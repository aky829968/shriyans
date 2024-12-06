const captainModel = require("../models/captainModel");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  vehicleType,
  plate,
  capacity,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !vehicleType ||
    !plate ||
    !capacity
  ) {
    throw new error("All feilds are required");
  }
  const captain = captainModel.create({
    fullname: { firstname, lastname },
    email,
    password,
    vehicle: {
      color,
      vehicleType,
      plate,
      capacity,
    },
  });
  return captain;
};
