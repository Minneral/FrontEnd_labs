import React, { useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Vacancy from '../Vacancy/Vacancy';
import VacancyCombine from '../VacancyCombine/VacancyCombine';

export default function HomePage() {

  const [filter, setFilter] = useState({});


  return (
    <>
      <Header Page='HomePage' />
      <SearchBar setFilter={setFilter}/>
      <VacancyCombine isOnlyFavorite={false} filter={filter}/>
    </>
  );
}
