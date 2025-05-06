import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { LandingPage } from './pages/LandingPage'
import "./App.css"
import { Authentication } from './pages/Authentication'
import {Dashboard} from "./pages/Dashboard"

export const App = () => {

  return (
    <div>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/auth' element={<Authentication />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}
