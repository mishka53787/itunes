import React from 'react';

function ResultsList({ results, onAddToFavorites }) {
  return (
    <div className="results-list">
      <h2>Search Results</h2>
      <ul>
        {results.map((item) => (
          <li key={item.trackId}>
            {item.trackName}
            <button onClick={() => onAddToFavorites(item)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsList;
