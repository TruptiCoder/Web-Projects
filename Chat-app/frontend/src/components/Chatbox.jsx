import React, { useEffect, useState } from 'react'
import axios from "axios"

export const Chatbox = ({send_msg, rec, msgs, setMsgs, user, newMsg}) => {

    const [text, setText] = useState("");

    useEffect(() => {
        const fetchMessages = async() => {
            if(user && rec && rec.id) {
                try {
                    const res = await axios.get(`http://localhost:5000/api/msg/${user.id}/${rec.id}`);
                    setMsgs(res.data.data);
                } catch (err) {
                    console.error("Error fetching messages", err);
                }
            }
        }
        fetchMessages();
    }, [rec, newMsg]);

    const handleSend = (e) => {
        e.preventDefault();
        send_msg(text);
        setText("");
    }    

  return (
    <div className='chat-box'>
        <div className="header">
            <p>{rec.name}</p>
        </div>
        <div className="box">
            <div className="chats">
                {Array.isArray(msgs) && msgs.map((m, i) => (
                    <div key={i} className={m.senderId === user.id ? "send" : "rec"}>
                        {m.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Type Here...' />
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}
