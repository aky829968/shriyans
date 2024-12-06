const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/uber")
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err));
};
module.exports = connectDb;
