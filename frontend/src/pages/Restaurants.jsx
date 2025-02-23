import React, { useEffect, useState } from "react";

const RestaurantPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Fetch restaurant details (Static data for now)
  useEffect(() => {
    const fetchRestaurant = async () => {
      // Replace with actual API call if needed
      const data = {
        name: "Spice Villa",
        rating: 4.5,
        cuisine: "Indian Cuisine",
        location: "Pune, India",
        image: "https://source.unsplash.com/800x400/?restaurant,food",
      };
      setRestaurant(data);

      const menu = [
        { id: 1, name: "Butter Chicken", price: 250, image: "https://source.unsplash.com/200x200/?butterchicken" },
        { id: 2, name: "Paneer Tikka", price: 200, image: "https://source.unsplash.com/200x200/?paneertikka" },
        { id: 3, name: "Biryani", price: 300, image: "https://source.unsplash.com/200x200/?biryani" },
      ];
      setMenuItems(menu);

      const reviews = [
        { id: 1, username: "Rohan", rating: 5, comment: "Amazing food!" },
        { id: 2, username: "Priya", rating: 4, comment: "Great taste but a bit spicy." },
      ];
      setReviews(reviews);
    };

    fetchRestaurant();
  }, []);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-gray-800 text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
        <p className="text-lg">⭐ {restaurant.rating} | {restaurant.cuisine} | {restaurant.location}</p>
      </div>

      {/* Menu Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-lg font-bold mt-2">{item.name}</h2>
              <p className="text-gray-600">₹{item.price}</p>
              <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold">{review.username}</h3>
            <p className="text-yellow-500">⭐ {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="p-6 bg-gray-100 text-center">
        <h2 className="text-xl font-bold">About {restaurant.name}</h2>
        <p className="text-gray-600 mt-2">We serve authentic {restaurant.cuisine} with the best flavors.</p>
        <p className="mt-2">📍 {restaurant.location} | ☎️ +91 98765 43210</p>
      </div>
    </div>
  );
};

export default RestaurantPage;
