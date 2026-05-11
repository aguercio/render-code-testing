import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList';
import EditPhotoDetails from './EditPhotoDetails';

function PhotoBrowser({
  photos,
  favoriteIds,
  loading,
  error,
  onAddFavorite,
  onPhotoFieldChange,
}) {
  // Track which photo is currently selected in the browse view.
  const [currentPhotoId, setCurrentPhotoId] = useState(null);

  useEffect(() => {
    // Clear the selection if there are no photos available yet.
    if (!photos.length) {
      setCurrentPhotoId(null);
      return;
    }

    // Keep the current selection if it still exists, otherwise pick the first photo.
    setCurrentPhotoId((currentId) => {
      const hasCurrentPhoto = photos.some((photo) => photo.id === currentId);
      return hasCurrentPhoto ? currentId : photos[0].id;
    });
  }, [photos]);

  function showImageDetails(photoId) {
    // Change the selected photo when the user clicks a View button.
    setCurrentPhotoId(photoId);
  }

  // Find the full photo object that matches the selected photo id.
  const currentPhoto =
    photos.find((photo) => photo.id === currentPhotoId) || null;

  return (
    <section className="container">
      {/* The left side renders the list of thumbnail cards. */}
      <PhotoList
        photos={photos}
        currentPhotoId={currentPhotoId}
        favoriteIds={favoriteIds}
        loading={loading}
        error={error}
        onFavoriteClick={onAddFavorite}
        onViewClick={showImageDetails}
      />
      {/* The right side renders the currently selected photo details form. */}
      <EditPhotoDetails
        photo={currentPhoto}
        loading={loading}
        error={error}
        onFieldChange={onPhotoFieldChange}
      />
    </section>
  );
}

export default PhotoBrowser;
