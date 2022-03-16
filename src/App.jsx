import React from 'react'
import './App.css'
import { useAuthContext } from './hooks/useAuthContext';

// ? Router
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



//* PAGES
import Create from './Pages/Create/Create'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Signup from './Pages/Signup/Signup'
import Project from './Pages/Project/Project'
import Navbar from './Components/NavBar/Navbar'
import Sideabar from './Components/SideBar/Sideabar';
import OnlineUsers from './Components/OnlineUsers/OnlineUsers';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
    {!authIsReady  &&  <div className="ui active text loader" bis_skin_checked="1">Loading...</div>}
    {authIsReady && (
      <BrowserRouter>
      <Navbar/>
      <div className='App'>
      {user && <Sideabar/>}
      <div className='containerr'>
      
      
      <Switch>
        <Route exact path='/'>
          {!user && <Redirect to='/login'/>}
          {user && <Dashboard/>}
        </Route>
        <Route exact path='/create'>
        {!user && <Redirect to='/login'/>}
          {user && <Create/>}
        </Route>
        <Route exact path='/login'>
        {!user && <Login/>}
        {user && <Redirect to='/'/>}
        </Route>
        <Route exact path='/signup'>
          {!user && <Signup/>}
          {user && <Redirect to='/'/>}
        </Route>
        <Route exact path='/projects/:id'>
        {!user && <Redirect to='/login'/>}
          {user && <Project/>}
        </Route>
      </Switch>
      </div>
      {user && <OnlineUsers/>}
      </div>
      <Toaster/>
      </BrowserRouter>
      )}
    </>
    
  )
}

export default App