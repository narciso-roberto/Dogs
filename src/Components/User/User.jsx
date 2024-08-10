import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserStats from './UserStats'
import UserPhotoPost from './UserPhotoPost'

const User = () => {
  return (
    <div className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='postar' element={<UserPhotoPost/>}/>
        <Route path='estatistica' element={<UserStats/>}/>
      </Routes>
    </div>
  )
}

export default User
