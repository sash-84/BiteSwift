import { FaUtensils, FaMotorcycle, FaChair } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#fff5ec] py-16">
      
      {/* Heading & Description */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Services</h2>
        <p className="text-gray-600 max-w-lg mx-auto mt-3">
          Experience top-notch services tailored for your convenience.
        </p>
      </div>

      {/* Service Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 px-6">
        
        {/* Left Column - Two Smaller Cards */}
        <div className="flex flex-col gap-8">
          {/* Service 1 */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
              <FaChair className="text-red-500 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Advanced Table Booking</h3>
              <p className="text-gray-500 text-sm mt-2">
                Secure your spot effortlessly with our pre-booking system.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
              <FaUtensils className="text-red-500 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Food for Free 24/7</h3>
              <p className="text-gray-500 text-sm mt-2">
                Enjoy complimentary meals anytime, anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - One Large Card (Spanning Two Rows) */}
        <div className="bg-white shadow-md rounded-lg p-10 flex flex-col items-center text-center row-span-2">
          <div className="w-20 h-20 flex items-center justify-center bg-red-100 rounded-full mb-4">
            <FaMotorcycle className="text-red-500 w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold">Free Home Delivery</h3>
          <p className="text-gray-600 text-sm mt-2">
            Get your favorite dishes delivered fresh, right to your doorstep.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Services;
