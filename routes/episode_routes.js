const express = require("express");
const router = express.Router();
const EpisodesController = require("../controllers/episode_controller");
router.get("/index/:_anime_id/:_season_id", EpisodesController.index);
router.post("/store", EpisodesController.store);
router.post("/update", EpisodesController.update);
module.exports = router;
