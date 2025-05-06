import React from 'react'
import { Navbar } from '../components/Navbar'
import { LandingContent } from '../components/LandingContent'
import "../css/landing.css"

export const LandingPage = () => {
  return (
    <main>
        <Navbar />
        <LandingContent />
    </main>
  )
}
