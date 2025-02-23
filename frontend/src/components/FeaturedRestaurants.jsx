import pizza from '../assets/pizza.jpeg';
import burger from '../assets/burger.jpeg';
import sushi from '../assets/sushi.jpeg';
import { Link } from 'react-router-dom';

import { MdLocationOn } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";

const FeaturedRestaurants = () => {
  const restaurants = [
    { 
      id: 1, 
      name: "Pizza Palace", 
      img: pizza, 
      rating: "4.6", 
      location: "Chikhali", 
      subline: "Best Italian-style pizza in town!" 
    },
    { 
      id: 2, 
      name: "Sushi World", 
      img: sushi, 
      rating: "4.8", 
      location: "Shahunagar", 
      subline: "Authentic sushi with fresh ingredients." 
    },
    // { 
    //   id: 3, 
    //   name: "Burger Hanger", 
    //   img: burger, 
    //   rating: "4.8", 
    //   location: "Sharadnagar", 
    //   subline: "Juicy burgers with secret sauce." 
    // },
  ];

  return (
    <section className="container mx-auto py-20 bg-[#fff5ec]">

      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-start">
        <h2 className="text-2xl font-bold border-l-8 border-red-500 px-4 text-[#2A2A2A]">
          some top restaurants <br /> near you 🍽️
        </h2>
        <p className="text-gray-600 max-w-md">
          Discover top-rated restaurants near you with amazing flavors and a unique dining experience.
        </p>
      </div>

      <div className="flex justify-start mt-16 space-x-5">
        {restaurants.map((res) => (
          <div key={res.id} className="relative shadow-md bg-white w-1/2 h-[360px] overflow-hidden rounded-lg group">
          
            {/* Background Image */}
            <img src={res.img} alt={res.name} className="h-full w-full object-cover" />

            {/* Red Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-red-500 bg-opacity-80 flex flex-col justify-end items-start px-4 py-2 transition duration-300 group-hover:bg-opacity-90 cursor-default">
              <h3 className="text-xl font-bold text-white">{res.name}</h3>
              <p className="text-sm text-white">{res.subline}</p>
              <div className='flex justify-between items-center w-full'>
              <div className="flex items-center text-[13px] text-white">
                <MdLocationOn className='mr-1'/>
                {res.location}
              </div>
              <button className="text-sm text-red-500 cursor-pointer bg-white p-2 font-bold rounded-sm mt-5 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Know More →
              </button>
              </div>
            </div>
          </div>
        ))}

        {/* See More Button */}
        <div className="flex justify-center items-center pl-50 w-1/3">
          <button className="flex items-center text-red-500 text-lg font-semibold transform transition-all duration-300 hover:scale-105 justify-center">
          <Link to="/restaurants">
          see more <IoArrowForwardOutline className="ml-2" />
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;