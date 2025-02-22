import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import PopularDishes from "../components/PopularDishes";
import CustomerReviews from "../components/CustomerReviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import LoginModal from "./Login";
import SignupModal from "./Signup";
import Services from "../components/Services";

const Home = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div>
      <Navbar openLogin={() => setIsLoginOpen(true)}/>
      <Hero />
      <FeaturedRestaurants />
      <PopularDishes />
      <Services />
      <CustomerReviews />
      <CTA />
      <Footer />

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
    </div>
  );
};

export default Home;
