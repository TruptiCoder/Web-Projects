import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

export const Nav = () => {
  return (
    <nav>
        <div>
            <h1 className='logo'>E-Commerce <FaCartShopping /></h1>
        </div>
        <div className="nav-links">
            <NavLink to={"/add"} >Add Items</NavLink>
            <NavLink to={"/"} >View Items</NavLink>
        </div>
    </nav>
  )
}
