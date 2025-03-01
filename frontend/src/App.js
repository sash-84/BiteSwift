import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import RestaurantPage from "./pages/RestaurantPage";
import ProfilePage from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);  // Store user state

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
  );
}

export default App;