import React from 'react';
import { SQUARE_IMAGE_BASE_URL } from '../config';

function PhotoThumb({
  photo,
  isFavorite,
  isSelected,
  onFavoriteClick,
  onViewClick,
}) {
  // Build the thumbnail image URL from the shared base path and filename.
  const thumbUrl = `${SQUARE_IMAGE_BASE_URL}${photo.filename}`;
  // Combine city and country into the same label used in the mockup.
  const locationLabel = `${photo.location.city}, ${photo.location.country}`;

  function handleFavoriteClick(event) {
    // Keep the favorite button from affecting any surrounding click behavior.
    event.stopPropagation();
    onFavoriteClick(photo.id);
  }

  return (
    // Add a selected class so the active card can be visually highlighted.
    <div className={`photoBox${isSelected ? ' selected' : ''}`}>
      <figure>
        <img
          title={photo.title}
          alt={photo.title}
          src={thumbUrl}
          className="photoThumb"
        />
      </figure>
      <div>
        <h3>{photo.title}</h3>
        <p>{locationLabel}</p>
        <div className="photoActions">
          {/* Clicking View tells PhotoBrowser which photo should be active. */}
          <button type="button" onClick={() => onViewClick(photo.id)}>
            View
          </button>
          <button
            type="button"
            onClick={handleFavoriteClick}
            disabled={isFavorite}
            title={isFavorite ? 'Already in favorites' : 'Add to favorites'}
            aria-label={
              isFavorite
                ? `${photo.title} is already in favorites`
                : `Add ${photo.title} to favorites`
            }
          >
            {isFavorite ? 'Favorited' : 'Favorite'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoThumb;
