import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import PhotoBrowser from "./components/PhotoBrowser";

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  // 🔹 Fetch data
  useEffect(() => {
    fetch("https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php")
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        setCurrentPhoto(data[0]); // default selection
      })
      .catch(err => console.error(err));
  }, []);

  // 🔹 Step 7: Update photo after editing
  const updatePhoto = (updatedPhoto) => {
    setPhotos(prev =>
      prev.map(p =>
        p.id === updatedPhoto.id ? updatedPhoto : p
      )
    );

    setCurrentPhoto(updatedPhoto);
  };

  return (
    <div>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/browse"
          element={
            <PhotoBrowser
              photos={photos}
              currentPhoto={currentPhoto}
              setCurrentPhoto={setCurrentPhoto}
              updatePhoto={updatePhoto}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
