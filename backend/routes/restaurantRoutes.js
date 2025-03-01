const express = require("express");
const { registerRestaurant, loginRestaurant } = require("../controllers/restaurantController");

const router = express.Router();

router.post("/register", registerRestaurant);
router.post("/login", loginRestaurant);

module.exports = router;
