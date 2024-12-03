const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err));
};
module.exports = connectDb;
