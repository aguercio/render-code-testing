import PhotoThumb from './PhotoThumb';
import { StyledPhotos } from './StyledComponents';

function PhotoList({ photos, showImageDetails, toggleFavorites }) {
  return (
    <StyledPhotos>
      { photos.map(photo => (
        <PhotoThumb key={photo.id} photo={photo} showImageDetails={showImageDetails} toggleFavorites={toggleFavorites} />
      )) }
    </StyledPhotos>
  )
}

export default PhotoList;