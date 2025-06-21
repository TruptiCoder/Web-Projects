import React from 'react'
import { Nav } from '../layouts/Nav'
import { Footer } from '../layouts/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

export const ViewItems = ({items}) => {
  return (
    <div className='container'>
        <Nav />
        
        <div className="view">

            {items.length == 0 ? (
                <p style={{textAlign: 'center'}}>No Items added yet.</p>
            ): (
                items.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="overlay">
                            <img src={item.cover} alt={item.name} />
                        </div>
                        <p>{item.name}</p>
                        <button>
                            <NavLink to={`/show/${item.id}`}>
                                Enquire <FaArrowRight />
                            </NavLink>
                        </button>
                    </div>
                ))
            )}
            
        </div>

        <Footer />
    </div>
  )
}
