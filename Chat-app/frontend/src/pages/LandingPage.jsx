import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { LandingContent } from '../components/LandingContent'
import "../css/landing.css"

export const LandingPage = ({setMode}) => {

  return (
    <main>
        <Navbar setMode={setMode} />
        <LandingContent setMode={setMode} />
    </main>
  )
}
