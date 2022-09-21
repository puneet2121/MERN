import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element= { <Home />} ></Route>
        <Route path='/signup' exact element = { <Signup />}></Route>
        <Route path='/signin' exact element = { <Signin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes