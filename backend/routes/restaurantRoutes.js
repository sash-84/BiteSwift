const express = require("express");
const { registerRestaurant, loginRestaurant } = require("../controllers/restaurantController");
const Restaurant = require('../models/restaurantModel');
const router = express.Router();

router.post("/register", registerRestaurant);
router.post("/login", loginRestaurant);

//Fetch all approved restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ isVerified: true });
    res.json(restaurants);
    console.log(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Fetch a specific restaurant
router.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Fetch menu of a specific restaurant
router.get('/restaurants/:id/menu', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
    res.json(restaurant.menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Search restaurants by name, location, or dish name
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q; // Search input from user
    const regex = new RegExp(query, 'i'); // Case-insensitive search

    // Search for restaurants by name or location
    const restaurants = await Restaurant.find({
      $or: [{ name: regex }, { location: regex }]
    });

    // Search for dishes inside all restaurants' menus
    const restaurantsWithDishes = await Restaurant.find({
      "menu.name": regex
    });

    // Extract matching dishes with their restaurant info
    const dishes = restaurantsWithDishes.flatMap(restaurant =>
      restaurant.menu
        .filter(item => regex.test(item.name))
        .map(dish => ({
          name: dish.name,
          price: dish.price,
          image: dish.image,
          restaurant: restaurant.name,
          restaurantId: restaurant._id
        }))
    );

    res.json({ restaurants, dishes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
