import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import TVShows from '../pages/TVShows'
import Login from '../pages/Login'
import Movies from '../pages/Movies'

function AppRoutes() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/movie' element={<Movies />} />
            <Route path='/tv' element={<TVShows />} />
        </Route>
            <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AppRoutes