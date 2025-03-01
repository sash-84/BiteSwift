import { FaMotorcycle, FaChair } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Services = () => {
  return (
    <section className="bg-[#fff5ec] py-16 text-[#2A2A2A]">
      
      {/* Heading & Description */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 max-w-lg mx-auto mt-3">
          Experience top-notch services tailored for your convenience.
        </p>
      </div>

      

      {/* Service Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 px-10">
        
        {/* Left Column - Two Smaller Cards */}
        <div className="flex flex-col gap-8">
          {/* Service 1 */}
          <div className="flex items-center px-2 py-2 gap-6">
            <div className="w-3/4 h-[160px] flex items-center justify-center bg-[#fae8d8] rounded">
              <FaChair className="text-red-500 w-20 h-20" />
            </div>
            <div className="pr-5 flex items-center justify-center space-x-5">
              <IoIosArrowRoundBack className="text-7xl text-red-500"/>
              <div>
              <h3 className="text-2xl font-bold">
              Advanced Table Booking</h3>
              <p className="text-gray-500 text-sm mt-2">
                Secure your spot effortlessly with our pre-booking system.
              </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-center rounded p-2 gap-6">
            <div className="pl-5 flex justify-center items-center space-x-5">
            <div>
            <h3 className="text-2xl font-bold">Food for Free 24/7</h3>
              <p className="text-gray-600 text-sm mt-2">
                Enjoy complimentary meals anytime, anywhere.
              </p>
            </div>
            <IoIosArrowRoundForward className="text-7xl text-red-500"/>
            </div>
            <div className="w-3/4 h-[160px] flex items-center justify-center bg-[#fae8d8] rounded">
              <IoRestaurant className="text-red-500 w-20 h-20" />
            </div>
          </div>
        </div>

        {/* Right Column - One Large Card (Spanning Two Rows) */}
        <div className="bg-[#fae8d8] rounded p-10 flex flex-col items-center text-center row-span-2">
          <div className="w-full h-[200px] flex items-center justify-center rounded-full mb-4">
            <FaMotorcycle className="text-red-500 w-40 h-40" />
          </div>
          <h3 className="text-2xl font-bold">free home delivery<br /> at your doorsteps</h3>
          <p className="text-gray-600 text-sm mt-2">
            Get your favorite dishes <br />delivered fresh, right to your doorstep.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Services;
