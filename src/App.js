import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PhotoBrowser from "./components/PhotoBrowser";
import HeaderMenu from "./components/HeaderMenu";
import Home from "./components/Home";
import About from "./components/About";
import FavoriteBar from "./components/FavoriteBar";

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  //favorites list state
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(true);

  useEffect(() => {
    fetch("https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php")
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        setCurrentPhoto(data[0]);
      });
  }, []);

  const showImageDetails = (id) => {
    const found = photos.find(p => p.id === id);
    setCurrentPhoto(found);
  };

  const updatePhoto = (updatedPhoto) => {
    setPhotos(prev =>
      prev.map(photo =>
        photo.id === updatedPhoto.id ? updatedPhoto : photo
      )
    );
  
    setCurrentPhoto(updatedPhoto);
  };

  const addFavorite = (photo) => {
    //if not already in list add to list
    if (!favorites.find(f => f.id === photo.id)) {
      setFavorites([...favorites, photo]);
    }
  };
  
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(photo => photo.id !== id));
  };
  
  const toggleFavoritesBar = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <>
      <HeaderMenu />
      <FavoriteBar 
        favorites={favorites}
        showFavorites={showFavorites}
        removeFavorite={removeFavorite}
        toggleFavoritesBar={toggleFavoritesBar}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={
          <PhotoBrowser
            photos={photos}
            currentPhoto={currentPhoto}
            showImageDetails={showImageDetails}
            updatePhoto={updatePhoto}
            addFavorite={addFavorite}
          />
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
