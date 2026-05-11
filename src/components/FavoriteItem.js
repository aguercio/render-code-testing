import React from 'react';
import { SQUARE_IMAGE_BASE_URL } from '../config';

function FavoriteItem({ photo, onRemoveFavorite }) {
  // Reuse the same square thumbnail images already used in the browse list.
  const thumbUrl = `${SQUARE_IMAGE_BASE_URL}${photo.filename}`;

  return (
    <div className="favoriteItem">
      <button
        type="button"
        className="favoriteThumbButton"
        onClick={() => onRemoveFavorite(photo.id)}
        title={`Remove ${photo.title} from favorites`}
        aria-label={`Remove ${photo.title} from favorites`}
      >
        <img
          src={thumbUrl}
          alt={photo.title}
          className="favoriteThumb"
        />
      </button>
    </div>
  );
}

export default FavoriteItem;
