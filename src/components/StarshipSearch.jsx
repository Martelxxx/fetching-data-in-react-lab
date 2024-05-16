import React, { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a starship"
      />
      <button type="button" onClick={handleSearch}>Search</button>
    </form>
  );
};

export default StarshipSearch;
