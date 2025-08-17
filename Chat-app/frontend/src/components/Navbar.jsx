import React from 'react'
import { NavLink } from "react-router-dom"

export const Navbar = ({setMode}) => {

  return (
    <nav>
        <div>
            <h1>TalkBridge</h1>
        </div>
        <div className='nav-list'>
            <NavLink onClick={() => {setMode("signup")}} to={"/auth"} >Sign Up</NavLink>
            <NavLink onClick={() => {setMode("login")}} to={"/auth"}>Login</NavLink>
        </div>
    </nav>
  )
}
