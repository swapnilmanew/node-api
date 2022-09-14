const Admin = require("../models/admin_model");
const jwt = require("jsonwebtoken");
class AuthController {
  static login = async (req, res) => {
    const { email, password } = req.body;
    Admin.find(
      {
        email,
        password,
      },
      (err, user) => {
        if (err)
          return res.json({ msg: "Invalid credentials", status_code: 0 });
        if (user == null || user.length == 0) {
          return res.json({ msg: "Invalid credentials", status_code: 0 });
        }
        jwt.sign({ user: user }, "thisissecs", (err, token) => {
          if (err)
            return res.json({ msg: "Invalid credentials", status_code: 0 });
          return res.json({
            status_code: 1,
            msg: "Login successful",
            token: token,
          });
        });
      }
    );
  };
}
module.exports = {
  login: AuthController.login,
};
