const express = require("express");
const { placeOrder, getOrderStatus, acceptOrder, completeOrder, updateOrderStatus } = require("../controllers/orderController");

const router = express.Router();

router.post("/place", placeOrder);
router.get("/:id/status", getOrderStatus);
router.put("/:id/accept", acceptOrder);
router.put("/:id/complete", completeOrder);
router.put("/:id/status", updateOrderStatus);


module.exports = router;
