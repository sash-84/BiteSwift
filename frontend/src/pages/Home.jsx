import Hero from "../components/Hero";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import PopularDishes from "../components/PopularDishes";
import CustomerReviews from "../components/CustomerReviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Services from "../components/Services";

const Home = () => {

  return (
    <div>
      <Hero />
      <FeaturedRestaurants />
      <PopularDishes />
      <Services />
      <CustomerReviews />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
