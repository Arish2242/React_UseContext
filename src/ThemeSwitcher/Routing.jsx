import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ThemeSwitch from './ThemeSwitch'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Theme" element={<ThemeSwitch/>} /> 
        </Routes>
    </div>
  )
}

export default Routing