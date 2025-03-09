import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import RestaurantsPage from "./pages/RestaurantsPage";
import RestaurantDetails from "./components/RestaurantDetails";
import ProfilePage from "./components/Profile";
import Navbar from "./components/Navbar";
import LoginModal from "./pages/Login";
import SignupModal from "./pages/Signup";

function App() {
  // const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
        <Navbar openLogin={() => setIsLoginOpen(true)}/>      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />

      </Routes>

      { /* Login Modal */}
      {isLoginOpen && (
        <LoginModal 
          closeLogin={() => setIsLoginOpen(false)} 
          openSignup={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}  
        />
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <SignupModal 
          closeSignup={() => setIsSignupOpen(false)}
          openLogin={() => {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
          }} 
        />
      )}
    </>
  );
}

export default App;