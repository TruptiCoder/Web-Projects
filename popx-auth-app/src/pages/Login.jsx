import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="w-full max-w-xs bg-white p-6 rounded-sm h-full">
      <h2 className="text-3xl font-bold mb-4">Signing to your PopX account</h2>
      <p className="mb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
      <form onSubmit={handleLogin} className="text-sm space-y-3">
        <fieldset className="w-full border border-gray-300 px-3 pb-2 rounded-md">
            <legend className="text-violet-600">Email address</legend>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            />
        </fieldset>

        <fieldset className="w-full border border-gray-300 px-3 pb-2 rounded-md">
            <legend className="text-violet-600">Password</legend>
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            />
        </fieldset>

        {error && (
          <p className="text-red-600 text-sm text-left">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
