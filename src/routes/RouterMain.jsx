import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { AboutMoviePage } from '../pages/AboutMoviePage'
import { MoviePage } from '../pages/MoviePage'
import { ProtectedRouter } from '../components/ProtectedRoutes'
import { MovieProtected } from '../components/ProtectedRoutes/movieProtected'

export const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<MoviePage />} />

        <Route path='/landingpage' element={<ProtectedRouter />}>
        <Route index element={<MoviePage />} />
        </Route>

        <Route path='/loginpage' element={<LoginPage />} />
        <Route path='/registerpage' element={<RegisterPage />} />
        {/* <Route  path='/aboutmovie' element={<AboutMoviePage />} /> */}

        <Route path='/aboutmovie' element={<MovieProtected />}>
        <Route index element={<AboutMoviePage />} />
        </Route>

    </Routes>
  )
}
