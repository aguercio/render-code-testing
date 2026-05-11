import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledHeader, HeaderTitle, HeaderDescription, StyledContainer, StyledButton, HideButton } from './StyledComponents';
import PhotoList from './PhotoList';
import EditPhotoDetails from './EditPhotoDetails';
import { FavoriteBar } from './FavoriteBar';

function PhotoBrowser({ photos, editCurrentPhoto, ...rest }) {
  const [currentPhoto, setCurrentPhoto] = useState(photos[0] || null);
  const [favorites, setFavorites] = useState([]);
  const [favoritesDisplay, setFavoritesDisplay] = useState(true);

  let initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current && photos[0]) {
      setCurrentPhoto(photos[0]);
      initialized.current = true;
    }
  }, [photos]);

  useEffect(() => {
    if (currentPhoto) {
      const updated = photos.find(p => p.id === currentPhoto.id);
      if (updated) {
        setCurrentPhoto(updated);
        setFavorites(favorites.map(fav => fav.id === updated.id ? updated : fav));
      }
    }
  }, [currentPhoto, photos]);

  const showImageDetails = (photo) => {
    setCurrentPhoto(photo);
  }

  const toggleFavorites = (photo) => {
    if (!favorites.some(fav => fav.id === photo.id)) {
      setFavorites([...favorites, photo]);
    } else {
      setFavorites(favorites.filter(fav => fav.id !== photo.id));
    }
  }

  return (
    <main>
      <StyledHeader>
        <div>
          <HeaderTitle>Travel Image App</HeaderTitle>
          <HeaderDescription>Using create-react-app</HeaderDescription>
        </div>
        <nav>
          <Link to="/"><StyledButton>Home</StyledButton></Link>
          <Link to="/browse"><StyledButton>Browse</StyledButton></Link>
          <Link to="/about"><StyledButton>About</StyledButton></Link>
        </nav>
      </StyledHeader>
      <HideButton onClick={() => setFavoritesDisplay(!favoritesDisplay)}>{favoritesDisplay ? '-' : '+'}</HideButton>
      <FavoriteBar favorites={ favoritesDisplay ? favorites : [] } toggleFavorites={toggleFavorites}/>
      <StyledContainer>
        <PhotoList photos={photos} showImageDetails={showImageDetails} toggleFavorites={toggleFavorites}/>
        <EditPhotoDetails currentPhoto={currentPhoto} editCurrentPhoto={editCurrentPhoto}/>
      </StyledContainer>
    </main>
  )
}

export default PhotoBrowser;
