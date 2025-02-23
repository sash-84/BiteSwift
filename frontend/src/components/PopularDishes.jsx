import pepperoni from '../assets/pepperoni.jpeg';
import cheeseburger from '../assets/cheeseburger.jpeg';
import sushiplatter from '../assets/sushiplatter.jpeg';
import tandoori from '../assets/tandoori.jpeg';

const PopularDishes = () => {
  const dishes = [
    { id: 1, name: "Pepperoni Pizza", img: pepperoni, price: "₹999" },
    { id: 2, name: "Cheese Burger", img: cheeseburger, price: "₹499" },
    { id: 3, name: "Sushi Platter", img: sushiplatter, price: "₹1200" },
    { id: 4, name: "Tandoori Chicken", img: tandoori, price: "₹850" },
  ];

  return (
    <section className="container mx-auto py-20 bg-[#fff5ec] text-[#2A2A2A]">

      { /* Header */}
      <h2 className="text-4xl font-bold text-center">🔥 Popular Dishes</h2>
      <p className="text-center text-gray-600 mt-2">Enjoy the best dishes loved by everyone</p>

      {/* Card */}
      <div className="flex justify-center mt-20 gap-8 flex-wrap">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden w-64 h-96 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={dish.img} alt={dish.name} className="h-[65%] w-full object-cover" />
            <div className="p-4 text-center">
              <div className='flex justify-between'>
                <span className="text-lg">{dish.name}</span>
                <span className="text-lg font-semibold text-red-500">{dish.price}</span>
              </div>
              <p className="text-lg text-red-500 font-bold"></p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-red-600 shadow-md">
              Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;