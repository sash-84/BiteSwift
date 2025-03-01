const express = require('express');
const {registerDelivery, loginDelivery, updateAvailability } = require("../controllers/deliveryController");

const router = express.Router();

router.post("/register", registerDelivery);
router.post("/login", loginDelivery);
router.put("/:id/availability", updateAvailability);

module.exports = router;