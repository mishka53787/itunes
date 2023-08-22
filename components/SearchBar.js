import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('all');

  const handleSearch = () => {
    onSearch(searchTerm, mediaType);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter search term..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="music">Music</option>
        {/* Add other media types here */}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
