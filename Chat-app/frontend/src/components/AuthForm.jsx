import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export const AuthForm = ({mode, setMode, user, setUser}) => {

    const [data, setData] = useState({
        name: "",
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if(mode == 'signup') {
                await axios.post("http://localhost:5000/api/auth/register", {
                    name: data.name,
                    username: data.username,
                    password: data.password,
                });
                alert("Registered successfully!");
                setMode("signup");
            } else {
                const res = await axios.post("http://localhost:5000/api/auth/login", {
                    username: data.username,
                    password: data.password
                });
                setUser(res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user))
                alert("Login Successful!");
                navigate(`/${res.data.user.id}/dashboard`);
            }
        } catch (err) {
            console.log("Error: ", err);
            alert(err.response?.data?.msg || "Something went wrong!");
        }
    };

  return (
    <div className='auth-form'>
        <div className='toggle-btns'>
            <button className={mode == 'signup' ? "active" : ""} onClick={() => setMode("signup")}>Sign Up</button>
            <button className={mode != 'signup' ? "active" : ""} onClick={() => setMode("signin")}>Sign In</button>
        </div>

        <form onSubmit={handleSubmit}>
            {mode == "signup" && (
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' value={data.name} onChange={handleChange} required />
                </div>
            )}

            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' value={data.username} onChange={handleChange} required />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value={data.password} onChange={handleChange} required />
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
