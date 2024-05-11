const express = require("express");

const app = express();

const mongoose = require("mongoose");
const router = require("./router");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.db)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch(() => {
    console.log("db not connected");
  });

app.use(express.json());
app.use("/api", router);

app.listen(process.env.port, () => {
  console.log("server is created",process.env.port);
});
