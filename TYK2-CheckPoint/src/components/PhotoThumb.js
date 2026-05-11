import React from 'react';
import { SQUARE_IMAGE_BASE_URL } from '../config';

function PhotoThumb({ photo, isSelected, onViewClick }) {
  // Build the thumbnail image URL from the shared base path and filename.
  const thumbUrl = `${SQUARE_IMAGE_BASE_URL}${photo.filename}`;
  // Combine city and country into the same label used in the mockup.
  const locationLabel = `${photo.location.city}, ${photo.location.country}`;

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
        </div>
      </div>
    </div>
  );
}

export default PhotoThumb;
