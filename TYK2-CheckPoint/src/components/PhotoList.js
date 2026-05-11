import React from 'react';
import PhotoThumb from './PhotoThumb';

function PhotoList({ photos, currentPhotoId, loading, error, onViewClick }) {
  // Build the content first so the return stays small and easy to read.
  let content;

  if (loading) {
    // Show a loading message before the API data arrives.
    content = <p className="panelMessage">Loading travel photos...</p>;
  } else if (error) {
    // Show the fetch error if the request did not succeed.
    content = <p className="panelMessage">{error}</p>;
  } else if (!photos.length) {
    // Handle the case where the API returns an empty array.
    content = <p className="panelMessage">No photos were returned.</p>;
  } else {
    // Render one thumbnail card for each photo in the array.
    content = photos.map((photo) => (
      <PhotoThumb
        key={photo.id}
        photo={photo}
        isSelected={photo.id === currentPhotoId}
        onViewClick={onViewClick}
      />
    ));
  }

  // Wrap the generated content in the list container used by the layout.
  return <article className="photos">{content}</article>;
}

export default PhotoList;
