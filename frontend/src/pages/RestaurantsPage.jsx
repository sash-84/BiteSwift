import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import image from "../assets/baan.jpg";

const Restaurants = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/restaurants/restaurants");
        console.log(response);
        const data = await response.json();
        console.log(data);
        setRestaurants(data);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      } finally {
        setLoading(false); // ✅ This ensures loading is false after fetch
      }
    };
  
    fetchRestaurants();
  }, []);
  

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('../assets/burger.jpeg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Top Trending Spots</h2>
          <p className="text-lg">Discover the most popular restaurants updated weekly!</p>
        </div>
      </div>

      {loading ? (
  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 my-8">
    {Array(26).fill().map((_, index) => (
      <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
    ))}
  </div>
) : restaurants.length > 0 ? (
  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 my-8">
    {restaurants.map((res) => (
      <div key={res._id} className="bg-white shadow-lg rounded-lg overflow-hidden group relative">
        <img
          src={image}
          alt={res.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{res.name}</h3>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <MdLocationOn className="mr-1 text-red-500" />
              {res.address}
            </div>
            <div className="bg-green-600 text-white text-sm p-1 rounded-lg font-semibold flex justify-center items-center gap-1">
              {res.rating}
              <FaStar className="text-[11px]" />
            </div>
          </div>
          <button
            onClick={() => navigate(`/restaurant/${res._id}`)}
            className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg text-sm font-semibold transition hover:bg-red-600"
          >
            View Details →
          </button>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-500 text-center w-full my-8">No restaurants found.</p>
)}

    </div>
  );
};

export default Restaurants;
