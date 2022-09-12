const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
mongoose
  .connect(process.env.URL)
  .then((response) => console.log("connected successfully"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// routes
const animeRoutes = require("./routes/anime_routes");
app.use("/api/anime", animeRoutes);

// season
const seasonRoute = require("./routes/season_routes");
app.use("/api/season", seasonRoute);

// episode route
const episodeRoute = require("./routes/episode_routes");
app.use("/api/episode", episodeRoute);
app.listen(5000, () => {
  console.log("server is running");
});
