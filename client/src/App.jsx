import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/Register'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>

    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App