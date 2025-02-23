import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import RestaurantPage from "./pages/RestaurantPage";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;