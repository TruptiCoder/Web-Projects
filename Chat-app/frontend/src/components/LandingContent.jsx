import React from 'react'
import { NavLink } from 'react-router-dom'

export const LandingContent = () => {
  return (
    <div className='landing-content'>
        <h2>Connect. Chat. Repeat.</h2>
        <h2>Your conversations, your way.</h2>
        <p>Built for speed. Designed for privacy. Ready when you are.</p>
        <button>
            <NavLink to={"/auth"}>Get Started</NavLink>
        </button>
    </div>
  )
}
