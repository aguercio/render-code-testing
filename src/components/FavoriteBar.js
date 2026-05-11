import React, { useState } from 'react';
import FavoriteItem from './FavoriteItem';

function FavoriteBar({ favoritePhotos, loading, error, onRemoveFavorite }) {
  // Let the user collapse the favorites row without losing its contents.
  const [favoritesHidden, setFavoritesHidden] = useState(false);

  function toggleFavoritesVisibility() {
    setFavoritesHidden((currentHidden) => !currentHidden);
  }

  let content;

  if (favoritesHidden) {
    content = <p className="favoritesMessage">Favorites are hidden.</p>;
  } else if (loading && !favoritePhotos.length) {
    content = <p className="favoritesMessage">Loading favorites...</p>;
  } else if (error && !favoritePhotos.length) {
    content = <p className="favoritesMessage">{error}</p>;
  } else if (!favoritePhotos.length) {
    content = (
      <p className="favoritesMessage">
        No favorite photos yet. Add one from the browse list.
      </p>
    );
  } else {
    content = favoritePhotos.map((photo) => (
      <FavoriteItem
        key={photo.id}
        photo={photo}
        onRemoveFavorite={onRemoveFavorite}
      />
    ));
  }

  return (
    <section className="favoritesSection" aria-label="Favorite photos">
      <div className="favoritesBarHeader">
        <h2>Favorites</h2>
        <button
          type="button"
          className="favoritesToggle"
          onClick={toggleFavoritesVisibility}
        >
          {favoritesHidden ? 'Show Favorites' : 'Hide Favorites'}
        </button>
      </div>
      <div className="favorites">{content}</div>
    </section>
  );
}

export default FavoriteBar;
