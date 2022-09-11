const express = require("express")
const router = express.Router();
const AnimeControllers = require("../controllers/anime_controller")
router.get("/index", AnimeControllers.index);
router.post("/store", AnimeControllers.store);
module.exports = router