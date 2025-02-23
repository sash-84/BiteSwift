import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ openLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-around items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-500 font-amatic">BiteSwift</h1>

        {/* Nav Links */}
        <ul className="flex space-x-10 text-[#2A2A2A]">
          <li><Link to="/" className="hover:text-red-500">Home</Link></li>
          <li><Link to="/restaurants" className="hover:text-red-500">Restaurants</Link></li>
          <li><Link to="/cart" className="hover:text-red-500">Cart</Link></li>
        </ul>

        {/* Login Button */}
        <button className={`${isScrolled ? 'bg-red-500 text-white' : 'bg-white text-red-500'}  px-4 py-2 rounded`} onClick={openLogin}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
