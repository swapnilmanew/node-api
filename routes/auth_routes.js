const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth_controller");
router.post("/login", AuthController.login);
module.exports = router;
