const express = require("express");
require("dotenv").config();
// pull in axios for making calls to api
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors("*/*"));
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

app.listen(4000, () => {
  console.log(`Server is Listening on 4000`);
});
