import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import FavoriteBar from './components/FavoriteBar';
import PhotoBrowser from './components/PhotoBrowser';
import { PHOTO_API_URL } from './config';

function App() {
  // Store the full fetched photo array at the top level of the app.
  const [photos, setPhotos] = useState([]);
  // Keep favorites in top-level state so every browse component can use them.
  const [favoriteIds, setFavoriteIds] = useState([]);
  // Track whether the initial fetch is still running.
  const [loading, setLoading] = useState(true);
  // Store a user-facing error message if the API request fails.
  const [error, setError] = useState('');

  useEffect(() => {
    // This flag prevents state updates after the component unmounts.
    let isSubscribed = true;

    async function fetchPhotos() {
      // Reset the loading and error state before each fetch attempt.
      setLoading(true);
      setError('');

      try {
        // Request the travel photo data from the textbook API.
        const response = await fetch(PHOTO_API_URL);

        // Stop here if the server returned an HTTP error code.
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        // Convert the response body into JavaScript objects.
        const data = await response.json();

        // Guard against unexpected data that is not an array of photos.
        if (!Array.isArray(data)) {
          throw new Error('Unexpected response format.');
        }

        // Save the fetched photo data into top-level state.
        if (isSubscribed) {
          setPhotos(data);
        }
      } catch (err) {
        // Show a simple message in the UI if the request fails.
        if (isSubscribed) {
          setError('Unable to load the travel photo data.');
        }
      } finally {
        // End the loading state once the request is finished either way.
        if (isSubscribed) {
          setLoading(false);
        }
      }
    }

    // Run the fetch once when the app first loads.
    fetchPhotos();

    return () => {
      // Mark the effect as cleaned up before the component disappears.
      isSubscribed = false;
    };
  }, []);

  function handlePhotoFieldChange(photoId, fieldName, value) {
    // Update only the selected photo while leaving all others unchanged.
    setPhotos((currentPhotos) =>
      currentPhotos.map((photo) => {
        // Keep this photo object as-is if it is not the one being edited.
        if (photo.id !== photoId) {
          return photo;
        }

        // Update the title directly because it lives at the top level.
        if (fieldName === 'title') {
          return {
            ...photo,
            title: value,
          };
        }

        // Update city or country inside the nested location object.
        return {
          ...photo,
          location: {
            ...photo.location,
            [fieldName]: value,
          },
        };
      })
    );
  }

  function addFavorite(photoId) {
    // Preserve insertion order while preventing duplicate favorites.
    setFavoriteIds((currentFavoriteIds) =>
      currentFavoriteIds.includes(photoId)
        ? currentFavoriteIds
        : [...currentFavoriteIds, photoId]
    );
  }

  function removeFavorite(photoId) {
    // Remove only the clicked favorite and leave the rest unchanged.
    setFavoriteIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((favoriteId) => favoriteId !== photoId)
    );
  }

  // Derive favorite display data from the live photos state to avoid stale copies.
  const favoritePhotos = favoriteIds
    .map((favoriteId) => photos.find((photo) => photo.id === favoriteId))
    .filter(Boolean);

  return (
    <main>
      {/* Keep the header visible on every page route. */}
      <Header />
      <Switch>
        {/* Send the root URL to the home page. */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        {/* Render the home banner page. */}
        <Route exact path="/home">
          <Home />
        </Route>
        {/* Render the browse page and pass down the photo state. */}
        <Route path="/browse">
          <>
            <FavoriteBar
              favoritePhotos={favoritePhotos}
              loading={loading}
              error={error}
              onRemoveFavorite={removeFavorite}
            />
            <PhotoBrowser
              photos={photos}
              favoriteIds={favoriteIds}
              loading={loading}
              error={error}
              onAddFavorite={addFavorite}
              onPhotoFieldChange={handlePhotoFieldChange}
            />
          </>
        </Route>
        {/* Render the about page. */}
        <Route path="/about">
          <About />
        </Route>
        {/* Catch unknown routes and send them back to home. */}
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
