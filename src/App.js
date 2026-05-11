import PhotoBrowser from './components/PhotoBrowser';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { StyledApp } from './components/StyledComponents';
import { useState, useEffect } from 'react';


function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php";
    fetch(url)      
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => setPhotos(json))
      .catch(error => console.log(error));
  }, [])

  function editCurrentPhoto(photo) {
    setPhotos(photos.map(p => p.id === photo.id ? photo : p));
  }
  

  return (
    <Routes>
      <Route path="/" element={<StyledApp><Home /></StyledApp>} />
      <Route path="/about" element={<StyledApp><About /></StyledApp>} />
      <Route path="/browse" element={<StyledApp><PhotoBrowser photos={photos} editCurrentPhoto={editCurrentPhoto} /></StyledApp>} />
    </Routes>
  );
}

export default App;
