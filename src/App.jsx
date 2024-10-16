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
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile'
import NotFound from './Components/NotFound'


function App() {

  

  return (     
    <>

    <BrowserRouter>
    <UserStorage>
      <div className='app'>
        <Header/>
            <main className='appBody'>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login/*" element={<Login/>}/>
                <Route path="foto/:id" element={<Photo/>}/>
                <Route path='perfil/:user' element={<UserProfile/>}/>
                <Route path="conta/*" element={<ProtectedRouter><User/></ProtectedRouter>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </main>
        <Footer/>
      </div>
    </UserStorage>
    </BrowserRouter>
    </>
  )
}

export default App
