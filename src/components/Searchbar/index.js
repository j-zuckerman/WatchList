import React, { useState, useContext } from 'react';
import { MovieContext } from '../../context/movies';
import styles from './Searchbar.module.css';

export const SearchBar = () => {
  const { fetchSearchResults } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetchSearchResults(searchValue);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.searchbar}
        type="text"
        value={searchValue}
        placeholder="Search for movie"
        onChange={handleChange}
      />
      <button className={styles.submit_btn} type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
