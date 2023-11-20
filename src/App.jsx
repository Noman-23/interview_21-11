import { useState, useEffect } from 'react'
import './App.css'
import Counter from './Counter';
import Quotes from './Quotes';
import { Routes, Route, NavLink } from 'react-router-dom'
import SignUp from './SignUp';
import { AuthProvider, useAuth } from './auth';
import Login from './Login';

const Navbar = () => {
  const auth = useAuth()
  console.log(auth)
  const handleLogout = () => {
    auth.logout()
  }
  return (
    <nav className='navbar'>
      Welcome {auth.user}

      <ul>
        <li>
          <NavLink to='/' >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to='/quotes' >
            Quotes
          </NavLink>
        </li>

        <li>
          <NavLink to='/signup' >
            Sign Up
          </NavLink>
        </li>

        <li>
          <NavLink to='/login' >
            Login
          </NavLink>
        </li>

        <li>
          <button onClick={handleLogout} >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
