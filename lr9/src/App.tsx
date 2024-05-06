import React from 'react';
import './App.css';
import './Components/MovieCard/MovieCard.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './Components/MainPage';
import { SeriesPage } from './Components/SeriesPage';
import { CartoonsPage } from './Components/CartoonsPage';
import { MoviesPage } from './Components/MoviesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/> } />
          <Route path="/series" element={<SeriesPage/> } />
          <Route path="/movies" element={<MoviesPage/> } />
          <Route path="/cartoons" element={<CartoonsPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
