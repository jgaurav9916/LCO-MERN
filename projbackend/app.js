require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes =require("./routes/auth");


// this is my db connection
mongoose
 .connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
 })
 .then(() => {
  console.log("DB CONNECTED");
 }).catch((err) => {
    console.log("ERROR DB NOT CONNECTED");
 });
// this is my middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// my routes
app.use("/api",authRoutes);

// connection
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

