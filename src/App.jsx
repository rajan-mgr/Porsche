import React from 'react'
import Header from './components/Header'
import Car from './pages/Car'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/car' element={<Car/>}/>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>

      </Router>
    </>
  )
}
