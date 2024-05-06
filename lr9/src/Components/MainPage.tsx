import { Link } from 'react-router-dom';
import { MovieCard } from './MovieCard/MovieCard';
import { SearchForm } from './SearchForm/SearchForm';
import { Header } from './Header/Header';
import React, { useState } from 'react';

const omdbApi = process.env.REACT_APP_OMDB_API;

export const MainPage = () => {

  const [cards, setCards] = useState<React.ReactNode[]>([]);

  function search(formData: any) {
    setCards([]);
    fetch(`http://www.omdbapi.com/?apikey=` + process.env.REACT_APP_OMDB_API +`&s=` + formData.searchValue)
      .then(res => res.ok ? res : Promise.reject(res))
      .then(response => {
        if (response)
          return response.json();

        return null;
      })
      .then((response) => {
        if (response.Response == "True")
          return response.Search;
        else
          return null;
      })
      .then(response => {
        if (response == null)
          return response;
        if (formData.filmType != 'f_all') {
          switch (formData.filmType) {
            case 'f_movies':
              response = response.filter((item: { Type: string }) => item.Type == 'movie');
              break;
            case 'f_series':
              response = response.filter((item: { Type: string }) => item.Type == 'series');
              break;
          }
        }

        return response;
      })
      .then(response => {
        if (response == null)
          return;
        response.forEach((element: { Title: string, Year: string, Type: string, Poster: string }) => {
          setCards(prev => [...prev, <MovieCard name={element.Title} date={element.Year} type={element.Type} url={element.Poster} key={prev.length} />]);
        });
      })
            .catch(error => {
        console.log(error);
      })
  }

  return (
    <>
      <Header />

      <div className="container">
        <h1>Home Page</h1>

        <SearchForm onClick={search} />

        <div className="movies__list">

          {cards}

        </div>
      </div>
    </>
  );
};