import React from 'react'
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <div>
            <h1>TalkBridge</h1>
        </div>
        <div className='nav-list'>
            <NavLink to={"/auth"} >SignUp</NavLink>
            <NavLink to={"/auth"}>Login</NavLink>
        </div>
    </nav>
  )
}
