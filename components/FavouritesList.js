import React from 'react';

function FavoritesList({ favorites, onRemoveFromFavorites }) {
  return (
    <div className="favorites-list">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((item) => (
          <li key={item.trackId}>
            {item.trackName}
            <button onClick={() => onRemoveFromFavorites(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
