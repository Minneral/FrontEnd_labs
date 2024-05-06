import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

export default function App() {
  
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/favorites' element={<FavoritesPage />}/>
    </Routes>
    </BrowserRouter>
  )
}
