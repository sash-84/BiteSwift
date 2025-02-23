import { useState } from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import data from "../data/restaurants.json";
import { FaStar } from "react-icons/fa";

const Restaurants = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [restaurants] = useState(data); // Directly use imported data

  const filteredRestaurants = restaurants.filter(
    (res) =>
      res.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCuisine === "" || res.cuisine === selectedCuisine)
  );

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white"
           style={{ backgroundImage: "url('../assets/burger.jpeg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Top Trending Spots</h2>
          <p className="text-lg">Discover the most popular restaurants updated weekly!</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap justify-center items-center gap-4 my-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-lg pl-10 shadow-md"
          />
          <MdSearch className="absolute left-3 top-3 text-gray-500" size={20} />
        </div>

        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="border p-2 rounded-lg shadow-md"
        >
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Indian">Indian</option>
        </select>
      </div>

      {/* Restaurant Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((res) => (
            <div
              key={res.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group relative"
            >
              <img
                src={require(`../assets/${res.img}`)}
                alt={res.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Discount Badge */}
              {res.discount && (
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {res.discount} OFF
                </span>
              )}

              {/* Details Section */}
              <div className="p-4">
                <h3 className="text-xl font-bold">{res.name}</h3>
                <p className="text-gray-600">{res.cuisine} Cuisine</p>

                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MdLocationOn className="mr-1 text-red-500" />
                    {res.location}
                  </div>
                  <div className="bg-green-600 text-white text-sm p-1 rounded-lg font-semibold flex justify-center items-center gap-1">
                    {res.rating}<FaStar className="text-[11px]" />
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/restaurant/${res.id}`)}
                  className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg text-sm font-semibold transition hover:bg-red-600"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
