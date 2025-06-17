import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full max-w-xs p-6 bg-white rounded-sm flex flex-col justify-end">
      <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 text-md mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button
        className="w-full bg-violet-600 text-white py-2 rounded-md mb-3 hover:bg-violet-700 transition"
        onClick={() => navigate("/register")}
      >
        Create Account
      </button>

      <button
        className="w-full bg-violet-100 text-violet-700 py-2 rounded-md hover:bg-violet-200 transition"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingPage;
