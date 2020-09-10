const express = require("express");
const router = express.Router();

const userHandler = require("../controllers/user");
const authHandler = require("./../controllers/auth");

router.param("userId", userHandler.getUserById); //param userId should be matching with :userId otherwise middleware getUserById wont trigger

router.get("/test", authHandler.auth, userHandler.test);
router.get("/user/:userId", userHandler.getUser);
// router.get('/user', userHandler.getAllUser);
// router.put("/user/:userId", userHandler.updateUser);
//patch works too
// router.get("/orders/user/:userId", userHandler.userPurchaseList);

module.exports = router;
