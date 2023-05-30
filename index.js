const express = require("express");

const { connectToMongoDb } = require("./connection");

const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() =>
  console.log("Connected to MongoDB")
);

app.use("url/", urlRoute);
app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
