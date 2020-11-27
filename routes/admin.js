const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
const { register, login, logout } = require("../controllers/admin");

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

module.exports = router;
