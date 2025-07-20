import React from 'react'
import './App.css'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

export const App = () => {
  return (
    <div className='w-screen'>
      <Home />
      <Skills />
      <Projects />
    </div>
  )
}
