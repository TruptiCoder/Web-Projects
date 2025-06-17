import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="w-full h-full max-w-xs bg-white rounded-sm">
        <h2 className="p-5 border-b-1 border-dashed mb-3 border-gray-400">
            Account Settings
        </h2>
        <div className="p-5 border-b-1 border-gray-400 border-dashed">
            <div className="flex items-center gap-3">
                <img
                    src="profile.png"
                    alt="Profile"
                    className="w-20 h-20 rounded-full mx-auto"
                />

                <div>
                    <h2 className="text-md font-bold">{user.fullName}</h2>
                    <p className="text-gray-500 text-sm mb-1">{user.email}</p>
                </div>
            </div>
            <p className="text-sm mt-2 text-gray-700">{user.description}</p>

            {/* <button
                onClick={() => {
                localStorage.removeItem("currentUser");
                navigate("/login");
                }}
                className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
                Logout
            </button> */}
        </div>
    </div>
  );
};

export default Dashboard;
