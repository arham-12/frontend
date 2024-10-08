import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'

const App = () => {
  return (
   <>
   <Routes>
   <Route path='/' element={<Home />}/>
    <Route path='/login' element={<LoginPage />}/>
    <Route path='/signup' element={<SignUpPage />}/>
   </Routes>
   </>
  )
}

export default App