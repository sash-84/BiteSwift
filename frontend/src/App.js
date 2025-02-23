import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Restaurants from "./pages/Restaurants";
import About from "./components/About";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;