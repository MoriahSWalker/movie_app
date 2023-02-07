const express = require("express");
require("dotenv").config();

const axios = require("axios");
const app = express();

// console.log(process.endv.API_KEY);

app.get("/get_movie/:movieString", (req, res) => {
  console.log(req.params.movieString);
  res.send("good request");
});
app.listen(3001, () => {
  console.log(`Server is Listening on 3001`);
});
