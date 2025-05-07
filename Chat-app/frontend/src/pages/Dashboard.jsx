import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { io } from "socket.io-client"
import { useNavigate, useParams } from "react-router-dom"
import { Sidebar } from '../components/Sidebar';
import { Chatbox } from '../components/Chatbox';
import "../css/dashboard.css"

export const Dashboard = ({user, setUser}) => {

  const navigate = useNavigate();
  const socket = useMemo(() => io("http://localhost:5000"))

  const [currUser, setCurrUser] = useState(user);
  const [recUser, setRecUser] = useState({});
  const [msgs, setMsgs] = useState([]);

  
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });
  
    if (!currUser) navigate("/login");
    
    socket.emit("join", currUser.id);
    
    socket.on("receive_msg", (msgObj) => {
      setMsgs((prevMsgs) => {
        if (!Array.isArray(prevMsgs)) return [msgObj];
        if (!prevMsgs.some(msg => msg.id === msgObj.id)) {
          return [...prevMsgs, msgObj];
        }
        return prevMsgs;
      });
    });

    return () => {
      socket.off("receiver_msg");
      socket.disconnect();
    }
  }, [currUser, navigate]);

  const sanitizeMessage = (message) => {
    return message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  const send_msg = useCallback((text) => {
    if(!recUser || !text) return;
    socket.emit("send_msg", {
      senderId: currUser.id,
      receiverId: recUser.id,
      content: sanitizeMessage(text),
    });

    setMsgs(prev => [...prev, {
      senderId: currUser.id,
      receiverId: recUser.id,
      content: sanitizeMessage(text),
      time: Date.now(),
    }])
  }, [currUser.id, recUser.id, msgs]);

  const checkRec = (user) => {
    setRecUser(user);
  }


  return (
    <div className='dashboard'>
      <Sidebar checkRec={checkRec} user={user} />
      <Chatbox send_msg={(text) => {
        send_msg(text);
      }} rec={recUser} msgs={msgs} setMsgs={setMsgs} user={user} />
    </div>
  )
}
