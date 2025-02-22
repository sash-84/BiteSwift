import './Hero.css'
import { MdLocationOn } from "react-icons/md";

const Hero = () => {
  return (
    <section className="hero h-[100vh] flex flex-col items-start justify-center text-white text-center "> 
      <div className='flex flex-col items-start px-20'>
        <h1 className="text-5xl font-bold text-[#2A2A2A] text-left">Discover Restaurants <br />& Delicious Food</h1>
        <p className="mt-2 text-lg text-[#2A2A2A]">Order from your favorite restaurants, delivered fast!</p>
        <div className="mt-7 flex items-center bg-white shadow-md overflow-hidden p-1">
          <input
            type="text"
            placeholder="Search restaurant & food" className="pl-5 pr-20 py-3 w-full text-gray-700 focus:outline-none"
          />
          <button className="bg-red-500 text-white px-14 py-3 font-semibold rounded-tl-full">
            GO
          </button>
        </div>
      </div>

      {/* Location */}
      <button className="absolute bottom-[80px] bg-red-500 text-white px-5 py-2 font-semibold rounded-tr-full rounded-br-full flex justify-center items-center mt-10">
        <MdLocationOn className='mr-2'/>
         Pimpri-Chinchwad
      </button>
    </section>
  );
};

export default Hero;