import { Link } from "react-router-dom";

const Navbar = ({openLogin}) => {

  return (
    <nav className="bg-none p-4 absolute w-full top-0 z-10">
      <div className="container mx-auto justify-around flex items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">BiteSwift</h1>

        { /* Navlinks */}
        <ul className="flex space-x-10 ">
          <li><Link to="/" className="hover:text-red-500 text-[#2A2A2A]">Home</Link></li>
          <li><Link to="/restaurants" className="hover:text-red-500 text-[#2A2A2A]">Restaurants</Link></li>
          <li><Link to="/cart" className="hover:text-red-500 text-[#2A2A2A]">Cart</Link></li>
        </ul>

        { /* Login Button */}
        <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={openLogin}>Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;