const express = require("express");
const router = express.Router();
const AnimeControllers = require("../controllers/anime_controller");
router.get("/index", AnimeControllers.index);
router.post("/store", AnimeControllers.store);
router.get("/show/:_id", AnimeControllers.show);
router.post("/update", AnimeControllers.update);
module.exports = router;
