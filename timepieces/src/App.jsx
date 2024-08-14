import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Watch from './components/Watch'
import Cart from './components/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watch/:productW' element={<Watch/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/landing' element={<Landing/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
