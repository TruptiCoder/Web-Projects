import React, { useState } from 'react'

export const AuthForm = ({mode, setMode}) => {

    const [data, setData] = useState({
        name: "",
        username: "",
        password: "",
    });

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    };

  return (
    <div className='auth-form'>
        <div className='toggle-btns'>
            <button className={mode == 'signup' ? "active" : ""} onClick={() => setMode("signup")}>Sign Up</button>
            <button className={mode != 'signup' ? "active" : ""} onClick={() => setMode("signin")}>Sign In</button>
        </div>

        <form>
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
                <input type="text" name='password' id='password' value={data.password} onChange={handleChange} required />
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
