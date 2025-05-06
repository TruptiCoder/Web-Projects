import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { LandingPage } from './Pages/LandingPage'
import "./App.css"
import { Authentication } from './Pages/Authentication'

export const App = () => {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/auth' element={<Authentication />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}
