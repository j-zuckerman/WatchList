import React, { useState } from 'react';
import styles from './Searchbar.module.css';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.searchbar}
        type="text"
        value={searchValue}
        placeholder="Search for movie"
        onChange={handleChange}
      />
    </div>
  );
};
