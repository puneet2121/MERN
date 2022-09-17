import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './core/Home';
function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element= { <Home />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes