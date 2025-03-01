import { useRef, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import {UserContext} from "../UserContext";

const LoginModal = ({ closeLogin, openSignup}) => {

  const {setUser} = useContext(UserContext);  //to set username in navbar
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
      console.log("Response Data:", res.data); // Debugging

      localStorage.setItem("token", res.data.token); // Store token
      localStorage.setItem("user", res.data.name); // Store username
      setUser(res.data); // Set user state in parent component
      closeLogin(); // Close modal
    } catch (error) {
      alert(error.response?.data?.error || "Something went wrong!");    
    }
  };

  const inputRef = useRef(null);  // to focus on email when login page opens
  useEffect(() => {
    inputRef.current?.focus(); 
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold text-[#2A2A2A] mb-4">Login</h2>

        <input
          ref={inputRef}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3 focus:outline-red-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3 focus:outline-red-500"
        />
        <button 
          onClick={handleLogin}
          className="w-full bg-red-500 text-white py-2 rounded">
          Login
        </button>

        <div className="flex justify-between items-center my-4">
          <span className="border-b flex-grow"></span>
          <span className="mx-2 text-gray-500">or</span>
          <span className="border-b flex-grow"></span>
        </div>

        <button className="w-full py-2 rounded flex items-center justify-center mb-3 border">
          <FcGoogle className="text-red-500 text-xl mr-2"/>
          Sign in with Google
        </button>

        <hr className="w-full border-b-zinc-400 mt-7" />

        <p className="text-sm mt-4">
          New here? <span className="text-red-500 cursor-pointer" onClick={openSignup}>Create Account</span>
        </p>

        <button
          onClick={closeLogin}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
