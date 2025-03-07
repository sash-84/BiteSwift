const Restaurant = require("../models/restaurantModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerRestaurant = async (req, res) => {
  try {
    const { name, email, password, address, phone, menu, isVerified } = req.body;

    const restaurantExists = await Restaurant.findOne({ email });
    if (restaurantExists) {
      return res.status(400).json({ error: "Restaurant already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const restaurant = await Restaurant.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      menu,
      isVerified
    });

    if (restaurant) {
      res.status(201).json({
        _id: restaurant.id,
        name: restaurant.name,
        email: restaurant.email,
        address: restaurant.address,
        phone: restaurant.phone,
        menu: restaurant.menu,
        isVerified: restaurant.isVerified,
        token: generateToken(restaurant._id),
      });
    } else {
      res.status(400).json({ error: "Invalid restaurant data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginRestaurant = async (req, res) => {
  try {
    const { email, password } = req.body;
    const restaurant = await Restaurant.findOne({ email });

    if (restaurant && (await bcrypt.compare(password, restaurant.password))) {
      res.json({
        _id: restaurant.id,
        name: restaurant.name,
        email: restaurant.email,
        address: restaurant.address,
        phone: restaurant.phone,
        isVerified: restaurant.isVerified,
        token: generateToken(restaurant._id),
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({ userId: id, role: "restaurant" }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerRestaurant, loginRestaurant };
