import React, { useState } from 'react';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search for movie</label>
      <input type="text" value={searchValue} onChange={handleChange} />
    </div>
  );
};
