const express = require("express");
const router = express.Router();
const authHandler = require("./../controllers/auth");

router.post("/signup", authHandler.signup);

router.post("/signin", authHandler.signin);

router.post("/signout", authHandler.signout);
// router.route("/signout").get(authHandler.signout);

module.exports = router;
