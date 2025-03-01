const Order = require("../models/orderModel");
const Restaurant = require("../models/restaurantModel");
const Delivery = require("../models/deliveryModel");

const placeOrder = async (req, res) => {
  try {
    const { userId, restaurantId, items, totalPrice, address } = req.body;

    const restaurantExists = await Restaurant.findById(restaurantId);
    if (!restaurantExists) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    const order = await Order.create({
      userId,
      restaurantId,
      items,
      totalPrice,
      address,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ status: order.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const acceptOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Find an available delivery partner
    const deliveryPartner = await Delivery.findOne({ isAvailable: true });
    if (!deliveryPartner) {
      return res.status(400).json({ error: "No available delivery partners" });
    }

    // Assign the delivery partner and mark them as unavailable
    order.deliveryPartner = deliveryPartner._id;
    order.status = "Out for Delivery";
    deliveryPartner.isAvailable = false;

    await order.save();
    await deliveryPartner.save();

    res.json({ message: "Order assigned to delivery partner", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const completeOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = "Delivered";
    await order.save();
    res.json({ message: "Order delivered", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = req.body.status;
    await order.save();

    // Emit real-time update
    io.to(order._id.toString()).emit("orderUpdated", order);

    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { placeOrder, getOrderStatus, acceptOrder, completeOrder, updateOrderStatus };
