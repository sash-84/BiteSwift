import { useRef, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignupModal = ({ closeSignup, openLogin }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center"></div>

      {/* Modal Box */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>

        {/* Full Name Input */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3 focus:outline-green-500"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3 focus:outline-green-500"
          required
        />

        {/* Terms Checkbox */}
        <div className="flex items-center mb-3">
          <input 
            type="checkbox" 
            id="terms"
            checked={isChecked}
            onChange={handleCheckboxChange} 
            className="mr-2 accent-red-500 border-red-500" />
          <label htmlFor="terms" className="text-sm">
            I agree to BiteSwift's
            <span className="text-red-500 cursor-pointer"> Terms of Service</span>,  
            <span className="text-red-500 cursor-pointer"> Privacy Policy </span>  
            and <span className="text-red-500 cursor-pointer"> Content Policies</span>
          </label>
        </div>

        {/* Create Account Button */}
        <button className={`w-full py-2 text-white ${isChecked ? 'bg-red-500' : 'bg-gray-300 cursor-not-allowed' }`}>
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
      </div>
    </div>
  );
};

export default SignupModal;
