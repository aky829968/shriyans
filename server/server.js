const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookie = require("cookie-parser");
const app = express();
const connectDb = require("./dbConnect/db");
const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captainRoutes");

app.use(cors());
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
const port = process.env.PORT || 3000;

app.use("/user", userRoutes);
app.use("/captain", captainRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
