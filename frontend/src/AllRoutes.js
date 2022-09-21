import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element= { <Home />} ></Route>
        <Route path='/signup' exact element = { <Signup />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes