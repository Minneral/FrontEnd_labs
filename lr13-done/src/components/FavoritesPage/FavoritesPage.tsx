import React from 'react'
import Header from '../Header/Header'
import VacancyCombine from '../VacancyCombine/VacancyCombine'

export default function FavoritesPage() {
  return (
    
    <>
    <Header Page='FavoritesPage'/>
    <VacancyCombine filter={{}} isOnlyFavorite={true}/>
    </>
  )
}
