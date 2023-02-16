const express = require("express");
require("dotenv").config();
// pull in axios for making calls to api
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors("*/*"));

// SERVE REACT APP FROM THE SERVER
app.use(express.static(path.join(__dirname, "build")));
// Routes //
app.get("/get_movie/:movieString", async (req, res) => {
  console.log(req.params.movieString);
  // call API
  let apiResponse = await axios(
    `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`
  );
  const data = apiResponse.data;
  console.log(data);
  res.json(data);
});
// END Routes //

app.listen(4000, () => {
  console.log(`Server is Listening on 4000`);
});
