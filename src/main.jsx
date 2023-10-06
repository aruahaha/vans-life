import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "D:/coding/New/react-app/src/style.css"
import Home from './Home'
import About from './About'
import Vans from './Vans'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Vans' element={<Vans />} />
    </Routes>
  </BrowserRouter>
)
