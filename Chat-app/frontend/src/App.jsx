import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { LandingPage } from './pages/LandingPage'
import "./App.css"
import { Authentication } from './pages/Authentication'
import {Dashboard} from "./pages/Dashboard"

export const App = () => {

  const [user, setUser] = useState({});
  const [mode, setMode] = useState("signup");

  return (
    <div>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<LandingPage setMode={setMode} />} ></Route>
          <Route path='/auth' element={<Authentication user={user} setUser={setUser} mode={mode} setMode={setMode} />} />
          <Route path='/:id/dashboard' element={<Dashboard user={user} setUser={setUser} />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}
