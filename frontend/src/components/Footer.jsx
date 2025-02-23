import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
        
        {/* Logo & Tagline */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-red-400 font-amatic">BiteSwift</h2>
          <p className="text-gray-400 text-sm mt-1">Discover the best food around you.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-300 text-sm">
          <Link to="/" className="hover:text-red-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-red-400 transition duration-300">About</Link>
          <Link to="/services" className="hover:text-red-400 transition duration-300">Services</Link>
          <Link to="/contact" className="hover:text-red-400 transition duration-300">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/" className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition duration-300">
            <FaFacebookF className="text-white" />
          </a>
          <a href="https://www.instagram.com/" className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition duration-300">
            <FaInstagram className="text-white" />
          </a>
          <a href="https://x.com/?lang=en&mx=2" className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition duration-300">
            <FaTwitter className="text-white" />
          </a>
          <a href="https://www.linkedin.com/home" className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition duration-300">
            <FaLinkedinIn className="text-white" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        <p>© 2024 BiteSwift. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
