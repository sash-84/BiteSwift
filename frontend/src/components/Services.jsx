import { FaUtensils, FaMotorcycle, FaChair } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#fff5ec] pb-16 px-16 h-[100vh]">

        {/* Heading and Description */}
        <div className="max-w-5xl mx-auto flex justify-between items-start mb-20">
        <h2 className="text-2xl font-bold border-l-8 border-red-500 px-4">
        Our <br/>Services
        </h2>
        <p className="text-gray-600 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-8">
      {/* Left Section */}
      <div className="flex flex-col gap-6">
        {/* Card 1 */}
        <div className="flex items-center gap-4 p-4 rounded-lg">
          <div className="p-4 bg-white">
            <FaChair className="w-10 h-10 text-red-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Advanced Table Booking</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 p-4">
          <div className="p-4 bg-white ">
            <FaUtensils className="w-10 h-10 text-red-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Food for Free 24/7</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-6 bg-white rounded-sm w-72 flex flex-col items-center text-center">
        <div className="p-4 bg-white mb-4">
          <FaMotorcycle className="w-12 h-12 text-red-500" />
        </div>
        <h3 className="text-lg font-bold">Free Home Delivery</h3>
        <p className="text-gray-600 text-sm">at your doorsteps. Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
    </section>
  );
};

export default Services;
