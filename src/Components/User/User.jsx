import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserStats from './UserStats'
import UserPhotoPost from './UserPhotoPost'
import { UserContext } from '../../UserContext'

const User = () => {

  const {data} = React.useContext(UserContext)

  return (
    <div className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='postar' element={<UserPhotoPost/>}/>
        <Route path='estatistica' element={<UserStats/>}/>
      </Routes>
    </div>
  )
}

export default User
