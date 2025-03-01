const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });
  
      if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id, user.role),
        });
      } else {
        res.status(400).json({ error: "Invalid user data" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id, user.role),
        });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const generateToken = (id, role) => {
    return jwt.sign({ userId: id, role }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };
  
  module.exports = { registerUser, loginUser };