import React from 'react'
import {Link} from 'react-router-dom'

export const Menu = () => {
  return (
    <div>
      <ul className='nav nav-tabs bg-dark'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Cart
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Signup
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Signin
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Signout
          </Link>
        </li>
      </ul>
    </div>
  )
}
