import React, { useState } from "react";
import style from './SearchForm.module.css';

type SearchFormPropsType = {
    onClick: (formData: any) => void;
}


export const SearchForm = (props: SearchFormPropsType) => {

    const [searchValue, setSearchValue] = useState('');
    const [filmType, setFilmType] = useState('f_all');

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleRadioChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setFilmType(event.target.id);
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            searchValue,
            filmType
        };

        props.onClick(formData);
    }

    return (
        <form onSubmit={handleSearch} className={style.form}>
            <input type="text" onChange={handleInputChange}/>
            <input type="submit" value="Search"/>

            <div className={style.radio}>
                <input type="radio" name="film_type" id='f_all' onChange={handleRadioChange} checked={filmType == 'f_all'}/>
                <label htmlFor="f_all">All</label>

                <input type="radio" name="film_type" id='f_movies' onChange={handleRadioChange} checked={filmType == 'f_movies'}/>
                <label htmlFor="f_movies">Movies only</label>

                <input type="radio" name="film_type" id='f_series' onChange={handleRadioChange} checked={filmType == 'f_series'}/>
                <label htmlFor="f_series">Series only</label>

            </div>


        </form>
    );
}