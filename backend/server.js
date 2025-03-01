require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const http = require("http");
const { Server } = require("socket.io");

connectDB();

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }, // Allow frontend to connect
});
// Listen for WebSocket connections
io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);
  
    socket.on("joinOrderRoom", (orderId) => {
      socket.join(orderId);
      console.log(`User joined order room: ${orderId}`);
    });
  
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });



//Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require("./routes/restaurantRoutes");
const deliveryRoutes = require("./routes/deliveryRoutes");
const orderRoutes = require("./routes/orderRoutes");

//Routes
app.use('/api/users', userRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
