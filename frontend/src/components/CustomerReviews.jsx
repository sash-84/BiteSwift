import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul S.",
    review: "Amazing food and super-fast delivery! Will order again.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Priya K.",
    review: "The sushi was fresh, and the flavors were on point!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "Amit P.",
    review: "Great variety and excellent service. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5
  }
];

const CustomerReviews = () => {
  return (
    <div className="bg-[#fff5ec] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2A2A2A]">What Our Customers Say ❤️</h2>
        <p className="text-gray-600 mt-2">Real experiences from our happy customers</p>

        {/* Review Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              
              {/* Customer Image */}
              <img src={review.image} alt={review.name} className="w-18 h-18 mx-auto rounded-full border-2 border-red-500"/>

              {/* Name & Review */}
              <h3 className="mt-4 text-lg font-semibold text-[#2A2A2A]]">{review.name}</h3>
              <p className="text-gray-600 text-sm mt-2">"{review.review}"</p>

              {/* Rating */}
              <div className="flex justify-center mt-3 text-yellow-500">
                {[...Array(Math.floor(review.rating))].map((_, index) => (
                  <FaStar key={index} />
                ))}
                {review.rating % 1 !== 0 && <FaStar className="opacity-50" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
