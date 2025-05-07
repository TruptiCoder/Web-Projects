import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({checkRec, user}) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!user) navigate("/");
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:5000/api/${username}/user`);
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
                <p>{user.username}</p>
            </div>
            <div className='box'>
                <form onSubmit={handleSubmit}>
                    <input value={username} onChange={handleChange} type='text' name='username' placeholder='Search username'/>
                    <button className='btn' type='submit'>Search</button>
                </form>

                {/* <div className="contacts">
                    <div>
                        <p>Contact 1</p>
                    </div>
                    <div>
                        <p>Contact 2</p>
                    </div>
                </div> */}

                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
