import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa"; // User and Cart Icons

const Navbar = ({ openLogin }) => {
  const { user, setUser } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Track cart items

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser & storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  // Load Cart Count from Local Storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.length);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setShowDropdown(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-500 font-amatic">BiteSwift</h1>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-[#2A2A2A]">
          <li><Link to="/" className="hover:text-red-500">Home</Link></li>
          <li><Link to="/restaurants" className="hover:text-red-500">Restaurants</Link></li>
        </ul>

        {/* Right Section - Cart & User */}
        <div className="flex items-center space-x-6">
          

          {/* User Profile */}
          {user ? (
            <>
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className={`${isScrolled ? "text-red-500" : "text-white"} text-2xl`} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
            <div className="relative">
              <button className="flex items-center space-x-2" onClick={() => setShowDropdown(!showDropdown)}>
                <FaUserCircle className={`${isScrolled ? "text-red-500" : "text-white"} text-3xl`} />
                <span className={`${isScrolled ? "text-red-500" : "text-white"} hidden sm:inline font-semibold`}>{user.name}</span>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2">
                  <p className="p-2 font-semibold">Welome, {user.name}</p>
                  <Link to="/profile" className="block p-2 hover:bg-gray-100">Profile</Link>
                  <Link to="/orders" className="block p-2 hover:bg-gray-100">My Orders</Link>
                  <button onClick={handleLogout} className="w-full text-left p-2 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div> </>
          ) : (
            <button className={`${isScrolled ? "bg-red-500 text-white" : "bg-white text-red-500"} px-4 py-2 rounded`} onClick={openLogin}>
              Login
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
