import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
    const {user} = useAuthContext();
  return (
    
   <div className='navbar'>
    <nav>
        <div className="logo">MANALYSE</div>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul className='navbarul'>
            {!user && (
                <>
                <li><NavLink className='navbarlink' to='/login'>Login</NavLink></li>
                <li><NavLink className='navbarlink' to='/signup'>Signup</NavLink></li>
                </>
            )}
            {user && <li><NavLink className='navbarlink' to='#'>{`Welcome! ${user.displayName}`}</NavLink></li>}
        </ul>
    </nav>
   </div>

    
  )
}

export default Navbar