import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({checkRec, user}) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!user) navigate("/");
    }, [user, navigate]);

    useEffect(() => {
        fetchContacts();
    }, [user, navigate]);


    const fetchContacts = async () => {
        try {
        if (user && user.id) {
            setLoading(true);
            const res = await axios.get(`http://localhost:5000/api/contact/${user.id}`);
            setContacts(res.data.contacts);
        }
        } catch (err) {
            console.error("Failed to fetch contacts", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:5000/api/${username}/user`);
            checkRec(res.data.user);
            
            await axios.post(`http://localhost:5000/api/contact/add`, {
                username: username,
                currentUserId: user.id,
            });

            await axios.post(`http://localhost:5000/api/contact/add`, {
                username: user.username,
                currentUserId: res.data.user.id,
            });

            fetchContacts();
            setUsername("");

            setError(null);
        } catch (err) {
            setError("User not found");
        }
    }

    const handleContact = async (receiver) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/${receiver}/user`);
            checkRec(res.data.user);
            setError(null);
        } catch (err) {
            setError("User not found");
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value);
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <div className='sidebar'>
            {error && <div className="error">{error}</div>}
            <div className='header'>
                <h3>Hello, <br/> {user.name}</h3>
                <p>@{user.username}</p>
            </div>
            <div className='box'>
                <form onSubmit={handleSubmit}>
                    <input value={username} onChange={handleChange} type='text' name='username' placeholder='Search username'/>
                    <button className='btn' type='submit'>Search</button>
                </form>

                <div className="contacts">
                    {loading ? (
                        <p>Loading contacts...</p>
                    ) : contacts.length === 0 ? (
                        <p>No contacts yet</p>
                    ) : (
                        contacts.map((c) => (
                            <div key={c._id} className="contact-item" onClick={() => handleContact(c.username)}>
                                <p>{c.name} (@{c.username})</p>
                            </div>
                        ))
                    )}
                </div>

                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
