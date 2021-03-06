import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from '../Avatar/Avatar';

const Sideabar = () => {
    const {logout, isPending} = useLogout();
    const {user} = useAuthContext();

  return (
    <div className='sideebar'>
    <nav className="sidebar">

        <div className="menu-bar">
        {user && <Avatar src={user.photoURL}/>}
        {user && <span className='text nav-text' style={{margin: '0 auto'}}>{`Welcome! ${user.displayName}`}</span>}
            <div className="menu">

                <li className="search-box">
                    <i className="search icon"></i>
                    <input type="text" placeholder="Search..."/>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                        <NavLink to='/'>
                        <i className="home icon"></i>
                            <span className="text nav-text">Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to='/create'>
                        <i className="plus icon"></i>
                            <span className="text nav-text">New Project</span>
                        </NavLink>
                    </li>

                </ul>
            </div>

            {!isPending && <div className="bottom-content" onClick={logout}>
                <li className="">
                    <NavLink to='#'>
                    <i className="sign-out alternate icon"></i>
                        <span className="text nav-text">Logout</span>
                    </NavLink>
                </li>
            </div>}

            {isPending && <div className="bottom-content">
                <li className="">
                    <NavLink to='#'>
                    <i className="sign-out alternate icon"></i>
                        <span className="text nav-text">Logging out...</span>
                    </NavLink>
                </li>
            </div>}
        </div>

    </nav>
    </div>

  )
}

export default Sideabar