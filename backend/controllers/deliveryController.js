const Delivery = require("../models/deliveryModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerDelivery = async (req, res) => {
  try {
    const { name, email, password, phone, vehicleNumber } = req.body;

    const deliveryExists = await Delivery.findOne({ email });
    if (deliveryExists) {
      return res.status(400).json({ error: "Delivery partner already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const delivery = await Delivery.create({
      name,
      email,
      password: hashedPassword,
      phone,
      vehicleNumber,
    });

    if (delivery) {
      res.status(201).json({
        _id: delivery.id,
        name: delivery.name,
        email: delivery.email,
        phone: delivery.phone,
        vehicleNumber: delivery.vehicleNumber,
        isAvailable: delivery.isAvailable,
        token: generateToken(delivery._id),
      });
    } else {
      res.status(400).json({ error: "Invalid delivery partner data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginDelivery = async (req, res) => {
  try {
    const { email, password } = req.body;
    const delivery = await Delivery.findOne({ email });

    if (delivery && (await bcrypt.compare(password, delivery.password))) {
      res.json({
        _id: delivery.id,
        name: delivery.name,
        email: delivery.email,
        phone: delivery.phone,
        vehicleNumber: delivery.vehicleNumber,
        isAvailable: delivery.isAvailable,
        token: generateToken(delivery._id),
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({ userId: id, role: "delivery" }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const updateAvailability = async (req, res) => {
  try {
    const deliveryPartner = await Delivery.findById(req.params.id);
    if (!deliveryPartner) {
      return res.status(404).json({ error: "Delivery partner not found" });
    }

    deliveryPartner.isAvailable = req.body.isAvailable;
    await deliveryPartner.save();

    res.json({ message: "Availability updated", deliveryPartner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerDelivery, loginDelivery, updateAvailability };
