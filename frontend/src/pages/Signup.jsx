import { useRef, useEffect, useState, useContext } from "react";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import {UserContext} from "../UserContext";

const SignupModal = ({ closeSignup, openLogin }) => {

  const [error, setError] = useState("");

  const {setUser} = useContext(UserContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if(!isChecked) return;

    const {name, email, password} = formData;
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", { name, email, password });
      localStorage.setItem("token", res.data.token); // Store token
      setUser(res.data); // Set user state in parent component
      closeSignup(); // Close modal
    } catch (error) {
      setError(error.response?.data?.error || "Signup failed");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center"></div>

      {/* Modal Box */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-[#2A2A2A]">Signup</h2>

        {/* Full Name Input */}
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3 focus:outline-red-500"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 border rounded mb-3 focus:outline-red-500"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-2 border rounded mb-3 focus:outline-red-500"
          required
        />

        {/* Role Selection */}
        {/* <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-3 focus:outline-red-500"
          required
        >
          <option value="" disabled>Select your role</option>
          <option value="mentor">Customer</option>
          <option value="researcher">Restaurant</option>
          <option value="innovator">Delivery</option>
          <option value="stakeholder">Admin</option>
        </select> */}

        {/* Terms Checkbox */}
        <div className="flex items-center mb-3">
          <input 
            type="checkbox" 
            id="terms"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)} 
            className="mr-2 accent-red-500 border-red-500" />
          <label htmlFor="terms" className="text-sm">
            I agree to BiteSwift's
            <span className="text-red-500 cursor-pointer"> Terms of Service</span>,  
            <span className="text-red-500 cursor-pointer"> Privacy Policy </span>  
            and <span className="text-red-500 cursor-pointer"> Content Policies</span>
          </label>
        </div>

        {/* Create Account Button */}
        <button 
          disabled={!isChecked}
          onClick={handleSubmit}
          className={`w-full py-2 text-white rounded ${isChecked ? 'bg-red-500' : 'bg-gray-300' }`}>
          Create Account
        </button>

        {/* OR Divider */}
        <div className="flex justify-between items-center my-4">
          <span className="border-b flex-grow"></span>
          <span className="mx-2 text-gray-500">or</span>
          <span className="border-b flex-grow"></span>
        </div>

        {/* Google Sign-in Button */}
        <button className="w-full py-2 rounded flex items-center justify-center border">
          <FcGoogle className="text-xl mr-2"/>
          Sign in with Google
        </button>

        <hr className="w-full border-b-zinc-400 mt-7" />

        {error ? (
          <>
          <p className="text-sm mt-4 text-red-500 text-center font-semibold">{error}</p>
          setError("");
          {openLogin()}
          </>
        )
        :
        (
          <>
        {/* Login Link */}
        <p className="text-sm mt-4">
          Already have an account?
          <span className="text-red-500 cursor-pointer" onClick={openLogin}> Login</span>
        </p>

        {/* Close Button */}
        <button
          onClick={closeSignup}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ×
        </button>
        </>)}

      </div>
    </div>
  );
};

export default SignupModal;
