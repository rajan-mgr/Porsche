import React from 'react'
import Header from './components/Header'
import Car from './pages/Car'

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
        </Routes>

      </Router>
    </>
  )
}
