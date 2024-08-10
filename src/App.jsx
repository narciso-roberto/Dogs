import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import './App.css'
import {UserStorage} from './UserContext'
import User from './Components/User/User'
import ProtectedRouter from './Components/Helper/ProtectedRouter'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <UserStorage>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login/*" element={<Login/>}/>
          <Route path="conta/*" element={<ProtectedRouter><User/></ProtectedRouter>}/>
        </Routes>
      <Footer/>
    </UserStorage>
    </BrowserRouter>
    </>
  )
}

export default App
