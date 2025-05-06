import React, { useEffect, useMemo } from 'react'
import { io } from "socket.io-client"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {

  const navigate = useNavigate();
  const socket = useMemo(() => io("http://localhost:5000"))

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) {
      navigate("/");
    }

    return () => {
      socket.disconnect();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div>Dashboard</div>
  )
}
