const express = require("express")
const router = express.Router();
const SeasonsController = require("../controllers/season_controller")
router.get("/index/:_anime_id", SeasonsController.index);
router.post("/store", SeasonsController.store);
router.post("/update", SeasonsController.update);
module.exports = router