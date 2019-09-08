const passport = require("passport");
const { Admin } = require("../db/models");

async function register(req, res) {
  console.log(req.body)
  if (req.body.username && req.body.password) {
    const { username, password } = req.body;

    try {
      const admin = new Admin({ username });
      await admin.setPassword(password);
      await admin.save();

      passport.authenticate("local")(req, res, () => {
        res
          .status(201)
          .json({ message: "success", username: req.user.username });
      });
    } catch (err) {
      console.log(err);
      res.send({ message: "error", err });
    }
  } else {
    res.send({
      message: "Something is wrong with your input!"
    });
  }
}

async function login(req, res) {
  try {
    passport.authenticate("local")(req, res, () => {
      res.status(201).json({ message: "success", username: req.user.username });
    });
  } catch (err) {
    res.status(401).send({ message: "error", err });
  }
}

async function logout(req, res) {
  req.logout();
  res.send("");
}

exports.register = register;
exports.login = login;
exports.logout = logout;