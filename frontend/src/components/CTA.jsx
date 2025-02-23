const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-16 px-6">
      
      <h2 className="text-4xl font-extrabold">Want to list your restaurant?</h2>
      <p className="text-lg mt-3 opacity-90">
        Join us today and grow your business with BiteSwift! 🚀
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105">
        Get Started
      </button>

    </div>
  );
};

export default CTA;
