import React from 'react';
import { MEDIUM_IMAGE_BASE_URL } from '../config';

function EditPhotoDetails({ photo, loading, error, onFieldChange }) {
  function handleChange(event) {
    // Ignore form changes if no photo is currently selected.
    if (!photo) {
      return;
    }

    // Forward the edited field name and value up to App state.
    const { name, value } = event.target;
    onFieldChange(photo.id, name, value);
  }

  // Decide what the right panel should show based on the data state.
  let content;

  if (loading && !photo) {
    // Show a waiting message while the app is still loading data.
    content = <p className="panelMessage">Waiting for photo data...</p>;
  } else if (error && !photo) {
    // Show the fetch error if the panel has no photo to display.
    content = <p className="panelMessage">{error}</p>;
  } else if (!photo) {
    // Prompt the user to choose a photo once loading is complete.
    content = <p className="panelMessage">Select a photo to view its details.</p>;
  } else {
    // Build the larger preview image URL for the selected photo.
    const mediumImageUrl = `${MEDIUM_IMAGE_BASE_URL}${photo.filename}`;

    content = (
      // Prevent the form from doing a full page submit when Enter is pressed.
      <form className="photoForm" onSubmit={(event) => event.preventDefault()}>
        <fieldset className="photoFieldset">
          <legend>Edit Photo Details</legend>
          {/* Show the currently selected medium-sized travel image. */}
          <img src={mediumImageUrl} alt={photo.title} />
          <label htmlFor="photo-title">Title</label>
          <input
            id="photo-title"
            type="text"
            name="title"
            value={photo.title}
            onChange={handleChange}
          />
          <label htmlFor="photo-city">City</label>
          <input
            id="photo-city"
            type="text"
            name="city"
            value={photo.location.city}
            onChange={handleChange}
          />
          <label htmlFor="photo-country">Country</label>
          <input
            id="photo-country"
            type="text"
            name="country"
            value={photo.location.country}
            onChange={handleChange}
          />
        </fieldset>
      </form>
    );
  }

  return (
    // Render the right-side details panel wrapper used by the lab layout.
    <article className="details">
      <div className="detailsPhotoBox">{content}</div>
    </article>
  );
}

export default EditPhotoDetails;
