const express = require("express");
const router = express.Router();
const AnimeControllers = require("../controllers/anime_controller");
const checkUserAuthentication = require("../middlewares/auth_middleware");
router.get("/index", checkUserAuthentication, AnimeControllers.index);
router.post("/store", AnimeControllers.store);
router.get("/show/:_id", AnimeControllers.show);
router.post("/update", AnimeControllers.update);
module.exports = router;
