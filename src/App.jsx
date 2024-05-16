import React, { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { fetchStarships, searchStarships } from './services/starshipService';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const loadStarships = async () => {
      const data = await fetchStarships();
      setStarships(data);
      setFilteredStarships(data);
    };
    loadStarships();
  }, []);

  const handleSearch = async (query) => {
    if (query) {
      const data = await searchStarships(query);
      setFilteredStarships(data);
    } else {
      setFilteredStarships(starships);
    }
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
};

export default App;