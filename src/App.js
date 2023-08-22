import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import FavoritesList from './components/FavoritesList';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (term, mediaType) => {
    // Make API call to your Express server
    const response = await fetch(`/api/search?term=${term}&media=${mediaType}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  const handleAddToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const handleRemoveFromFavorites = (item) => {
    const updatedFavorites = favorites.filter((favItem) => favItem !== item);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <ResultsList results={searchResults} onAddToFavorites={handleAddToFavorites} />
      <FavoritesList favorites={favorites} onRemoveFromFavorites={handleRemoveFromFavorites} />
    </div>
  );
}

export default App;
