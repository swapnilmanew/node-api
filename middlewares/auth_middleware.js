const Anime = require("../models/admin_model");
const jwt = require("jsonwebtoken");
const checkUserAuthentication = async (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token.toString(), "thisissecs", async (err, token_decode) => {
      if (!err) {
        next();
      } else {
        return res.json({
          status: 0,
          msg: "Authorization failed",
        });
      }
    });
  } else {
    return res.json({
      status: 0,
      msg: "Authorization failed",
    });
  }
};

module.exports = checkUserAuthentication;
