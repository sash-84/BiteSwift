import about from "../assets/about.jpeg"
import ceo from "../assets/ceo.jpeg"
import cto from "../assets/cto.jpeg"
import cmo from "../assets/cmo.jpeg"

const About = () => {
  return (
    <section className="bg-[#fff5ec] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img 
            src={about} 
            alt="About BiteSwift" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About <span className="text-red-500">BiteSwift</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            BiteSwift was born from a simple idea: to make delicious, fresh food 
            <b> accessible and fast</b> for everyone. Our journey started in a small 
            kitchen with a big dream—<b>to redefine food delivery with speed, quality, and reliability.</b>
          </p>
          <p className="text-gray-600 text-lg mt-4">
            From a handful of local vendors to a vast network of <b>top-rated restaurants and cloud kitchens</b>, 
            we've grown into a trusted name for food lovers. Every meal we deliver carries our promise of 
            <b> freshness, taste, and convenience</b>.
          </p>
        </div>

      </div>

      {/* How It Works */}
      <div className="max-w-5xl mx-auto text-center mt-16 px-6">
        <h3 className="text-3xl font-bold text-gray-800">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-red-500">📲 Place Your Order</h4>
            <p className="text-gray-600 mt-2">Browse our menu, select your meal, and confirm your order.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-red-500">👨‍🍳 Freshly Prepared</h4>
            <p className="text-gray-600 mt-2">Our partner chefs cook your food with fresh ingredients.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-red-500">🚀 Fast Delivery</h4>
            <p className="text-gray-600 mt-2">Our fleet ensures quick and safe delivery to your doorstep.</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto text-center mt-16 px-6">
        <h3 className="text-3xl font-bold text-gray-800">Our Core Values</h3>
        <p className="text-gray-600 text-lg mt-4">
          At BiteSwift, we stand by our principles:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-red-500">🍽️ Quality First</h4>
            <p className="text-gray-600 mt-2">We prioritize fresh, high-quality ingredients in every dish.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-red-500">⏳ Timely Service</h4>
            <p className="text-gray-600 mt-2">We respect your time and ensure <b>fast, reliable delivery.</b></p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-red-500">🌍 Sustainability</h4>
            <p className="text-gray-600 mt-2">We focus on **eco-friendly packaging & sustainable sourcing.**</p>
          </div>
        </div>
      </div>

      {/* Meet the Team (Optional) */}
      <div className="max-w-6xl mx-auto text-center mt-16 px-6">
        <h3 className="text-3xl font-bold text-gray-800">Meet the People Behind BiteSwift</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <img src={cto} alt="CEO" className="rounded-full w-32 h-32 mx-auto shadow-md" />
            <h4 className="mt-4 text-lg font-bold">John Doe</h4>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img src={ceo} alt="CTO" className="rounded-full w-32 h-32 mx-auto shadow-md" />
            <h4 className="mt-4 text-lg font-bold">Sarah Lee</h4>
            <p className="text-gray-500">Chief Technology Officer</p>
          </div>
          <div className="text-center">
            <img src={cmo} alt="Head Chef" className="rounded-full w-32 h-32 mx-auto shadow-md" />
            <h4 className="mt-4 text-lg font-bold">Mark Smith</h4>
            <p className="text-gray-500">Head of Culinary</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
