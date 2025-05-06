import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'

function Landing() {
    return (
        <div className='landingPageContainer'> 
            <nav>
                <div className='navHeader'>
                    <h2>Video Conferencing</h2>
                </div>
                <div className='navlist'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <button>
                        <p>Login</p>
                    </button>
                </div>
            </nav>


            <main>
                <div>
                    <h1><span>Connect</span> with your Loved Ones</h1>
                    <p>Cover a distance by Video Conferencing</p>
                    <button>
                        <NavLink to={"/auth"}>Get Started</NavLink>
                    </button>
                </div>
                <div>
                    <img src="mobile.png" alt="mobile" />
                </div>
            </main>

        </div>
    )
}

export default Landing
