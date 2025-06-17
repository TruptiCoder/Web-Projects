import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users or start with empty
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to array
    const newUser = {
      ...form,
      id: Date.now(),
      description:
        "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser)); // For dashboard

    navigate("/dashboard");
  };

  return (
    <div className="w-full h-full max-w-xs bg-white p-6 rounded-sm">
      <h2 className="text-3xl font-bold mb-1">Create your <br /> PopX account</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-30 mt-4 text-sm">
        <div className="flex flex-col gap-2">
            <fieldset className="w-full border border-gray-300 px-3 pb-2 rounded-md">
                <legend className="text-violet-600">Full Name <span className="text-red-500">*</span></legend>
                <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                />
            </fieldset>

            <fieldset className="w-full border border-gray-300 px-3 pb-2 rounded-md">
                <legend className="text-violet-600">Phone number <span className="text-red-500">*</span></legend>
                <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                />
            </fieldset>

            <fieldset className="w-full border border-gray-300 px-3 pb-2 rounded-md">
                <legend className="text-violet-600">Email address <span className="text-red-500">*</span></legend>
                <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                />
            </fieldset>

            <fieldset className="w-full border border-gray-300 px-3 pb-2 rounded-md">
                <legend className="text-violet-600">Password <span className="text-red-500">*</span></legend>
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                />
            </fieldset>

            <fieldset className="w-full border border-gray-300 px-3 pb-2 rounded-md">
                <legend className="text-violet-600">Company name</legend>
                <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                />
            </fieldset>

            <div>
            <p className="text-sm font-medium mb-1">Are you an Agency? <span className="text-red-500">*</span></p>
            <label className="mr-4">
                <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleChange}
                className="mr-1"
                />
                Yes
            </label>
            <label>
                <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleChange}
                className="mr-1"
                />
                No
            </label>
            </div>
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
