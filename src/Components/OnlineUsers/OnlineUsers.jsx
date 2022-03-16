import React from 'react'
import Avatar from '../Avatar/Avatar';
import { useCollection } from '../../hooks/useCollection';
import './OnlineUsers.css';
import toast from 'react-hot-toast'

const OnlineUsers = () => {
  const {error, documents} = useCollection('users');

  React.useEffect(() => {
    error &&  toast.error(error, {style: {
      border: '1px solid #ff0000',
      padding: '16px',
      color: '#fff',
      backgroundColor: '#FF0000'
    }});
  }, [error]);

  return (
    <div className='sideebar' style={{width: '180px'}}>
    <nav className="sidebar">
        <div className="menu-bar">
        <span className='text nav-text' style={{margin: '0  auto'}}>ALL USERS</span>
            <div className="menu">

                <ul className="menu-links">
                   {documents && documents.map(el=>{
                      return <li key={el.id}className="nav-link">
                        {el.online ? <span className='onlinemarker'></span>: <span className='offlinemarker'></span>}
                        <span className="text nav-text" style={{width: '80px'}}>{`${el.displayName}`}</span>
                        <div className='onlineavatar'>
                          <Avatar src={el.photoURL}/>
                        </div>
                          </li>
                   })}

                </ul>
            </div>
        </div>

    </nav>
    </div>

  )
}

export default OnlineUsers;
