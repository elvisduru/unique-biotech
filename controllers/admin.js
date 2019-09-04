const passport = require("passport");
const { Admin } = require('../models');

async function register(req, res) {
  if (req.body.username && req.body.password) {
    const { username, password } = req.body;

    try {
      const admin = new Admin({ username });
      await admin.setPassword(password);
      await admin.save();

      passport.authenticate("local")(req, res, () => {
        res.status(201).json({ message: "success", username: req.user.username });
      });
    } catch (err) {
      console.log(err);
      res.send({ message: "error" });
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
    res.send({ message: "error" })
  }
}